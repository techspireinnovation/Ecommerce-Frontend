import ListPageWrapper from "@/reusable/list/ListPageWrapper";
import { brandColumns, brandData } from "../../brand/list/page";
import ReusableCreateDialog from "@/reusable/form/dialog/ReusableCreateDialog";
import DialogCreateFormHeader from "@/reusable/form/dialog/header";
import UploadImageContainer from "@/reusable/form/UploadImageContainer";
import { Image } from "lucide-react";
import ReusableField from "@/reusable/form/field/ReusableField";
import { Input } from "@/components/ui/input";
import SeoSettingsReusable from "@/reusable/form/SeoSettingsReusable";
import ReusableStatusCard from "@/reusable/form/ReusableStatusCard";
import SubmitCancel from "@/reusable/form/submitCancel";

const Page = () => {
  const pageFor = "Sub-Category";
  return (
    <ListPageWrapper
      columns={brandColumns}
      data={brandData}
      pageFor="sub-category"
      renderModal="hello"
    >
      <DialogCreateFormHeader pageFor={pageFor} />
      <form>
        <UploadImageContainer
          icon={<Image size={80} color="gray" />}
          label={pageFor}
        />
        <div className="flex gap-3">
          <ReusableField label={`${pageFor}*`}>
            <Input />
          </ReusableField>
          <ReusableField label={`Parent Category`}>
            <Input />
          </ReusableField>
        </div>
        <SeoSettingsReusable />
        <ReusableStatusCard name={`${pageFor}`} />
        <SubmitCancel />
      </form>
    </ListPageWrapper>
  );
};

export default Page;
