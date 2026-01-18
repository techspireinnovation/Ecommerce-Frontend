import ReusableField from "../field/ReusableField";
import { Input } from "@/components/ui/input";
import SeoSettingsReusable from "../SeoSettingsReusable";
import ReusableStatusCard from "../ReusableStatusCard";
import SubmitCancel from "../submitCancel";
import UploadImageContainer from "../UploadImageContainer";
import { Image } from "lucide-react";
import DialogCreateFormHeader from "./header";

const ReusableCreateDialog = ({ label }: { label: string }) => {
  return (
    <>
      <DialogCreateFormHeader pageFor={label} />
      <form>
        <UploadImageContainer
          icon={<Image size={80} color="gray" />}
          label={label}
        />
        <ReusableField label={`${label} name`}>
          <Input />
        </ReusableField>
        <SeoSettingsReusable />
        <ReusableStatusCard name={`${label}`} />
        <SubmitCancel />
      </form>
    </>
  );
};

export default ReusableCreateDialog;
