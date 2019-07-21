import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { BlockHeaderGroup } from '../../../../shared/interfaces/block-header-group';

@Component({
    selector: 'app-block-header',
    templateUrl: './block-header.component.html',
    styleUrls: ['./block-header.component.scss']
})
export class BlockHeaderComponent implements OnInit {
  
    @Input() header: string;
    @Input() arrows = false;
    @Input() groups: BlockHeaderGroup[] = [];

    @Output() next: EventEmitter<any> = new EventEmitter();
    @Output() prev: EventEmitter<any> = new EventEmitter();

    @Output() groupChange: EventEmitter<BlockHeaderGroup> = new EventEmitter();

    constructor() { }

    setGroup(group: BlockHeaderGroup): void {
        console.log("setGroup this.groups " , this.groups)
        console.log("setGroup groups " , group)
        this.groups.forEach(g => g.current = g === group);
        this.groupChange.emit(group);
    }

    ngOnInit(): void {
        
        console.log("BlockHeaderComponent  " ,this.groups)
    }
}
