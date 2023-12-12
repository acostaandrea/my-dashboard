import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs';

import type { User, UserResponse, UsersResponse } from '../interfaces/req-response';

interface State{
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject(HttpClient);

  // # hace que sea privado y visible solo en la clase
  #state = signal<State>({
    users: [],
    loading: true
  });

  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);


  constructor() {
    this.http.get<UsersResponse>('https://reqres.in/api/users')
    .pipe(delay(1000))
    .subscribe( res =>{
      this.#state.set({
        users: res.data,
        loading: false
      });
    })
   }

   getUserById(id: string){
    return this.http.get<UserResponse>(`https://reqres.in/api/users/${id}`)
    .pipe(
      delay(1000),
      map(res => res.data)
      )

   }
}
