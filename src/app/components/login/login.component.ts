import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  hide = true//quitar
  loading = false
  loginForm: FormGroup

  constructor(private fb : FormBuilder, private _snackBar: MatSnackBar, private router: Router){
    this.loginForm = this.fb.group({ 
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    console.log(this.loginForm)
    const username = this.loginForm.value.username
    const password = this.loginForm.value.password

    if(username == 'admin' && password == '123'){
      this.testFakeLoading()
    } else {
      this.error('Credenciales erroneas. X intentos restantes')
      this.loginForm.reset()
    }
  }

  error(message: string, action?: string) {
    this._snackBar.open(message, action, {
      verticalPosition: 'top',
      duration: 2000
    });
  }

  testFakeLoading() {
    this.loading = true
    setTimeout(() => {
      
      this.router.navigate(['dashboard'])
    }, 1500)
  }

  ngOnInit(): void {
  }

}
