import type { Comment } from "../../domain/models/comment";
import type { Drama } from "../../domain/models/drama";
import type { User } from "../../domain/models/user";
import type { CommentRepository } from "../../domain/repositories/comment-repository";
import type { DramaRepository } from "../../domain/repositories/drama-repository";
import type { UserRepository } from "../../domain/repositories/user-repository";
import type { ID } from "../../domain/value-objects/id";

export class MemoryDramaRepositoryImpl implements DramaRepository {
  private memory: Drama[];

  constructor() {
    this.memory = [];
  }

  async list(limit: number, start?: ID | undefined): Promise<Drama[]> {
    let startIndex = 0;
    if (start) {
      startIndex = this.memory.findIndex((v) => v.identity().equals(start));
      if (startIndex < 0) {
        // TODO エラー実装
        throw new Error("Drama Not Found");
      }
    }
    return this.memory.slice(startIndex, startIndex + limit);
  }

  async findByID(id: ID): Promise<Drama | null> {
    const found = this.memory.find((v) => v.identity().equals(id));
    return found ?? null;
  }

  async save(drama: Drama): Promise<void> {
    this.memory.push(drama);
  }
}

export class MemoryCommentRpositoryImpl implements CommentRepository {
  private memory: Comment[];

  constructor() {
    this.memory = [];
  }

  async list(limit: number, start?: ID | undefined): Promise<Comment[]> {
    let startIndex = 0;
    if (start) {
      startIndex = this.memory.findIndex((v) => v.identity().equals(start));
      if (startIndex < 0) {
        // TODO エラー実装
        throw new Error("Drama Not Found");
      }
    }
    return this.memory.slice(startIndex, startIndex + limit);
  }

  async findByID(id: ID): Promise<Comment | null> {
    const found = this.memory.find((v) => v.identity().equals(id));
    return found ?? null;
  }

  async save(comment: Comment): Promise<void> {
    this.memory.push(comment);
  }
}

export class MemoryUserRepositoryImpl implements UserRepository {
  private memory: User[];

  constructor() {
    this.memory = [];
  }

  async findByID(id: ID): Promise<User | null> {
    const found = this.memory.find((v) => v.identity().equals(id));
    return found ?? null;
  }

  async save(user: User): Promise<void> {
    this.memory.push(user);
  }
}
