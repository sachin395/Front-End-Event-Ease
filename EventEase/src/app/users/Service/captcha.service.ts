import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CaptchaService {

  constructor(private http:HttpClient) 
  { 
  }
  generateCaptcha(): Observable<{ imageData: string, captchaCode: string }> {
    return this.http.get<{ imageData: string, captchaCode: string }>('https://localhost:7052/api/Auth/generate');
  }
}
