import { Input } from "@/components/ui/input";
import ReusableField from "@/reusable/form/field/ReusableField";
import ReusableStatusCard from "@/reusable/form/ReusableStatusCard";
import SeoSettingsReusable from "@/reusable/form/SeoSettingsReusable";
import SubmitCancel from "@/reusable/form/submitCancel";
import UploadImageContainer from "@/reusable/form/UploadImageContainer";
import { Image } from "lucide-react";

const SubCategoryForWrapper = ({ pageFor }: any) => {
  return (
    <form>
      <UploadImageContainer
        icon={<Image size={80} color="gray" />}
        label={pageFor}
        uploadButtonText={"Upload Image"}
        name="image_url"
        register={methods.register}
        control={methods.control}
        setValue={methods.setValue}
        error={methods.formState.errors.image_url?.message}
        getValues={methods.getValues}
      />
      <div className="flex gap-3">
        <ReusableField label={`${pageFor}*`}>
          <Input />
        </ReusableField>
        <ReusableField label={`Parent Category`}>
          <Input />
        </ReusableField>
      </div>
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
      <SubmitCancel />
    </form>
  );
};

export default SubCategoryForWrapper;
