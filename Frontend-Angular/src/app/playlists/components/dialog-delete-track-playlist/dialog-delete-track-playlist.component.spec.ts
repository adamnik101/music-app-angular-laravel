import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteTrackPlaylistComponent } from './dialog-delete-track-playlist.component';

describe('DialogDeleteTrackPlaylistComponent', () => {
  let component: DialogDeleteTrackPlaylistComponent;
  let fixture: ComponentFixture<DialogDeleteTrackPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDeleteTrackPlaylistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDeleteTrackPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
