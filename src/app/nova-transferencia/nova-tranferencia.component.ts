import { Component } from "@angular/core";

@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTranferenciaComponent {

  valor: number = 0;
  destino: number = 0;

  // constructor(valor: number, destino: number){
  //   this.valor = valor;
  //   this.destino = destino;
  // }

  public transferir() {

    console.log("Solicitada Nova Transferencia");
    console.log("Valor: ", this.valor);
    console.log("Destino: ", this.destino);




  }
}
