import { Component, OnInit } from '@angular/core';
import { GlobalParams } from 'src/app/shared/services/CorparateServices/globalparams.service';

@Component({
  selector: 'app-file-complains',
  templateUrl: './file-complains.component.html',
  styleUrls: ['./file-complains.component.sass']
})
export class FileComplainsComponent implements OnInit {

  constructor(private config:GlobalParams) { }



  ngOnInit() {
  }

}
