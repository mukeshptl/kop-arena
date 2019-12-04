import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home-recent-fixture',
  templateUrl: './home-recent-fixture.component.html',
  styleUrls: ['./home-recent-fixture.component.sass']
})
export class HomeRecentFixtureComponent implements OnInit {
  
  recentFixture = {
    "fixture_id": 157148,
    "league_id": 524,
    "league": {
        "name": "Premier League",
        "country": "England",
        "logo": "https://media.api-football.com/leagues/2.png",
        "flag": "https://media.api-football.com/flags/gb.svg"
    },
    "event_date": "2019-11-30T15:00:00+00:00",
    "event_timestamp": 1575126000,
    "firstHalfStart": 1575126000,
    "secondHalfStart": 1575129600,
    "round": "Regular Season - 14",
    "status": "Match Finished",
    "statusShort": "FT",
    "elapsed": 90,
    "venue": "Anfield, Liverpool",
    "referee": "Martin Atkinson, England",
    "homeTeam": {
        "team_id": 40,
        "team_name": "Liverpool",
        "logo": "https://media.api-football.com/teams/40.png"
    },
    "awayTeam": {
        "team_id": 51,
        "team_name": "Brighton",
        "logo": "https://media.api-football.com/teams/51.png"
    },
    "goalsHomeTeam": 2,
    "goalsAwayTeam": 1,
    "score": {
        "halftime": "2-0",
        "fulltime": "2-1",
        "extratime": null,
        "penalty": null
    }
  };
  
  events = [
    {
        "elapsed": 18,
        "team_id": 40,
        "teamName": "Liverpool",
        "player_id": 290,
        "player": "V. van Dijk",
        "assist_id": 283,
        "assist": "T. Alexander-Arnold",
        "type": "Goal",
        "detail": "Normal Goal"
    },
    {
        "elapsed": 24,
        "team_id": 40,
        "teamName": "Liverpool",
        "player_id": 290,
        "player": "V. van Dijk",
        "assist_id": 283,
        "assist": "T. Alexander-Arnold",
        "type": "Goal",
        "detail": "Normal Goal"
    },
    {
        "elapsed": 69,
        "team_id": 51,
        "teamName": "Brighton",
        "player_id": 18968,
        "player": "Y. Bissouma",
        "assist_id": 1946,
        "assist": "L. Trossard",
        "type": "subst",
        "detail": "L. Trossard"
    },
    {
        "elapsed": 69,
        "team_id": 40,
        "teamName": "Liverpool",
        "player_id": 306,
        "player": "Mohamed Salah",
        "assist_id": 295,
        "assist": "A. Lallana",
        "type": "subst",
        "detail": "A. Lallana"
    },
    {
        "elapsed": 69,
        "team_id": 51,
        "teamName": "Brighton",
        "player_id": 18965,
        "player": "Martín Montoya",
        "assist_id": 17715,
        "assist": "S. Alzate",
        "type": "subst",
        "detail": "S. Alzate"
    },
    {
        "elapsed": 76,
        "team_id": 51,
        "teamName": "Brighton",
        "player_id": 19772,
        "player": "A. Connolly",
        "assist_id": 19364,
        "assist": "N. Maupay",
        "type": "subst",
        "detail": "N. Maupay"
    },
    {
        "elapsed": 76,
        "team_id": 40,
        "teamName": "Liverpool",
        "player_id": null,
        "player": "Alisson",
        "assist_id": null,
        "assist": null,
        "type": "Card",
        "detail": "Red Card"
    },
    {
        "elapsed": 76,
        "team_id": 40,
        "teamName": "Liverpool",
        "player_id": 302,
        "player": "Roberto Firmino",
        "assist_id": 305,
        "assist": "D. Origi",
        "type": "subst",
        "detail": "D. Origi"
    },
    {
        "elapsed": 78,
        "team_id": 40,
        "teamName": "Liverpool",
        "player_id": 297,
        "player": "A. Oxlade-Chamberlain",
        "assist_id": 18812,
        "assist": "Adrián",
        "type": "subst",
        "detail": "Adrián"
    },
    {
        "elapsed": 79,
        "team_id": 51,
        "teamName": "Brighton",
        "player_id": 18963,
        "player": "L. Dunk",
        "assist_id": null,
        "assist": null,
        "type": "Goal",
        "detail": "Normal Goal"
    }
  ]
  
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    // this.homeService.getCurrentFixture().subscribe(
    //   curFixture => {
    //     // console.log(curFixture);
    //     const prevFix = +curFixture.split(' ')[3];
    //     console.log('Regular Season - ' + (prevFix -1));
    //     this.homeService.getFixtures().subscribe(
    //       (fixtures) => {
    //         let fixtureObj= fixtures.filter(
    //           (fixture) => {
    //               return fixture.round === 'Regular Season - ' + (prevFix -1);
    //           }
    //         );
    //         this.recentFixture = fixtureObj[0];
    //         console.log(this.recentFixture);
    //       }
    //     );
    //   }
    // );
    
  }

}
