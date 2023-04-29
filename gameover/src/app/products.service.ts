import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{Router} from "@angular/router"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient:HttpClient) { }

  getProducts():Observable<any>{
return this._HttpClient.get('https://free-to-play-games-database.p.rapidapi.com/api/games',{
  headers:{
    'X-RapidAPI-Key':'13e8661bbdmsh31b99409171af5bp12b733jsnd67da582b74d',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
})
  }
  getgameDetails(id:number):Observable<any>{
    {
      return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,{
        headers: {
          'X-RapidAPI-Key': '13e8661bbdmsh31b99409171af5bp12b733jsnd67da582b74d',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}
      })
    }
      }
      getplatformpc():Observable<any>{
        {
          return this._HttpClient.get('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc',{
            headers: {
              'X-RapidAPI-Key': '13e8661bbdmsh31b99409171af5bp12b733jsnd67da582b74d',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}
          })
        }
          }
          getplatformbrowser():Observable<any>{
            {
              return this._HttpClient.get('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser',{
                headers: {
                  'X-RapidAPI-Key': '13e8661bbdmsh31b99409171af5bp12b733jsnd67da582b74d',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}
              })
            }
              }
    
              getsortby():Observable<any>{
                {
                  return this._HttpClient.get('https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=release-date',{
                    headers: {
                      'X-RapidAPI-Key': '13e8661bbdmsh31b99409171af5bp12b733jsnd67da582b74d',
                    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}
                  })
                }
                  }
                  getsortpopularity():Observable<any>{
                    {
                      return this._HttpClient.get('https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=popularity',{
                        headers: {
                          'X-RapidAPI-Key': '13e8661bbdmsh31b99409171af5bp12b733jsnd67da582b74d',
                        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}
                      })
                    }
                      }
                      getalphabetical():Observable<any>{
                        {
                          return this._HttpClient.get('https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=alphabetical',{
                            headers: {
                              'X-RapidAPI-Key': '13e8661bbdmsh31b99409171af5bp12b733jsnd67da582b74d',
                            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}
                          })
                        }
                          }
                          getsortrelevance():Observable<any>{
                            {
                              return this._HttpClient.get('https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=relevance',{
                                headers: {
                                  'X-RapidAPI-Key': '13e8661bbdmsh31b99409171af5bp12b733jsnd67da582b74d',
                                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}
                              })
                            }
}

getcatracing():Observable<any>{
return this._HttpClient.get('https://free-to-play-games-database.p.rapidapi.com/api/games?category=racing',{
  headers:{
    'X-RapidAPI-Key':'13e8661bbdmsh31b99409171af5bp12b733jsnd67da582b74d',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
})
  }
  getcatsports():Observable<any>{
    return this._HttpClient.get('https://free-to-play-games-database.p.rapidapi.com/api/games?category=sports',{
      headers:{
        'X-RapidAPI-Key':'13e8661bbdmsh31b99409171af5bp12b733jsnd67da582b74d',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    })
      }
      getcatsocial():Observable<any>{
        return this._HttpClient.get('https://free-to-play-games-database.p.rapidapi.com/api/games?category=social',{
          headers:{
            'X-RapidAPI-Key':'13e8661bbdmsh31b99409171af5bp12b733jsnd67da582b74d',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
          }
        })
          }
     
getcatshooter():Observable<any>{
return this._HttpClient.get('https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter',{
  headers:{
    'X-RapidAPI-Key':'13e8661bbdmsh31b99409171af5bp12b733jsnd67da582b74d',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
})
  }
  getcatopen():Observable<any>{
    return this._HttpClient.get('https://free-to-play-games-database.p.rapidapi.com/api/games?category=open-world',{
      headers:{
        'X-RapidAPI-Key':'13e8661bbdmsh31b99409171af5bp12b733jsnd67da582b74d',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    })
      }
     
      getzombie():Observable<any>{
        return this._HttpClient.get('https://free-to-play-games-database.p.rapidapi.com/api/games?category=getzombie',{
          headers:{
            'X-RapidAPI-Key':'13e8661bbdmsh31b99409171af5bp12b733jsnd67da582b74d',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
          }
        })
          }
     
          getcatrpg():Observable<any>{
            return this._HttpClient.get('https://free-to-play-games-database.p.rapidapi.com/api/games?category=action-rpg',{
              headers:{
                'X-RapidAPI-Key':'13e8661bbdmsh31b99409171af5bp12b733jsnd67da582b74d',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
              }
            })
              }
              getaction():Observable<any>{
                return this._HttpClient.get('https://free-to-play-games-database.p.rapidapi.com/api/games?category=action',{
                  headers:{
                    'X-RapidAPI-Key':'13e8661bbdmsh31b99409171af5bp12b733jsnd67da582b74d',
                    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                  }
                })
                  }
     
                  getcatflight():Observable<any>{
                    return this._HttpClient.get('https://free-to-play-games-database.p.rapidapi.com/api/games?category=flight',{
                      headers:{
                        'X-RapidAPI-Key':'13e8661bbdmsh31b99409171af5bp12b733jsnd67da582b74d',
                        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                      }
                    })
                      }
     
                      getbattle():Observable<any>{
                        return this._HttpClient.get('https://free-to-play-games-database.p.rapidapi.com/api/games?category=batttle-royale',{
                          headers:{
                            'X-RapidAPI-Key':'13e8661bbdmsh31b99409171af5bp12b733jsnd67da582b74d',
                            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                          }
                        })
                          }
                             
                 
     
        
}
