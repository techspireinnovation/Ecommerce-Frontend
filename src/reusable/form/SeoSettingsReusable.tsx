import { Input } from "@/components/ui/input";
import ReusableField from "./field/ReusableField";
import { Textarea } from "@/components/ui/textarea";
import UploadImageContainer from "./UploadImageContainer";
import { Camera } from "lucide-react";

const SeoSettingsReusable = () => {
  return (
    <ReusableField label="SEO Settings">
      <Input placeholder="SEO Title" />
      <Textarea placeholder="SEO Description" />
      <Textarea placeholder="SEO Keywords" />
      <UploadImageContainer icon={<Camera size={70} color="gray" />} />
    </ReusableField>
  );
};

export default SeoSettingsReusable;
