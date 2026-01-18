import ListPageWrapper from "@/reusable/list/ListPageWrapper";
import { brandColumns, brandData } from "../../brand/list/page";
import DialogCreateFormHeader from "@/reusable/form/dialog/header";
import UploadImageContainer from "@/reusable/form/UploadImageContainer";
import { DollarSign, FireExtinguisher, Flame, Image, Zap } from "lucide-react";
import ReusableField from "@/reusable/form/field/ReusableField";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import ReusableStatusCard from "@/reusable/form/ReusableStatusCard";
import SubmitCancel from "@/reusable/form/submitCancel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Page = () => {
  const pageFor = "Deal";

  return (
    <ListPageWrapper
      columns={brandColumns}
      data={brandData}
      pageFor="Deals & Promotions"
      renderModal="hello"
    >
      <DialogCreateFormHeader pageFor={pageFor} />
      <form>
        <UploadImageContainer
          icon={<Image size={80} color="gray" />}
          label={pageFor}
        />
        <ReusableField label={`${pageFor} Title *`}>
          <Input placeholder="e.g., Summer Sale 2024" />
        </ReusableField>
        <ReusableField label={`${pageFor} Title *`}>
          <Textarea placeholder="Describle the deal..." />
        </ReusableField>
        <div className="my-2">
          <Label className="mb-2">Deal Type *</Label>
          {/* <div className="grid grid-cols-4 items-center gap-5">
            <div className="border p-2 rounded-md flex flex-col items-center gap-1">
              <Flame size={30} />
              <span>Hot Deals</span>
            </div>
            <div className="border p-2 rounded-md flex flex-col items-center gap-1">
              <Flame size={30} />
              <span>Hot Deals</span>
            </div>
            <div className="border p-2 rounded-md flex flex-col items-center gap-1">
              <Flame size={30} />
              <span>Hot Deals</span>
            </div>
            <ReusableField label="Discount Value *">
              <Input type="number" />
            </ReusableField>
          </div> */}
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="hot_deals">
                <Flame />
                <span>Hot Deals</span>
              </TabsTrigger>
              <TabsTrigger value="great_deals">
                <DollarSign />
                <span>Great Deals</span>
              </TabsTrigger>
              <TabsTrigger value="flash_sale">
                <Zap />
                <span>Flash Sale</span>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="flash_sale">
              <ReusableField label="Discount Value *">
                <Input type="number" />
              </ReusableField>{" "}
            </TabsContent>
          </Tabs>
          <div className="grid grid-cols-2 gap-3 mb-5">
            <ReusableField label="Start Date *">
              <Input type="date" />
            </ReusableField>
            <ReusableField label="End Date *">
              <Input type="date" />
            </ReusableField>
          </div>
          <ReusableStatusCard name="Deals" />
          <ReusableField label="Select Products">
            <Input />
          </ReusableField>
        </div>
        <SubmitCancel />
      </form>
    </ListPageWrapper>
  );
};

export default Page;
