import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { Enlace } from './enlace';
import { EnlaceService } from './enlace.service';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.scss'],
  animations: [routerTransition()]
})
export class AsistenciaComponent implements OnInit {
  enlaces: Enlace[] = [];

  constructor(private enlaceService: EnlaceService) { }

  ngOnInit(): void {
    this.enlaceService.getEnlaces()
        .then(enlaces => this.enlaces = enlaces);
  }
  

}
