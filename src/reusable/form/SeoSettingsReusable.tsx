"use client";
import { Input } from "@/components/ui/input";
import ReusableField from "./field/ReusableField";
import { Textarea } from "@/components/ui/textarea";
import UploadImageContainer from "./UploadImageContainer";
import { Camera } from "lucide-react";
import { useEffect } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface SeoSettingsReusableProps {
  register: any;
  setValue: any;
  errors: any;
  getValues: any;
  control: any;
  reset: any;
}

const SeoSettingsReusable = ({
  register,
  setValue,
  errors,
  getValues,
  control,
  reset,
}: SeoSettingsReusableProps) => {

  return (
    <ReusableField label="SEO Settings">
      <FormField
        control={control}
        name="seo_title"
        render={({ field }) => (
          <FormItem>
            <FormLabel>SEO Title</FormLabel>
            <FormControl>
              <Input {...field} placeholder="SEO Title" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="seo_description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Seo Description</FormLabel>
            <FormControl>
              <Textarea {...field} placeholder="SEO Description" />
            </FormControl>
          </FormItem>
        )}
      />
      {/* <Textarea {...register("seo_keywords")} placeholder="SEO Keywords" /> */}
      <UploadImageContainer
        icon={<Camera size={70} color="gray" />}
        name="seo_image_url"
        control={control}
        register={register}
        uploadButtonText="Upload Seo Image"
        setValue={setValue}
        getValues={getValues}
        error={errors?.seoImage?.message}
      />
    </ReusableField>
  );
};

export default SeoSettingsReusable;
