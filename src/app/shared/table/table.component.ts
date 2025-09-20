import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

interface ClientRow {
  sl: string;
  code: string;
  name: string;
  normal: string;
  delivery: string;
  futures: string;
  option: string;
  incentive: string;
  retention: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(private http: HttpClient){}
  // UI state
  searchText = '';
  page = 1;
  pageSize = 6; // rows per page
  total = 0;

  // sample dataset (duplicate rows for showing scroll)
  allRows: ClientRow[] = [];

  // visible slice
  get rows(): ClientRow[] {
    const filtered = this.filterRows(this.searchText);
    this.total = filtered.length;
    const start = (this.page - 1) * this.pageSize;
    return filtered.slice(start, start + this.pageSize);
  }

  ngOnInit() {
    // create sample dataset (you'll replace with API data)
    // for (let i = 0; i < 30; i++) {
    //   this.allRows.push({
    //     sl: (i + 1).toString().padStart(2, '0'),
    //     code: 'A0001234',
    //     name: 'Arun Kumar Sutar',
    //     normal: '12334',
    //     delivery: '384165.00',
    //     futures: '00.00',
    //     option: '654678',
    //     incentive: '45765887',
    //     retention: '353687'
    //   });
    // }
    this.http.get(`${environment.apiUrl}/clients`).subscribe({
      next: (data) => {
        this.allRows = data as ClientRow[];
        this.total = this.allRows.length;
      },
      error: (err) => {
        console.log("Error while Fetching Clients", err);
        this.allRows = [];
        this.total = this.allRows.length;

      }
    })
  }

  filterRows(q: string): ClientRow[] {
    if (!q) return this.allRows;
    const lower = q.toLowerCase();
    return this.allRows.filter(r =>
      r.code.toLowerCase().includes(lower)
      || r.name.toLowerCase().includes(lower)
      || r.sl.includes(lower)
    );
  }

  // actions (placeholders)
  sendEmail() { console.log('send email'); }
  downloadExcel() { console.log('download excel'); }
  downloadPdf() { console.log('download pdf'); }

  // quick handler for search input
  onSearchChange(val: string) {
    this.page = 1;
    this.searchText = val;
  }
}
