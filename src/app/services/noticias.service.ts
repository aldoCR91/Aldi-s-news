import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TopHeadlinesRes } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getTopHeadlines(){
    return this.http.get<TopHeadlinesRes>(`http://newsapi.org/v2/top-headlines?country=us&apiKey=fc17893fb9af44bc855c3ece5d2c92e6`);
    //return this.http.get<TopHeadlinesRes>(`http://localhost/Noticias/backend/public/api/noticias`);
  }




}
