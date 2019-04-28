import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-encuesta2',
  templateUrl: './encuesta2.component.html',
  styleUrls: ['./encuesta2.component.css']
})
export class Encuesta2Component implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    showLines: true
  };
  public barChartLabels: Label[] = ['Pregunta 1', 'Pregunta 2', 'Pregunta 4', 'Pregunta 4'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    {data: [ 65, 59, 80, 81 ], label: 'Entrevistados'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
