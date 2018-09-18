import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-lobby',
    templateUrl: 'lobby.component.html',
    styleUrls: ['lobby.component.css']
})
export class LobbyComponent {
    isWaiting: boolean = false;

    constructor(private router: Router) {}

    join() {
        this.isWaiting = true;
        this.router.navigate(['/play']);
    }

    leave() {
        this.isWaiting = false;
    }
}