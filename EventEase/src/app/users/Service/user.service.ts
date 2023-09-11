import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login, Register } from '../Model/register';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  signIn(login:Login)
  {
    return this.http.post<boolean>('https://localhost:7052/api/Auth/login',login)
  }
  signUp(register:Register)
  {
    return this.http.post('https://localhost:7133/Auth/register',register);
  }
  GetUserByEmail(email:string)
  {

    return this.http.post<Register>('https://localhost:7059/api/User/GetUserByEmail?email='+email,email)
  }
}


