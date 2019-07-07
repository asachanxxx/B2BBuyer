import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnanItemComponent } from './returnan-item.component';

describe('ReturnanItemComponent', () => {
  let component: ReturnanItemComponent;
  let fixture: ComponentFixture<ReturnanItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnanItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnanItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
