import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home-recent-fixture',
  templateUrl: './home-recent-fixture.component.html',
  styleUrls: ['./home-recent-fixture.component.sass']
})
export class HomeRecentFixtureComponent implements OnInit {
  
  recentFixture = {
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
    "firstHalfStart": 1575490500,
    "secondHalfStart": 1575494100,
    "round": "Regular Season - 15",
    "status": "Match Finished",
    "statusShort": "FT",
    "elapsed": 90,
    "venue": "Anfield, Liverpool",
    "referee": "Mike Dean, England",
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
    "goalsHomeTeam": 5,
    "goalsAwayTeam": 2,
    "score": {
        "halftime": "4-2",
        "fulltime": "5-2",
        "extratime": null,
        "penalty": null
    }
  };
  
  events = [
    {
        "elapsed": 6,
        "team_id": 40,
        "teamName": "Liverpool",
        "player_id": 305,
        "player": "D. Origi",
        "assist_id": 304,
        "assist": "S. Mane",
        "type": "Goal",
        "detail": "Normal Goal"
    },
    {
        "elapsed": 17,
        "team_id": 40,
        "teamName": "Liverpool",
        "player_id": 307,
        "player": "X. Shaqiri",
        "assist_id": 304,
        "assist": "S. Mane",
        "type": "Goal",
        "detail": "Normal Goal"
    },
    {
        "elapsed": 21,
        "team_id": 45,
        "teamName": "Everton",
        "player_id": 2934,
        "player": "M. Keane",
        "assist_id": null,
        "assist": null,
        "type": "Goal",
        "detail": "Normal Goal"
    },
    {
        "elapsed": 27,
        "team_id": 40,
        "teamName": "Liverpool",
        "player_id": 283,
        "player": "T. Alexander-Arnold",
        "assist_id": null,
        "assist": "Roughing",
        "type": "Card",
        "detail": "Yellow Card"
    },
    {
        "elapsed": 31,
        "team_id": 45,
        "teamName": "Everton",
        "player_id": 2413,
        "player": "Richarlison",
        "assist_id": null,
        "assist": "Roughing",
        "type": "Card",
        "detail": "Yellow Card"
    },
    {
        "elapsed": 31,
        "team_id": 40,
        "teamName": "Liverpool",
        "player_id": 305,
        "player": "D. Origi",
        "assist_id": 287,
        "assist": "D. Lovren",
        "type": "Goal",
        "detail": "Normal Goal"
    },
    {
        "elapsed": 35,
        "team_id": 45,
        "teamName": "Everton",
        "player_id": 18761,
        "player": "Bernard",
        "assist_id": 102,
        "assist": "D. Sidibe",
        "type": "subst",
        "detail": "D. Sidibe"
    },
    {
        "elapsed": 45,
        "team_id": 45,
        "teamName": "Everton",
        "player_id": 2413,
        "player": "Richarlison",
        "assist_id": 18761,
        "assist": "Bernard",
        "type": "Goal",
        "detail": "Normal Goal"
    },
    {
        "elapsed": 45,
        "team_id": 40,
        "teamName": "Liverpool",
        "player_id": 304,
        "player": "S. Mane",
        "assist_id": 283,
        "assist": "T. Alexander-Arnold",
        "type": "Goal",
        "detail": "Normal Goal"
    },
    {
        "elapsed": 60,
        "team_id": 45,
        "teamName": "Everton",
        "player_id": 877,
        "player": "M. Kean",
        "assist_id": 18766,
        "assist": "D. Calvert-Lewin",
        "type": "subst",
        "detail": "D. Calvert-Lewin"
    },
    {
        "elapsed": 67,
        "team_id": 45,
        "teamName": "Everton",
        "player_id": 18762,
        "player": "T. Davies",
        "assist_id": null,
        "assist": "Tripping",
        "type": "Card",
        "detail": "Yellow Card"
    },
    {
        "elapsed": 72,
        "team_id": 45,
        "teamName": "Everton",
        "player_id": 18764,
        "player": "M. Schneiderlin",
        "assist_id": 18762,
        "assist": "T. Davies",
        "type": "subst",
        "detail": "T. Davies"
    },
    {
        "elapsed": 72,
        "team_id": 40,
        "teamName": "Liverpool",
        "player_id": 292,
        "player": "J. Henderson",
        "assist_id": 295,
        "assist": "A. Lallana",
        "type": "subst",
        "detail": "A. Lallana"
    },
    {
        "elapsed": 73,
        "team_id": 40,
        "teamName": "Liverpool",
        "player_id": 302,
        "player": "R. Firmino",
        "assist_id": 305,
        "assist": "D. Origi",
        "type": "subst",
        "detail": "D. Origi"
    },
    {
        "elapsed": 83,
        "team_id": 40,
        "teamName": "Liverpool",
        "player_id": 284,
        "player": "J. Gomez",
        "assist_id": 283,
        "assist": "T. Alexander-Arnold",
        "type": "subst",
        "detail": "T. Alexander-Arnold"
    },
    {
        "elapsed": 90,
        "team_id": 40,
        "teamName": "Liverpool",
        "player_id": 300,
        "player": "G. Wijnaldum",
        "assist_id": 302,
        "assist": "R. Firmino",
        "type": "Goal",
        "detail": "Normal Goal"
    }
  ];
  
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
  
  formatScore(score: string) {
    return score.replace(/-/g, ' - ');
  }

}
