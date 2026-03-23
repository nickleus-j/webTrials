import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl:'./square.component.html',
  styleUrls:['./square.component.css']
  
})
export class SquareComponent {
  sizes = Array.from({length: 20}, (_, i) => i + 1);
  selectedSize: number = 3;
  squareArt: string = '';

  generateBlocks() {
    const n = this.selectedSize;
    let result = '';

    // Top half + middle
    for (let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            result += '■ ';
        }
      result += '\n';
    }

    this.squareArt = result;
  }
}