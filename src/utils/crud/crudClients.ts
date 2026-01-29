import { apiFetch } from "@/utils/fetch";

export function createCrudClient(baseUrl: string) {
  return {
    list: () => apiFetch(baseUrl),
    show: (id: number) => apiFetch(`${baseUrl}/${id}`),
    create: (data: FormData) =>
      apiFetch(baseUrl, { method: "POST", body: data }),
    update: (id: number, data: FormData) =>
      apiFetch(`${baseUrl}/${id}`, { method: "POST", body: data }),
    delete: (id: number) => apiFetch(`${baseUrl}/${id}`, { method: "DELETE" }),
  };
}



export interface ApiListResponse<T> {
  data: T[];
}

export interface ApiItemResponse<T> {
  data: T;
}
