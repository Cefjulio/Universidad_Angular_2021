import { Component } from "@angular/core";

@Component({
    selector: 'app-personas',  
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css'] 
})

export class PersonasComponent{
    deshabilitar = false;
    titulo = "ingeniero";
    mostrar=false;

    mensaje= 'No se ha agregado ninguna persona';

    agregarPersona(){
        this.mostrar = true;
        this.mensaje = 'Persona agregada';
    }


}