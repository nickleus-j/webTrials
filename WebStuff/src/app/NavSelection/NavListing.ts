import { Component, AfterViewInit, Input, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavItem } from './NavItem';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'nav-listing',
  imports: [CommonModule, FormsModule],
  templateUrl: './NavListing.html',
  styleUrls: ['./NavListing.css']
})
export class NavListing implements AfterViewInit {
  @Input() navItems: NavItem[] = [];
  selectedItem:string | null = null;
  _router: Router;
  constructor(private router: Router) {
    this._router = router;
}
  ngAfterViewInit() {
    //this.selectedItem = this.navItems[0]?.Path || null;
  }
  navigate() {
    if(this.selectedItem)
    window.location.href = this.selectedItem
  }
}   