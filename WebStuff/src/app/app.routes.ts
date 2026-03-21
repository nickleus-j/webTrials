import { Routes } from '@angular/router';
import { RomanConverterComponent } from '../RomanNumeral/roman-converter.component';
import { DiamondComponent } from './diamond/diamond';
export const routes: Routes = [
    {path: '', component: RomanConverterComponent },
    {path: 'diamond', component: DiamondComponent }
];
