import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersMasterComponent } from './teachers-master.component';

describe('TeachersMasterComponent', () => {
  let component: TeachersMasterComponent;
  let fixture: ComponentFixture<TeachersMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachersMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeachersMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
