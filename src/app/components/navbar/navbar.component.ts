import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [FontAwesomeModule], // Ensure FontAwesomeModule is imported
  standalone: true,
})
export class NavbarComponent {}
