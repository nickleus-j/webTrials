import { Component, AfterViewInit, Input, ElementRef, inject, Injectable, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'mean-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './mean.component.html',
  styleUrls: ['./mean.component.css']
})
export class MeanComponent implements AfterViewInit {
    @Input() NumbersGiven: number[] = [0];
    
    ngAfterViewInit(): void {
        
    }
/**
   * Validates the array whenever an input changes.
   * If every box has a number, it pushes a new empty field.
   */
  onValueChange(): void {
    const hasEmptyBox = this.NumbersGiven.some(val => val === null || val === undefined || val === 0);

    if (!hasEmptyBox) {
      this.NumbersGiven.push(0); // Add a new empty field if all boxes are filled
    }
  }

  /**
   * Optional: Cleans up the array for API submission by removing empty entries.
   */
  GetCleanedArray(): number[] {
    return this.NumbersGiven.filter((val): val is number => val !== null && val !== undefined && val !== 0);
  }
  trackByIndex(index: number, item: any): number {
    return index;
 }
 CalculateStandardDeviation(): number {
    const cleanedArray = this.GetCleanedArray();
    const mean = cleanedArray.reduce((sum, num) => sum + num, 0) / cleanedArray.length;
    const variance = cleanedArray.reduce((sum, num) => sum + Math.pow(num - mean, 2), 0) / cleanedArray.length;
    return Math.sqrt(variance);
  }
}