import { Input } from "@/components/ui/input";
import ReusableField from "./field/ReusableField";
import { Textarea } from "@/components/ui/textarea";
import UploadImageContainer from "./UploadImageContainer";
import { Camera } from "lucide-react";

interface SeoSettingsReusableProps {
  register: any;
  setValue: any;
  errors: any;
  getValues: any;
  control:any;
}

const SeoSettingsReusable = ({
  register,
  setValue,
  errors,
  getValues,
  control
}: SeoSettingsReusableProps) => {
  return (
    <ReusableField label="SEO Settings">
      <Input {...register("seo_title")} placeholder="SEO Title" />
      <Textarea {...register("seo_description")} placeholder="SEO Description" />
      {/* <Textarea {...register("seo_keywords")} placeholder="SEO Keywords" /> */}
      <UploadImageContainer
        icon={<Camera size={70} color="gray" />}
        name="seo_image"
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
