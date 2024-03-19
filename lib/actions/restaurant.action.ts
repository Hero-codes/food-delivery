"use server";
import { getXataClient } from "@/src/xata";
import { FormProps } from "../types";
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

export const uploadRestaurant = async (values: FormProps) => {

    const { userId } = auth();
    const xata = await getXataClient();

    try {
        const record = await xata.db.restaurants.create({
            shopName: values.shopName,
            shopAddress: values.shopAddress,
            shopImg: values.shopImg,
            shopCloseTime: values.shopCloseTime,
            shopOpenTime: values.shopOpenTime,
            user_id: userId
        });
        revalidatePath("/user/profile");
    } catch (error) {
        console.log(error);
    };
};

export const getRestaurants = async () => {

    const xata = await getXataClient();

    try {
        const record = await xata.db.restaurants.getAll();
        return record;

    } catch (error) {
        console.log(error);
    }
};

export const getRestaurantsByUser = async () => {
    const xata = await getXataClient();
    const { userId } = auth();

    try {
        const record = await xata.db.restaurants.filter({
            user_id: userId
        }).getAll();

        return record;
    } catch (error) {
        console.log(error);
    };
};

export const deleteRestaurant = async (id: string) => {
    try {
        const xata = await getXataClient();
        const { userId } = auth();

        const user = await xata.db.restaurants.filter({
            user_id: userId
        }).getFirst();

        if (user?.user_id !== userId) throw new Error("Not Authorized!");

        const records = await xata.db.dishes.filter({
            restaurant_id: id,
        }).getAll();

        const toDelete = records.map(rec => {
            return {
                delete: {
                    table: "dishes" as const,
                    id: rec.id
                }
            }
        })

        const page = await xata.transactions.run(toDelete);
        const record = await xata.db.restaurants.delete(id);

        revalidatePath("/user/profile")
    } catch (error) {
        console.log(error);
    };
};