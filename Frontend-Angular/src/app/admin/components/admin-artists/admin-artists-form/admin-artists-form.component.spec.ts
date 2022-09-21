import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArtistsFormComponent } from './admin-artists-form.component';

describe('AdminArtistsFormComponent', () => {
  let component: AdminArtistsFormComponent;
  let fixture: ComponentFixture<AdminArtistsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminArtistsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminArtistsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
