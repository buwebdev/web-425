import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {FavoriteComposerDialogComponent} from "./favorite-composer-dialog/favorite-composer-dialog.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {MatDialogModule} from "@angular/material/dialog";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";

@NgModule({
    declarations: [
        AppComponent,
        FavoriteComposerDialogComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatDialogModule,
        FlexLayoutModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatListModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [
        FavoriteComposerDialogComponent
    ]
})
export class AppModule {
}
