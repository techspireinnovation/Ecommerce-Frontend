"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BrandListTypes } from "@/features/product/brands/brand.types";
import ReusableCreateDialog from "@/reusable/form/dialog/ReusableCreateDialog";
import ListPageWrapper from "@/reusable/list/ListPageWrapper";
import { ColumnDef } from "@tanstack/react-table";
import { Eye, Pencil, Trash2 } from "lucide-react";

export const brandColumns: ColumnDef<BrandListTypes>[] = [
  {
    accessorKey: "name",
    header: () => (
      <div className="text-sm font-medium text-muted-foreground">Brand</div>
    ),
    size: 250,
    minSize: 180,
    cell: ({ row }) => {
      const brand = row.original;

      return (
        <div className="flex items-center gap-3">
          <img
            src={brand.image}
            alt={brand.name}
            className="h-10 w-10 rounded-md object-cover border border-border"
          />
          <div className="space-y-0.5">
            <p className="text-sm font-normal text-foreground">{brand.name}</p>
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
    size: 100,
    minSize: 90,

    cell: ({ row }) => {
      const status = row.getValue<string>("status");

      const variants: Record<string, { bg: string; text: string }> = {
        Active: { bg: "bg-green-200", text: "text-green-700" },
        Pending: { bg: "bg-yellow-200", text: "text-yellow-700" },
        Inactive: { bg: "bg-red-200", text: "text-red-700" },
        low_stock: { bg: "bg-amber-200", text: "text-amber-700" },
      };

      const variant = variants[status] || {
        bg: "bg-gray-50",
        text: "text-gray-700",
      };

      return (
        <Badge
          variant="outline"
          className={`${variant.bg} ${variant.text} border-0 text-xs font-normal px-2 py-1 rounded-full`}
        >
          {status.replace("_", " ")}
        </Badge>
      );
    },
  },
  {
    accessorKey: "created",
    header: () => (
      <div className="text-sm font-medium text-muted-foreground">Created</div>
    ),
    size: 110,
    minSize: 100,
    cell: ({ row }) => (
      <div className="text-xs text-foreground font-normal">
        {row.getValue("created")}
      </div>
    ),
  },
  {
    id: "actions",
    header: () => (
      <div className="text-sm font-medium text-muted-foreground">Actions</div>
    ),
    size: 50,
    minSize: 300,
    maxSize: 60,
    enableResizing: false,

    cell: () => (
      <div className="flex items-center gap-1">
        <Button
          size="icon"
          variant="ghost"
          className="h-8 w-8 hover:bg-muted/50"
        >
          <Eye className="h-4 w-4 text-muted-foreground" />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="h-8 w-8 hover:bg-muted/50"
        >
          <Pencil className="h-4 w-4 text-muted-foreground" />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="h-8 w-8 hover:bg-destructive/10 hover:text-destructive"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    ),
  },
];

export const brandData: BrandListTypes[] = [
  {
    name: "Nike",
    status: "Active",
    created: "2023-01-15",
    image: "https://example.com/images/nike-logo.png",
  },
  {
    name: "Apple",
    status: "Active",
    created: "2022-11-30",
    image: "https://example.com/images/apple-logo.png",
  },
  {
    name: "Tesla",
    status: "Active",
    created: "2023-03-22",
    image: "https://example.com/images/tesla-logo.png",
  },
  {
    name: "Starbucks",
    status: "Pending",
    created: "2023-05-10",
    image: "https://example.com/images/starbucks-logo.png",
  },
  {
    name: "Samsung",
    status: "Active",
    created: "2022-09-18",
    image: "https://example.com/images/samsung-logo.png",
  },
  {
    name: "Adidas",
    status: "Inactive",
    created: "2021-12-05",
    image: "https://example.com/images/adidas-logo.png",
  },
  {
    name: "Amazon",
    status: "Active",
    created: "2023-02-28",
    image: "https://example.com/images/amazon-logo.png",
  },
  {
    name: "Google",
    status: "Active",
    created: "2023-01-05",
    image: "https://example.com/images/google-logo.png",
  },
  {
    name: "Microsoft",
    status: "Active",
    created: "2022-08-14",
    image: "https://example.com/images/microsoft-logo.png",
  },
  {
    name: "Coca-Cola",
    status: "Pending",
    created: "2023-06-20",
    image: "https://example.com/images/coca-cola-logo.png",
  },
  {
    name: "Netflix",
    status: "Active",
    created: "2023-04-12",
    image: "https://example.com/images/netflix-logo.png",
  },
  {
    name: "Disney",
    status: "Active",
    created: "2022-10-25",
    image: "https://example.com/images/disney-logo.png",
  },
  {
    name: "McDonald's",
    status: "Inactive",
    created: "2021-11-30",
    image: "https://example.com/images/mcdonalds-logo.png",
  },
  {
    name: "Spotify",
    status: "Active",
    created: "2023-07-15",
    image: "https://example.com/images/spotify-logo.png",
  },
  {
    name: "Intel",
    status: "Pending",
    created: "2023-08-03",
    image: "https://example.com/images/intel-logo.png",
  },
  {
    name: "BMW",
    status: "Active",
    created: "2023-03-05",
    image: "https://example.com/images/bmw-logo.png",
  },
  {
    name: "Toyota",
    status: "Active",
    created: "2022-12-19",
    image: "https://example.com/images/toyota-logo.png",
  },
  {
    name: "Mercedes-Benz",
    status: "Active",
    created: "2023-02-10",
    image: "https://example.com/images/mercedes-logo.png",
  },
  {
    name: "Airbnb",
    status: "Pending",
    created: "2023-09-01",
    image: "https://example.com/images/airbnb-logo.png",
  },
  {
    name: "Meta",
    status: "Active",
    created: "2023-01-30",
    image: "https://example.com/images/meta-logo.png",
  },
];

const Page = () => {
  return (
    <ListPageWrapper
      columns={brandColumns}
      data={brandData}
      pageFor="brand"
      renderModal="hello"
    >
      <ReusableCreateDialog label={'brand'} />
    </ListPageWrapper>
  );
};

export default Page;
