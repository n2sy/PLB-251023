import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpObsComponent } from './exp-obs.component';

describe('ExpObsComponent', () => {
  let component: ExpObsComponent;
  let fixture: ComponentFixture<ExpObsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpObsComponent]
    });
    fixture = TestBed.createComponent(ExpObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
