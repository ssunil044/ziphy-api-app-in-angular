import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
//const endpoint = 'https://api.giphy.com/v1/gifs/trending?api_key=BZf9hM5t1I5VM1BVV5lIQMmYqwA3PajA&limit=25';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  gifs = new BehaviorSubject<any>([]);
  constructor(private http:HttpClient) { }
  //getAllPosts(): Observable<any> {
  //  return this.http.get(endpoint);
  //}
  getTrendingGifs()
  {
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=BZf9hM5t1I5VM1BVV5lIQMmYqwA3PajA&limit=25`)
    .subscribe((response: any) => {
      this.gifs.next(response.data);
    });
  }
  searchGifs(gifName: string){
    return this.http.get(`https://api.giphy.com/v1/gifs/search?q=${gifName}&api_key=BZf9hM5t1I5VM1BVV5lIQMmYqwA3PajA&limit=25`)
    .subscribe((response: any) => {
      this.gifs.next(response.data);
     });
  }
  getGifs(){
    return this.gifs.asObservable(); 
  }
}
