import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms'; 
import { User } from 'src/app/user';
import { AuthService } from 'src/app/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username : string = '';
  password : string = '';
  signin: string = '';

  user : User = new User();

  signinas : string[];

  constructor(private authService : AuthService, private route : Router ) { 
    this.signinas = [
      'admin',
      'vendor',
      'customer'
    ]
  }

  ngOnInit(): void {
    this.username = '';
    this.password = '';
  }
  loginForm:any = new FormGroup({
    username: new FormControl("", [Validators.required,Validators.maxLength(100), Validators.pattern("[a-zA-Z0-9].*")]),
    password: new FormControl("", [Validators.required]),
    signin: new FormControl("", [Validators.required]),
  })
  loginSubmited(){
    console.log(this.loginForm.get("username"));
  }
  get UserName() : FormControl{
    return this.loginForm.get("username");

  }
  get Password() : FormControl{
    return this.loginForm.get("password");

  }
  get SignIn() : FormControl{
    return this.loginForm.get("signin");

  }


  login() {
    this.user.username = this.username;
    this.user.password = this.password;
    this.user.signin = this.signin;

    this.authService.login(this.user).subscribe(res => {

      if(res == null) {
        alert("Username or password is wrong");
        this.ngOnInit();
      }else {
        console.log("Login successful");
        // localStorage.setItem("token",res.token);

        if(this.signin == 'admin') {
          this.route.navigate(['/admin']);
        } 

        if( this.signin == 'vendor') {
          this.route.navigate(['/vendor']);
        }
        if(this.signin == 'customer') {
          this.route.navigate(['/customer']);
        } 


      }

    }, err => {
      alert("Login failed");
      this.ngOnInit();
    })
  }

}
