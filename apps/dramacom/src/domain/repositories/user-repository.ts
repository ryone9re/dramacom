import type { User } from "../models/user";
import type { ID } from "../value-objects/id";

export interface UserRepository {
  findByID(id: ID): Promise<User | null>;
  save(user: User): Promise<void>;
}
