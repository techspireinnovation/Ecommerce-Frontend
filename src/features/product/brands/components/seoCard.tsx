import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ReusableField from "@/reusable/form/field/ReusableField";
import SubmitCancel from "@/reusable/form/submitCancel";
import UploadImageContainer from "@/reusable/form/UploadImageContainer";
import { Image } from "lucide-react";

const SeoCard = () => {
  return (
    <Card className="px-3 py-2">
      <h5>Basic Information</h5>
      <ReusableField label="Seo Title">
        <Input placeholder="Seo Title...." />
      </ReusableField>

      <ReusableField label="Seo Description">
        <Textarea placeholder="Write a Seo description...." />
      </ReusableField>
      <ReusableField label="Overview">
        <Textarea placeholder="Write a detailed product overview...." />
      </ReusableField>
      <ReusableField label="Keyword">
        <Textarea placeholder="Write a keyword...." />
      </ReusableField>
 <UploadImageContainer
          icon={<Image size={80} color="gray" />}
          label={'Seo Image'}
        />
      <SubmitCancel />
    </Card>
  );
};

export default SeoCard;
