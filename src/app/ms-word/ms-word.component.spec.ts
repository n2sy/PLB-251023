import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsWordComponent } from './ms-word.component';

describe('MsWordComponent', () => {
  let component: MsWordComponent;
  let fixture: ComponentFixture<MsWordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MsWordComponent]
    });
    fixture = TestBed.createComponent(MsWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
