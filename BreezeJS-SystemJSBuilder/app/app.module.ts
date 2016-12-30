import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BreezeBridgeAngular2Module } from "breeze-bridge-angular2";

import { AppComponent } from "./app.component";
import { CustomEntityManager } from "./custom-entity-manager.service";

@NgModule({
    imports: [
        BrowserModule,
        BreezeBridgeAngular2Module,
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        CustomEntityManager
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
