import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerpopularComponent } from './customerpopular.component';

describe('CustomerpopularComponent', () => {
  let component: CustomerpopularComponent;
  let fixture: ComponentFixture<CustomerpopularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerpopularComponent]
    });
    fixture = TestBed.createComponent(CustomerpopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
