import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2OdometerModule } from 'ng2-odometer';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { StandingsComponent } from './standings/standings.component';
import { RecentsComponent } from './recents/recents.component';
import { FixturesComponent } from './fixtures/fixtures.component';
import { StatsComponent } from './stats/stats.component';
import { PlayersComponent } from './players/players.component';
import { VideosComponent } from './videos/videos.component';
import { HomeStatsComponent } from './home/home-stats/home-stats.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeRecentFixtureComponent } from './home/home-recent-fixture/home-recent-fixture.component';
import { HomeNextFixtureComponent } from './home/home-next-fixture/home-next-fixture.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    StandingsComponent,
    RecentsComponent,
    FixturesComponent,
    StatsComponent,
    PlayersComponent,
    VideosComponent,
    HomeStatsComponent,
    HomeRecentFixtureComponent,
    HomeNextFixtureComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatRippleModule,
    MatTableModule,
    Ng2OdometerModule.forRoot(),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
