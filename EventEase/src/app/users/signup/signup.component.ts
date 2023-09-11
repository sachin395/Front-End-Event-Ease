import { Component } from '@angular/core';
import { CaptchaService } from '../Service/captcha.service';
import { Login, Register } from '../Model/register';
import { UserService } from '../Service/user.service';
import { EncryptdecryptService } from '../Service/encryptdecrypt.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  captchaImage: string = '';
  captchaCode: string = '';
  userInput: string = '';
  isSignUp: boolean = false;
  isCaptchaValid:boolean=false;
  registerModel:Register;
  
  login:Login;
  user:Register;
  opened:boolean=false
  constructor(private captchaService:CaptchaService,private userservice:UserService,private encryptDecryptService:EncryptdecryptService)
  {
    this.registerModel=new Register();
    this.login=new Login();
    this.user=new Register();

  }
  ngOnInit(): void {
    this.fetchCaptchaImage();
  }

  fetchCaptchaImage(): void {
    this.captchaService.generateCaptcha().subscribe(
      (response: any) => {
        this.captchaImage = response.imageData;
        this.captchaCode = response.captchaCode;
      },
      (error: any) => {
        console.error('Error fetching CAPTCHA image:', error);
      }
    );
  }


  toggleSignUp(): void {
    this.isSignUp = !this.isSignUp;
  }
  SignIn()
  {

    this.userservice.GetUserByEmail(this.login.email).subscribe(res=>{
      this.user=res;
      debugger
      console.log(res);
      
      //this.user=res
      if (this.userInput === this.captchaCode) {

        console.log('CAPTCHA verification successful');
        this.isCaptchaValid=true;
     
      } else {
        console.log('CAPTCHA verification failed');
      }
      debugger
      if(this.isCaptchaValid && this.user.isEmail_verified)
      { 
       
        this.login.password=this.encryptDecryptService.encryptUsingAES256(this.login.password)
        this.userservice.signIn(this.login).subscribe(res=>{
         
          if(res)
          {
            console.log(res);
            this.opened=true
            
          }
          else
          {
        
          }
          
        })
      }
      else{
        console.log('Email is not Validated!!');
   
      }
      
    })

   
  }
  SignUp(){
    {
      this.registerModel.passwordHash=this.encryptDecryptService.encryptUsingAES256(this.registerModel.passwordHash)
      this.userservice.signUp(this.registerModel).subscribe(res=>{
        console.log(res)
        if(res)
        {

        }
        else{
          this.registerModel.passwordHash=""
        }
      })
     
   
 

  }

}
}
