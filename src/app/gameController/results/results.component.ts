import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PlayService } from "../../services/play.service";

@Component({
    selector: 'app-results',
    templateUrl: 'results.component.html',
    styles: []
})
export class ResultsComponent implements OnInit {

    winner: string;

    constructor(private playService: PlayService, private route: ActivatedRoute) {}
    
    ngOnInit() {
        var id = this.route.snapshot.params['id'];
        this.winner = this.playService.images[id];  
    }
}