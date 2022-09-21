import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArtistTableComponent } from './admin-artist-table.component';

describe('AdminArtistTableComponent', () => {
  let component: AdminArtistTableComponent;
  let fixture: ComponentFixture<AdminArtistTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminArtistTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminArtistTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
