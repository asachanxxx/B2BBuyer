import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileComplainsComponent } from './file-complains.component';

describe('FileComplainsComponent', () => {
  let component: FileComplainsComponent;
  let fixture: ComponentFixture<FileComplainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileComplainsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileComplainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
