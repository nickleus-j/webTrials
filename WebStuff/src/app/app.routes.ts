import { Routes } from '@angular/router';
import { RomanConverterComponent } from '../RomanNumeral/roman-converter.component';
import { DiamondComponent } from './diamond/diamond';
import { CaesarCipherComponent } from './caesar-cipher.component/caesar-cipher.component';
import { SquareComponent } from '../Squares/square.component';
export const routes: Routes = [
    {path: '', component: RomanConverterComponent },
    {path: 'diamond', component: DiamondComponent },
    {path: 'square', component: SquareComponent },
    {path: 'caesar-cipher', component: CaesarCipherComponent }
];
