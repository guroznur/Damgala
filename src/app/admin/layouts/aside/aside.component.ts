import { Component, OnInit } from '@angular/core';
import { DecodeService } from '../../login/services/decode.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  userName: string = "";

  constructor(
    private decodeService:DecodeService

  ) { }

  ngOnInit(): void {
    this.userName = this.decodeService.getUserName();
  }

}
