import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowUsComponent } from './know-us.component';

describe('KnowUsComponent', () => {
  let component: KnowUsComponent;
  let fixture: ComponentFixture<KnowUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KnowUsComponent]
    });
    fixture = TestBed.createComponent(KnowUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
