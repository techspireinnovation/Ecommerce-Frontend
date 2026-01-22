"use server";

import { cookies } from "next/headers";
import { loginSchema, LoginValues } from "./loginSchema";
import { redirect } from "next/navigation";
import { ApiError, AuthenticationError, TokenError, ValidationError } from "@/utils/error";

export async function adminLogin(loginData: LoginValues) {

  const parsed = loginSchema.safeParse(loginData);
  if (!parsed.success) {
    throw new ValidationError("Invalid input", parsed.error.format());
  }

  const res = await fetch(`http://127.0.0.1:8000/api/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(parsed.data),
    cache: "no-store",
  });

  if (!res.ok) {
    throw new AuthenticationError(`Login failed with status: ${res.status}`)
  }
  const data = await res.json();
  const { access_token, refresh_token, user } = data;

  if (!access_token || !refresh_token) {
    throw new TokenError("Tokens missing from response");
  }

    if (data.error) {
    throw new ApiError(data.error.message, data.error.statusCode, data);
  }

  const cookieStore = await cookies();

  cookieStore.set("access_token", access_token, {
    httpOnly: true,
    secure: false,
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 15,
  });

   cookieStore.set("refresh_token", refresh_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  if(user.role == "admin"){
    redirect('/admin/products/list')
  }else{
    redirect('/admin/products/create')
  }

  return {
    success: true,
    message: "Login successful!",
    data,
  };
}
