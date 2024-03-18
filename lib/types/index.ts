import { RestaurantsRecord } from "@/src/xata";

//? Restaurant Props

export type FormProps = {
    shopName: string;
    shopAddress: string;
    shopImg: string;
    shopOpenTime: string;
    shopCloseTime: string;
};

export type FoodCardProps = {
    title: string,
    price: number,
    description: string,
    imgUrl?: string
};

export type RestaurantCardProps = {
    restaurant: RestaurantsRecord,
    buttonText: string,
    showDeleteButton?: boolean
}

//? Dishes Props

export type CreateDishProps = {
    restaurantId: string;
    dishName: string;
    dishDescription: string;
    dishPhoto: string;
    dishPrice: number;
}