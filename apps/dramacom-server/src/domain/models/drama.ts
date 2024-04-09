import type { Entity } from "../../util/utility-types";
import { ID } from "../value-objects/id";

export class Drama implements Entity<ID> {
  private _id: ID;
  private _description = "";
  private _numberOfEpisodes: number;

  constructor({
    id,
    description,
    numberOfEpisodes,
  }: { id: ID; description?: string; numberOfEpisodes: number }) {
    this._id = id;
    if (description) {
      this._description = description;
    }
    this._numberOfEpisodes = numberOfEpisodes;
  }

  public new({
    description,
    numberOfEpisodes,
  }: { description?: string; numberOfEpisodes: number }) {
    return new Drama({ id: ID.generate(), description, numberOfEpisodes });
  }

  public identity() {
    return this._id;
  }

  public equal(other: Drama) {
    return this.identity().equals(other.identity());
  }

  public description() {
    return this._description;
  }

  public numberOfEpisodes() {
    return this._numberOfEpisodes;
  }
}
