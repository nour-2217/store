import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.less']
})
export class ToolsComponent implements OnInit {

  tools$ = this.dataService.getTools();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

}
