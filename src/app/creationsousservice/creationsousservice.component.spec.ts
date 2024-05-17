import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationsousserviceComponent } from './creationsousservice.component';

describe('CreationsousserviceComponent', () => {
  let component: CreationsousserviceComponent;
  let fixture: ComponentFixture<CreationsousserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationsousserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationsousserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
