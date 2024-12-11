import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { BodyComponent } from "../body/body.component";

@Component({
    selector: 'app-main-page',
    standalone: true,
    templateUrl: './main-page.component.html',
    styleUrl: './main-page.component.scss',
    imports: [HeaderComponent, BodyComponent]
})
export class MainPageComponent {

}
