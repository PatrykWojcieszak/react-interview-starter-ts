import axios from "axios";

export const PRODUCTS = "products";

export async function getData<T>(endpointURL: string, params?: string) {
  const { data } = await axios.get<T>(
    process.env.REACT_APP_API_URL + endpointURL + params
  );

  return data;
}
