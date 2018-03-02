import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContinueComponent } from './components/continue/continue.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { FirstQuestionComponent } from './components/questions/first-question/first-question.component';
import { SecondQuestionComponent } from './components/questions/second-question/second-question.component';
import { ThirdQuestionComponent } from './components/questions/third-question/third-question.component';
import { ForthQuestionComponent } from './components/questions/forth-question/forth-question.component';
import { FifthQuestionComponent } from './components/questions/fifth-question/fifth-question.component';
import { SixthQuestionComponent } from './components/questions/sixth-question/sixth-question.component';
import { ZipCodeComponent } from './components/continue/zip-code/zip-code.component';
import { NameComponent } from './components/continue/name/name.component';
import { EmailComponent } from './components/continue/email/email.component';
import { AddressComponent } from './components/continue/address/address.component';


const appRoutes: Routes = [
  { path: 'continue', component: ContinueComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: '**', component: ContinueComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ContinueComponent,
    QuestionsComponent,
    FirstQuestionComponent,
    SecondQuestionComponent,
    ThirdQuestionComponent,
    ForthQuestionComponent,
    FifthQuestionComponent,
    SixthQuestionComponent,
    ZipCodeComponent,
    NameComponent,
    EmailComponent,
    AddressComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
