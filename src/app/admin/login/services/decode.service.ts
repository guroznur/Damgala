import { Injectable } from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt"
import { RoleModel } from '../models/role-model';

@Injectable({
  providedIn: 'root'
})
export class DecodeService {
  jwtHelperService:JwtHelperService= new JwtHelperService()
  roles: RoleModel[] = [];
  constructor() { }

  getUserId():number{
    let decode = this.jwtHelperService.decodeToken(localStorage.getItem("adminToken")!);
    var userId = Object.keys(decode).filter(p=>p.endsWith("/nameidentifier"))[0];
    return +decode[userId];
  }

  getUserName():string{
    let decode = this.jwtHelperService.decodeToken(localStorage.getItem("adminToken")!);
    var userName = Object.keys(decode).filter(p=>p.endsWith("/name"))[0];
    return decode[userName];
  }

  getUserRoles(){
    this.roles = [];
    let decode = this.jwtHelperService.decodeToken(localStorage.getItem("adminToken")!);
    var userRoles = Object.keys(decode).filter(p=>p.endsWith("/role"));
    userRoles.forEach(element => {
      let model:RoleModel = new RoleModel();
      model.role = decode[element]
      this.roles.push(model)
    });
    return this.roles;;
  }
}
