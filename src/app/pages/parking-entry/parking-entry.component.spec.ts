import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingEntryComponent } from './parking-entry.component';

describe('ParkingEntryComponent', () => {
  let component: ParkingEntryComponent;
  let fixture: ComponentFixture<ParkingEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParkingEntryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
