import { Component, AfterViewInit, Input, ElementRef, inject, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'list-box',
  imports: [CommonModule, FormsModule],
  templateUrl: './listbox.component.html',
  styleUrls: ['./listbox.component.css']
})

export class ListBox implements AfterViewInit {
    @Input() searchLabel: string = '';
    @Input()searchTerm: string = '';
    @Input() labels: string[] = [];
  selectedItem:string | null = null;
  constructor() {
    
  }
  ngAfterViewInit() {
    //this.selectedItem = this.navItems[0]?.Path || null;
  }
  fuzzySearch(array: string[], query: string) {
        const lowerQuery = query.toLowerCase();

        return array
          .map(item => {
            const lowerItem = item.toLowerCase();
            let queryIndex = 0;
            let score = 0;

            for (let i = 0; i < lowerItem.length && queryIndex < lowerQuery.length; i++) {
              if (lowerItem[i] === lowerQuery[queryIndex]) {
                score++;
                queryIndex++;
              }
            }

            return { item, score, matched: queryIndex === lowerQuery.length };
          })
          .filter(result => result.matched)
          .sort((a, b) => b.score - a.score)
          .map(result => result.item);
    }
     displayResults(results:string[]) {
        const resultsList = document.getElementById("resultsList");
        if(!resultsList) return;
        resultsList.innerText = "";

        if (results.length === 0) {
          resultsList.innerHTML = '<li class="no-results">No results found</li>';
          return;
        }

        results.forEach(result => {
          const li = document.createElement("li");
          li.textContent = result;
          resultsList.appendChild(li);
        });
      }
searchFromLabels() {
     this.displayResults(this.fuzzySearch(this.labels, this.searchTerm));
}
}