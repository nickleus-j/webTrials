import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-caesar-cipher',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './caesar-cipher.component.html',
  styleUrls: ['./caesar-cipher.component.css']
})
export class CaesarCipherComponent {
  @Input() inputText: string = '';
  shiftAmount: number = 3;
  mode: 'encrypt' | 'decrypt' = 'encrypt';
  outputText: string = '';

  // Triggered whenever the text, shift amount, or mode changes
  processText() {
    if (!this.inputText) {
      this.outputText = '';
      return;
    }

    // If decrypting, we shift in the opposite direction
    const shift = this.mode === 'encrypt' ? this.shiftAmount : -this.shiftAmount;
    this.outputText = this.applyCipher(this.inputText, shift);
  }

  private applyCipher(text: string, shift: number): string {
    // Normalize the shift to handle negative numbers (for decryption) and shifts larger than 26
    const normalizedShift = ((shift % 26) + 26) % 26;

    return text.split('').map(char => {
      // Check if the character is a letter
      if (char.match(/[a-z]/i)) {
        const code = char.charCodeAt(0);
        const isUpperCase = (code >= 65 && code <= 90);
        const base = isUpperCase ? 65 : 97;
        
        // Calculate new character code and convert back to string
        return String.fromCharCode(((code - base + normalizedShift) % 26) + base);
      }
      // Return spaces, punctuation, and numbers untouched
      return char; 
    }).join('');
  }
}