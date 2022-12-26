import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

private listaTranferencia: any[];

constructor() {
  this.listaTranferencia = [];
 }


  get tranferencias(){
    return this.listaTranferencia;
  }

  public adicionar(transferencia: any){
    this.hidratar(transferencia);

    this.listaTranferencia.push(transferencia);
  }

  private hidratar(transferencia: any){
    transferencia.data = new Date();
  }

}

