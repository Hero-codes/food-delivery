"use server";

import { getXataClient } from "@/src/xata";
import { CreateDishProps } from "../types";
import { revalidatePath } from "next/cache";

export const uploadDish = async (values: CreateDishProps) => {
    const xata = getXataClient();
    console.log('*** Saving to Xata ***') // the new line!
    try {
        const record = await xata.db.dishes.create({
            dishDescription: values.dishDescription,
            dishName: values.dishName,
            dishPhoto: values.dishPhoto,
            dishPrice: values.dishPrice,
            restaurant_id: values.restaurantId
        });

        revalidatePath(`/restaurants/${values.restaurantId}`);
        console.log(record)
    } catch (error) {
        console.log(error);
    };
};  