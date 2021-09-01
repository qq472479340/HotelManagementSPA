import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomTypeDetailsComponent } from './room-type-details.component';

describe('RoomTypeDetailsComponent', () => {
  let component: RoomTypeDetailsComponent;
  let fixture: ComponentFixture<RoomTypeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomTypeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomTypeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
