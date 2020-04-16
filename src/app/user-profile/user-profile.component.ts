import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../services/user.servise';
import {User} from '../models/User.model';
import {CommentService} from '../services/comment.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  private comments = [];
  private user: User;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private commentServer: CommentService) {

  }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(i => {
      this.userService.getUserId(i.id).subscribe(user => {
        this.user = user;
        this.commentServer.getComments(this.user.id).subscribe((data: Comment) => {
        this.comments = data['comments'];
        } );
      });
    });

  }

}
