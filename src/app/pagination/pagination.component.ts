import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
//const endpoint = 'https://jsonplaceholder.typicode.com/posts';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  gifs: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [3, 6, 9, 12];
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }
  fetchPosts(): void {
    this.dataService.getGifs().subscribe(
      (response) => {
        this.gifs = response;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.fetchPosts();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }
}
