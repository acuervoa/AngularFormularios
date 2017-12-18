import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
      .ng-invalid.ng-touched:not(form){
          border:1px solid red;
      }
      `]
})
export class TemplateComponent {

    usuario:Object = {
        nombre: null,
        apellido: null,
        email: null,
        pais: "",
        sexo: "Hombre",
        acepta: false
    }

    paises = [{
        codigo: "CRI",
        nombre: "Costa Rica"
    },
    {
        codigo:"ES",
        nombre: "España"
    }];

    sexos:string[] = [ "Hombre", "Mujer", "Sin definir" ];
  constructor() { }



  guardar( forma:NgForm ){
      console.log( "ngForm ", forma );
      console.log("Valor", forma.value );

      console.log("Usauario", this.usuario);

  }
}
