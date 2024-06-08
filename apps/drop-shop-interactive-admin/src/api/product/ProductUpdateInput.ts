import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type ProductUpdateInput = {
  description?: string | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutProductsInput;
  price?: number | null;
  stock?: number | null;
  supplier?: SupplierWhereUniqueInput | null;
};
