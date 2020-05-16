import { Component, OnInit } from '@angular/core';
import {Messages} from '../messages';
import {BackendService} from '../backend.service';
import swal from 'sweetalert';


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
        swal({
          title: 'Message sent',
          text: 'Message send successfully',
          icon: 'success',
        });
      },
      error => {
        console.log(error);
        swal({
          title: 'Error',
          text: 'Oops! Something went wrong',
          icon: 'warning',
        });
      }
    );
  }

  ngOnInit() {
  }

}
