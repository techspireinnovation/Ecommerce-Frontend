"use client";

import ListPageWrapper from "@/reusable/list/ListPageWrapper";
import DialogCreateFormHeader from "@/reusable/form/dialog/header";
import { useMemo, useState } from "react";
import SubCategoryForWrapper from "@/features/product/sub-categories/subCategoryFormWrapper";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { StatusBadge } from "../../category/list/page";
import { Button } from "@/components/ui/button";
import { SquarePen, Trash2 } from "lucide-react";
import { deleteReusableFunction } from "@/utils/helper/deleteFunction";
import { deleteCategory } from "@/features/product/categories/categoryActions";
import { createSubCategory, getSubCategoryList, showSubCategory, updateSubCategory } from "@/features/product/sub-categories/sub-categoryActions";
import { subCategorySchema } from "@/features/product/sub-categories/sub-category.schema";

export type SubCategory = {
  id: number;
  name: string;
  slug: string;
  category_id: number;
  category_name: string | null;
  image_url: string | null;
  status: "active" | "inactive";
  seo_title?: string | null;
  seo_description?: string | null;
  seo_keywords?: string[];
  seo_image_url?: string | null;
  created_at: string;
};

const Page = () => {
  const [renderModal, setRenderModal] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<number | undefined>(undefined);

  const subCategoryColumns: ColumnDef<SubCategory>[] = useMemo(
    () => [
      {
        accessorKey: "name",
        header: () => (
          <div className="text-sm font-medium text-muted-foreground">
            Sub Category
          </div>
        ),
        size: 260,
        minSize: 200,
        cell: ({ row }) => {
          const subCategory = row.original;

          return (
            <div className="flex items-center gap-3">
              {subCategory.image_url ? (
                <Image
                  src={subCategory.image_url}
                  alt={subCategory.name}
                  width={40}
                  height={40}
                  unoptimized
                  className="rounded-md object-cover border"
                />
              ) : (
                <div className="h-10 w-10 rounded-md border bg-muted" />
              )}

              <div className="flex flex-col">
                <span className="text-sm font-medium">{subCategory.name}</span>
                {subCategory.category_name && (
                  <span className="text-xs text-muted-foreground">
                    {subCategory.category_name}
                  </span>
                )}
              </div>
            </div>
          );
        },
      },

      {
        accessorKey: "category_name",
        header: () => (
          <div className="text-sm font-medium text-muted-foreground">
            Parent Category
          </div>
        ),
        size: 200,
        minSize: 160,
        cell: ({ row }) => (
          <span className="text-sm">
            {row.getValue<string>("category_name") ?? "-"}
          </span>
        ),
      },

      {
        accessorKey: "status",
        header: () => (
          <div className="text-sm font-medium text-muted-foreground">
            Status
          </div>
        ),
        size: 120,
        minSize: 100,
        cell: ({ row }) => <StatusBadge status={row.getValue("status")} />,
      },

      {
        accessorKey: "created_at",
        header: () => (
          <div className="text-sm font-medium text-muted-foreground">
            Created
          </div>
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
          <div className="text-sm font-medium text-muted-foreground">
            Actions
          </div>
        ),
        size: 70,
        enableResizing: false,
        cell: ({ row }) => {
          const subCategory = row.original;

          return (
            <div className="flex items-center gap-1">
              <Button
                size="icon"
                variant="ghost"
                onClick={() => {
                  setRenderModal(true);
                  setIsEdit(true);
                  setSelectedId(subCategory.id);
                }}
              >
                <SquarePen className="h-4 w-4" />
              </Button>

              <Button
                size="icon"
                variant="ghost"
                className="hover:text-destructive"
                onClick={() =>
                  deleteReusableFunction(subCategory.id, deleteCategory)
                }
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          );
        },
      },
    ],
    [setRenderModal, setIsEdit, setSelectedId],
  );

  const pageFor = "Sub-Category";
  return (
    <ListPageWrapper
      columns={subCategoryColumns}
      pageFor={pageFor}
      renderModal={renderModal}
      url="/admin/sub-categories"
      listApi={getSubCategoryList}
    >
      <DialogCreateFormHeader pageFor={pageFor} />
      <SubCategoryForWrapper
      isEdit={isEdit}
      label="Sub-category"
      schema={subCategorySchema}
      createFn={createSubCategory}
      updateFn={updateSubCategory}
      showFn={showSubCategory}
      selectedId={selectedId}
      />
    </ListPageWrapper>
  );
};

export default Page;
