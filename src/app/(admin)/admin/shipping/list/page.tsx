"use client";
import ListPageWrapper from "@/reusable/list/ListPageWrapper";
import { brandColumns, brandData } from "../../brand/list/page";
import ReusableField from "@/reusable/form/field/ReusableField";
import { Input } from "@/components/ui/input";
import DialogCreateFormHeader from "@/reusable/form/dialog/header";
import SubmitCancel from "@/reusable/form/submitCancel";

const Page = () => {
  const pageFor = "Shipping";
  return (
    <ListPageWrapper
      columns={brandColumns}
      data={brandData}
      pageFor="Shipping"
      renderModal="hello"
    >
      <DialogCreateFormHeader pageFor="aklsdf" />
      <form>
        <ReusableField label="Method Name *">
          <Input placeholder="Inside the valley" />
        </ReusableField>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <ReusableField label="Status">
            <Input placeholder="active" />
          </ReusableField>
          <ReusableField label="Delivery Time *">
            <Input placeholder="e.g. 3-5 Business Days" />
          </ReusableField>
          <ReusableField label="Shipping Cost">
            <Input placeholder="Rs.0.00" type="number" />
          </ReusableField>
          <ReusableField label="Free Shipping Threshold">
            <Input placeholder="Rs.0.00" type="number" />
          </ReusableField>
        </div>
        <SubmitCancel />
      </form>
    </ListPageWrapper>
  );
};

export default Page;
