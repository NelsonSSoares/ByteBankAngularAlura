import { Component, Input } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent {

  constructor(private service: TransferenciaService){

  }
  ngOnInit(){
    this.transferencias = this.service.tranferencias;
  }

    @Input() transferencias: any[]= [];
}
