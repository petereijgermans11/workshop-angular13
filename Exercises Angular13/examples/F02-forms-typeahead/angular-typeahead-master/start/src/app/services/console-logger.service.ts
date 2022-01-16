import {Injectable} from '@angular/core';

import {LogEntry, LogLevel} from '../models/LogEntry';

@Injectable({
  providedIn: 'root',
})
export class ConsoleLogger {

  public info(msg: string) {
    this.log(new LogEntry(msg));
  }

  public warn(msg: string) {
    this.log(new LogEntry(msg, LogLevel.Warn));
  }

  public error(msg: string) {
    this.log(new LogEntry(msg, LogLevel.Error));
  }

  private log(logEntry: LogEntry) {
    console.log(logEntry.toString());
  }
}
