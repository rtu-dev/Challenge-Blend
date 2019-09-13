import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBierComponent } from './edit-bier.component';

describe('EditBierComponent', () => {
  let component: EditBierComponent;
  let fixture: ComponentFixture<EditBierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
