import { Comment } from "../../domain/models/comment";
import { Drama, DramaEpisode } from "../../domain/models/drama";
import { User } from "../../domain/models/user";
import type { CommentRepository } from "../../domain/repositories/comment-repository";
import type { DramaRepository } from "../../domain/repositories/drama-repository";
import type { UserRepository } from "../../domain/repositories/user-repository";
import { ID } from "../../domain/value-objects/id";

export class MemoryDramaRepositoryImpl implements DramaRepository {
  private memory: Drama[];

  constructor() {
    this.memory = [
      new Drama({
        id: new ID("ed08e30a-dcb8-2f38-9cd7-bb34b462be7e"),
        title: "虎に翼",
        description:
          "伊藤沙莉主演で、日本初の女性弁護士で後に裁判官となった一人の女性を描く。昭和のはじめ、日本初の女性専門に法律を教える学校ができ、寅子(伊藤)らは自らの道を切り開くため法律を学んでいく。しかし、昭和13(1938)年、卒業し弁護士として世に出た彼女たちを待ち受けていたのは戦争に向かう日本だった。",
        casts: ["尾野真千子", "伊藤沙莉", "石田ゆり子", "岡部たけし"],
        director: ["吉田恵里香", "梛川善郎"],
        thumbnail: "https://thetv.jp/i/pgw/program_images/0001000531_11_v.jpg",
        episodes: [
          new DramaEpisode({
            id: new ID("3ced24ad-e5b3-4b51-217e-2cb79f205a07"),
            title: "物語が始まる...",
            episodeNumber: 1,
            summary: "物語が始まるらしい...",
          }),
          new DramaEpisode({
            id: new ID("4ced24ad-e5b3-4b51-217e-2cb79f205a07"),
            title: "物語が始まった...",
            episodeNumber: 2,
            summary: "物語が始まったらしい...",
          }),
        ],
      }),
      new Drama({
        id: new ID("922652a3-5380-4989-c8a1-84254d998fe1"),
        title: "シークレット同盟",
        description:
          "Leroによる韓国発の同名漫画を松井愛莉主演で実写ドラマ化。大学内でも一目置かれるイケメン女子・詩杏(松井)は、男性恐怖症と母親の過干渉という悩みを抱えている。そんな詩杏の前に、突如現れた容姿端麗な大学の後輩・律子(長野凌大)。親切な彼女は、実は詩杏に好意を寄せるストーカーだった。",
        casts: ["松井愛莉", "長野凌大", "長妻怜央", "しゅはまはるみ"],
        director: ["レロ", "本田隆一", "大山晃一郎", "山崎佐保子", "合田純奈"],
        thumbnail:
          "https://thetv.jp/i/pgw/series_images/0001004362_v.jpg?w=716",
        episodes: [
          new DramaEpisode({
            id: new ID("3ced24ad-e5b3-4b51-217e-2cb79f205a07"),
            title: "物語が始まる...",
            episodeNumber: 1,
            summary: "物語が始まるらしい...",
          }),
          new DramaEpisode({
            id: new ID("4ced24ad-e5b3-4b51-217e-2cb79f205a07"),
            title: "物語が始まった...",
            episodeNumber: 2,
            summary: "物語が始まったらしい...",
          }),
          new DramaEpisode({
            id: new ID("5ced24ad-e5b3-4b51-217e-2cb79f205a07"),
            title: "物語が始まっている...",
            episodeNumber: 3,
            summary: "物語が始まっているらしい...",
          }),
        ],
      }),
    ];
  }

  async list(limit: number, start?: ID | undefined): Promise<Drama[]> {
    let startIndex = 0;
    if (start) {
      startIndex = this.memory.findIndex((v) => v.identity().equals(start));
      if (startIndex < 0) {
        return [];
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
    this.memory = [
      new Comment({
        id: ID.generate(),
        author: new User({ id: ID.generate(), name: "山田二郎" }),
        targetUser: null,
        targetDrama: new Drama({
          id: new ID("ed08e30a-dcb8-2f38-9cd7-bb34b462be7e"),
          title: "虎に翼",
          description:
            "伊藤沙莉主演で、日本初の女性弁護士で後に裁判官となった一人の女性を描く。昭和のはじめ、日本初の女性専門に法律を教える学校ができ、寅子(伊藤)らは自らの道を切り開くため法律を学んでいく。しかし、昭和13(1938)年、卒業し弁護士として世に出た彼女たちを待ち受けていたのは戦争に向かう日本だった。",
          casts: ["尾野真千子", "伊藤沙莉", "石田ゆり子", "岡部たけし"],
          director: ["吉田恵里香", "梛川善郎"],
          thumbnail:
            "https://thetv.jp/i/pgw/program_images/0001000531_11_v.jpg",
          episodes: [
            new DramaEpisode({
              id: new ID("3ced24ad-e5b3-4b51-217e-2cb79f205a07"),
              title: "物語が始まる...",
              episodeNumber: 1,
              summary: "物語が始まるらしい...",
            }),
            new DramaEpisode({
              id: new ID("4ced24ad-e5b3-4b51-217e-2cb79f205a07"),
              title: "物語が始まった...",
              episodeNumber: 2,
              summary: "物語が始まったらしい...",
            }),
          ],
        }),
        content: "めっちゃおもしろい！！！",
        watchedEpisode: 1,
      }),
      new Comment({
        id: ID.generate(),
        author: new User({ id: ID.generate(), name: "山田二郎" }),
        targetUser: null,
        targetDrama: new Drama({
          id: new ID("ed08e30a-dcb8-2f38-9cd7-bb34b462be7e"),
          title: "虎に翼",
          description:
            "伊藤沙莉主演で、日本初の女性弁護士で後に裁判官となった一人の女性を描く。昭和のはじめ、日本初の女性専門に法律を教える学校ができ、寅子(伊藤)らは自らの道を切り開くため法律を学んでいく。しかし、昭和13(1938)年、卒業し弁護士として世に出た彼女たちを待ち受けていたのは戦争に向かう日本だった。",
          casts: ["尾野真千子", "伊藤沙莉", "石田ゆり子", "岡部たけし"],
          director: ["吉田恵里香", "梛川善郎"],
          thumbnail:
            "https://thetv.jp/i/pgw/program_images/0001000531_11_v.jpg",
          episodes: [
            new DramaEpisode({
              id: new ID("3ced24ad-e5b3-4b51-217e-2cb79f205a07"),
              title: "物語が始まる...",
              episodeNumber: 1,
              summary: "物語が始まるらしい...",
            }),
            new DramaEpisode({
              id: new ID("4ced24ad-e5b3-4b51-217e-2cb79f205a07"),
              title: "物語が始まった...",
              episodeNumber: 2,
              summary: "物語が始まったらしい...",
            }),
          ],
        }),
        content: "いいかんじ！！",
        watchedEpisode: 1,
      }),
    ];
  }

  async list(limit: number, start?: ID | undefined): Promise<Comment[]> {
    let startIndex = 0;
    if (start) {
      startIndex = this.memory.findIndex((v) => v.identity().equals(start));
      if (startIndex < 0) {
        return [];
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
