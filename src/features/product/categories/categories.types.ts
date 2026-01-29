export interface ReusableCreateDialogProps {
  label: string;
  schema: any;
  createFn: any;
  isEdit: boolean;
  updateFn: any;
  showFn: any;
  selectedId: any;
}


export interface Category {
  id: number;
  name: string;
  slug: string;
  image_url: string;
  status: "active" | "inactive";
  created_at: string;
}
