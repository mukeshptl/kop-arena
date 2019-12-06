import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PlayersComponent } from './players/players.component';
import { FixturesComponent } from './fixtures/fixtures.component';
import { NewsComponent } from './news/news.component';
import { VideosComponent } from './videos/videos.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'fixtures', component: FixturesComponent},
  { path: 'news', component: NewsComponent },
  { path: 'videos', component: VideosComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
