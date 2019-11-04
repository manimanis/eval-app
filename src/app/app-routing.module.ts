import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslatedItemsCategoriesComponent } from './translated-items-categories/translated-items-categories.component';
import { PasteCodeComponent } from './paste-code/paste-code.component';
import { LeconsComponent } from './lecons/lecons.component';
import { BatonnetsOneRowGameComponent } from './batonnets-one-row-game/batonnets-one-row-game.component';


const routes: Routes = [
  { path: 'translate', component: TranslatedItemsCategoriesComponent },
  { path: 'paste', component: PasteCodeComponent },
  { path: 'source', component: LeconsComponent },
  { path: 'game', component: BatonnetsOneRowGameComponent },
  { path: '', redirectTo: 'translate', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
