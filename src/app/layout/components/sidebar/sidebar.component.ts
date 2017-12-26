import { Component, OnInit } from '@angular/core';
import { Enlace } from './enlace';
import { EnlaceService } from './enlace.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit  {
    isActive: boolean = false;
    showMenu: string = '';

    enlaces: Enlace[] = [];

    constructor(private enlaceService: EnlaceService) {

    }

    ngOnInit(): void {
      this.enlaceService.getEnlaces()
          .then(enlaces => this.enlaces = enlaces);
    }

    eventCalled() {
        this.isActive = !this.isActive;
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }
}
