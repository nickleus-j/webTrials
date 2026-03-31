import { Routes } from '@angular/router';
import { RomanConverterComponent } from '../RomanNumeral/roman-converter.component';
import { DiamondComponent } from './diamond/diamond';
import { CaesarCipherComponent } from './caesar-cipher.component/caesar-cipher.component';
import { SquareComponent } from '../Squares/square.component';
import { JigsawPuzzleComponent } from '../jigsaw-puzzle/jigsaw-puzzle.component';
import { PhoneticMapper } from '../MappedEnglish/MappedEnglish.component';
import {Navigated} from '../navigated/navigated';
export const routes: Routes = [
    {path: '', component: RomanConverterComponent },
    {path: 'diamond', component: DiamondComponent },
    {path: 'square', component: SquareComponent },
    {path: 'jigsaw', component: JigsawPuzzleComponent },
    {path: 'Phonetic', component: PhoneticMapper },
    {path: 'navigated', component: Navigated },
    {path: 'caesar-cipher', component: CaesarCipherComponent }
];
