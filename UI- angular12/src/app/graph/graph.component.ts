import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import {Router} from '@angular/router';
import {SharedService} from 'src/app/shared.service';


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  title = 'Project Plan Vs Actual';

  
  constructor(private router:Router, private service:SharedService) {}
  
   statusRegistered:any = []
  statusClose:any = [];


  ngOnInit(): void {
    this.refreshProjectGraphList();
  }


  refreshProjectGraphList(){
    this.service.getGraphStatus().subscribe(data=>
    {
      console.log(data);
      let res = Object.assign(data);
      
      for(let obj of data)
      {
        if(obj.status == 'Registered'){
          this.statusRegistered.push(parseInt(obj.count));
          console.log(this.statusRegistered)
        }
        else if(obj.status == 'Close'){
          this.statusClose.push(parseInt(obj.count));
          console.log(this.statusClose);
        }
      }
   })
  }


  
  public chart_Options: ChartOptions = {
    responsive: true,
    scales:{
      yAxes:[
        {
          ticks:{
            beginAtZero: true,
          }
        }
      ]
    }
  };
  public chart_Labels: Label[] = ['FIN', 'HR', 'MAN', 'QLT', 'STO', 'STR'];
  public chart_Type: ChartType = 'bar';
  public chart_Legend = true;
  public chart_Plugins = [];

  public chart_Data: ChartDataSets [] = [
    {
      data: this.statusRegistered,
      label: 'Registered'
    },
    {
      data: this.statusClose,
      label: 'Closed'
    }
  ];
}



 

