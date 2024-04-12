import { z } from "@hono/zod-openapi";

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
  numberOfEpisodes: z
    .number()
    .positive()
    .openapi({ example: 13, description: "何話あるか" }),
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
