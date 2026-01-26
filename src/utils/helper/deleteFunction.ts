import { toast } from "sonner";

export const deleteReusableFunction = async (id: number, func: any) => {
  try {
    const res = await func(id);
    toast.success(res.message);
  } catch (error) {
    console.log("error", error);
  }
};
