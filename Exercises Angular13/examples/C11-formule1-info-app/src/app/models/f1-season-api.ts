//------------------------------------ http://ergast.com/api/f1/2021.json
//------------------------------------ seasons info

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

export interface Race {
    season: string;
    round: string;
    url: string;
    raceName: string;
    Circuit: Circuit;
    date: string;
    time: string;
}

export interface RaceTable {
    season: string;
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

export interface IF1Season {
    MRData: MRData;
}

export class F1Season implements IF1Season {
    public MRData: MRData;
    constructor(mrData:MRData) {
        this.MRData = mrData;
    }
}