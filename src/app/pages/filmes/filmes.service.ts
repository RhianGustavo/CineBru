import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  private apiUrl = 'assets/movies.json';

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get(this.apiUrl);
  }

  getMovieById(id: number) {
    return this.getMovies().pipe(
      map((data: any) => data.filmes.find((movie: any) => movie.id === id))
    );
  }
  
  getMovieByIdFromBackend(id: number) {
    return this.http.get(`${this.apiUrl}/movies/${id}`);
  }
}
