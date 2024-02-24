import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dog.component.html',
  styleUrl: './dog.component.css'
})
export class DogComponent {
  dogs: Array<string> = [
  'Labrador Retriever', 'German Shepherd', 
  'Golden Retriever','Bulldog','Beagle', 
  'Poodle', 'Rottweiler', 'Boxer','Dachshund',
  'Siberian Husky', 'Doberman Pinscher',
  'Great Dane','Shih Tzu', 'Australian Shepherd', 
  'Cocker Spaniel', 'Pomeranian'
  ]
}
