import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bytebank';

  public transferencia: any;

  public transferir($event: any){

    this.transferencia = $event;

  }
}
