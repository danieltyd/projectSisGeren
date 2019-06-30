import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTable } from '@angular/material';
import { NameDataSource, NameItem } from './name-datasource';

export interface PeriodicElement {
  /* name: string;
  position: number;
  weight: number;
  symbol: string; */
  id:number;
  indicador: string;
  tipoIndicador:string;
  frecuencia:string;
  fuente:string;
  valor:number;
  responsable:string;
  estado:string;
  accion:number;
  min:number;
  max:number;
  
}

const ELEMENT_DATA: PeriodicElement[] = [    
  {id:1,indicador: 'Retención de clientes', tipoIndicador: 'Estrategico', frecuencia: 'Semestral', fuente: 'Informe administrativo', valor:null,estado:null,responsable:'Encargado A',accion: null,min:10,max:21},
  {id:2,indicador: 'Margen comercial', tipoIndicador: 'Estrategico', frecuencia: 'Semestral', fuente: 'Reporte comercial', valor:null,estado:null,responsable:'Encargado B',accion: null,min:9,max:16},
  {id:3,indicador: 'Productividad', tipoIndicador: 'Estrategico', frecuencia: 'Semestral', fuente: 'Reporte de productividad', valor:null,estado:null,responsable:'Encargado C',accion: null,min:15,max:35},
  {id:4,indicador: 'Rotacion de personal', tipoIndicador: 'No estrategico', frecuencia: 'Semestral', fuente: 'Reporte de cumplimiento', valor:null,estado:null,responsable:'Encargado D',accion: null,min:4,max:0},
  {id:5,indicador: 'Gastos fijos', tipoIndicador: 'No estrategico', frecuencia: 'Semestral', fuente: 'Reporte administrativo', valor:null,estado:null,responsable:'Encargado E',accion: null,min:5,max:11},
  {id:6,indicador: 'Cash flow', tipoIndicador: 'No estrategico', frecuencia: 'Semestral', fuente: 'Reporte administrativo', valor:null,estado:null,responsable:'Encargado F',accion: null,min:7,max:15},
  {id:7,indicador: 'Coste de adquisicion de cliente', tipoIndicador: 'No estrategico', frecuencia: 'Semestral', fuente: 'Reporte comercial', valor:null,estado:null,responsable:'Encargado G',accion: null,min:3,max:7},
  {id:8,indicador: 'Satisfaccion de compradores', tipoIndicador: 'No estrategico', frecuencia: 'Semestral', fuente: 'Reporte administrativo', valor:null,estado:null,responsable:'Encargado H',accion: null,min:5,max:15},
];
@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit{
    ngOnInit(): void {
        
    }
    show: boolean = true;
    displayedColumns: string[] = ['indicador', 'tipoIndicador', 'frecuencia', 'fuente','valor','estado','responsable','accion'];
    dataSource = ELEMENT_DATA;
    calcular(id: number, valor: number) {
        /* console.log(id);
        console.log(this.dataSource[id-1].max);
        console.log(valor); */

        if((id)==4){
            if(valor<this.dataSource[id-1].min && valor>this.dataSource[id-1].max){
                this.dataSource[id-1].estado='mean';
            }else if(valor>=this.dataSource[id-1].min){
                this.dataSource[id-1].estado='negative';
            }else if(valor<=this.dataSource[id-1].max){
                this.dataSource[id-1].estado='positive';
            }
        }else{
            if(valor>this.dataSource[id-1].min && valor<this.dataSource[id-1].max){
                this.dataSource[id-1].estado='mean';
            }else if(valor<=this.dataSource[id-1].min){
                this.dataSource[id-1].estado='negative';
            }else if(valor>=this.dataSource[id-1].max){
                this.dataSource[id-1].estado='positive';
            }
        }
        
      }
    
}
