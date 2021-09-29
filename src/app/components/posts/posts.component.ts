import { Component, Input, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
//import { Posts } from '../../mock-posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

   @Input() colClass: any;

  posts: any;

  

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((retrievedPosts)=> this.posts = retrievedPosts);
    console.log(this.posts);
  }


  deletePost(post:any){
    console.log("here");
    this.postService.deletePost(post.id).subscribe(() => this.posts= this.posts.filter((p:any) => p.id != post.id));
  }

}
