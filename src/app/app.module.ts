import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HighlighterDirective } from './highlighter.directive';
// import { ContactComponent } from './contact/contact.component';
import { SkillsetComponent } from './skillset/skillset.component';
// import { SocialDetailComponent } from './social-detail.component';
import { MatButtonModule, MatMenuModule, MatToolbarModule } from '@angular/material';

import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectsComponent,
    ContactComponent,
    AboutComponent,
    HighlighterDirective,
    // ContactComponent,
    SkillsetComponent,
    // SocialDetailComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
