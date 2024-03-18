import { RestaurantsRecord } from "@/src/xata";

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