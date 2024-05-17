import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionrelationComponent } from './gestionrelation.component';

describe('GestionrelationComponent', () => {
  let component: GestionrelationComponent;
  let fixture: ComponentFixture<GestionrelationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionrelationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionrelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
