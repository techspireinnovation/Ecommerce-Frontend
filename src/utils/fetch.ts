"use server";

import { cookies } from "next/headers";

class ApiError extends Error {
  status: number;
  body: unknown;

  constructor(status: number, message: string, body: unknown) {
    super(message);
    this.status = status;
    this.body = body;
  }
} 

const API_BASE_URL = "http://127.0.0.1:8000/api";
export async function apiFetch(endpoint: string, options: RequestInit = {}) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("access_token")?.value;

  const isFormData = options.body instanceof FormData;

  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      ...(options.headers || {}),
      Authorization: accessToken ? `Bearer ${accessToken}` : "",
      ...(isFormData ? {} : { "Content-Type": "application/json" }),
    },
    cache: "no-store",
    credentials: "include",
  });

  if (res.status === 401) {
    cookieStore.delete("access_token");
    cookieStore.delete("refresh_token");
    throw new Error("SESSION_EXPIRED");
  }

  const newAccessToken = res.headers
    .get("Authorization")
    ?.replace("Bearer ", "");
  const newRefreshToken = res.headers.get("X-Refresh-Token");
  const tokenRefreshed = res.headers.get("X-Token-Refreshed");

  if (tokenRefreshed === "true") {
    if (newAccessToken) {
      cookieStore.set("access_token", newAccessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 15 * 24 * 7,
      });
    }

    if (newRefreshToken) {
      cookieStore.set("refresh_token", newRefreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      });
    }
  }

  const contentType = res.headers.get("content-type");
  const body = contentType?.includes("application/json")
    ? await res.json()
    : await res.text();

  if (!res.ok) {
    throw {
      status: res.status,
      statusText: res.statusText,
      body, 
    };
  }

  return body;
}
