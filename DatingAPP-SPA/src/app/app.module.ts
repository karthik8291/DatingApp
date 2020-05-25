import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/*newly added */
import {HttpClientModule} from '@angular/common/http';
/*newly added */
import { AppComponent } from './app.component';
import { ValuesComponent } from './Values/Values.component';

@NgModule({
   declarations: [
      AppComponent,
      ValuesComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
