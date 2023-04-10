import axios from "axios";
import { IPin, IPinSearchCriteria } from "../types/pin";

const baseUrl = "http://8.tcp.ngrok.io:18582";
const pinsUrl = `${baseUrl}/pins`;

export interface IGetPinRequest {
  searchCriteria: IPinSearchCriteria;
}
export interface IGetPinResponse {
  pins: IPin[];
}

export const getPinsByCriteria = async (
  request: IGetPinRequest
): Promise<IPin[]> => {
  const pins = await axios
    .post<IGetPinResponse>(`${pinsUrl}/filter`, request)
    .then((response) => {
      return response.data.pins;
    });
  return pins;
};
