import { Component } from '@angular/core';
import { FormsModule, } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  articulo: any = {
    codigo: 0,
    descripcion : "",
    precio : 0
  }; 

  articulos : any[]= [];

  contarRegistros() {
    return this.articulos.length < 1;
  }

  agregarRegistro() { 
    this.articulos.push(this.articulo);
    this.articulo = {
      codigo: 0,
      descripcion : "",
      precio : 0
    };
    console.log(this.articulos);
  }

  SelectArticulo(articulo: any) {
    this.articulo = articulo;
  }

}
