"use server";

import { getXataClient } from "@/src/xata";
import { CreateDishProps } from "../types";
import { revalidatePath } from "next/cache";

export const uploadDish = async (values: CreateDishProps) => {
    const xata = getXataClient();
    try {
        const record = await xata.db.dishes.create({
            dishDescription: values.dishDescription,
            dishName: values.dishName,
            dishPhoto: values.dishPhoto,
            dishPrice: values.dishPrice,
            restaurant_id: values.restaurantId
        });

        revalidatePath(`/restaurants/${values.restaurantId}`);
    } catch (error) {
        console.log(error);
    };
};  