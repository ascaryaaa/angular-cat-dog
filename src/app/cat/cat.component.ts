import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cat.component.html',
  styleUrl: './cat.component.css'
})
export class CatComponent {
  cats: Array<string> = [
  'Ragdoll', 'Bengal', 'Sphynx', 'Abyssinian',
  'Scottish Fold', 'Burmese', 'Russian Blue', 
  'Norwegian Forest Cat','American Shorthair', 
  'Turkish Angora', 'Siamese', 'Himalayan',
  'Exotic Shorthair', 'Devon Rex', 'Cornish Rex'
  ]
}
