"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ReusableListTable } from "../table/data-table";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ReusableDialog from "../dialog/ReusableDialog";

export interface ListPageWrapperProps {
  pageFor: string;
  createRoute?: string;
  renderModal?: string;
  columns: any;
  data: any;
  children?:any;
}

const ListPageWrapper = ({
  pageFor,
  createRoute,
  renderModal,
  columns,
  data,
  children
}: ListPageWrapperProps) => {
  const uppercaseText = pageFor;
  const router = useRouter();
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const handleAddClick = () => {
    if (renderModal) {
      setModalOpen(true);
    } else if (createRoute) {
      router.push(createRoute);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="!text-3xl font-bold mb-1">{uppercaseText} Management</h2>
          <p className="!text-base text-muted-foreground">
            Manage and organize your {uppercaseText}
          </p>
        </div>

        <Button onClick={handleAddClick}>Add New {uppercaseText}</Button>
      </div>
      <Card className="mt-10">
        <CardContent className="px-0">
          <ReusableListTable data={data} columns={columns} pageFor={pageFor} />
        </CardContent>
      </Card>
      {
        <ReusableDialog isModalOpen={isModalOpen} setModalOpen={setModalOpen}>
          {children}
        </ReusableDialog>
      }
    </div>
  );
};

export default ListPageWrapper;
