import { Component,ViewChild } from '@angular/core';
import { AdminService } from 'src/app/core/service/admin.service';
import { ChartType, ChartDataset } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  @ViewChild(BaseChartDirective) chart!: BaseChartDirective;
  pieChartLabels: string[] = [];
  pieChartData: ChartDataset[] = [];
  chartType: ChartType = 'pie';
  barChartLabels: string[] = [];
  barChartData: ChartDataset[] = [];
  
  private colors: string[] = ['#FF6384', '#36A2EB'];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getUserRoleStats().subscribe((stats) => {
      let index = 0;
      for (const key in stats) {
        this.pieChartLabels.push(key);
        this.pieChartData.push({ data: [stats[key]], label: key, backgroundColor: this.colors[index++]  });
      }
      for (const key in stats) {
      this.barChartLabels.push(key);
      this.barChartData = [{ data: this.pieChartData.map(d => d.data[0]), label: '', backgroundColor: this.colors[index++]  }];
      this.forceChartUpdate();
      }
    });
  }

  ngAfterViewInit(): void {
    this.forceChartUpdate();
  }

  forceChartUpdate(): void {
    setTimeout(() => {
      if (this.chart && this.chart.chart) {
        this.chart.chart.update();
      }
    }, 0);
  }

  toggleChartType(): void {
    if (this.chartType === 'pie') {
      this.chartType = 'bar';
    } else {
      this.chartType = 'pie';
    }
    this.forceChartUpdate();
  }
}  
  
  

