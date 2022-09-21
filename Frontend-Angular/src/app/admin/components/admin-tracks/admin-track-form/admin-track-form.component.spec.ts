import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTrackFormComponent } from './admin-track-form.component';

describe('AdminTrackFormComponent', () => {
  let component: AdminTrackFormComponent;
  let fixture: ComponentFixture<AdminTrackFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTrackFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTrackFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
