import type { Entity } from "../../util/utility-types";
import { ID } from "../value-objects/id";
import type { Drama } from "./drama";
import type { User } from "./user";

export class Comment implements Entity<ID> {
  private _id: ID;
  private _author: User;
  private _targetUser: User | null;
  private _targetDrama: Drama;
  private _content: string;
  private _watchedEpisode: number;

  constructor({
    id,
    author,
    targetUser,
    targetDrama,
    content,
    watchedEpisode,
  }: {
    id: ID;
    author: User;
    targetUser: User | null;
    targetDrama: Drama;
    content: string;
    watchedEpisode: number;
  }) {
    this._id = id;
    this._author = author;
    if (targetUser) {
      this._targetUser = targetUser;
    } else {
      this._targetUser = null;
    }
    this._targetDrama = targetDrama;
    this._content = content;
    this._watchedEpisode = watchedEpisode;
  }

  public static new({
    author,
    targetUser,
    targetDrama,
    content,
    watchedEpisode,
  }: {
    author: User;
    targetUser: User | null;
    targetDrama: Drama;
    content: string;
    watchedEpisode: number;
  }) {
    return new Comment({
      id: ID.generate(),
      author,
      targetUser,
      targetDrama,
      content,
      watchedEpisode,
    });
  }

  public identity() {
    return this._id;
  }

  public equal(other: Drama) {
    return this.identity().equals(other.identity());
  }

  public author() {
    return this._author;
  }

  public targetUser() {
    return this._targetUser;
  }

  public targetDrama() {
    return this._targetDrama;
  }

  public content() {
    return this._content;
  }

  public watchedEpisode() {
    return this._watchedEpisode;
  }
}
