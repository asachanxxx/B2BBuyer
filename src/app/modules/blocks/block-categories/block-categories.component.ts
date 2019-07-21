import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-block-categories',
    templateUrl: './block-categories.component.html',
    styleUrls: ['./block-categories.component.scss']
})
export class BlockCategoriesComponent implements OnInit {
   
    @Input() header = '';
    @Input() layout: 'classic'|'compact' = 'classic';
    @Input() categories: any[] = [];

    constructor() { }

    ngOnInit(): void {
      
    }
}
