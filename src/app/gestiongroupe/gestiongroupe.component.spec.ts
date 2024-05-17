import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestiongroupeComponent } from './gestiongroupe.component';

describe('GestiongroupeComponent', () => {
  let component: GestiongroupeComponent;
  let fixture: ComponentFixture<GestiongroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestiongroupeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestiongroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
