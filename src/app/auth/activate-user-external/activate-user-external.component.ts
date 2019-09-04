import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CorparateService } from 'src/app/shared/services/CorparateServices/CorparateService.Service';

@Component({
  selector: 'app-activate-user-external',
  templateUrl: './activate-user-external.component.html',
  styleUrls: ['./activate-user-external.component.sass'],
  providers: [CorparateService]
})
export class ActivateUserExternalComponent implements OnInit {
  activatedone;
  constructor(private route: ActivatedRoute, private corpservice: CorparateService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {


      console.log("ActivateUserExternalComponent", params.get("userid"));
      this.ActivateUserExternal( params.get("userid"));


    });
  }

  ActivateUserExternal(userid: string) {
    this.corpservice.ActivateUserExternal(userid).subscribe(
      data => {
        this.activatedone = "Done"
        console.log(data);
      },err=>{
        this.activatedone = "Error activating"
      }
    )
  }


}
