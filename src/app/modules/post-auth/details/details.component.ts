import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface DetailsData{
  info: {} | null,
  registration: {} | null,
}
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent  implements OnInit{
  constructor(private http: HttpClient){}
  ngOnInit(): void {
    this.http.get('http://localhost:3000/details').subscribe({
      next: (data: DetailsData | any) => {
        this.info = data.info;
        this.registration = data.registration;
      }
    })
  }

  info :any;

  registration :any;

}
