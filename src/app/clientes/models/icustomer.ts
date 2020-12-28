import { IAddress } from './iaddress';
import { IPhone } from './iphone';

export interface ICustomer {
  name?: string;
  email?: string;
  cpf?: string;
  birthDate?: Date;
  genre?: string;
  active: boolean;
  address?: IAddress;
  phones?: IPhone[];
}
