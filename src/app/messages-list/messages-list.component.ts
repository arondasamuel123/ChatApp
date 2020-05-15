import { Component, OnInit } from '@angular/core';
import {BackendService} from '../backend.service';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent implements OnInit {
data: any;
  constructor(private endpoint: BackendService) { }

  ngOnInit() {
    this.endpoint.getMessages().subscribe(
      response => {
        this.data = response;
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }

}
