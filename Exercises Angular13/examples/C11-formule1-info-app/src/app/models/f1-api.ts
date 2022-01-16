
//------------------------------------ http://ergast.com/api/f1/seasons.json
//------------------------------------ seasons info

export interface Season {
    season: string;
    url: string;
}

export interface SeasonTable {
    Seasons: Season[];
}

export interface MRData {
    xmlns: string;
    series: string;
    url: string;
    limit: string;
    offset: string;
    total: string;
    SeasonTable: SeasonTable;
}

export interface IF1Seasons {
    MRData: MRData;
}

export class F1SeasonsAPI implements IF1Seasons {
    public MRData: MRData;
    constructor(mrData: MRData) {
        this.MRData = mrData;
    }
}

export class F1Seasons {
    public seasons: string[];
    constructor(seasons: string[]) {
        this.seasons = seasons;
    }
}
