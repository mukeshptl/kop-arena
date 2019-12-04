import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home-next-fixture',
  templateUrl: './home-next-fixture.component.html',
  styleUrls: ['./home-next-fixture.component.sass']
})
export class HomeNextFixtureComponent implements OnInit {
  nextFixture = {
    "fixture_id": 157164,
    "league_id": 524,
    "league": {
        "name": "Premier League",
        "country": "England",
        "logo": "https://media.api-football.com/leagues/2.png",
        "flag": "https://media.api-football.com/flags/gb.svg"
    },
    "event_date": "2019-12-04T20:15:00+00:00",
    "event_timestamp": 1575490500,
    "firstHalfStart": null,
    "secondHalfStart": null,
    "round": "Regular Season - 15",
    "status": "Not Started",
    "statusShort": "NS",
    "elapsed": 0,
    "venue": "Anfield (Liverpool)",
    "referee": null,
    "homeTeam": {
        "team_id": 40,
        "team_name": "Liverpool",
        "logo": "https://media.api-football.com/teams/40.png"
    },
    "awayTeam": {
        "team_id": 45,
        "team_name": "Everton",
        "logo": "https://media.api-football.com/teams/45.png"
    },
    "goalsHomeTeam": null,
    "goalsAwayTeam": null,
    "score": {
        "halftime": null,
        "fulltime": null,
        "extratime": null,
        "penalty": null
    }
  };
  
  
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    
    // this.homeService.getCurrentFixture().subscribe(
    //   curFixture => {
    //     this.homeService.getFixtures().subscribe(
    //       (fixtures) => {
    //         let fixtureObj= fixtures.filter(
    //           (fixture) => {
    //               return fixture.round === curFixture;
    //           }
    //         );
    //         this.nextFixture = fixtureObj[0];
    //         console.log(this.nextFixture);
    //       }
    //     );
    //   }
    // );
  }

}
