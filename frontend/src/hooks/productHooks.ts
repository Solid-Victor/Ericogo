import { useQuery } from "@tanstack/react-query";
import apiClient from "../apiClient";
import { Product } from "../types/Product";

// this hook is to load all products from the backend
export const useGetProductsQuery = () =>
  useQuery({
   queryKey: ['products'],
   queryFn: async () =>
     (
       await apiClient.get<Product[]>(`api/products`)
     ).data,
  })

  export const useGetProductDetailsBySlugQuery = (slug: string) =>
    useQuery({
      queryKey: ['products', slug],
      queryFn: async () => 
        (await apiClient.get< Product > (`api/products/${slug}`)).data
    })