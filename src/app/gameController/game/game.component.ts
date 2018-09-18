import { Component, OnInit, AfterViewInit } from "@angular/core";
import { Router } from "@angular/router";

import { PlayService } from "../../services/play.service";

@Component({
    selector: 'app-game',
    templateUrl: 'game.component.html',
    styleUrls: ['game.component.css']
})
export class GameComponent {
    images: string[];
    first: number = 0;
    second: number = 1;

    constructor(public playService: PlayService, private router: Router) {
        this.images = this.playService.images;
    }

    onFirst() {
        if(this.first > this.second) ++this.first;
        else this.first = this.second + 1;

        if (this.first >= this.playService.images.length) this.finish(this.second)
    }

    onSecond() {
        if(this.second > this.first) ++this.second;
        else this.second = this.first + 1;

        if (this.second >= this.playService.images.length) this.finish(this.first)
    }

    finish(value: number) {
        this.router.navigate(['/results', value]);
    }
}