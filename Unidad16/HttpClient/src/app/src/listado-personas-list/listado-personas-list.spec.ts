import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPersonasList } from './listado-personas-list';

describe('ListadoPersonasList', () => {
  let component: ListadoPersonasList;
  let fixture: ComponentFixture<ListadoPersonasList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoPersonasList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoPersonasList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
