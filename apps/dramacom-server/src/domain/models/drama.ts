import type { Entity } from "../../util/utility-types";
import { ID } from "../value-objects/id";

export class Drama implements Entity<ID> {
  private _id: ID;
  private _title: string;
  private _description = "";
  private _casts: string[];
  private _director: string[];
  private _thumbnail: string;
  private _numberOfEpisodes: number;

  constructor({
    id,
    title,
    description,
    casts,
    director,
    thumbnail,
    numberOfEpisodes,
  }: {
    id: ID;
    title: string;
    description?: string;
    casts: string[];
    director: string[];
    thumbnail: string;
    numberOfEpisodes: number;
  }) {
    this._id = id;
    this._title = title;
    if (description) {
      this._description = description;
    }
    this._casts = casts;
    this._director = director;
    this._thumbnail = thumbnail;
    this._numberOfEpisodes = numberOfEpisodes;
  }

  public static new({
    title,
    description,
    casts,
    director,
    thumbnail,
    numberOfEpisodes,
  }: {
    title: string;
    description?: string;
    casts: string[];
    director: string[];
    thumbnail: string;
    numberOfEpisodes: number;
  }) {
    return new Drama({
      id: ID.generate(),
      title,
      description,
      casts,
      director,
      thumbnail,
      numberOfEpisodes,
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

  public numberOfEpisodes() {
    return this._numberOfEpisodes;
  }
}
