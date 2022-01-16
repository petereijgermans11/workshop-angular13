import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IF1Seasons, F1SeasonsAPI, F1Seasons } from 'src/app/models/f1-api';
import { F1SeasonResults } from 'src/app/models/f1-api-season-results';
import { IF1Season, F1Season } from 'src/app/models/f1-season-api';
import { ServiceErgastF1 } from 'src/app/services/service-ergast-f1.service';

@Component({
  selector: 'app-f1-info',
  templateUrl: './f1-info.component.html',
  styleUrls: ['./f1-info.component.scss']
})

export class F1InfoComponent implements OnInit {
  public f1Seasons$: Observable<F1Seasons>;
  public f1Season$!: Observable<F1Season>;
  public f1SeasonResults$!: Observable<F1SeasonResults>;
  public selectedYear: string = "";

  constructor(private f1Service: ServiceErgastF1) {
    this.f1Seasons$ = this.f1Service.getSeasons();
  }

  ngOnInit(): void {
  }

  yearSelected(event: any): void {
    if (event.target.value.length == 4) {
      this.selectedYear = event.target.value;
      this.f1Season$ = this.f1Service.getSeason(this.selectedYear);
      this.f1SeasonResults$ = this.f1Service.getSeasonResults(event.target.value);
    }
  }

  clickOnRace(event: any) : void {
    alert(event.target.id);
    // ToDo ###
  }
}
