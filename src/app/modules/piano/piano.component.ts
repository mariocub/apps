import { Component } from '@angular/core';

@Component({
  selector: 'piano',
  templateUrl: './piano.component.html',
  styleUrls: ['./piano.component.css']
})
export class PianoComponent {
  title = 'Piano';

  aplicarSonido(numero:number):void{
    const audio = new Audio();
    audio.src='../../assets/sonidos/note'+numero+'.wav';
    audio.load();
    audio.play();
  }
}
