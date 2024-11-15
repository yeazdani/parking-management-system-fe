import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleEntryFormComponent } from './vehicle-entry-form.component';

describe('VehicleEntryFormComponent', () => {
  let component: VehicleEntryFormComponent;
  let fixture: ComponentFixture<VehicleEntryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleEntryFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleEntryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
