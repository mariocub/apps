import { Component } from '@angular/core';

@Component({
  selector: 'dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent {
  dadoIzquierda = "../../assets/img/dice1.png";
  dadoDerecha = "../../assets/img/dice2.png";

  numero1=1;
  numero2=2;

  tirarDados():void{
    this.numero1 = Math.round(Math.random()*5)+1;
    this.numero2 = Math.round(Math.random()*5)+1;
    this.dadoIzquierda = "../../assets/img/dice"+this.numero1+".png";
    this.dadoDerecha = "../../assets/img/dice"+this.numero2+".png";
  }
}
