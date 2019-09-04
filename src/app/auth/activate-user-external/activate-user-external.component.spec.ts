import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateUserExternalComponent } from './activate-user-external.component';

describe('ActivateUserExternalComponent', () => {
  let component: ActivateUserExternalComponent;
  let fixture: ComponentFixture<ActivateUserExternalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivateUserExternalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateUserExternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
