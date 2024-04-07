import type { Entity } from "../../util/utility-types";
import { ID } from "../value-objects/id";

export class User implements Entity<ID> {
  private _id: ID;
  private _name: string;

  constructor({ id, name }: { id: ID; name: string }) {
    this._id = id;
    this._name = name;
  }

  public static new({ name }: { name: string }) {
    return new User({ id: ID.generate(), name });
  }

  public identity(): ID {
    return this._id;
  }

  public equal(other: Entity<ID>): boolean {
    return this.identity().equals(other.identity());
  }

  public name() {
    return this._name;
  }
}
