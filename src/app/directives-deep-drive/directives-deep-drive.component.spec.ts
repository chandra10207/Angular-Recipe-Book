import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesDeepDriveComponent } from './directives-deep-drive.component';

describe('DirectivesDeepDriveComponent', () => {
  let component: DirectivesDeepDriveComponent;
  let fixture: ComponentFixture<DirectivesDeepDriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivesDeepDriveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivesDeepDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
