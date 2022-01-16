// http://ergast.com/api/f1/2021/1/results.json?limit=100
//------------------------------------ season round info

export interface Location {
    lat: string;
    long: string;
    locality: string;
    country: string;
}

export interface Circuit {
    circuitId: string;
    url: string;
    circuitName: string;
    Location: Location;
}

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

export interface Time {
    millis: string;
    time: string;
}

export interface Time2 {
    time: string;
}

export interface AverageSpeed {
    units: string;
    speed: string;
}

export interface FastestLap {
    rank: string;
    lap: string;
    Time: Time2;
    AverageSpeed: AverageSpeed;
}

export interface Result {
    number: string;
    position: string;
    positionText: string;
    points: string;
    Driver: Driver;
    Constructor: Constructor;
    grid: string;
    laps: string;
    status: string;
    Time: Time;
    FastestLap: FastestLap;
}

export interface Race {
    season: string;
    round: string;
    url: string;
    raceName: string;
    Circuit: Circuit;
    date: string;
    time: string;
    Results: Result[];
}

export interface RaceTable {
    season: string;
    round: string;
    Races: Race[];
}

export interface MRData {
    xmlns: string;
    series: string;
    url: string;
    limit: string;
    offset: string;
    total: string;
    RaceTable: RaceTable;
}

export interface IF1SeasonRoundResults {
    MRData: MRData;
}

export class F1SeasonRoundResults implements IF1SeasonRoundResults {
    public MRData: MRData;
    constructor(mrData: MRData) {
        this.MRData = mrData;
    }
}
