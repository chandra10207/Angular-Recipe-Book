import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesDependancyInjectionComponent } from './services-dependancy-injection.component';

describe('ServicesDependancyInjectionComponent', () => {
  let component: ServicesDependancyInjectionComponent;
  let fixture: ComponentFixture<ServicesDependancyInjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesDependancyInjectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesDependancyInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
