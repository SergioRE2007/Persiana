import { Component, input, output } from '@angular/core';
import { PersianaComponent } from './persiana/persiana.component';

@Component({
  selector: 'app-habitacion',
  imports: [PersianaComponent],
  templateUrl: './habitacion.component.html',
  styleUrl: './habitacion.component.css'
})
export class HabitacionComponent {
  id = input<number>(0);
  corriente = input<boolean>(false);
  estadoPersiana = output<string>();

  recibirEstado(estado: string) {
    this.estadoPersiana.emit(estado);
  }
}
