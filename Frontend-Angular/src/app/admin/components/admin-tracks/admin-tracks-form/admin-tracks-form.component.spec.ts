import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTracksFormComponent } from './admin-tracks-form.component';

describe('AdminTracksFormComponent', () => {
  let component: AdminTracksFormComponent;
  let fixture: ComponentFixture<AdminTracksFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTracksFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTracksFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
