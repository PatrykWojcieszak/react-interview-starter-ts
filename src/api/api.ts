import axios from "axios";

const BASE_URL = "https://join-tsh-api-staging.herokuapp.com/";
export const PRODUCTS = "products";

export async function getData<T>(endpointURL: string, params?: string) {
  const { data } = await axios.get<T>(BASE_URL + endpointURL + params);

  return data;
}
