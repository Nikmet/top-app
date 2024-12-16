import { API } from "@/app/api";
import { IProductModel } from "@/interfaces/product.interface";
import axios from "axios";

export async function getProducts(category: string, limit: number): Promise<IProductModel[] | null> {
    console.log(category);

    const res = await axios.post(API.product.find, {
        category,
        limit
    });

    if (!res.data) {
        return null;
    }

    return res.data;
}
