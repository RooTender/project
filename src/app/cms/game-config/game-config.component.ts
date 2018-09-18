import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayService } from '../../services/play.service';

@Component({
  selector: 'app-game-config',
  templateUrl: './game-config.component.html',
  styleUrls: ['./game-config.component.css']
})
export class GameConfigComponent implements OnInit {
  generatedPIN: number;
  Count: string;
  fileName = "Choose file";
  images: string[] = [];
  fileSystem: any;
  choosen: boolean = false;
  json: boolean = false;
  jsonText: string;
  manual: boolean = false;

  constructor(private router: Router, private playService: PlayService) {}

  ngOnInit() {
    this.generatePIN();
  }

  generatePIN() {
    this.generatedPIN = Math.floor((Math.random() * 9000) + 1000);
  }

  onFileSelected(event) {
    this.fileName = event.target.files[0].name;
    this.choosen = true;
  }

  onUpload() {
    if(!this.choosen) return;
    if(this.images.indexOf('assets/pics/' + this.fileName) > -1) return;
    this.choice(2);

    this.images.push('assets/pics/' + this.fileName);
    this.Count = "Count: " + this.images.length;
    this.choosen = false;
  }

  choice(choice: number, boxValue: string = '') {
    if(choice == 1) {
      this.json = true;
      var arr = boxValue.split(';');
      arr = arr.filter(v => v != "");
      arr = arr.map(i => 'assets/pics/' + i);
      this.images = arr;
    }
    else this.manual = true;
  }

  start() {
    if (this.images.length == 1) return alert('There\'s only one picture!');
    this.playService.images = this.images;
    this.router.navigate(['lobby']);
  }
}
