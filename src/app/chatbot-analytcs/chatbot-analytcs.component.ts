import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import Chart, { ChartItem, ChartTypeRegistry } from 'chart.js/auto';

@Component({
  selector: 'app-chatbot-analytcs',
  templateUrl: './chatbot-analytcs.component.html',
  styleUrls: ['./chatbot-analytcs.component.css']
})
export class ChatbotAnalytcsComponent {
  chartTypeOptions: string[] = ['bar', 'pie', 'line'];
  dataSourceOptions: string[] = ['DataSource1', 'DataSource2', 'DataSource3', 'DataSource4', 'DataSource5'];
  selectedChart!: string;
  chart!: any;
  constructor(private titleService: Title){}

  ngOnInit(){
    this.titleService.setTitle("Analytics | TechTalk");
  }

  onChartSelectChange(selectedChart: any){
    console.log(selectedChart);
    this.buildChart(selectedChart.value)
  }

  buildChart(chartType: any){
    const ctx = document.getElementById('myChart') as ChartItem;

    if(this.chart){
      console.log("destryo");
      this.chart.destroy();
    }

    if(ctx != null){
      this.chart = new Chart(ctx, {
        type: chartType,
        data: {
          labels: ['Sait', 'Ahmet', 'Akib', 'Muhammet', 'Kayra', 'Ali'],
          datasets: [
            {
            label: 'number of samples',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
            },
            {
              label: 'number of samples',
              data: [12, 19, 3, 5, 2, 3],
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
    console.log(this.chart);
  }
}
