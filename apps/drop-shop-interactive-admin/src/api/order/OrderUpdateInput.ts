import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
  status?: "Option1" | null;
  totalPrice?: number | null;
};
