import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeriodicElement } from './periodicelement';
@Component({
  selector: 'element-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Element.html',
  styleUrls: ['./Element.css'],
})
export class ElementCardComponent {
  // Input property allows you to pass the JSON dynamically from a parent component
  @Input() element: PeriodicElement = {
    atomicNumber: 1,
    symbol: "H",
    name: "Hydrogen",
    atomicMass: 1.008,
    group: 1,
    period: 1,
    category: "Nonmetal"
  };
}