import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginprojectComponent } from './loginproject.component';

describe('LoginprojectComponent', () => {
  let component: LoginprojectComponent;
  let fixture: ComponentFixture<LoginprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginprojectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
