"use client";
import ListPageWrapper from "@/reusable/list/ListPageWrapper";
import ReusableCreateDialog from "@/reusable/form/dialog/ReusableCreateDialog";
import { categorySchema } from "@/features/product/categories/category.schema";
import {
  createCategory,
  deleteCategory,
  showCategory,
  updateCategory,
} from "@/features/product/categories/categoryActions";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SquarePen, Trash2 } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";
export type Category = {
  id: number;
  slug: string;
  name: string;
  image_url: string;
  status: "active" | "inactive" | "pending" | string;
  created_at: string;
};

const variants: Record<string, string> = {
  active: "bg-green-200 text-green-700",
  pending: "bg-yellow-200 text-yellow-700",
  inactive: "bg-red-200 text-red-700",
  low_stock: "bg-amber-200 text-amber-700",
};

export function StatusBadge({ status }: { status: string }) {
  const classes = variants[status] ?? "bg-gray-100 text-gray-700";

  return (
    <Badge className={`${classes} !text-xs rounded-full capitalize`}>
      {status.replace("_", " ")}
    </Badge>
  );
}

const deleteCategoryFunc = async (id: number) => {
  try {
    const res = await deleteCategory(id);
    console.log("res", res);
    toast.success(res.message);
  } catch (error) {
    console.log("error", error);
  }
};

const Page = () => {
  const router = useRouter();
  const [renderModal, setRenderModal] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<number | undefined>(undefined);
  const categoryColumns: ColumnDef<Category>[] = [
    {
      accessorKey: "name",
      header: () => (
        <div className="text-sm font-medium text-muted-foreground">
          Category
        </div>
      ),
      size: 260,
      minSize: 200,
      cell: ({ row }) => {
        const category = row.original;

        return (
          <div className="flex items-center gap-3">
            <Image
              src={category.image_url}
              alt={category.name}
              width={40}
              height={40}
              unoptimized
              className="rounded-md object-cover border"
            />

            <div className="flex flex-col">
              <span className="text-sm font-medium">{category.name}</span>
            </div>
          </div>
        );
      },
    },

    {
      accessorKey: "status",
      header: () => (
        <div className="text-sm font-medium text-muted-foreground">Status</div>
      ),
      size: 120,
      minSize: 100,
      cell: ({ row }) => <StatusBadge status={row.getValue("status")} />,
    },

    {
      accessorKey: "created_at",
      header: () => (
        <div className="text-sm font-medium text-muted-foreground">Created</div>
      ),
      size: 160,
      minSize: 140,
      cell: ({ row }) => {
        const raw = row.getValue<string>("created_at");
        const date = new Date(raw.replace(" ", "T"));

        return (
          <span className="text-sm">
            {isNaN(date.getTime()) ? "-" : date.toLocaleDateString()}
          </span>
        );
      },
    },

    {
      id: "actions",
      header: () => (
        <div className="text-sm font-medium text-muted-foreground">Actions</div>
      ),
      size: 70,
      enableResizing: false,
      cell: ({ row }) => {
        const category = row.original;

        return (
          <div className="flex items-center gap-1">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                console.log("hello");
                setRenderModal(true);
                setIsEdit(true);
                setSelectedId(category.id);
              }}
            >
              <SquarePen className="h-4 w-4" />
            </Button>

            <Button
              size="icon"
              variant="ghost"
              className="hover:text-destructive"
              onClick={() => {
                deleteCategoryFunc(category.id);
              }}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <ListPageWrapper
      columns={categoryColumns}
      pageFor="Category"
      renderModal={renderModal}
      url="/admin/categories"
    >
      <ReusableCreateDialog
        isEdit={isEdit}
        label={"Category"}
        schema={categorySchema}
        createFn={createCategory}
        updateFn={updateCategory}
        showFn={showCategory}
        selectedId={selectedId}
      />
    </ListPageWrapper>
  );
};

export default Page;
