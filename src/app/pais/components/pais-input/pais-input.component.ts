import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  ngOnInit() {
    this.deboncer
    .pipe(
      debounceTime(300)
    )
    .subscribe(valor =>{
      this.onDebounce.emit(valor);
    })
  }
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce : EventEmitter<string> = new EventEmitter();
  @Input() placeholder : string = "";
  deboncer : Subject<string> = new Subject ;
   
  termino : string = "";
  buscar(){
    this.onEnter.emit(this.termino);
    
  }
  teclapre(){
    this.deboncer.next(this.termino);
  }

}
