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
  selector: 'app-half-donut',
  template: `
    <div class="donut-card">
      <div class="donut-wrap">
        <canvas #canvas></canvas>
      </div>

      <div class="legend">
        <div class="legend-item" *ngFor="let l of labels; let i = index">
          <span class="swatch" [style.background]="colorsFor(i)"></span>
          <span class="label">{{ l }}</span>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        width: 100%;
      }

      .donut-card {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 14px;
      }

      .donut-wrap {
        width: 260px;
        height: 140px; /* half height since semicircle */
        display: flex;
        align-items: center;
        justify-content: center;
      }

      canvas {
        width: 260px !important;
        height: 140px !important;
      }

      .legend {
        margin-top: 8px;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .legend-item {
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 16px;
        color: #374151;
      }

      .swatch {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        display: inline-block;
      }

      .label {
        font-weight: 600;
      }

      @media (max-width: 420px) {
        .donut-wrap { width: 200px; height: 110px; }
        canvas { width: 200px !important; height: 110px !important; }
      }
    `,
  ],
})
export class HalfDonutComponent
  implements AfterViewInit, OnDestroy, OnChanges, OnInit
{
  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;
  @Input() labels: string[] = ['A', 'B'];
  @Input() values: number[] = [50, 50];
  @Input() colors: string[] = [];

  chart?: Chart<'doughnut', number[], string>;

  ngOnInit(): void {
    // nothing here — create after view init
  }

  ngAfterViewInit() {
    // Delay slightly if inputs not set yet (safe)
    setTimeout(() => this.createChart(), 0);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.chart && (changes['labels'] || changes['values'] || changes['colors'])) {
      this.chart.data.labels = this.labels as any;
      this.chart.data.datasets = [
        { data: this.values, backgroundColor: this.getColors() },
      ];
      this.chart.update();
    }
  }

  private getColors(): string[] {
    return this.colors.length
      ? this.colors
      : ['#5D4BFF', '#CDB3FF']; // default pair (dark blue, light purple)
  }

  colorsFor(i: number) {
    return this.getColors()[i % this.getColors().length];
  }

  createChart() {
    if (!this.canvas) return;
    const ctx = this.canvas.nativeElement.getContext('2d')!;
    const total = (this.values || []).reduce((s, v) => s + (v || 0), 0) || 1;

    // custom plugin to draw percentage labels on each arc
    const percentPlugin = {
      id: 'percentLabels',
      afterDraw: (chart: any) => {
        const meta = chart.getDatasetMeta(0);
        if (!meta || !meta.data) return;
        const ctx = chart.ctx;
        ctx.save();
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = '600 14px Inter, Roboto, Arial';
        ctx.fillStyle = '#ffffff';

        meta.data.forEach((arc: any, i: number) => {
          // get center point of arc
          let center = arc.getCenterPoint ? arc.getCenterPoint() : { x: arc.x, y: arc.y };
          // slightly push label outward from center (because semicircle is shallow)
          const angle = (arc.startAngle + arc.endAngle) / 2;
          const r = arc.outerRadius || (chart._metasets ? chart._metasets[0].outerRadius : 60);
          const offset = (r * 0.1);
          const lx = center.x + Math.cos(angle) * offset;
          const ly = center.y + Math.sin(angle) * offset;

          // compute percent text
          const percent = Math.round(((this.values[i] || 0) / total) * 100);
          const text = `${percent}%`;

          // Only draw for visible arcs (non-zero)
          if ((this.values[i] || 0) > 0) {
            ctx.fillText(text, lx, ly);
          }
        });

        ctx.restore();
      },
    };

    const config: ChartConfiguration<'doughnut', number[], string> = {
      type: 'doughnut',
      data: {
        labels: this.labels as any,
        datasets: [
          {
            data: this.values,
            backgroundColor: this.getColors(),
            borderWidth: 0,
            borderRadius: 8, // rounded corners on segments (Chart.js 3+)
            spacing: 2, // spacing between segments (works with borderRadius)
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        // make it a semicircle: circumference = PI, rotation = -PI (so semicircle is top)
        circumference: Math.PI,
        rotation: -Math.PI,
        cutout: '65%',
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
          },
        },
        elements: {
          arc: {
            // ensure rounded edges. `borderRadius` used in dataset as well.
            borderAlign: 'inner',
          },
        },
      } as ChartOptions<'doughnut'>,
      plugins: [percentPlugin],
    };

    // destroy previous if exists
    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart(ctx, config);
  }

  ngOnDestroy() {
    this.chart?.destroy();
  }
}
