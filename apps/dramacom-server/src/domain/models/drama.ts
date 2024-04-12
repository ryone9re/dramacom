import type { Entity } from "../../util/utility-types";
import { ID } from "../value-objects/id";

export class Drama implements Entity<ID> {
  private _id: ID;
  private _title: string;
  private _description = "";
  private _casts: string[];
  private _director: string[];
  private _thumbnail: string;
  private _episodes: DramaEpisode[];

  constructor({
    id,
    title,
    description,
    casts,
    director,
    thumbnail,
    episodes,
  }: {
    id: ID;
    title: string;
    description?: string;
    casts: string[];
    director: string[];
    thumbnail: string;
    episodes: DramaEpisode[];
  }) {
    this._id = id;
    this._title = title;
    if (description) {
      this._description = description;
    }
    this._casts = casts;
    this._director = director;
    this._thumbnail = thumbnail;
    this._episodes = episodes;
  }

  public static new({
    title,
    description,
    casts,
    director,
    thumbnail,
    episodes,
  }: {
    title: string;
    description?: string;
    casts: string[];
    director: string[];
    thumbnail: string;
    episodes: DramaEpisode[];
  }) {
    return new Drama({
      id: ID.generate(),
      title,
      description,
      casts,
      director,
      thumbnail,
      episodes,
    });
  }

  public identity() {
    return this._id;
  }

  public equal(other: Drama) {
    return this.identity().equals(other.identity());
  }

  public title() {
    return this._title;
  }

  public description() {
    return this._description;
  }

  public casts() {
    return this._casts;
  }

  public director() {
    return this._director;
  }

  public thumbnail() {
    return this._thumbnail;
  }

  public episodes() {
    return this._episodes;
  }
}

export class DramaEpisode implements Entity<ID> {
  private _id: ID;
  private _episodeNumber: number;
  private _title: string;
  private _summary: string;

  constructor({
    id,
    episodeNumber,
    title,
    summary,
  }: { id: ID; episodeNumber: number; title: string; summary: string }) {
    this._id = id;
    this._episodeNumber = episodeNumber;
    this._title = title;
    this._summary = summary;
  }

  public static new({
    episodeNumber,
    title,
    summary,
  }: { episodeNumber: number; title: string; summary: string }) {
    return new DramaEpisode({
      id: ID.generate(),
      episodeNumber,
      title,
      summary,
    });
  }

  public identity(): ID {
    return this._id;
  }

  public equal(other: Entity<ID>): boolean {
    return this.identity().equals(other.identity());
  }

  public episodeNumber() {
    return this._episodeNumber;
  }

  public title() {
    return this._title;
  }

  public summary() {
    return this._summary;
  }
}
