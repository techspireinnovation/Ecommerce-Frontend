import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

const ReusableStatusCard = ({name}: {name: string}) => {
  return (
    <Card className="shadow-none bg-[#F8FAFA] py-4 px-0">
      <CardContent>
        <div className="flex items-center justify-between ">
          <div>
            <h6>Brand Status</h6>
            <p className="text-gray">Brand is active and visible</p>
          </div>
          <Switch id="airplane-mode" />
        </div>
      </CardContent>
    </Card>
  );
};

export default ReusableStatusCard;
