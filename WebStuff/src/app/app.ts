import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavItem } from './NavSelection/NavItem';
import { NavListing } from './NavSelection/NavListing';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavListing],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('WebStuff');
  navItems = signal<NavItem[]>([
    new NavItem('Home', '/'),
    new NavItem('Diamond Generator', '/diamond'),
    new NavItem('Jigsaw Puzzle', '/jigsaw'),
    new NavItem('Square Generator', '/square'),
    new NavItem('Rod Maker', '/rod'),
    new NavItem('Streetmap Sample', 'navigated'),
    new NavItem('Caesar Cipher', 'caesar-cipher'),
    new NavItem('Phonetic Mapping', '/Phonetic')
  ]);
  
}
