import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'navigated',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './navigated.html',
    styleUrls: ['./navigated.css']
})
export class Navigated {
  @Input() inputText: string = '';
  

  get getSample(): string {
    return "Free";
  }
}