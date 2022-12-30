import { Transferencia } from './models/transferencia.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

private listaTranferencia: any[];
private url = "http://localhost:3000/transferencias";

constructor(private httpClient: HttpClient) {
  this.listaTranferencia = [];
 }


  get tranferencias(){
    return this.listaTranferencia;
  }

  public todas(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  public adicionar(transferencia: Transferencia):Observable<Transferencia>{
    this.hidratar(transferencia);

    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

  private hidratar(transferencia: any){
    transferencia.data = new Date();
  }

}

