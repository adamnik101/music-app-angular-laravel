import { Injectable } from '@angular/core';
import {ITrack} from "../../tracks/interfaces/i-track";
import {PlayedService} from "./played.service";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  public playing: boolean = false
  public track : ITrack = {} as ITrack
  public audio: HTMLAudioElement = new Audio()
  public queue: ITrack[] = []
  public queuePosition: number = 0
  public duration: number = 0
  public currentTime : number = 0
  private interval : number = 0;
  constructor(private played: PlayedService) { }

  playTrack(track: ITrack){
    const path: string = 'assets/tracks/'
    this.track = track
    this.audio.src = path + track.src
    this.startPlaying()
  }
  startPlaying() {
    this.audio.play()
    this.played.played(this.track).subscribe(response => {
      console.log('played')
    })
    this.playing = true
    this.audio.oncanplaythrough = () => {
      this.getTrackLength()
      this.interval = setInterval(() => {
        this.getCurrentTime()
      }, 1000)

    }
    this.audio.onended = () => {
      this.playing = false
    }
  }
  pauseOrContinueTrack(): boolean{
    if(this.audio.paused){
      this.startPlaying()
      this.playing = true
      return true
    }
    this.audio.pause()
    this.playing = false
    return false
  }

  getTrackLength() {
    this.duration = this.audio.duration * 1000 // 1 sekund = 1000 milisekundi, formatira  se pomocu date pipe-a unutar komponente
  }

  getCurrentTime() {
    this.currentTime = this.audio.currentTime * 1000
  }
  seeked(seek: number) {
    this.audio.currentTime = seek / 1000
  }
  seeking(seek: number){
    this.currentTime = seek
    clearInterval(this.interval)
    this.interval = 0;
  }
  changeVolume(volume : number){
    this.audio.volume = volume / 100
  }
  playQueue(queue: ITrack[]){
    console.log(queue[this.queuePosition])
    this.playTrack(queue[this.queuePosition])
    this.audio.onended = () => {
      console.log(this.queuePosition)
      if( this.queuePosition < queue.length - 1){
        this.queuePosition++
        this.playTrack(queue[this.queuePosition])
      }
    }
  }
}
