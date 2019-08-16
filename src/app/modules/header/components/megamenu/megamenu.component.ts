import { Component, Input, OnInit } from '@angular/core';
import { Megamenu } from '../../../../shared/interfaces/megamenu';

@Component({
    selector: 'app-header-megamenu',
    templateUrl: './megamenu.component.html',
    styleUrls: ['./megamenu.component.scss']
})
export class MegamenuComponent implements OnInit {
    @Input() menu: any;
    @Input() departments = false;

    constructor() { 

        
    }


    ngOnInit(): void {
        console.log("MegamenuComponent - menu ", this.menu)
    }

}
