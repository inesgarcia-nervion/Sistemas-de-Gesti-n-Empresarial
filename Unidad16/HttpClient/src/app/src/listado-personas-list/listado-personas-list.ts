import { Component, OnInit} from '@angular/core';

import { persona } from 'src/app/interfaces/persona';

import { PersonasService } from '../Service/PersonasService';

@Component({

selector: 'app-tabla-api',

templateUrl: './tabla-api.component.html',

styleUrls: ['./tabla-api.component.css']

})

export class TablaAPIComponent implements OnInit {

listadoPersonas:persona[]=[];

constructor(private personasServicio: PersonasService) { }

ngOnInit(): void {

this.obtenerPersonas();
  
}



obtenerPersonas(): void {

  this.personasServicio.getPersonas().subscribe({
    next:(response) =>{
      this.listadoPersonas=response;
    },
    error: (error)=>{
      alert("Ha ocurrido un error al obtener los datos del servidor");
    }
  });

}

}

