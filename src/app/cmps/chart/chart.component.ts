import { Component, OnInit, Input } from '@angular/core';
import Chart from '../../services/models/Chart';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  constructor() { }

  @Input() chartData: Chart;
  @Input() color: string;
  chartValues: Array<any>;
  type: string = 'Line';
  options: any;

  ngOnInit() {
    this.chartValues = this.chartData.values.map(value => ['', value.y]);
    this.options = { colors: [this.color] }
  }
}
