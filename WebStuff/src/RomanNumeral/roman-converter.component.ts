import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-roman-converter',
  templateUrl: './roman-converter.component.html',
  styleUrls: ['./roman-converter.component.css'],
  imports: [FormsModule, CommonModule]  
})
export class RomanConverterComponent {
    @Input()  inputNumber: number | null = null;
    @Input() plead:string='Please enter a number between 1 and 3999';
  romanNumeral: string = '';
  errorMessage: string = '';

  convertToRoman(): void {
    this.errorMessage = '';
    this.romanNumeral = '';
    if (this.inputNumber === null || this.inputNumber === undefined) {
      this.errorMessage = 'Please enter a number';
      return;
    }

    if (!Number.isInteger(this.inputNumber)) {
      this.errorMessage = 'Please enter a valid integer';
      return;
    }

    if (this.inputNumber <= 0 || this.inputNumber >= 4000) {
      this.errorMessage = 'Please enter a number between 1 and 3999';
      return;
    }

    this.romanNumeral = this.toRoman(this.inputNumber);
  }

  private toRoman(num: number): string {
    const romanMap = [
      { value: 1000, numeral: 'M' },
      { value: 900, numeral: 'CM' },
      { value: 500, numeral: 'D' },
      { value: 400, numeral: 'CD' },
      { value: 100, numeral: 'C' },
      { value: 90, numeral: 'XC' },
      { value: 50, numeral: 'L' },
      { value: 40, numeral: 'XL' },
      { value: 10, numeral: 'X' },
      { value: 9, numeral: 'IX' },
      { value: 5, numeral: 'V' },
      { value: 4, numeral: 'IV' },
      { value: 1, numeral: 'I' }
    ];

    let result = '';

    for (const { value, numeral } of romanMap) {
      while (num >= value) {
        result += numeral;
        num -= value;
      }
    }

    return result;
  }
}
