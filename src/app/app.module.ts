import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LobbyComponent } from './gameController/lobby/lobby.component';
import { GameComponent } from './gameController/game/game.component';
import { ResultsComponent } from './gameController/results/results.component';
import { CMSComponent } from './cms/cms.component';
import { GameConfigComponent } from './cms/game-config/game-config.component';
import { PlayService } from './services/play.service';

const appRoutes: Routes = [
  { path: 'cms', component: CMSComponent },
  { path: 'lobby', component: LobbyComponent},
  { path: 'play', component: GameComponent },
  { path: 'results/:id', component: ResultsComponent },
  { path: '', redirectTo: 'cms', pathMatch: 'full' }//,
  //{ path: '**', component: PageNotFound }
]

@NgModule({
  declarations: [
    AppComponent,
    LobbyComponent,
    GameComponent,
    ResultsComponent,
    CMSComponent,
    GameConfigComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PlayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
