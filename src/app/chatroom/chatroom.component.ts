import { Component, OnInit } from '@angular/core';
import {Messages} from '../messages';
import {BackendService} from '../backend.service';


@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {
newMessages = new Messages('', '');
  constructor(private endpoint: BackendService) { }

  send() {
    this.endpoint.sendMessages(this.newMessages.name, this.newMessages.text).subscribe(
      response => {
        console.log(response);
        alert('Message sent successfully');
      },
      error => {
        console.log(error);
        alert('Opps. Something went wrong');
      }
    );
  }

  ngOnInit() {
  }

}
