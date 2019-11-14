import { Component, OnInit } from '@angular/core';
import { Unsplash } from 'unsplash-js';
import { map } from 'rxjs/operators';
import { PhotoAppService } from 'src/app/photo-app.service';


@Component({
  selector: 'app-photo-collection',
  templateUrl: './photo-collection.component.html',
  styleUrls: ['./photo-collection.component.scss']
})
export class PhotoCollectionComponent implements OnInit {
  Response;
  modalImage: object;
  modal = false;


  constructor( public ps: PhotoAppService) {}

  ngOnInit() {
   this.ps.callApi()
   .subscribe((data) => {
    this.ps.Response = data;
    console.log(this.ps.Response);

  });
   //console.log(Response);
  }

  showModal(image) {
    this.modalImage = image;
    this.modal = !this.modal;
  }

  hideModal = () => {
    this.modal = !this.modal;
    this.modalImage = undefined;
  }


}
