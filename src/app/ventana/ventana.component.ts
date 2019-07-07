import { Component, OnInit } from '@angular/core';

export interface DialogData {
    animal: string;
    name: string;
  }

@Component({
  selector: 'app-ventana',
  templateUrl: './ventana.component.html',
  styleUrls: ['./ventana.component.sass']
})
export class VentanaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
