import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { departments } from '../../../../../data/header-departments';
import { DepartmentsService } from '../../../../shared/services/departments.service';
import { NavigationLink } from '../../../../shared/interfaces/navigation-link';
import { isPlatformBrowser } from '@angular/common';
import { MainPageService } from 'src/app/shared/services/processservices/mainpage.service';

@Component({
    selector: 'app-header-departments',
    templateUrl: './departments.component.html',
    styleUrls: ['./departments.component.scss'],
    providers:[MainPageService]
})
export class DepartmentsComponent implements OnInit {
    private destroy$: Subject<any> = new Subject();

    items: NavigationLink[] = departments;
    NavigationLink:any;
    isOpen = false;
    fixed = false;

    private get element(): HTMLElement {
        return this.el.nativeElement;
    }

    constructor(
        @Inject(PLATFORM_ID) private platformId: any,
        private renderer: Renderer2,
        private el: ElementRef,
        private service: DepartmentsService, private mainPageService:MainPageService
    ) { 

       // console.log("item.menu " ,this.items)

    }

    ngOnInit(): void {
        // this.GetmegaMenuLink();
        // console.log("items   " , this.items)
        const root = this.element.querySelector('.departments') as HTMLElement;
        const content = this.element.querySelector('.departments__links-wrapper') as HTMLElement;


        this.service.areaElement$.pipe(takeUntil(this.destroy$)).subscribe(areaElement => {

            if (areaElement) {
                this.fixed = true;
                this.isOpen = true;

                if (isPlatformBrowser(this.platformId)) {
                    const areaRect = areaElement.getBoundingClientRect();
                    const areaBottom = areaRect.top + areaRect.height + window.scrollY;

                    root.classList.remove('departments--transition');
                    root.classList.add('departments--fixed', 'departments--opened');

                    const height = areaBottom - (content.getBoundingClientRect().top + window.scrollY);

                    content.style.height = `${height}px`;
                    content.getBoundingClientRect(); // force reflow
                } else {
                    this.renderer.addClass(root, 'departments--fixed');
                    this.renderer.addClass(root, 'departments--opened');
                }
            } else {
                this.fixed = false;
                this.isOpen = false;

                if (isPlatformBrowser(this.platformId)) {
                    root.classList.remove('departments--opened', 'departments--fixed');
                    content.style.height = '';
                } else {
                    this.renderer.removeClass(root, 'departments--fixed');
                    this.renderer.removeClass(root, 'departments--opened');
                }
            }
        });

        if (isPlatformBrowser(this.platformId)) {
            fromEvent<MouseEvent>(document, 'mousedown').pipe(
                takeUntil(this.destroy$)
            ).subscribe((event) => {
                if (event.target instanceof HTMLElement && !this.element.contains(event.target)) {
                    this.close();
                }
            });

            fromEvent<TransitionEvent>(content, 'transitionend').pipe(
                takeUntil(this.destroy$)
            ).subscribe((event) => {
                if (event.propertyName === 'height') {
                    root.classList.remove('departments--transition');
                }
            });
        }
    }

    toggle(): void {
        if (this.isOpen) {
            this.close();
        } else {
            this.open();
        }
    }


    
    // GetmegaMenuLink() {
    //     this.mainPageService.GetNavigationLink().subscribe(
    //         data=>{
    //             this.NavigationLink = data;
    //             console.log("this.NavigationLink   "  ,this.NavigationLink)
    //         },
    //         err=>{
    //             console.log("this.NavigationLink   "  ,err)
    //         }

    //     )
    // }


    open(): void {
        console.log("DepartmentsComponent: - open");

        this.isOpen = true;

        const root = this.element.querySelector('.departments') as HTMLElement;
        const content = root.querySelector('.departments__links-wrapper') as HTMLElement;
        const startHeight = content.getBoundingClientRect().height;

        root.classList.add('departments--transition', 'departments--opened');

        const endHeight = content.getBoundingClientRect().height;

        content.style.height = startHeight + 'px';
        content.getBoundingClientRect(); // force reflow
        content.style.height = endHeight + 'px';
    }

    close(): void {
        console.log("DepartmentsComponent: - close");

        if (this.fixed || !this.isOpen) {
            return;
        }

        this.isOpen = false;

        const root = this.element.querySelector('.departments') as HTMLElement;
        const content = root.querySelector('.departments__links-wrapper') as HTMLElement;
        const startHeight = content.getBoundingClientRect().height;

        content.style.height = startHeight + 'px';

        root.classList.add('departments--transition');
        root.classList.remove('departments--opened');

        content.getBoundingClientRect(); // force reflow
        content.style.height = '';
    }
}
