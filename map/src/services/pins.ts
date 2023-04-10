import axios from 'axios';
import { IPin, IPinSearchCriteria } from '../types/pin';


const baseUrl = 'http://localhost:8080';
const pinsUrl = `${baseUrl}/pins`;

export interface IGetPinRequest{
  searchCriteria: IPinSearchCriteria;
}
export interface IGetPinResponse{
  pins: IPin[];
}

export const getPinsByCriteria= async (request: IGetPinRequest): Promise<IPin[]> => {
  const pins = await axios.post<IGetPinResponse>(`${pinsUrl}/filter`, request).then((response) => {
    return response.data.pins;
  })
  return pins;
};





