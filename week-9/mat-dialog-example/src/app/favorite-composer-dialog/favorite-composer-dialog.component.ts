import {Component, Inject, OnInit} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
    selector: "app-favorite-composer-dialog",
    template: `
        <h2 mat-dialog-title>Favorite Composers</h2>

        <div mat-dialog-content>
            <mat-list *ngFor="let composer of composers">
                <mat-list-item>
                    {{ composer }}
                </mat-list-item>
            </mat-list>
        </div>

        <hr/>

        <div mat-dialog-actions align="end">
            <button mat-raised-button matDialogClose="confirm" color="accent" cdkFocusInitial>Close Dialog</button>
        </div>
    `,
    styles: [``]
})
export class FavoriteComposerDialogComponent implements OnInit {
    composers: string[];

    constructor(private dialogRef: MatDialogRef<FavoriteComposerDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
        this.composers = data.composers;
    }

    ngOnInit() {
    }

}
