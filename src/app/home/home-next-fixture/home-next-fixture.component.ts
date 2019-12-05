import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { faCalendarDay, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
 
@Component({
  selector: 'app-home-next-fixture',
  templateUrl: './home-next-fixture.component.html',
  styleUrls: ['./home-next-fixture.component.sass']
})
export class HomeNextFixtureComponent implements OnInit {
  
  // nextFixtureChanged = new Subject<any>();
  faCalendarDay = faCalendarDay;
  faMapMarkerAlt = faMapMarkerAlt;
  
  nextFixture =  {
    "fixture_id": 157165,
    "league_id": 524,
    "league": {
        "name": "Premier League",
        "country": "England",
        "logo": "https://media.api-football.com/leagues/2.png",
        "flag": "https://media.api-football.com/flags/gb.svg"
    },
    "event_date": "2019-12-07T15:00:00+00:00",
    "event_timestamp": 1575730800,
    "firstHalfStart": null,
    "secondHalfStart": null,
    "round": "Regular Season - 16",
    "status": "Not Started",
    "statusShort": "NS",
    "elapsed": 0,
    "venue": "Vitality Stadium (Bournemouth, Dorset)",
    "referee": null,
    "homeTeam": {
        "team_id": 35,
        "team_name": "Bournemouth",
        "logo": "https://media.api-football.com/teams/35.png"
    },
    "awayTeam": {
        "team_id": 40,
        "team_name": "Liverpool",
        "logo": "https://media.api-football.com/teams/40.png"
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
  
  convertTsToDate(ts: number) {
    let date = new Date(ts * 1000); 
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    
    return day + '/' + month + '/' + year + ' ' + hours + ':' + minutes;
  }

}
