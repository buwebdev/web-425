import {Component} from "@angular/core";
import {MatDialog} from "@angular/material";
import {FavoriteComposerDialogComponent} from "./favorite-composer-dialog/favorite-composer-dialog.component";

@Component({
    selector: "app-root",
    template: `
        <mat-toolbar color="primary">
            <mat-toolbar-row></mat-toolbar-row>
        </mat-toolbar>

        <div fxLayout="column">
            <mat-card class="mat-elevation-z8 composer-card">
                <mat-card-title>Favorite Composer Application</mat-card-title>
                <br/>
                <mat-card-content>
                    Click <a class="dialog-trigger" (click)="openDialog()">here</a> To see a list of my favorite composers
                </mat-card-content>
            </mat-card>
        </div>
    `,
    styles: [`
        .composer-card {
            width: 60%;
            margin-top: 3%;
            margin-left: 20%;
            margin-right: 20%;
        }

        .dialog-trigger {
            color: steelblue;
        }

        .dialog-trigger:hover {
            cursor: pointer;
            text-decoration: underline;
        }
    `]
})
export class AppComponent {
    title = "Mat Dialog Example";
    composers: string[];

    constructor(private dialog: MatDialog) {
        this.title = "Hello world";
        this.composers = [
            "Ludwig van Beethoven", "Johann Sebastian Bach", "Wolfgang Amadeus Mozart", "Johannes Brahms", "Frederic Chopin"
        ];
    }

    openDialog() {
        const dialogRef = this.dialog.open(FavoriteComposerDialogComponent, {
            data: {
                composers: this.composers
            },
            disableClose: true,
            width: "800px"
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result === "confirm") {
                console.log("The dialog window has closed!");
            }
        });
    }
}
