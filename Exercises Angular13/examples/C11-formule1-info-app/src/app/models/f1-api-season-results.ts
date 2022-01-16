
//------------------------------------ http://ergast.com/api/f1/2021/driverStandings.json
//------------------------------------ seasons info

export interface Driver {
    driverId: string;
    permanentNumber: string;
    code: string;
    url: string;
    givenName: string;
    familyName: string;
    dateOfBirth: string;
    nationality: string;
}

export interface Constructor {
    constructorId: string;
    url: string;
    name: string;
    nationality: string;
}

export interface DriverStanding {
    position: string;
    positionText: string;
    points: string;
    wins: string;
    Driver: Driver;
    Constructors: Constructor[];
}

export interface StandingsList {
    season: string;
    round: string;
    DriverStandings: DriverStanding[];
}

export interface StandingsTable {
    season: string;
    StandingsLists: StandingsList[];
}

export interface MRData {
    xmlns: string;
    series: string;
    url: string;
    limit: string;
    offset: string;
    total: string;
    StandingsTable: StandingsTable;
}

export interface IF1SeasonResults {
    MRData: MRData;
}

export class F1SeasonResults implements IF1SeasonResults {
    public MRData: MRData;
    constructor(mrData: MRData) {
        this.MRData = mrData;
    }
}