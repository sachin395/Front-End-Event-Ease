export class Register {
    userId:number=0
    name!: string;
    email!: string;
    passwordHash!: string;
    location!: string;
    age!: number;
    phone!: string;
    role: string = "User";
    image!: Uint8Array|null; // You can use Uint8Array for images
    isEmail_verified: boolean = false;
}
export class Login{
    email!:string;
    password!:string
}

