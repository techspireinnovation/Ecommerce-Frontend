"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ReusableListTable } from "../table/data-table";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ReusableDialog from "../dialog/ReusableDialog";
import { ColumnDef } from "@tanstack/react-table";

export interface ListPageWrapperProps {
  pageFor: string;
  createRoute?: string;
  renderModal?: boolean;
  columns: ColumnDef<any>[];
  children?: React.ReactNode;
  url: string;
}

const ListPageWrapper = ({
  pageFor,
  createRoute = undefined,
  renderModal,
  columns,
  children,
  url,
}: ListPageWrapperProps) => {
  const uppercaseText = pageFor;
  const router = useRouter();
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const handleAddClick = () => {
    if (createRoute == undefined) {
      setModalOpen(true);
    } else {
      router.push(createRoute);
    }
  };

  useEffect(() => {
    if(!renderModal) return;
    setModalOpen(true);
  }, [renderModal]);

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h4 className="mb-1">{uppercaseText} Management</h4>
          <p className="!text-sm !text-gray-500 ">
            Manage and organize your {uppercaseText}
          </p>
        </div>

        <Button onClick={handleAddClick}>Add New {uppercaseText}</Button>
      </div>
      <Card className="mt-10">
        <CardContent className="px-0">
          <ReusableListTable columns={columns} pageFor={pageFor} url={url} />
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
