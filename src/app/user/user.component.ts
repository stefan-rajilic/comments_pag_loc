import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import Token from '../Token';
import {Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {UserService} from '../services/user.servise';
import {User} from '../models/User.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public url = 'http://134.122.72.178:3000/user';
  public email = '';
  public id = '';
  public userName = '';
  private users = [];
  // tslint:disable-next-line:variable-name
  private page_count: number;

  constructor(private httpClient: HttpClient, private router: Router, private user: UserService) {

    this.user.getUser().subscribe(
      (data: any) => {
        this.users = data['users'];

      });
  }

  clickMe() {
    const headers = new HttpHeaders().set('User-Token', Token.token);
    this.httpClient.delete(this.url, {
      headers
    }).subscribe(
      (data: any) => {
        Token.token = '';
        this.router.navigate(['/home']);
      }, (error) => {
        console.log(error);
      }
    );
  }

  userProfile(id: number) {
    this.router.navigate(['userProfile/'], {queryParams: {id}});
  }

  get pageLoad(): IterableIterator<number> {
    return new Array(this.page_count).keys();
  }

  pageCount(page: number) {
    this.user.getPage(page).subscribe(
      (data: User) => {
        this.users = data['users'];
        this.page_count = data.page_count + 1;
      });

  }

  ngOnInit() {
  }

}
