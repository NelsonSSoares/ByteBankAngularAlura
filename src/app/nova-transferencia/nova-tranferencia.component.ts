import { Transferencia } from './../services/models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from "@angular/core";
import { Router } from '@angular/router';

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
  constructor(private service: TransferenciaService, private router: Router){

  }

  public transferir() {

    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino};

    this.service.adicionar(valorEmitir).subscribe((result) => {
      console.log(result);
      this.limparCampos();
      this.router.navigateByUrl('extrato');
    },
    (error) => console.log(error)
    );
  }

  public limparCampos(): void{
    this.valor = 0
    this.destino = 0
  }
}
