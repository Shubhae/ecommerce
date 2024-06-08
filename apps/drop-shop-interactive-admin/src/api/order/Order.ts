import { Customer } from "../customer/Customer";
import { Product } from "../product/Product";

export type Order = {
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  product?: Product | null;
  quantity: number | null;
  status?: "Option1" | null;
  totalPrice: number | null;
  updatedAt: Date;
};
