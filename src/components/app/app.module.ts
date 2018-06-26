import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {FieldComponent} from '../field/field.component';
import {MenuComponent} from '../menu/menu.component';
import {AppComponent} from './app.component';

@NgModule({
    declarations: [
        AppComponent,
        FieldComponent,
        MenuComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

    //

}
