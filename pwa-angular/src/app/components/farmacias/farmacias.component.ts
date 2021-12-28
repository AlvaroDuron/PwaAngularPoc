import { Component, Input, OnInit } from '@angular/core';
import { Farmacia } from 'src/app/models/farmacia';

@Component({
  selector: 'app-farmacias',
  templateUrl: './farmacias.component.html',
  styleUrls: ['./farmacias.component.css']
})
export class FarmaciasComponent implements OnInit {
  @Input() farmacias: Array<Farmacia>
  
  constructor() {
    this.farmacias = [
      new Farmacia("YZA", "https://es-mx-media.shopfully.cloud/images/catene/segnalino_farmacias-yza@2x.png", "Monterrey"),
      new Farmacia("YZA", "https://feherconsulting.files.wordpress.com/2013/01/farmacias-yza.jpg", "Veracruz"),
      new Farmacia("YZA", "http://www.francamerica.com/fotos/foto_190_2.jpg", "Mexicali")
    ]
  }

  ngOnInit(): void {
  
  }

}
