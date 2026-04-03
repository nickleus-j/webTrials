import { Component, AfterViewInit, Input, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavItem } from './NavItem';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'nav-listing',
  imports: [CommonModule, FormsModule],
  template: `<div class="nav-listing">
  <select class="nav-dropdown" [(ngModel)]="selectedItem">
@for (item of navItems; track item.Title) {
  <option value="{{ item.Path }}">{{ item.Title }}</option>
}
  </select>
  <a class="btn" (click)="navigate()">Go</a>
</div>
  `,
  styles: `.btn{background-color: #483; color: white; padding: 5px; border: 0px;  font-size: large;cursor: pointer;}
  .nav-dropdown{padding: 5px; border: 1px solid #ccc; border-radius: 4px; font-size: large;}`,
  //styleUrls: ['./jigsaw-puzzle.component.css']
})
export class NavListing implements AfterViewInit {
  @Input() navItems: NavItem[] = [];
  selectedItem:string | null = null;
  _router: Router;
  constructor(private router: Router) {
    this._router = router;
}
  ngAfterViewInit() {
    this.selectedItem = this._router.url;
  }
  navigate() {
    if(this.selectedItem)
    window.location.href = this.selectedItem
  }
}   