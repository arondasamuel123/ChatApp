import { Component, OnInit } from '@angular/core';
import {BackendService} from '../backend.service';
import {ActivatedRoute, Router} from '@angular/router';
import swal from 'sweetalert';
@Component({
  selector: 'app-delete-message',
  templateUrl: './delete-message.component.html',
  styleUrls: ['./delete-message.component.css']
})
export class DeleteMessageComponent implements OnInit {

  constructor(private endpoint: BackendService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params.id;
      this.endpoint.deleteMessages(id).subscribe(
        response => {

          this.router.navigate(['']);
          swal({
            title: 'Message deleted',
            text: 'Messages successfully deleted',
            icon: 'success',
          });
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
    });
  }

}
