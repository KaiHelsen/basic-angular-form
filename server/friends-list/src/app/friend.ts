import {last} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

export class Friend {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  favLang: string;
  constructor(
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    favLang: string,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.favLang = favLang;
  }
}
