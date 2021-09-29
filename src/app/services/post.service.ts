import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Post } from '../Post';

  
const httpOptions =
{
       headers: new HttpHeaders(
         {
         'Content-Type':'application/json' 
       })

}
    
 @Injectable({
      providedIn: 'root'
    })
      

export class PostService {

  private apiUrl = "https://json-server-tut.herokuapp.com/posts";

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(this.apiUrl);
  }

  getPost(id: number): Observable<Post>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Post>(url);
  }

  deletePost(id: number): Observable<Post[]>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Post[]>(url);
  }

  addPost(post: any): Observable<Post>{
    return this.http.post<Post>(this.apiUrl, post);
  }
  updatePost(post: Post): Observable<Post>{
    const url = `${this.apiUrl}/${post.id}`;
    return this.http.put<Post>(url, post,httpOptions);
  }
}
