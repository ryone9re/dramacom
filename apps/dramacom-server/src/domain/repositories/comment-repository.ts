import type { Comment } from "../models/comment";
import type { ID } from "../value-objects/id";

export interface CommentRepository {
  list(limit: number, start?: ID): Promise<Comment[]>;
  findByID(id: ID): Promise<Comment | null>;
  save(comment: Comment): Promise<void>;
}
