import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Page = () => {
  return (
    <div className="p-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">Product Management</h1>
          <p className="text-sm text-muted-foreground">
            Manage and organize your product
          </p>
        </div>

        <Button>Add Button</Button>
      </div>
      <Card className="mt-10">
        <CardHeader>

        </CardHeader>
        <CardContent>Hello</CardContent>
      </Card>
    </div>
  );
};

export default Page;
