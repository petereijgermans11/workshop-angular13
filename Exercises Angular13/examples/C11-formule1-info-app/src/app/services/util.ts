//------------- util methods
// to map API structure to simplified FE structure
import { F1SeasonsAPI, F1Seasons } from "../models/f1-api";

export class UtilServices {
UtilServices() {}

public static ConvertF1SeasonsApi(f1SeasonsApi: F1SeasonsAPI): F1Seasons {
  // get only the season years from MRData structure
    var f1Seasons: string[] = [];
    for(let season of f1SeasonsApi.MRData.SeasonTable.Seasons) {
      f1Seasons.push(season.season);
    }
    return new F1Seasons(f1Seasons);
  }

}
