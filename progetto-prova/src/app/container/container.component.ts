import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  names: string[];
  constructor() { 
    this.names = ['Escavatori', 'Terne', 'Pale', 'Minipale', 'Dumpers', 'Bulldozer', 'Motolivellatrici', 'Rulli compattatori', 'Piastre vibranti', 'Finitrici']; //Riempiamo il vettore
  }

  ngOnInit(): void {
  }

}