import { Component, OnInit } from '@angular/core';
import {BackendService} from '../backend.service';
import {Messages} from '../messages';
import {ActivatedRoute, Router} from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {
editMessages = new Messages('', '');

  constructor(private endpoint: BackendService, private route: ActivatedRoute, private router: Router) { }

  update() {
    this.route.params.subscribe(params => {
      const id = params.id;
      this.endpoint.updateMessages(this.editMessages.name, this.editMessages.text, id).subscribe(
        response => {

          console.log(response);
          this.router.navigate(['']);
          swal({
            title: 'Message updated',
            text: 'Message successfully updated',
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
    });
  }

  ngOnInit() {
  }

}
