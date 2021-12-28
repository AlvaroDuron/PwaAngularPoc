import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  public peliculas: Array<Pelicula>;

  constructor() { 
    this.peliculas = [
      new Pelicula("Spiderman 4","https://www.sonypictures.es/sites/default/files/2021-11/KEY_ART_1400x2100-2.jpg"),
      new Pelicula("Django", "https://i.blogs.es/2a1213/django-desencadenado/840_560.jpeg"),
      new Pelicula("El club de la pelea", "https://s3.amazonaws.com/rtvc-assets-senalcolombia.gov.co/s3fs-public/field/image/club-pelea-brad-pitt-edward-norton.jpg")
    ]
  }

  ngOnInit(): void {
  }

}
