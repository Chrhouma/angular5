import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomotiqueComponent } from './domotique.component';

describe('DomotiqueComponent', () => {
  let component: DomotiqueComponent;
  let fixture: ComponentFixture<DomotiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomotiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomotiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
