import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionnaireErreursComponent } from './gestionnaire-erreurs.component';

describe('GestionnaireErreursComponent', () => {
  let component: GestionnaireErreursComponent;
  let fixture: ComponentFixture<GestionnaireErreursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionnaireErreursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionnaireErreursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
