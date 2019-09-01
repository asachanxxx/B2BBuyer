import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNewprofileComponent } from './page-newprofile.component';

describe('PageNewprofileComponent', () => {
  let component: PageNewprofileComponent;
  let fixture: ComponentFixture<PageNewprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNewprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNewprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
