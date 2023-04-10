
export interface ILocation{
  latitude: number;
  longitude: number;
};



export enum ITrait {
  WheelchairAccessible = "wheelchairAccessible",
  MultilingualStaff = "multilingualStaff",
  SignLanguage = "signLanguage",
  BrailleMenu = "brailleMenu",
  ServicePetFriendly = "servicePetFriendly",
  CuttingServices = "cuttingServices"
}


export interface IPin {
  id: string;
  geocode: ILocation;
  name: string;
  starRating: number;
  traits: ITrait[];
  description: string;
};


export interface IPinSearchCriteria {
  name: string;
  starRating?: number;
  traits: ITrait[];
}

