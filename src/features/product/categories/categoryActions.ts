"use server";

import { apiFetch } from "@/utils/fetch";

export async function createCategory(data: FormData) {
  try {
    const res = await apiFetch("/admin/categories", {
      method: "POST",
      body: data,
    });

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
export async function getCategoryList() {
  try {
    const res = await apiFetch("/admin/categories", {
      method: "GET"
    });

    return {
      success: true,
      data: res,
      message: "Category fetched successfully",
    };
  } catch (error) {

    return {
      success: false,
      error,
      message: "Failed to create category",
   
    };
  }
}
export async function deleteCategory(id: any) {
  try {
    const res = await apiFetch(`/admin/categories/${id}`, {
      method: "DELETE"
    });

    return {
      success: true,
      data: res,
      message: "Category Deleted successfully",
    };
  } catch (error) {

    return {
      success: false,
      error,
      message: "Failed to create category",
   
    };
  }
}
export async function showCategory(id: any) {
  try {
    const res = await apiFetch(`/admin/categories/${id}`, {
      method: "GET"
    });

    return {
      success: true,
      data: res,
      message: "Category fetched successfully",
    };
  } catch (error) {

    return {
      success: false,
      error,
      message: "Failed to create category",
   
    };
  }
}


export async function updateCategory(data: FormData) {
  try {
    const res = await apiFetch("/admin/categories", {
      method: "POST",
      body: data,
    });

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