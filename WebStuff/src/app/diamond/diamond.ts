import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diamond',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl:'./diamond.html',
  styleUrls:['./diamond.css']
  
})
export class DiamondComponent {
  sizes = Array.from({length: 8}, (_, i) => i + 3);
  selectedSize: number = 3;
  diamondArt: string = '';

  generateDiamond() {
    const n = this.selectedSize;
    let result = '';

    // Top half + middle
    for (let i = 1; i <= n; i++) {
      result += ' '.repeat(n - i) + '*'.repeat(2 * i - 1) + '\n';
    }
    // Bottom half
    for (let i = n - 1; i >= 1; i--) {
      result += ' '.repeat(n - i) + '*'.repeat(2 * i - 1) + '\n';
    }

    this.diamondArt = result;
  }
}
