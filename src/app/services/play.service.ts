export class PlayService {
    Texts: string[] = ["Nice!", "The Game is On.", "Democracy!", "Time is runnin'", "Here we go!"]
    images: string[];
    first: number = 0;
    second: number = 0;
    choosenQuoteIndex: number;
    Time: number = 30;
    interval;

    constructor() {
        this.choosenQuoteIndex = Math.floor(Math.random() * this.Texts.length);
    }

    
}