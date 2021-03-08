import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortoServiceComponent } from './porto-service.component';

describe('PortoServiceComponent', () => {
  let component: PortoServiceComponent;
  let fixture: ComponentFixture<PortoServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortoServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortoServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
