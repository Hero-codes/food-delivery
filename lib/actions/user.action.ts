"use server";

import { getXataClient } from "@/src/xata";
import { UpdateUserProps } from "../types";
import { auth } from "@clerk/nextjs";

export const updateUser = async (values: UpdateUserProps) => {
    const xata = getXataClient();
    const { userId } = auth();

    try {
        const record = await xata.db.user.create({
            address: values.address,
            city: values.city,
            country: values.country,
            user_id: userId
        });

        return record;
    } catch (error) {
        console.log(error);
    };
};