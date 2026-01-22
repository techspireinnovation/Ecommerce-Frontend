import ListPageWrapper from "@/reusable/list/ListPageWrapper";
import { brandColumns, brandData } from "../../brand/list/page";
import ReusableCreateDialog from "@/reusable/form/dialog/ReusableCreateDialog";
import { categorySchema } from "@/features/product/categories/category.schema";
import { createCategory } from "@/features/product/categories/categoryActions";

const Page = () => {
  return (
    <ListPageWrapper
      columns={brandColumns}
      data={brandData}
      pageFor="Category"
      renderModal="hello"
    >
      <ReusableCreateDialog
        label={"Category"}
        schema={categorySchema}
        createFn={createCategory}
      />
    </ListPageWrapper>
  );
};

export default Page;
