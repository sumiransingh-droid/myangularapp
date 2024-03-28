import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowayDataComponent } from './twoway-data.component';

describe('TwowayDataComponent', () => {
  let component: TwowayDataComponent;
  let fixture: ComponentFixture<TwowayDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwowayDataComponent]
    });
    fixture = TestBed.createComponent(TwowayDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
