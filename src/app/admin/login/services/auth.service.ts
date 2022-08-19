import { HttpClient } from '@angular/common/http';
import { Inject, inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {LoginModel} from '../models/login-model';
import { SingleResponseModel } from '../models/single-response-model';
import { TokenModel } from '../models/token-model';
import { ToastrService } from 'ngx-toastr';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  tokenModel : TokenModel
  constructor(
    @Inject("apiUrl") private apiUrl:string,
    private httpClient:HttpClient,
    private router:Router,
    private toastrService:ToastrService
    ) { }

   isAuthanticated() {
    if (localStorage.getItem('adminToken')) {
      return true;
    } else {
      return false;
    }
  }

  login(loginModel : LoginModel){
    let api = this.apiUrl + "Auth/Login"
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      api, loginModel
      )}

      logout(){
        localStorage.removeItem("adminToken");
        this.router.navigate(["/admin-login"]);
        this.toastrService.success("Çıkış başarılı")
      }

  }


