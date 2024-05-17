import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationserviceComponent } from './creationservice.component';

describe('CreationserviceComponent', () => {
  let component: CreationserviceComponent;
  let fixture: ComponentFixture<CreationserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
