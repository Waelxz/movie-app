import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  standalone: true,
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  imports: [CommonModule,FormsModule,FontAwesomeModule],
})
export class SearchBarComponent {
  searchTerm: string = '';
  faSearch = faSearch;
  @Output() searchChange = new EventEmitter<string>();

  onSearch(): void {
    console.log('Search Term:', this.searchTerm); // Debugging line
    this.searchChange.emit(this.searchTerm);
  }
}
