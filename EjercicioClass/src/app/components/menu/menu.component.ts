import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ RouterLink, CommonModule ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
   rutas = [
    { name: 'Home', path: '/home' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Posts', path: '/posts' },
    { name: 'Formulario', path: '/form' },
    { name: 'Personas', path: '/formulario'}
   ];
}
