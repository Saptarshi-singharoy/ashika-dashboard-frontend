import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
failed: boolean = false;
  constructor(private http: HttpClient ){
    
  }
  ngOnInit(): void {
    try {
      this.http.get(`${environment.apiUrl}/dashboard`).subscribe({
      next: (data:any) => {
        console.log("DARA", data);
        this.revenue = data.revenue;
        this.smallStats = data.smallStats;
        this.portfolioTotal = data.portfolioTotal;
        this.profit = data.profit;
        this.months = data.chart?.months || [];
        this.values = data.chart?.values || [];
        this.donutLabels = data.donutChart?.labels || [];
        this.donutValues = data.donutChart?.values || [];
        this.donutColors = data.donutChart?.colors || [];
        
      } 
    })
    } catch (error) {
      this.failed = true;
      console.log("Failed to fetch dashboard details: ", error);
      
    }
    
  }
  revenue: string = '';
  smallStats :any;

  portfolioTotal :string ='';
  profit:string = '';

  months :any[] = [];
  values :any[] = []

  donutLabels :any[] =[];
  donutValues:any[] = [];
  donutColors: any[] =[]
}
