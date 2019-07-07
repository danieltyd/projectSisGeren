import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
export interface DialogData {
    id: number;
    numero1:number;
    numero2:number;
    valor:number;
    periodo:number;
    utilidad:number;
}
@Component({
    selector: 'app-name2',
    templateUrl: './name2.component.html',
    styleUrls: ['./name2.component.sass']
})
export class Name2Component {
    id: number;
    valor:number;
    numero1:number;
    numero2:number;
    periodo:number;
    utilidad:number;
    

    constructor(public dialog: MatDialog) { }
    readonly=true;

    openDialog(): void {
        const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '250px',
            data: { }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.valor = result;
        });
    }

}

@Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

    constructor(
        public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {
            
        
    }

        onNoClick(): void {
            this.dialogRef.close();
        }
        calculaNum(numero1,numero2){
            /* return this.data.valor=numero1/numero2; */
            
            switch(this.data.id){
                case 1:{
                    this.data.utilidad=numero1-numero2;
                    this.data.valor=numero1-numero2;
                    return this.data;
                    break;
                }
                case 2:{
                    this.data.valor=numero1/numero2;
                    return this.data;
                    break;
                }
                case 3:{
                    this.data.valor=numero1/numero2;
                    return this.data;
                    break;
                }
                case 4:{
                    this.data.valor=this.data.utilidad/numero2;
                    return this.data;
                    break;
                }
                case 5:{
                    this.data.valor=numero1-numero2;
                    return this.data;
                    break;
                }
                case 6:{
                    this.data.valor=numero1;
                    return this.data;
                    break;
                }
                case 7:{
                    this.data.valor=numero1/numero2;
                    return this.data;
                    break;
                }
                case 8:{
                    this.data.valor=numero1;
                    return this.data;
                    break;
                }
                case 9:{
                    this.data.valor=numero1-numero2;
                    return this.data;
                    break;
                }
                case 10:{
                    this.data.valor=this.data.utilidad/numero2;
                    return this.data;
                    break;
                }
            }
        }

    }