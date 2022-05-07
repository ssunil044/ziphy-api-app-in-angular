import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
//https://api.giphy.com/v1/gifs/trending?api_key=BZf9hM5t1I5VM1BVV5lIQMmYqwA3PajA&limit=50
@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit, OnDestroy {
gifs: any[] =[];
subscription!: Subscription;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  
    this.dataService.getTrendingGifs()
    this.subscription = this.dataService.getGifs()
    .subscribe((response: any) => {
    this.gifs = response;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    
  }
}
