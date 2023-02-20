import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetsListeurComponent } from './projets-listeur.component';

describe('ProjetsListeurComponent', () => {
  let component: ProjetsListeurComponent;
  let fixture: ComponentFixture<ProjetsListeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetsListeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetsListeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
