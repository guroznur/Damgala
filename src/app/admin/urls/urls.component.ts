import { Component, OnInit, TemplateRef } from '@angular/core';
import { ErrorService } from '../login/services/error.service';
import { UrlModel } from './models/url-model';
import { UrlService } from './services/url.service';
import { ToastrService } from 'ngx-toastr';
import { BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import { FormGroup, NgForm } from '@angular/forms';
import { DecodeService } from '../login/services/decode.service';


@Component({
  selector: 'app-urls',
  templateUrl: './urls.component.html',
  styleUrls: ['./urls.component.scss']
})
export class UrlsComponent implements OnInit {


  modalRef? :BsModalRef;
  urls: UrlModel[] = [];

  constructor(
    private urlService: UrlService,
    private errorService: ErrorService,
    private toastrService: ToastrService,
    private modalService:BsModalService,
    private decodeService:DecodeService
  ) { }

  ngOnInit(): void {
    this.getUrlList();
  }
  openModel(urlAddModel:TemplateRef<any>){

        this.modalRef = this.modalService.show(urlAddModel)
  }

  closeModal(){
   this.modalRef.hide();
  }

  getUrlList(){
    let url : UrlModel = new UrlModel();
    let userId = this.decodeService.getUserName().valueOf();
    console.log(userId)
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

  addUrl(tweetUrl:any){
    let url : UrlModel = new UrlModel();
    url.tweetUrl = tweetUrl.value;
    url.userId = +this.decodeService.getUserId();
    url.id = 0;

    this.urlService.addUrl(url).subscribe((res:any)=>{
      this.toastrService.success("Tweet linki kaydedildi")
      this.getUrlList();
      //addForm.reset();
    },(err)=>{
      this.errorService.errorHandler(err);
    });

   }
}
