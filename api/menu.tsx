import { API } from "@/app/api";
import { IMenuItem } from "@/interfaces/menu.interface";

export async function getMenu(firstCategory: number): Promise<IMenuItem[]> {
    const res = await fetch(API.topPage.find, {
        method: "POST",
        body: JSON.stringify({
            firstCategory
        }),
        headers: new Headers({ "content-type": "application/json" }),
        next: {
            revalidate: 10
        }
    });

    return res.json();
}
