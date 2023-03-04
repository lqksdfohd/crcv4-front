import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlassAfficheurComponent } from './klass-afficheur.component';

describe('KlassAfficheurComponent', () => {
  let component: KlassAfficheurComponent;
  let fixture: ComponentFixture<KlassAfficheurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlassAfficheurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KlassAfficheurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
