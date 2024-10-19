import axios from "axios";
import { IProduct } from "./types";

export const getProducts = async ():Promise<IProduct[]> => {
  const response = await axios.get("http://localhost:3004/products")
  return response.data
}