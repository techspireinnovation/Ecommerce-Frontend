import ListPageWrapper from "@/reusable/list/ListPageWrapper";
import { brandColumns, brandData } from "../../brand/list/page";
import ReusableCreateDialog from "@/reusable/form/dialog/ReusableCreateDialog";

const Page = () => {
  return <ListPageWrapper
  columns={brandColumns}
  data={brandData}
  pageFor="category"
  renderModal="hello"
  >
    <ReusableCreateDialog label={'Category'} />
  </ListPageWrapper>
};

export default Page;
