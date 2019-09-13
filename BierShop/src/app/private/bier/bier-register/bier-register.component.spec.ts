import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BierRegisterComponent } from './bier-register.component';

describe('BierRegisterComponent', () => {
  let component: BierRegisterComponent;
  let fixture: ComponentFixture<BierRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BierRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BierRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
