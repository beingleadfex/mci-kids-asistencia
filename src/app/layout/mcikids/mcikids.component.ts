import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { Enlace } from './enlace';
import { EnlaceService } from './enlace.service';

@Component({
  selector: 'app-mcikids',
  templateUrl: './mcikids.component.html',
  styleUrls: ['./mcikids.component.scss'],
  animations: [routerTransition()]
})
export class McikidsComponent implements OnInit {
  enlaces: Enlace[] = [];

  constructor(private enlaceService: EnlaceService) { }

  ngOnInit(): void {
    this.enlaceService.getEnlaces()
        .then(enlaces => this.enlaces = enlaces);
  }


}
