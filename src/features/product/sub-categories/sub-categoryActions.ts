"use server";

import { apiFetch } from "@/utils/fetch";

export async function createSubCategory(data: FormData) {
  try {
    const res = await apiFetch("/admin/subcategories", {
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
export async function getSubCategoryList() {
  try {
    const res = await apiFetch("/admin/subcategories", {
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
export async function deleteSubCategory(id: any) {
  try {
    const res = await apiFetch(`/admin/subcategories/${id}`, {
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
export async function showSubCategory(id: any) {
  try {
    const res = await apiFetch(`/admin/subCategories/${id}`, {
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


export async function updateSubCategory(data: FormData, id: number) {
  try {
    const res = await apiFetch(`/admin/subCategories/${id}`, {
      method: "POST",
      body: data,
    });

    return {
      success: true,
      data: res,
      formData: data, 
      message: "Category created successfully",
    };
  } catch (error) {

    return {
      success: false,
      error,
      FormData: data,
      message: "Failed to create category",
   
    };
  }
}