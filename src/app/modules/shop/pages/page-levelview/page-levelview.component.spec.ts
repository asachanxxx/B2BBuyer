import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLevelviewComponent } from './page-levelview.component';

describe('PageLevelviewComponent', () => {
  let component: PageLevelviewComponent;
  let fixture: ComponentFixture<PageLevelviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLevelviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLevelviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
