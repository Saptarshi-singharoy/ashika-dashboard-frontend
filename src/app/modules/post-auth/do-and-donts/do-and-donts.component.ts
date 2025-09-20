import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-do-and-donts',
  templateUrl: './do-and-donts.component.html',
  styleUrl: './do-and-donts.component.scss'
})
export class DoAndDontsComponent implements OnInit{
  constructor(private http: HttpClient) {}

  rules: string[] = [];
  ngOnInit(): void {
    this.http.get(`${environment.apiUrl}/doanddonts`).subscribe({
      next: (data: any) => {
        this.rules = data.rules;
      }
    })
  }

}
