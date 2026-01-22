"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Controller } from "react-hook-form";

interface ReusableStatusCardProps {
  name: string;
  register: any;
  control: any;
}

const ReusableStatusCard = ({
  name,
  control,
}: ReusableStatusCardProps) => {
  return (
    <Card className="shadow-none bg-[#F8FAFA] py-4 px-0">
      <CardContent>
        <div className="flex items-center justify-between ">
          <div>
            <h6>{name} Status</h6>
            <p className="text-gray">{name} is active and visible</p>
          </div>
          <Controller
            name="status"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <Switch
                checked={field.value}
                onCheckedChange={field.onChange}
                id={`${name}-status`}
              />
            )}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ReusableStatusCard;
