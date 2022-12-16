import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTranferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  public valor: number = 0;
  public destino: number = 0;

  // constructor(valor: number, destino: number){
  //   this.valor = valor;
  //   this.destino = destino;
  // }

  public transferir() {

    const valorEmitir = {valor: this.valor, destino: this.destino};

    this.aoTransferir.emit(valorEmitir);
    this.limparCampos();
  }

  public limparCampos(): void{
    this.valor = 0
    this.destino = 0
  }
}
