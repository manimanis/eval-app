import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClipboardModule } from 'ngx-clipboard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslatedItemComponent } from './translated-item/translated-item.component';
import { TranslatedItemsListComponent } from './translated-items-list/translated-items-list.component';
import { TranslatedItemsCategoriesComponent } from './translated-items-categories/translated-items-categories.component';
import { CodeSnippetComponent } from './code-snippet/code-snippet.component';
import { PasteCodeComponent } from './paste-code/paste-code.component';
import { LeconsComponent } from './lecons/lecons.component';
import { BatonnetsOneRowGameComponent } from './batonnets-one-row-game/batonnets-one-row-game.component';
import { CodeBeautifyComponent } from './code-beautify/code-beautify.component';
import { LoginComponent } from './login/login.component';
import { TravauxComponent } from './travaux/travaux.component';

@NgModule({
  declarations: [
    AppComponent,
    TranslatedItemComponent,
    TranslatedItemsListComponent,
    TranslatedItemsCategoriesComponent,
    CodeSnippetComponent,
    PasteCodeComponent,
    LeconsComponent,
    BatonnetsOneRowGameComponent,
    CodeBeautifyComponent,
    LoginComponent,
    TravauxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
