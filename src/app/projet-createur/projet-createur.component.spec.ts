import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetCreateurComponent } from './projet-createur.component';

describe('ProjetCreateurComponent', () => {
  let component: ProjetCreateurComponent;
  let fixture: ComponentFixture<ProjetCreateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetCreateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetCreateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
