import { Component, OnInit } from '@angular/core';
import { ChuckNorrisService } from '../../chuck-norris.service';


@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrl: './apis.component.css'
})
export class ApisComponent implements OnInit {
  randomJoke: any;
  constructor(private chuckNorrisService: ChuckNorrisService) {}

  ngOnInit(): void{
    this.getRandomJoke();
  }
  getRandomJoke(): void {
    this.chuckNorrisService.getRandomJoke()
      .subscribe(data => {
        this.randomJoke = data;
      });
    }
    getNewJoke(): void {
      this.getRandomJoke(); 
    }
}
