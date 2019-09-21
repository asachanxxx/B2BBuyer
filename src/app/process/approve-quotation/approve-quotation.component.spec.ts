import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveQuotationComponent } from './approve-quotation.component';

describe('ApproveQuotationComponent', () => {
  let component: ApproveQuotationComponent;
  let fixture: ComponentFixture<ApproveQuotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveQuotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
