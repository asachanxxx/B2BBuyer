import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNewprofileConfirmComponent } from './page-newprofile-confirm.component';

describe('PageNewprofileConfirmComponent', () => {
  let component: PageNewprofileConfirmComponent;
  let fixture: ComponentFixture<PageNewprofileConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNewprofileConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNewprofileConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
