import { Component } from '@angular/core';
import { PhotoAppService } from 'src/app/photo-app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PhotoApp';
  searchResult = false;

  constructor(public ps: PhotoAppService) {

  }

  search(result) {
    this.ps.searchQuery = result.value.searchBox;
    this.searchResult = !this.searchResult;
    console.log('value.target.value');
    console.log(result.value.searchBox);
    this.ps.Response = !this.ps.Response;
    this.ps.callApi()
    .subscribe((data) => {
      this.ps.Response = data;
      console.log(this.ps.Response);

    });
  }
}
