import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsMasterComponent } from './students-master.component';

describe('StudentsMasterComponent', () => {
  let component: StudentsMasterComponent;
  let fixture: ComponentFixture<StudentsMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
