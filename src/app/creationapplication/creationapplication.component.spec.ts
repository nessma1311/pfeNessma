import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationapplicationComponent } from './creationapplication.component';

describe('CreationapplicationComponent', () => {
  let component: CreationapplicationComponent;
  let fixture: ComponentFixture<CreationapplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationapplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
