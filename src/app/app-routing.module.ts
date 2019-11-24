import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslatedItemsCategoriesComponent } from './translated-items-categories/translated-items-categories.component';
import { PasteCodeComponent } from './paste-code/paste-code.component';
import { LeconsComponent } from './lecons/lecons.component';
import { BatonnetsOneRowGameComponent } from './batonnets-one-row-game/batonnets-one-row-game.component';
import { CodeBeautifyComponent } from './code-beautify/code-beautify.component';
import { LoginComponent } from './login/login.component';
import { TravauxComponent } from './travaux/travaux.component';


const routes: Routes = [
  { path: 'translate', component: TranslatedItemsCategoriesComponent },
  { path: 'paste', component: PasteCodeComponent },
  { path: 'source', component: LeconsComponent },
  { path: 'game', component: BatonnetsOneRowGameComponent },
  { path: 'beautify', component: CodeBeautifyComponent },
  { path: 'login', component: LoginComponent },
  { path: 'travaux', component: TravauxComponent },
  { path: '', redirectTo: 'translate', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
