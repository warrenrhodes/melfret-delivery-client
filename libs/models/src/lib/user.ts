import { Role } from "./role";

export interface UserLocation {
  country?: string;
  city?: string;
  street?: string;
  gPlusCode?: string;
}

export interface AdditionalUserInformation {
  email?: string;
  phoneNumber?: string;
}

export interface User {
  name: string;
  surname: string;
  pseudo: string;
  password: string;
  location?: UserLocation;
  authMode: 'email' | 'phoneNumber' | 'manual';
  role: Role;
  more: AdditionalUserInformation;
}
