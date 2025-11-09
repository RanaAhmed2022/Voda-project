import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-unit-toggle',
  standalone: true,
  imports: [],
  templateUrl: './unit-toggle.component.html',
  styleUrl: './unit-toggle.component.css'
})
export class UnitToggleComponent {

  @Output() unitChanged = new EventEmitter<'C' | 'F'>();

  selectedUnit: 'C' | 'F' = 'C';

  toggleUnit(unit: 'C' | 'F') {
    this.selectedUnit = unit;
    this.unitChanged.emit(this.selectedUnit);
  }

}
