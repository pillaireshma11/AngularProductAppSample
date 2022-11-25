import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor() { }

  login(email:string,password:string)
  {
    const loginCred={email,password};
   
return of(loginCred);
console.log(loginCred);
  }
}
