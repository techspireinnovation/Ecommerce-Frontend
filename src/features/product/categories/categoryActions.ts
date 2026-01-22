"use server";

import { apiFetch } from "@/utils/fetch";

export async function createCategory(data: FormData) {
  try {
    const res = await apiFetch("/admin/categories", {
      method: "POST",
      body: data,
    });
    console.log('res from actions',res);

    return {
      success: true,
      data: res,
      message: "Category created successfully",
    };
  } catch (error) {

    return {
      success: false,
      error,
      message: "Failed to create category",
   
    };
  }
}
