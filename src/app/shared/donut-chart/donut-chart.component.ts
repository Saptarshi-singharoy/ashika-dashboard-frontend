import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnChanges,
  SimpleChanges,
  ViewChild,
  AfterViewInit,
  OnInit,
} from '@angular/core';
import { Chart, ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-donut-chart',
  template: `
    <div class="donut-wrap">
      <canvas #canvas></canvas>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        width: 100%;
      }
      .donut-wrap {
        width: 260px;
        height: 260px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      canvas {
        width: 100% !important;
        height: 100% !important;
      }
    `,
  ],
})
export class DonutChartComponent
  implements AfterViewInit, OnDestroy, OnChanges,OnInit
{
  ngOnInit(): void {
    this.createChart();

  }
  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;
  @Input() labels: string[] = [];
  @Input() values: number[] = [];
  @Input() colors: string[] = [];

  chart?: Chart<'doughnut', number[], string>;

  ngAfterViewInit() {
    this.createChart();
  }

  ngOnChanges(changes: SimpleChanges) {
    // this.createChart()
    if (
      this.chart &&
      (changes['labels'] || changes['values'] || changes['colors'])
    ) {
      this.chart.data.labels = this.labels as any;
      this.chart.data.datasets = [
        {
          data: this.values,
          backgroundColor: this.colors.length
            ? this.colors
            : [
                '#0B3B66',
                '#9B74FF',
                '#1E73FF',
                '#FFD27D',
                '#A6E6B2',
                '#93D3F2',
              ],
        },
      ];
      this.chart.update();
    }

    
  }

  createChart() {
    if (!this.canvas) return;
    const ctx = this.canvas.nativeElement.getContext('2d')!;

    const config: ChartConfiguration<'doughnut', number[], string> = {
      type: 'doughnut',
      data: {
        labels: this.labels as any,
        datasets: [
          {
            data: this.values,
            backgroundColor: this.colors.length
              ? this.colors
              : [
                  '#0B3B66',
                  '#9B74FF',
                  '#1E73FF',
                  '#FFD27D',
                  '#A6E6B2',
                  '#93D3F2',
                ],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '58%',
        plugins: { legend: { display: false } },
      } as ChartOptions<'doughnut'>,
    };

    this.chart = new Chart(ctx, config);
  }

  ngOnDestroy() {
    this.chart?.destroy();
  }
}
