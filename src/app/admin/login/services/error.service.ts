import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private toastrService:ToastrService) { }

  errorHandler(err:any){
    if(err.status == 400){
      this.toastrService.error(err.error)
    }else if(err.status=0){
      this.toastrService.error("Bağlantı hatası. Lütfen daha sonra tekrar deneyin")
    }else if(err.status=405){
      this.toastrService.error("Bilinmeyen hata")
    }else{
      this.toastrService.error(err.error.Message)
    }

  }

}
