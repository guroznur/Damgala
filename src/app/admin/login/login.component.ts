import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { ErrorService } from './services/error.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup
  constructor(
    private autService:AuthService,
    private router:Router,
    private formBuilder:FormBuilder,
    private errorService:ErrorService,
    private toastrService:ToastrService,

  ) { }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email: ["",Validators.required],
      password: ["",Validators.required]
    })
  }

  ngOnInit(): void {
    this.createLoginForm();
  }

  login(){
    if(this.loginForm.valid)
    {
      console.log(this.loginForm.value)

      let loginModel = Object.assign({}, this.loginForm.value)

      this.autService.login(loginModel).subscribe(response=>{
        localStorage.setItem("adminToken",response.data.accessToken)
        this.router.navigate(["/admin"])
        this.toastrService.success("Giriş Başarılı")
      },(err)=>{
        this.errorService.errorHandler(err)
      })
    }
  }

}
