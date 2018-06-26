import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { PerformanceMap } from '../../app/performance-class';

@Injectable()
export class PerformanceProvider {

  constructor(public http: HttpClient, private storage: Storage) {}

  public recordPerformance(data: PerformanceMap): void {
    const key = `course${data.course}-level${data.level}`;
    const dataString = JSON.stringify(data);
    this.storage.set(key, dataString)
        .then();
  }

  public getPerformance<PerformanceMap>(course: number, level: number): Promise<PerformanceMap> {
    const key = `course${course}-level${level}`;
    return this.storage.get(key);
  }
}
