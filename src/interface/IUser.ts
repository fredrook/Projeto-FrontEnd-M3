export interface IAddress {
  district: string;
  zipCode: string;
  number: string;
  city: string;
  state: string;
}

export interface IUser {
  id: number;
  isAdmin: boolean;
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
  CPF: string;
  CRM?: string;
  age: number;
  sex: string;
  address: IAddress;
  type?: string;
  especiality?: string;
  img?: string;
}
