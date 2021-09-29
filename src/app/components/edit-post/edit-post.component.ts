import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  id:any;
  title:any;
  content:any;

  constructor(private postService: PostService, private route: ActivatedRoute,
    private router:Router ) { }

  ngOnInit(): void {
    this.route.params.subscribe((parameters) =>this.postService.getPost
      (parameters.id).subscribe((retrievedPost) =>{
        this.id=retrievedPost.id;
        this.title=retrievedPost.title;
        this.content=retrievedPost.content;
      }));
   
  }
   onSubmit(){
     const updated_post ={
       id:this.id,
       title: this.title,
       content: this.content
     }
     this.postService.updatePost(updated_post).subscribe(() =>
         this.router.navigate(['/blog']));
   }
}
