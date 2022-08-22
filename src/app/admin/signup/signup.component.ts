import { Component, OnInit } from '@angular/core';
import { ErrorService } from '../login/services/error.service';
import { SignupService } from './services/signup.service';
import { ToastrService } from 'ngx-toastr';
import { SignupModel } from './models/signup-model';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm:FormGroup
  constructor(
    private signupService:SignupService,
    private errorService: ErrorService,
    private toastrService: ToastrService,
    private router:Router,
    private formBuilder:FormBuilder,
  ) { }

  createLoginForm(){
    this.signupForm = this.formBuilder.group({
      name: ["",Validators.required],
      email: ["",Validators.required],
      password: ["",Validators.required]
    })
  }

  ngOnInit(): void {
    this.createLoginForm()
  }

  signup(){
    if(this.signupForm.valid){
      console.log(this.signupForm.value)

    let signupModel = Object.assign({}, this.signupForm.value)
    let signup:SignupModel = new SignupModel()
    signup.id = 0,

    this.signupService.signup(signupModel).subscribe((res:any)=>{
      this.toastrService.success("Kayıt başarıyla oluşturuldu")
      this.router.navigate(["/admin"])

    },(err)=>{
      this.errorService.errorHandler(err);
    })

    }

  }

}
