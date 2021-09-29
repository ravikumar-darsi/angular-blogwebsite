import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

    title?:string;
    content?: string;
     
  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const newPost={
      title: this.title,
      content: this.content
    }
    this.postService.addPost(newPost).subscribe(() => this.router.navigate(['/blog']));
  }
}
