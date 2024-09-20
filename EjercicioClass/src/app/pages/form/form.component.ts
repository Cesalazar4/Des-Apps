import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  nombre : string = "Juana María";

  cliente = {
    id: 0,
    nombre:"",
    telefono: 0
  }

  clientes : any[] =[];

  cambiarNombre(){
    console.log('La variable cliente ahora tiene:' + this.cliente.nombre);
  }

  agregarCliente(){
    this.clientes.push(this.cliente);
    console.log(this.clientes);
  }

 VerDatosCliente(){
  return this.clientes.length < 1;
 }


}
