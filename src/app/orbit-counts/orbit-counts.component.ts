import { Component, Input, OnInit } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites!: Satellite[];
  constructor() { }

  ngOnInit(): void {
  }
  countOfSatellite(satellites: Satellite[]) {
    return this.satellites.length;
  }

  countByType(name: string) {
    let count = 0;
    for (let i = 0; i < this.satellites.length; i++) {
      if (this.satellites[i].type == name) {
        count++;
      }
    }
    return count;
  }
}
