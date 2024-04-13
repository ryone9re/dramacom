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
          new DramaEpisode({
            id: new ID("5ced24ad-e5b3-4b51-217e-2cb79f205a07"),
            title: "物語が始まっている...",
            episodeNumber: 3,
            summary: "物語が始まっているらしい...",
          }),

          new DramaEpisode({
            id: new ID("c9a74544-b606-4e79-a159-e0f1a3a3a2b8"),
            title: "初めての転機",
            episodeNumber: 4,
            summary: "主人公が初めての大きな決断を迫られる...",
          }),

          new DramaEpisode({
            id: new ID("4ae9b7f8-d7ad-47a9-88fe-c258db305b52"),
            title: "新たな出会い",
            episodeNumber: 5,
            summary: "新しい重要なキャラクターが登場する...",
          }),

          new DramaEpisode({
            id: new ID("96d47a24-f17b-4b4d-af80-2331c541f667"),
            title: "過去の影",
            episodeNumber: 6,
            summary: "主人公の過去が徐々に明らかになる...",
          }),

          new DramaEpisode({
            id: new ID("36e6d23e-098f-48f2-8c24-d1f14a9e3a0e"),
            title: "隠された真実",
            episodeNumber: 7,
            summary: "隠されていた真実が明らかになり、物語が加速する...",
          }),

          new DramaEpisode({
            id: new ID("5cb5d088-3bf0-4d14-a5cf-c2f69b417d3e"),
            title: "断ち切れない絆",
            episodeNumber: 8,
            summary: "主人公と仲間たちの絆が試される事件が発生...",
          }),

          new DramaEpisode({
            id: new ID("2d4fd28c-d8f0-4e57-9352-255f567abc43"),
            title: "秘密の計画",
            episodeNumber: 9,
            summary: "敵対する勢力が秘密の計画を進行中であることが判明...",
          }),

          new DramaEpisode({
            id: new ID("7f1d89af-ffb1-485e-9811-e20f1f713f4b"),
            title: "決断の時",
            episodeNumber: 10,
            summary: "クライマックスに向けて、主人公が重大な決断を下す...",
          }),

          new DramaEpisode({
            id: new ID("0edc21be-5285-4a75-bb8e-b70c3e4e03e5"),
            title: "最後の戦い",
            episodeNumber: 11,
            summary: "物語が最高潮に達し、すべてがかかった戦いが始まる...",
          }),

          new DramaEpisode({
            id: new ID("63f3d213-44b6-4995-a5e7-2d6f89baff84"),
            title: "物語の終わりと新たな始まり",
            episodeNumber: 12,
            summary: "物語が終わりを迎えるが、新たな章が予感される...",
          })
        ],
      }),
      new Drama({
        id: new ID("dd08e40b-dcb8-2f38-9cd7-bb34b462bf8f"),
        title: "花咲舞が黙ってない",
        description:
          "新シリーズで今田さんが演じる花咲舞は、大手銀行の窓口係から突然、本部の臨店班に異動になり、毎回訪問する支店で巻き起こる事件や不祥事をスッキリ、ズバッと見事に解決していく。 不正を絶対に見て見ぬふりできない花咲舞は、弱い立場の人たちのために立ち上がる痛快エンターテインメント作品となる。",
        casts: ["窪田正孝", "有村架純", "小池徹平", "松雪泰子"],
        director: ["金子修介", "田中光敏"],
        thumbnail: "https://www.ntv.co.jp/hanasakimai1/images/og_image.jpg",
        episodes: [
          new DramaEpisode({
            id: new ID("1ced24ad-e5b3-4b51-217e-2cb79f205a12"),
            title: "新たなる希望",
            episodeNumber: 1,
            summary: "新治療法の開発が始まる。",
          }),
          new DramaEpisode({
            id: new ID("2ced24ad-e5b3-4b51-217e-2cb79f205a13"),
            title: "試練の時",
            episodeNumber: 2,
            summary: "最初の患者に試みられる新治療。",
          }),
          // 追加エピソード情報...
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
      new Drama({
        id: new ID("dd08e40b-dcb8-2f38-9cd7-bb34b462bf8f"),
        title: "花咲舞が黙ってない",
        description:
          "新シリーズで今田さんが演じる花咲舞は、大手銀行の窓口係から突然、本部の臨店班に異動になり、毎回訪問する支店で巻き起こる事件や不祥事をスッキリ、ズバッと見事に解決していく。 不正を絶対に見て見ぬふりできない花咲舞は、弱い立場の人たちのために立ち上がる痛快エンターテインメント作品となる。",
        casts: ["窪田正孝", "有村架純", "小池徹平", "松雪泰子"],
        director: ["金子修介", "田中光敏"],
        thumbnail: "https://www.ntv.co.jp/hanasakimai1/images/og_image.jpg",
        episodes: [
          new DramaEpisode({
            id: new ID("1ced24ad-e5b3-4b51-217e-2cb79f205a12"),
            title: "新たなる希望",
            episodeNumber: 1,
            summary: "新治療法の開発が始まる。",
          }),
          new DramaEpisode({
            id: new ID("2ced24ad-e5b3-4b51-217e-2cb79f205a13"),
            title: "試練の時",
            episodeNumber: 2,
            summary: "最初の患者に試みられる新治療。",
          }),
          // 追加エピソード情報...
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
            new DramaEpisode({
              id: new ID("5ced24ad-e5b3-4b51-217e-2cb79f205a07"),
              title: "物語が始まっている...",
              episodeNumber: 3,
              summary: "物語が始まっているらしい...",
            }),

            new DramaEpisode({
              id: new ID("c9a74544-b606-4e79-a159-e0f1a3a3a2b8"),
              title: "初めての転機",
              episodeNumber: 4,
              summary: "主人公が初めての大きな決断を迫られる...",
            }),

            new DramaEpisode({
              id: new ID("4ae9b7f8-d7ad-47a9-88fe-c258db305b52"),
              title: "新たな出会い",
              episodeNumber: 5,
              summary: "新しい重要なキャラクターが登場する...",
            }),

            new DramaEpisode({
              id: new ID("96d47a24-f17b-4b4d-af80-2331c541f667"),
              title: "過去の影",
              episodeNumber: 6,
              summary: "主人公の過去が徐々に明らかになる...",
            }),

            new DramaEpisode({
              id: new ID("36e6d23e-098f-48f2-8c24-d1f14a9e3a0e"),
              title: "隠された真実",
              episodeNumber: 7,
              summary: "隠されていた真実が明らかになり、物語が加速する...",
            }),

            new DramaEpisode({
              id: new ID("5cb5d088-3bf0-4d14-a5cf-c2f69b417d3e"),
              title: "断ち切れない絆",
              episodeNumber: 8,
              summary: "主人公と仲間たちの絆が試される事件が発生...",
            }),

            new DramaEpisode({
              id: new ID("2d4fd28c-d8f0-4e57-9352-255f567abc43"),
              title: "秘密の計画",
              episodeNumber: 9,
              summary: "敵対する勢力が秘密の計画を進行中であることが判明...",
            }),

            new DramaEpisode({
              id: new ID("7f1d89af-ffb1-485e-9811-e20f1f713f4b"),
              title: "決断の時",
              episodeNumber: 10,
              summary: "クライマックスに向けて、主人公が重大な決断を下す...",
            }),

            new DramaEpisode({
              id: new ID("0edc21be-5285-4a75-bb8e-b70c3e4e03e5"),
              title: "最後の戦い",
              episodeNumber: 11,
              summary: "物語が最高潮に達し、すべてがかかった戦いが始まる...",
            }),

            new DramaEpisode({
              id: new ID("63f3d213-44b6-4995-a5e7-2d6f89baff84"),
              title: "物語の終わりと新たな始まり",
              episodeNumber: 12,
              summary: "物語が終わりを迎えるが、新たな章が予感される...",
            })

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
            new DramaEpisode({
              id: new ID("5ced24ad-e5b3-4b51-217e-2cb79f205a07"),
              title: "物語が始まっている...",
              episodeNumber: 3,
              summary: "物語が始まっているらしい...",
            }),
            new DramaEpisode({
              id: new ID("c9a74544-b606-4e79-a159-e0f1a3a3a2b8"),
              title: "初めての転機",
              episodeNumber: 4,
              summary: "主人公が初めての大きな決断を迫られる...",
            }),
            new DramaEpisode({
              id: new ID("4ae9b7f8-d7ad-47a9-88fe-c258db305b52"),
              title: "新たな出会い",
              episodeNumber: 5,
              summary: "新しい重要なキャラクターが登場する...",
            }),
            new DramaEpisode({
              id: new ID("96d47a24-f17b-4b4d-af80-2331c541f667"),
              title: "過去の影",
              episodeNumber: 6,
              summary: "主人公の過去が徐々に明らかになる...",
            }),
            new DramaEpisode({
              id: new ID("36e6d23e-098f-48f2-8c24-d1f14a9e3a0e"),
              title: "隠された真実",
              episodeNumber: 7,
              summary: "隠されていた真実が明らかになり、物語が加速する...",
            }),
            new DramaEpisode({
              id: new ID("5cb5d088-3bf0-4d14-a5cf-c2f69b417d3e"),
              title: "断ち切れない絆",
              episodeNumber: 8,
              summary: "主人公と仲間たちの絆が試される事件が発生...",
            }),
            new DramaEpisode({
              id: new ID("2d4fd28c-d8f0-4e57-9352-255f567abc43"),
              title: "秘密の計画",
              episodeNumber: 9,
              summary: "敵対する勢力が秘密の計画を進行中であることが判明...",
            }),
            new DramaEpisode({
              id: new ID("7f1d89af-ffb1-485e-9811-e20f1f713f4b"),
              title: "決断の時",
              episodeNumber: 10,
              summary: "クライマックスに向けて、主人公が重大な決断を下す...",
            }),
            new DramaEpisode({
              id: new ID("0edc21be-5285-4a75-bb8e-b70c3e4e03e5"),
              title: "最後の戦い",
              episodeNumber: 11,
              summary: "物語が最高潮に達し、すべてがかかった戦いが始まる...",
            }),
            new DramaEpisode({
              id: new ID("63f3d213-44b6-4995-a5e7-2d6f89baff84"),
              title: "物語の終わりと新たな始まり",
              episodeNumber: 12,
              summary: "物語が終わりを迎えるが、新たな章が予感される...",
            })
          ],
        }),
        content: "いいかんじ！！",
        watchedEpisode: 1,
      }),
      new Comment({
        id: ID.generate(),
        author: new User({ id: ID.generate(), name: "鈴木一郎" }),
        targetUser: null,
        targetDrama: new Drama({
          id: new ID("dd08e40b-dcb8-2f38-9cd7-bb34b462bf8f"),
          title: "花咲舞が黙ってない",
          description:
            "新シリーズで今田さんが演じる花咲舞は、大手銀行の窓口係から突然、本部の臨店班に異動になり、毎回訪問する支店で巻き起こる事件や不祥事をスッキリ、ズバッと見事に解決していく。 不正を絶対に見て見ぬふりできない花咲舞は、弱い立場の人たちのために立ち上がる痛快エンターテインメント作品となる。",
          casts: ["窪田正孝", "有村架純", "小池徹平", "松雪泰子"],
          director: ["金子修介", "田中光敏"],
          thumbnail: "https://www.ntv.co.jp/hanasakimai1/images/og_image.jpg",
          episodes: [
            new DramaEpisode({
              id: new ID("1ced24ad-e5b3-4b51-217e-2cb79f205a12"),
              title: "新たなる希望",
              episodeNumber: 1,
              summary: "新治療法の開発が始まる。",
            }),
            new DramaEpisode({
              id: new ID("2ced24ad-e5b3-4b51-217e-2cb79f205a13"),
              title: "試練の時",
              episodeNumber: 2,
              summary: "最初の患者に試みられる新治療。",
            }),
            // 追加エピソード情報...
          ],
        }),
        content: "とても感動しました！",
        watchedEpisode: 2,
      }),
      new Comment({
        id: ID.generate(),
        author: new User({ id: ID.generate(), name: "佐藤恵子" }),
        targetUser: null,
        targetDrama: new Drama({
          id: new ID("ff08e50c-dcb8-2f38-9cd7-bb34b462bg9g"),
          title: "星に願いを",
          description:
            "小さな村の小学校を舞台にしたヒューマンドラマ。新任教師が、閉鎖間近の学校で子供たちと共に夢を追いかける物語。",
          casts: ["新垣結衣", "生田斗真", "北村一輝", "鈴木京香"],
          director: ["岩井俊二", "横浜聡子"],
          thumbnail: "https://example.com/hoshininegaiwo_thumbnail.jpg",
          episodes: [
            new DramaEpisode({
              id: new ID("3ced24ad-e5b3-4b51-217e-2cb79f205a14"),
              title: "始まりの鐘",
              episodeNumber: 1,
              summary: "新任教師が村の学校に着任する。",
            }),
            new DramaEpisode({
              id: new ID("4ced24ad-e5b3-4b51-217e-2cb79f205a15"),
              title: "夢を語る夜",
              episodeNumber: 2,
              summary: "子供たちとの絆が深まる一夜。",
            }),
            // 追加エピソード情報...
          ],
        }),
        content: "心温まるストーリーですね。",
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
