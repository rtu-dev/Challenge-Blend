import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './../../shared/services/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logged: boolean;
  error: boolean = false;
  // usuario: User = new User();
  rForm: FormGroup

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,) { }

  ngOnInit() {
    this.formInit();
  }

  formInit() {
    this.rForm = this.formBuilder.group({
      'email': ['', [Validators.required]],
      'password': ['', [Validators.required]]
    });
  }

  login() {

    localStorage.setItem('authenticated','true');
    this.router.navigate(['/private/Bier']);
    // debugger
    // this.usuario.userName = this.rForm.get('email').value;
    // this.usuario.password = this.rForm.get('password').value;
    // var loginResp;
    // this.authService.auth(this.usuario).subscribe(
    //   res => {
    //     this.logged = true;
    //     loginResp = res;        
    //   },
    //   err => {
    //     debugger
    //     this.error = true;
    //     this.router.navigate(['/private']);
    //   },
    //   () => {
    //     if (this.logged) {
    //       this.authService.setLocalStorage(loginResp);
    //       if (this.authService.isAuthenticated()) {
    //         this.router.navigate(['/private/User']);
    //       }
    //     }
    //   }
    // )
  }

}
