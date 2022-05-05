import { TestBed } from '@angular/core/testing';

import { ConsultaMuseosService } from './consulta-museos.service';

describe('ConsultaMuseosService', () => {
  let service: ConsultaMuseosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaMuseosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
