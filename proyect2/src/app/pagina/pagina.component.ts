import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {
  formData: { name: string, email: string }[] = [];

  constructor() { }

  ngOnInit(): void {
    document.getElementById("myform")?.addEventListener("submit", (event) => {
      event.preventDefault(); // Evita que el formulario se envíe normalmente
      
      // Obtiene los valores de los campos del formulario
      const nombre = (document.getElementById("nombre") as HTMLInputElement).value;
      const email = (document.getElementById("email") as HTMLInputElement).value;
      
      // Añade los datos al array formData
      this.formData.push({ name: nombre, email: email });
      
      // Actualiza la vista
      this.updateView();
    });
  }

  updateView(): void {
    const formDataElement = document.getElementById("formData");
    if (formDataElement) {
      formDataElement.innerHTML = ''; // Limpia el contenido anterior
      this.formData.forEach(item => {
        const p = document.createElement("p");
        p.textContent = `Nombre: ${item.name}, Email: ${item.email}`;
        formDataElement.appendChild(p);
      });
    }
  }
}
