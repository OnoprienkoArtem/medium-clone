import { Injectable } from '@angular/core';

@Injectable()
export class PersistanceService {
  set(key: string, data: string): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.log('Error saving to localStorage', e);
    }
  }
}
