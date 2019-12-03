import { Component, OnInit } from '@angular/core';

export interface tableItem {
  name: string;
  position: number;
  played: number;
  won: number;
  lost: number;
  drawn: number;
  goalDifference: number;
}

const STANDINGS_DATA: tableItem[] = [
  {name: 'Liverpool', position: 1, played: 12, won: 11, drawn: 1, lost: 0, goalDifference: 18},
  {name: 'Leicester City', position: 2, played: 12, won: 8, drawn: 2, lost: 2, goalDifference: 21},
  {name: 'Chelsea', position: 3, played: 12, won: 8, drawn: 2, lost: 2, goalDifference: 10},
  {name: 'Man. City', position: 4, played: 12, won: 8, drawn: 1, lost: 3, goalDifference: 22},
  {name: 'Sheff Utd', position: 5, played: 12, won: 4, drawn: 5, lost: 3, goalDifference: 4},
];

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.sass']
})

export class StandingsComponent implements OnInit {
  
  
  constructor() { }

  ngOnInit() {
  }
  
  displayedColumns: string[] = ['position', 'name', 'played', 'won', 'drawn', 'lost', 'goalDifference'];
  dataSource = STANDINGS_DATA;
}
