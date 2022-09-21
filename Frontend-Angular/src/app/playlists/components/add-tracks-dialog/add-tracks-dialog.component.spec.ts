import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTracksDialogComponent } from './add-tracks-dialog.component';

describe('AddTracksDialogComponent', () => {
  let component: AddTracksDialogComponent;
  let fixture: ComponentFixture<AddTracksDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTracksDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTracksDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
