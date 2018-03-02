import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContinueComponent } from './components/continue/continue.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { FirstQuestionComponent } from './components/questions/first-question/first-question.component';
import { ThirteenthQuestionComponent } from './components/questions/thirteenth-question/thirteenth-question.component';
import { SecondQuestionComponent } from './components/questions/second-question/second-question.component';
import { ThirdQuestionComponent } from './components/questions/third-question/third-question.component';
import { ForthQuestionComponent } from './components/questions/forth-question/forth-question.component';
import { FifthQuestionComponent } from './components/questions/fifth-question/fifth-question.component';
import { SeventhQuestionComponent } from './components/questions/seventh-question/seventh-question.component';
import { EighthQuestionComponent } from './components/questions/eighth-question/eighth-question.component';
import { NinthQuestionComponent } from './components/questions/ninth-question/ninth-question.component';
import { TenthQuestionComponent } from './components/questions/tenth-question/tenth-question.component';
import { EleventhQuestionComponent } from './components/questions/eleventh-question/eleventh-question.component';
import { TwelfthQuestionComponent } from './components/questions/twelfth-question/twelfth-question.component';
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
    ThirteenthQuestionComponent,
    SecondQuestionComponent,
    ThirdQuestionComponent,
    ForthQuestionComponent,
    FifthQuestionComponent,
    SeventhQuestionComponent,
    EighthQuestionComponent,
    NinthQuestionComponent,
    TenthQuestionComponent,
    EleventhQuestionComponent,
    TwelfthQuestionComponent,
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
