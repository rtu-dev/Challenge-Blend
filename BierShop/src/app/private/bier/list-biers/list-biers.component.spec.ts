import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBiersComponent } from './list-biers.component';

describe('ListBiersComponent', () => {
  let component: ListBiersComponent;
  let fixture: ComponentFixture<ListBiersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBiersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
