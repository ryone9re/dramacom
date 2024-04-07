import type { Drama } from "../models/drama";
import type { ID } from "../value-objects/id";

export interface DramaRepository {
  list(limit: number, start?: ID): Promise<Drama[]>;
  findByID(id: ID): Promise<Drama | null>;
  save(drama: Drama): Promise<void>;
}
