import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-persiana',
  imports: [],
  templateUrl: './persiana.component.html',
  styleUrl: './persiana.component.css'
})
export class PersianaComponent {
  id = input<number>(0);
  corriente = input<boolean>(false);
  cambioEstado = output<string>();
  estado = 'CERRADA';

  subirBajar() {
    if (this.estado == 'CERRADA') {
      this.estado = 'ABIERTA';
    } else {
      this.estado = 'CERRADA';
    }
    this.cambioEstado.emit(this.estado);
  }
}
