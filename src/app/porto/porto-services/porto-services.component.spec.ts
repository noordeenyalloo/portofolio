import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortoServicesComponent } from './porto-services.component';

describe('PortoServicesComponent', () => {
  let component: PortoServicesComponent;
  let fixture: ComponentFixture<PortoServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortoServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortoServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
