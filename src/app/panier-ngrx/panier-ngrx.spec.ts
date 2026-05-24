import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideStore } from '@ngrx/store';
import { panierReducer } from '../store/panier.reducer';
import { PanierNgrx } from './panier-ngrx';

describe('PanierNgrx', () => {
  let component: PanierNgrx;
  let fixture: ComponentFixture<PanierNgrx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanierNgrx],
      providers: [provideStore({ panier: panierReducer })] // ← ici
    }).compileComponents();

    fixture = TestBed.createComponent(PanierNgrx);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});