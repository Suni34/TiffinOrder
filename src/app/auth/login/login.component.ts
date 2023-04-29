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
  username: string = '';
  password: string = '';
  role: string = '';

  user: User = new User();

  roles: string[];

  constructor(private authService: AuthService, private route: Router) {
    this.roles = [
      'admin',
      'vendor',
      'customer'
    ]
  }

  ngOnInit(): void {
    this.username = '';
    this.password = '';
  }
  loginForm: any = new FormGroup({
    username: new FormControl("", [Validators.required, Validators.maxLength(100), Validators.pattern("[a-zA-Z0-9].*")]),
    password: new FormControl("", [Validators.required]),
    role: new FormControl("", [Validators.required]),
  })
  loginSubmited() {
    console.log(this.loginForm.get("username"));
  }
  get UserName(): FormControl {
    return this.loginForm.get("username");

  }
  get Password(): FormControl {
    return this.loginForm.get("password");

  }
  get Role(): FormControl {
    return this.loginForm.get("role");

  }


  login() {
    this.user.username = this.username;
    this.user.password = this.password;
    this.user.role = this.role;

    this.authService.login(this.user).subscribe(res => {

      if (res == null) {
        alert("Username or password is wrong");
        this.ngOnInit();
      } else {
        console.log("Login successful");
        localStorage.setItem("token", res.token);

        if (this.role == 'admin') {
          this.route.navigate(['/admin']);
        }

        if (this.role == 'vendor') {
          this.route.navigate(['/vendor']);
        }
        if (this.role == 'customer') {
          this.route.navigate(['/customer']);
        }

      }

    }, err => {
      alert("Login failed");
      this.ngOnInit();
    })
  }

}