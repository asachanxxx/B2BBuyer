import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeallReviewsComponent } from './seeall-reviews.component';

describe('SeeallReviewsComponent', () => {
  let component: SeeallReviewsComponent;
  let fixture: ComponentFixture<SeeallReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeallReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeallReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
