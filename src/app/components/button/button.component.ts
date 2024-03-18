import { Component,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
   @Input() text!:string;
   @Input() color!:string;
   @Output() btnclick = new EventEmitter();

   onClick(){
      this.btnclick.emit();
   }
}
