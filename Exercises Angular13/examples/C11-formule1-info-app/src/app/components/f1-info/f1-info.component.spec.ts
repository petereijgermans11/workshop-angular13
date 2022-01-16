import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F1InfoComponent } from './f1-info.component';

describe('F1InfoComponent', () => {
  let component: F1InfoComponent;
  let fixture: ComponentFixture<F1InfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ F1InfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(F1InfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
