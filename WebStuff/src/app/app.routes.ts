import { Routes } from '@angular/router';
import { RomanConverterComponent } from '../RomanNumeral/roman-converter.component';
import { DiamondComponent } from './diamond/diamond';
import { CaesarCipherComponent } from './caesar-cipher.component/caesar-cipher.component';
export const routes: Routes = [
    {path: '', component: RomanConverterComponent },
    {path: 'diamond', component: DiamondComponent },
    {path: 'caesar-cipher', component: CaesarCipherComponent }
];
