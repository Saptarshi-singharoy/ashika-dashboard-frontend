import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Chart, ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  template: `
    <div class="line-chart-wrap">
      <canvas #canvas></canvas>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        width: 100%;
      }
      .line-chart-wrap {
        height: 240px;
      }
      canvas {
        width: 100% !important;
        height: 100% !important;
      }
    `,
  ],
})
export class LineChartComponent implements AfterViewInit, OnDestroy, OnChanges {
  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;
  @Input() labels: string[] = [];
  @Input() values: number[] = [];

  chart?: Chart<'line', number[], string>;

  ngAfterViewInit() {
    this.createChart();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.chart && (changes['labels'] || changes['values'])) {
      this.chart.data.labels = this.labels as any;
      this.chart.data.datasets = [
        {
          label: 'Value',
          data: this.values,
          tension: 0.3,
          fill: true,
          borderWidth: 2,
          pointRadius: 4,
          pointBackgroundColor: '#1E73FF',
          borderColor: '#1E73FF',
          backgroundColor: 'rgba(30,115,255,0.12)',
        },
      ];
      this.chart.update();
    }
  }

  createChart() {
    if (!this.canvas) return;
    const ctx = this.canvas.nativeElement.getContext('2d')!;

    const config: ChartConfiguration<'line', number[], string> = {
      type: 'line',
      data: {
        labels: this.labels as any,
        datasets: [
          {
            label: 'Value',
            data: this.values,
            tension: 0.3,
            fill: true,
            borderWidth: 2,
            pointRadius: 4,
            pointBackgroundColor: '#1E73FF',
            borderColor: '#1E73FF',
            backgroundColor: 'rgba(30,115,255,0.12)',
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        elements: { point: { radius: 4 } },
        scales: {
          x: { grid: { display: false } },
          y: { grid: { drawBorder: false },ticks: { display: false }  },
        },
      } as ChartOptions<'line'>,
    };

    this.chart = new Chart(ctx, config);
  }

  ngOnDestroy() {
    this.chart?.destroy();
  }
}
