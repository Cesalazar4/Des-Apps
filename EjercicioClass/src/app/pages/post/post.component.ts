import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

  mensajes : any[] = [];

  constructor(private pepito: DataService) { }

  ngOnInit() {
    this.pepito.getPosts().subscribe((data: any) => {
      console.log(data);
      this.mensajes = data;
    });
  }

}
