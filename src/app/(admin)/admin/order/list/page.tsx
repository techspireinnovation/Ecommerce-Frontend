import ListPageWrapper from "@/reusable/list/ListPageWrapper"
import { brandColumns, brandData } from "../../brand/list/page"

const Page = () => {
  return (
    <ListPageWrapper columns={brandColumns} data={brandData} pageFor="Order" />
  )
}

export default Page