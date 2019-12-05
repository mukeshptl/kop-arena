import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { faCoffee, faHome, faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-stats',
  templateUrl: './home-stats.component.html',
  styleUrls: ['./home-stats.component.sass']
})
export class HomeStatsComponent implements OnInit {

  statsData = { 
    "matchs": {
      "matchsPlayed": {
          "home": 6,
          "away": 7,
          "total": 13
      },
      "wins": {
          "home": 6,
          "away": 6,
          "total": 12
      },
      "draws": {
          "home": 0,
          "away": 1,
          "total": 1
      },
      "loses": {
          "home": 0,
          "away": 0,
          "total": 0
      }
  },
  "goals": {
      "goalsFor": {
          "home": 17,
          "away": 13,
          "total": 30
      },
      "goalsAgainst": {
          "home": 6,
          "away": 5,
          "total": 11
      }
  },
  "goalsAvg": {
      "goalsFor": {
          "home": "2.8",
          "away": "1.9",
          "total": "2.3"
      },
      "goalsAgainst": {
          "home": "1.0",
          "away": "0.7",
          "total": "0.8"
      }
  }
};
  faCoffee = faCoffee;
  faHome = faHome;
  faPlane = faPlaneDeparture;
  
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    // this.homeService.getStatistics().subscribe(
    //   (data) => {
    //     this.statsData = data;
    //     console.log(this.statsData);
    //   }
    // );
  }

}
