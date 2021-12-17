export class AppComponent implements OnInit {
  name: string;
  cities: string[];


  constructor() {
  }

  ngOnInit() {
    this.name = 'Peter  Eijgermans’;
    this.cities = ['Groningen', 'Hengelo', 'Den  Haag', 'Enschede’];
  }
}
