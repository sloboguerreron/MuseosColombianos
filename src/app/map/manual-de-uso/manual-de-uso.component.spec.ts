import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualDeUsoComponent } from './manual-de-uso.component';

describe('ManualDeUsoComponent', () => {
  let component: ManualDeUsoComponent;
  let fixture: ComponentFixture<ManualDeUsoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualDeUsoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualDeUsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
