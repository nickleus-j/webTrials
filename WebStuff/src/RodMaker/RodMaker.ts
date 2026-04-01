import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rod',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl:'./RodMaker.html',
  styleUrls:['./RodMaker.css']
  
})
export class RodMakerComponent {
  sizes = Array.from({length: 20}, (_, i) => i + 1);
  selectedLength: number = 3;
  selectedWidth: number = 3;
  rodArt: string = '';

  generateBlocks() {
    const length = this.selectedLength;
    const width = this.selectedWidth;
    let result = '';

    // Top half + middle
    for (let i = 0; i < length; i++) {
        for(let j = 0; j < width; j++) {
            result += i==0 || i==length-1 || j==0 || j==width-1 ? 'O' : 'X';
        }
      result += '\n';
    }

    this.rodArt = result;
  }
}