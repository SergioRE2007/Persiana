import { Component } from '@angular/core';
import { HabitacionComponent } from './habitacion/habitacion.component';

@Component({
  selector: 'app-root',
  imports: [HabitacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  corrienteGeneral = true;
  corrienteHabitacion = true;
  estadoPersiana = 'CERRADA';

  cambiarCorrienteGeneral() {
    this.corrienteGeneral = !this.corrienteGeneral;
  }

  cambiarCorrienteHabitacion() {
    this.corrienteHabitacion = !this.corrienteHabitacion;
  }

  recibirEstado(estado: string) {
    this.estadoPersiana = estado;
  }
}
