import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { regiones, nacionalidades } from './data-model';

import { ApformComponent } from './components/apform/apform.component'
import { KidformComponent } from './components/kidform/kidform.component';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
  animations: [routerTransition()]
})
export class RegistroComponent implements OnInit {

  registroForm: FormGroup;



  constructor(private fb: FormBuilder) {
      this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
      this.registroForm = this.fb.group({
        kidData: this.fb.group({
          nombre: ['', Validators.required ],
          nacimiento: '',
          rut: '',
          nacionalidad: '',
          telefono: '',
        }),
        APdata: this.fb.group({
          apNombre: '',
          apNacimiento: '',
          apRut: '',
          apNacionalidad: '',
          apTelefono: '',
          apDomicilio: '',
        }),
        address: this.fb.group({
          calle: '',
          comuna: '',
          ciudad: '',
          region: '',
        }),
      });
  }

}
