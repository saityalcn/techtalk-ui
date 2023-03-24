import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import Chart, { ChartItem } from 'chart.js/auto';

@Component({
  selector: 'app-chatbot-analytcs',
  templateUrl: './chatbot-analytcs.component.html',
  styleUrls: ['./chatbot-analytcs.component.css']
})
export class ChatbotAnalytcsComponent {

  constructor(private titleService: Title){}

  ngOnInit(){
    this.titleService.setTitle("Analytics | TechTalk");

    const ctx = document.getElementById('myChart') as ChartItem;

    if(ctx != null){
      new Chart(ctx, {
        type: 'bar',
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
  }

}
