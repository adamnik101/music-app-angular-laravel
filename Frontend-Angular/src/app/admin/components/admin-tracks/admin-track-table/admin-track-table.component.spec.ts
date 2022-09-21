import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTrackTableComponent } from './admin-track-table.component';

describe('AdminTrackTableComponent', () => {
  let component: AdminTrackTableComponent;
  let fixture: ComponentFixture<AdminTrackTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTrackTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTrackTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
