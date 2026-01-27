"use client";
import ReusableField from "../field/ReusableField";
import { Input } from "@/components/ui/input";
import SeoSettingsReusable from "../SeoSettingsReusable";
import ReusableStatusCard from "../ReusableStatusCard";
import SubmitCancel from "../submitCancel";
import UploadImageContainer from "../UploadImageContainer";
import { Image } from "lucide-react";
import DialogCreateFormHeader from "./header";
import { CategoryTypes } from "@/features/product/categories/category.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useCallback, useEffect } from "react";
import { Form } from "@/components/ui/form";
import { ReusableCreateDialogProps } from "@/features/product/categories/categories.types";

const ReusableCreateDialog = ({
  label,
  schema,
  isEdit,
  updateFn,
  showFn,
  createFn,
  selectedId,
}: ReusableCreateDialogProps) => {
  const methods = useForm<CategoryTypes>({
    resolver: zodResolver(schema),
    shouldUnregister: false,

    defaultValues: {
      name: "",
      seo_title: "",
      seo_description: "",
      seo_keywords: "",
    },
  });

  const getById = useCallback(
    async (id: number) => {
      const res = await showFn(id);
      const api = res.data.data;
      console.log("api", { api });
      methods.reset(
        {
          name: api.name ?? "",
          seo_title: api.seo_title ?? "",
          seo_description: api.seo_description ?? "",
          seo_keywords: api.seo_keywords ?? [],
          seo_image_url: api.seo_image_url,
          image_url: api.image_url,
          status: api.status === "active",
        },
        { keepDirty: false },
      );
    },
    [methods, showFn],
  );

  useEffect(() => {
    if (isEdit) {
      getById(selectedId);
    }
  }, [isEdit]);

  const buildFormData = (data: CategoryTypes) => {
    const fd = new FormData();

    fd.append("name", data.name);
    fd.append("status", data.status ? "1" : "0");

    if (data.image_url instanceof File) {
      fd.append("image", data.image_url);
      fd.append("seo_image", data.image_url);
    }

    // if (data.seo_image_url instanceof File) {
    //   fd.append("seo_image", data.seo_image_url);
    // }

    if (data.seo_title) fd.append("seo_title", data.seo_title);
    if (data.seo_description)
      fd.append("seo_description", data.seo_description);
    const seoKWArr = data.seo_keywords?.split(",");
    seoKWArr.forEach((keyword) => {
      fd.append("seo_keywords[]", keyword);
    });

    return fd;
  };

  const onSubmitHandler = useCallback(
    async (data: CategoryTypes) => {
      const formData = buildFormData(data);

      try {
        let res;
        if (isEdit) {
          formData.append("_method", "PUT");
          res = await updateFn(formData, selectedId);
        } else {
          res = await createFn(formData);
        }
        if (!res?.success) {
          toast.error(res?.error?.body?.message ?? "Failed to save");
          return;
        }

        toast.success(
          isEdit
            ? "Category updated successfully"
            : "Category created successfully",
        );
      } catch (error) {
        console.error(error);
        toast.error("Something went wrong");
      } finally {
        console.log("finally");
      }
    },
    [isEdit, selectedId, createFn, updateFn],
  );

  const onErrorHandler = (errors: any) => {
    console.log(errors, { values: methods.getValues() });
    const firstError = Object.entries(errors)[0];
  };

  return (
    <>
      <DialogCreateFormHeader pageFor={label} />
      <Form {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmitHandler, onErrorHandler)}>
          <UploadImageContainer
            icon={<Image size={80} color="gray" />}
            label={label}
            uploadButtonText={"Upload Image"}
            name="image_url"
            register={methods.register}
            control={methods.control}
            setValue={methods.setValue}
            error={methods.formState.errors.image_url?.message}
            getValues={methods.getValues}
          />
          <ReusableField label={`${label} name`}>
            <Input {...methods.register("name")} />
          </ReusableField>
          <SeoSettingsReusable
            register={methods.register}
            setValue={methods.setValue}
            errors={methods.formState.errors}
            control={methods.control}
            getValues={methods.getValues}
            reset={methods.reset}
            label={label}
          />
          <ReusableStatusCard
            control={methods.control}
            name={`${label}`}
            register={methods.register}
          />
          <SubmitCancel isSubmitting={methods.formState.isSubmitting} />
        </form>
      </Form>
    </>
  );
};

export default ReusableCreateDialog;
