import { z } from "@hono/zod-openapi";

export const dramaEpisodeSchema = z.object({
  id: z.string().uuid().openapi({
    example: "8ef54669-8b92-c53e-e563-5f60405dde24",
    description: "ドラマの各エピソードのID",
  }),
  episodeNumber: z.coerce
    .number()
    .int()
    .positive()
    .openapi({ example: 1, description: "ドラマの話数" }),
  title: z
    .string()
    .openapi({ example: "物語の始まり", description: "エピソードのタイトル" }),
  summary: z.string().openapi({
    example: "おじいさんは山へ芝刈りに行きました。",
    description: "あらすじ",
  }),
});

export const dramaSchema = z.object({
  id: z.string().uuid().openapi({
    example: "8ef54669-8b92-c53e-e563-5f60405dde24",
    description: "ドラマのID",
  }),
  title: z.string().min(0).openapi({
    example: "ドラマタイトル",
    description: "ドラマのタイトルです",
  }),
  description: z.string().min(0).openapi({
    example: "こんな感じのドラマです",
    description: "ドラマの説明",
  }),
  casts: z.array(z.string()).openapi({
    example: ["田中太郎", "山田二郎"],
    description: "ドラマの出演者",
  }),
  director: z
    .array(z.string())
    .openapi({ example: ["鈴木一郎", "佐藤二朗"], description: "演出家など" }),
  thumbnail: z
    .string()
    .url()
    .openapi({ example: "http://example.com", description: "ドラマ画像のURL" }),
  episodes: z.array(dramaEpisodeSchema).openapi("DramaEpisode", {
    example: [
      {
        id: "3ced24ad-e5b3-4b51-217e-2cb79f205a07",
        title: "物語が始まる...",
        episodeNumber: 1,
        summary: "物語が始まるらしい...",
      },
      {
        id: "4ced24ad-e5b3-4b51-217e-2cb79f205a07",
        title: "物語が始まった...",
        episodeNumber: 2,
        summary: "物語が始まったらしい...",
      },
    ],
    description: "ドラマの各話",
  }),
});

export const userSchema = z.object({
  id: z.string().uuid().openapi({
    example: "8ef54669-8b92-c53e-e563-5f60405dde24",
    description: "ドラマのID",
  }),
  name: z
    .string()
    .min(0)
    .openapi({ example: "田中太郎", description: "ユーザー名" }),
});

export const commentSchema = z.object({
  id: z.string().uuid().openapi({
    example: "8ef54669-8b92-c53e-e563-5f60405dde24",
    description: "ドラマのID",
  }),
  author: z.string().uuid().openapi({ description: "コメントした人のID" }),
  targetUser: z.optional(
    z.string().uuid().openapi({ description: "リプライ先のユーザーのID" }),
  ),
  targetDrama: z.string().uuid().openapi({
    description: "コメントしたのドラマのID",
  }),
  content: z
    .string()
    .openapi({ example: "おもしろい！", description: "コメント内容" }),
  watchedEpisode: z
    .number()
    .int()
    .positive()
    .openapi({ example: 5, description: "何話見た時点のコメントか" }),
});
