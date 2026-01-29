"use client";
import ReusableField from "../field/ReusableField";
import { Input } from "@/components/ui/input";
import SeoSettingsReusable from "../SeoSettingsReusable";
import ReusableStatusCard from "../ReusableStatusCard";
import SubmitCancel from "../submitCancel";
import UploadImageContainer from "../UploadImageContainer";
import { Image } from "lucide-react";
import DialogCreateFormHeader from "./header";
import {
  categorySchema,
  CategoryTypes,
} from "@/features/product/categories/category.schema";
import { toast } from "sonner";
import { Form } from "@/components/ui/form";
import { ReusableCreateDialogProps } from "@/features/product/categories/categories.types";
import { useCrudForm } from "@/hooks/useCrudForm";
import { categoryCrud } from "@/features/product/categories/category.crud";
import { buildSeoFormData } from "@/utils/form/buildSeoFormData";

const ReusableCreateDialog = ({
  label,
  isEdit,
  selectedId,
}: ReusableCreateDialogProps) => {
  const methods = useCrudForm<CategoryTypes>({
    schema: categorySchema,
    defaultValues: {
      name: "",
      seo_title: "",
      seo_description: "",
      seo_keywords: "",
      status: true,
    },
    isEdit,
    selectedId,
    showFn: categoryCrud.show,
  });

  const buildFormData = (data: CategoryTypes) => {
    const fd = new FormData();

    fd.append("name", data.name);
    fd.append("status", data.status ? "1" : "0");

    buildSeoFormData(fd, data);

    return fd;
  };

 const onSubmit = async (
    data: CategoryTypes,
  ) => {
    let fd = new FormData();
    fd = buildFormData(data);
    fd.append("name", data.name);
    fd.append("status", data.status ? "1" : "0");

    if (data.image_url instanceof File) {
      fd.append("image", data.image_url);
    }

    buildSeoFormData(fd, data);

    try {
      const res = isEdit
        ? await categoryCrud.update(selectedId!, fd)
        : await categoryCrud.create(fd);

      if (!res?.success) {
        toast.error("Failed to save category");
        return;
      }

      toast.success(
        isEdit
          ? "Category updated"
          : "Category created",
      );
    } catch {
      toast.error("Something went wrong");
    }
  };

  const onErrorHandler = (errors: any) => {
    console.log(errors, { values: methods.getValues() });
    const firstError = Object.entries(errors)[0];
  };

  return (
    <>
      <DialogCreateFormHeader pageFor={label} />
      <Form {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit, onErrorHandler)}>
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
