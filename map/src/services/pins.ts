import axios from 'axios';


export interface IGetPinResponse {
  pin: IPin;
}

const getPinById = async (id: string) => {
  return axios.get<IGetPinResponse>(`/pins/${id}`).then((res) => res.data.pin)
}

// const getPinByLocation 




