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
import {  useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createCategory } from "@/features/product/categories/categoryActions";
import { toast } from "sonner";

interface ReusableCreateDialogProps {
  label: string;
  schema: any;
  createFn: any;
}

const ReusableCreateDialog = ({ label, schema }: ReusableCreateDialogProps) => {
  const {
    register,
    handleSubmit,
    control,
    getValues,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<CategoryTypes>({
    resolver: zodResolver(schema),
    defaultValues: {
      seo_keywords: [],
    },
  });

  const keywords = ["apple", "banana", "orange"];

  const onSubmitHandler = async (data: CategoryTypes) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("status", 'false');
    if (data.logo) {
      formData.append("image", data.logo);
      formData.append("seo_image", data.logo);
    }

    if (data.seo_description)
      formData.append("seo_description", data.seo_description);
    formData.delete("seo_keywords");
    formData.append("seo_keywords[]", "rice");
    if (data.seo_title) formData.append("seo_title", data.seo_title);
    try {
     
      const res = await createCategory(formData);
      console.log("res", res);
      if(res.success == false){
        const error = res?.error.body.message;
        toast.error(error, {position: 'bottom-center'});
      }
    
    } catch (error) {
    console.log('error', {error});
    } finally {
      console.log("finally");
    }
  };

  const onErrorHandler = (errors: any) => {
    console.log(errors, { values: getValues() });
    const firstError = Object.entries(errors)[0];
    if (firstError) {
      const [field, error] = firstError;
      const message = error?.message;
    }
  };

  return (
    <>
      <DialogCreateFormHeader pageFor={label} />
      <form onSubmit={handleSubmit(onSubmitHandler, onErrorHandler)}>
        <UploadImageContainer
          icon={<Image size={80} color="gray" />}
          label={label}
          uploadButtonText={"Upload Image"}
          name="logo"
          register={register}
          control={control}
          setValue={setValue}
          error={errors.logo?.message}
          getValues={getValues}
        />
        <ReusableField label={`${label} name`}>
          <Input {...register("name")} />
        </ReusableField>
        <SeoSettingsReusable
          register={register}
          setValue={setValue}
          errors={errors}
          control={control}
          getValues={getValues}
        />
        <ReusableStatusCard
          control={control}
          name={`${label}`}
          register={register}
        />
        <SubmitCancel isSubmitting={isSubmitting} />
      </form>
    </>
  );
};

export default ReusableCreateDialog;
