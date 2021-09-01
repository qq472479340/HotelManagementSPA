import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRoomTypeComponent } from './show-room-type.component';

describe('ShowRoomTypeComponent', () => {
  let component: ShowRoomTypeComponent;
  let fixture: ComponentFixture<ShowRoomTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRoomTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRoomTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
