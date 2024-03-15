// Generated by Xata Codegen 0.29.3. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "restaurants",
    columns: [
      { name: "shopName", type: "string" },
      { name: "shopAddress", type: "string" },
      { name: "shopImg", type: "string" },
      { name: "shopOpenTime", type: "string" },
      { name: "shopCloseTime", type: "string" },
      { name: "user_id", type: "string" },
    ],
  },
  { name: "orders", columns: [] },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Restaurants = InferredTypes["restaurants"];
export type RestaurantsRecord = Restaurants & XataRecord;

export type Orders = InferredTypes["orders"];
export type OrdersRecord = Orders & XataRecord;

export type DatabaseSchema = {
  restaurants: RestaurantsRecord;
  orders: OrdersRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://Ralph-Codes-s-workspace-uglabh.us-east-1.xata.sh/db/food",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
