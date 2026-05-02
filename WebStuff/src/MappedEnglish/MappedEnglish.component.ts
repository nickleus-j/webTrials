import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListBox } from '../app/ListBox.component/listbox.component';

@Component({
  selector: 'PhoneticMapper',
  standalone: true,
  imports: [CommonModule, FormsModule, ListBox],
  templateUrl: './MappedEnglish.component.html',
  styleUrls: ['./MappedEnglish.component.css']
})

export class PhoneticMapper {
  @Input() inputText: string = '';
  selectedMap: 'cyrillic' | 'greek' = 'cyrillic';

  // Mapping Logic
  private cyrillicMap: Record<string, string> = {
    'a': 'а', 'b': 'б', 'c': 'ц', 'd': 'д', 'e': 'е', 'f': 'ф', 'g': 'г', 'h': 'х', 'i': 'и', 'j': 'й', 'k': 'к', 'l': 'л', 'm': 'м', 'n': 'н', 'o': 'о', 'p': 'п', 'q': 'к', 'r': 'р', 's': 'с', 't': 'т', 'u': 'у', 'v': 'в', 'w': 'в', 'x': 'х', 'y': 'ы', 'z': 'з',
    'A': 'А', 'B': 'Б', 'C': 'Ц', 'D': 'Д', 'E': 'Е', 'F': 'Ф', 'G': 'Г', 'H': 'Х', 'I': 'И', 'J': 'Й', 'K': 'К', 'L': 'Л', 'M': 'М', 'N': 'Н', 'O': 'О', 'P': 'П', 'Q': 'К', 'R': 'Р', 'S': 'С', 'T': 'Т', 'U': 'У', 'V': 'В', 'W': 'В', 'X': 'Х', 'Y': 'Ы', 'Z': 'З'
  };

  private greekMap: Record<string, string> = {
    'a': 'α', 'b': 'β', 'c': 'ψ', 'd': 'δ', 'e': 'ε', 'f': 'φ', 'g': 'γ', 'h': 'η', 'i': 'ι', 'j': 'ξ', 'k': 'κ', 'l': 'λ', 'm': 'μ', 'n': 'ν', 'o': 'ο', 'p': 'π', 'q': 'κ', 'r': 'ρ', 's': 'σ', 't': 'τ', 'u': 'υ', 'v': 'β', 'w': 'ω', 'x': 'χ', 'y': 'υ', 'z': 'ζ',
    'A': 'Α', 'B': 'Β', 'C': 'Ψ', 'D': 'Δ', 'E': 'Ε', 'F': 'Φ', 'G': 'Γ', 'H': 'Η', 'I': 'Ι', 'J': 'Ξ', 'K': 'Κ', 'L': 'Λ', 'M': 'Μ', 'N': 'Ν', 'O': 'Ο', 'P': 'Π', 'Q': 'Κ', 'R': 'Ρ', 'S': 'Σ', 'T': 'Τ', 'U': 'Υ', 'V': 'Β', 'W': 'Ω', 'X': 'Χ', 'Y': 'Υ', 'Z': 'Ζ'
  };

  get transformedText(): string {
    if (!this.inputText) return '';

    const currentMap = this.selectedMap === 'cyrillic' ? this.cyrillicMap : this.greekMap;

    return this.inputText.replace(/[a-zA-Z]/g, (char, index, fullString) => {
      // Logic for Greek Final Sigma (ς)
      if (this.selectedMap === 'greek' && char.toLowerCase() === 's') {
        const nextChar = fullString[index + 1];
        if (!nextChar || !/[a-zA-Z]/.test(nextChar)) {
          return char === 's' ? 'ς' : 'Σ';
        }
      }
      return currentMap[char] || char;
    });
  }
}