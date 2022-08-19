import { HttpClient } from '@angular/common/http';
import { Inject, inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../../login/models/list-response-model';
import { ResponseModel } from '../../login/models/response-model';
import { UrlModel } from '../models/url-model';



@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(
    @Inject("apiUrl") private apiUrl:string,
    private httpClient:HttpClient
  ) { }

  getUrlList():Observable<ListResponseModel<UrlModel>> {
    let api = this.apiUrl + "Url/GetList";
    return this.httpClient.get<ListResponseModel<UrlModel>>(api);
  }

  deleteUrl(url:UrlModel){
    let api = this.apiUrl + "Url/Delete";
    return this.httpClient.post(api, url)

  }
}
