import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageForgetpasswordComponent } from './page-forgetpassword.component';

describe('PageForgetpasswordComponent', () => {
  let component: PageForgetpasswordComponent;
  let fixture: ComponentFixture<PageForgetpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageForgetpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageForgetpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
