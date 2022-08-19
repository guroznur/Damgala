import { Component, OnInit } from '@angular/core';
import { ErrorService } from '../login/services/error.service';
import { UrlModel } from './models/url-model';
import { UrlService } from './services/url.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-urls',
  templateUrl: './urls.component.html',
  styleUrls: ['./urls.component.scss']
})
export class UrlsComponent implements OnInit {

  urls: UrlModel[] = [];

  constructor(
    private urlService: UrlService,
    private errorService: ErrorService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.getUrlList();
  }

  getUrlList(){
    this.urlService.getUrlList().subscribe((res:any)=>{
      this.urls = res.data;
    },(err:any)=>{
      this.errorService.errorHandler(err)
    })
  }

  deleteUrl(url:UrlModel){
    this.urlService.deleteUrl(url).subscribe((res)=>{
      this.toastrService.success("Silme işlemi başarılı")
      this.getUrlList();
    },(err)=>{
      this.errorService.errorHandler(err);
    })

  }
}
