import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AddTutorialComponent } from './componentes/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './componentes/tutorial-details/tutorial-details.component';
import { TutorialListComponent } from './componentes/tutorial-list/tutorial-list.component';
import {RouterLink} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { TutorialFullComponent } from './componentes/tutorial-full/tutorial-full.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialListComponent,
    TutorialFullComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterLink,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
