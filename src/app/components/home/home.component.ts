import { Component, OnInit } from '@angular/core';
import { Posts} from '../../mock-posts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts = Posts;
  constructor() { }

  ngOnInit(): void {
  }

}
