import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetAfficheurComponent } from './projet-afficheur.component';

describe('ProjetAfficheurComponent', () => {
  let component: ProjetAfficheurComponent;
  let fixture: ComponentFixture<ProjetAfficheurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetAfficheurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetAfficheurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
