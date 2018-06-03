import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HighlighterDirective } from './highlighter.directive';
import { SkillsetComponent } from './skillset/skillset.component';
import { 
          MatButtonModule, MatCardModule, MatMenuModule, 
          MatToolbarModule, MatDialogModule, MatTableModule
       } from '@angular/material';
import { DialogDataComponent } from './app.component';
import { LocatorService } from './locator.service';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { LocationComponent } from './location/location.component';
import { AgmCoreModule } from '@agm/core';

import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    DialogDataComponent,
    NavbarComponent,
    ProjectsComponent,
    ContactComponent,
    AboutComponent,
    HighlighterDirective,
    SkillsetComponent,
    LocationComponent,
  ],
  entryComponents: [
    DialogDataComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    BrowserAnimationsModule,
    HttpModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatMenuModule,
    MatTableModule,
    MatToolbarModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleApiKey
    })
  ],
  providers: [LocatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
