import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlassModifieurComponent } from './klass-modifieur.component';

describe('KlassModifieurComponent', () => {
  let component: KlassModifieurComponent;
  let fixture: ComponentFixture<KlassModifieurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlassModifieurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KlassModifieurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
