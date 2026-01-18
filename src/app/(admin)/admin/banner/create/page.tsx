import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ReusableField from "@/reusable/form/field/ReusableField";
import SubmitCancel from "@/reusable/form/submitCancel";
import { FileUpload } from "@/reusable/upload/uploadImage";

const Page = () => {
  return (
    <div className="py-4 px-12">
      <h4>Banner</h4>
      <p className="mb-4">Create a new Banner</p>
      <Card className="px-5 py-4">
        <ReusableField label="Banner Title">
          <Input />
        </ReusableField>
        <div className="flex gap-15">
          <div>
            <Label className="mb-4">Status</Label>
            <RadioGroup
              defaultValue="comfortable"
              className="flex items-center gap-10"
            >
              <div className="flex items-center gap-3">
                <RadioGroupItem value="default" id="r1" />
                <Label htmlFor="r1">Default</Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem value="comfortable" id="r2" />
                <Label htmlFor="r2">Comfortable</Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem value="compact" id="r3" />
                <Label htmlFor="r3">Compact</Label>
              </div>
            </RadioGroup>
          </div>
          <div>
            <Label className="mb-2">Type</Label>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Label className="mb-0">Banner Image</Label>
        <FileUpload />
       <div className="flex justify-end">
         <div className=" w-[30%] text-right">
          <SubmitCancel />
        </div>
       </div>
      </Card>
    </div>
  );
};

export default Page;
