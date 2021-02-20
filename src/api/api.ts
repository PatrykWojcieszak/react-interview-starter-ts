import axios from "axios";

import { QueryResultDto } from "types";

const BASE_URL = "https://join-tsh-api-staging.herokuapp.com/";
export const PRODUCT = "products";

export async function getData<T>(endpointURL: string, params?: string) {
  const { data } = await axios.get<QueryResultDto<T>>(
    BASE_URL + endpointURL + params
  );

  return data;
}
