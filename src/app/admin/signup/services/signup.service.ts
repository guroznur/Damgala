import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SignupModel } from '../models/signup-model';
import { ResponseModel } from '../../login/models/response-model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    @Inject("apiUrl") private apiUrl:string,
    private httpClient:HttpClient,
    private router:Router,
    private toastrService:ToastrService
  ) { }

  signup(signupModel:SignupModel){
    let api = this.apiUrl + "Auth/Register"
    return this.httpClient.post<ResponseModel>(api, signupModel)

  }
}
