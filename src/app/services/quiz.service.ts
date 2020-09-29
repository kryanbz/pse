import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuizService {

  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(url);
  }

  getAll() {
    return [
      { id: 'data/javascript.json', name: 'PSE Math Quiz 1' },
      { id: 'data/aspnet.json', name: 'PSE Math Quiz 2' }
      // { id: 'data/csharp.json', name: 'PSE Math Quiz 3' },
      // { id: 'data/designPatterns.json', name: 'PSE Math Quiz 4' }
    ];
  }

}
