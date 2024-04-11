import { OpenAPIHono, createRoute, z } from "@hono/zod-openapi";
import { PostComment } from "../../../usecase/post-comment";
import {
  MemoryCommentRpositoryImpl,
  MemoryDramaRepositoryImpl,
  MemoryUserRepositoryImpl,
} from "../../memory/memory-repository-impl";

const schema = createRoute({
  method: "post",
  path: "/api/comment",
  request: {
    query: z
      .object({
        author: z.string().uuid().openapi({
          example: "8ef54669-8b92-c53e-e563-5f60405dde24",
          description: "コメントした人のID",
        }),
        targetUser: z.string().uuid().optional().openapi({
          example: "8ef54669-8b92-c53e-e563-5f60405dde24",
          description: "リプライ先のユーザーのID",
        }),
        targetDrama: z.string().uuid().openapi({
          example: "8ef54669-8b92-c53e-e563-5f60405dde24",
          description: "コメントするドラマのID",
        }),
        content: z.string().min(0).openapi({
          example: "このドラマすごい面白い！",
          description: "コメント内容",
        }),
        watchedEpisode: z.coerce.number().min(0),
      })
      .openapi("QueryParameters"),
  },
  responses: {
    201: {
      content: {
        "application/json": {
          schema: z.object({
            message: z.literal("success"),
          }),
        },
      },
      description: "成功メッセージが返る",
    },
  },
});

const route = new OpenAPIHono();

route.openapi(schema, async (c) => {
  const req = c.req.valid("query");

  await PostComment(
    {
      commentRepository: new MemoryCommentRpositoryImpl(),
      userRepository: new MemoryUserRepositoryImpl(),
      dramaRepository: new MemoryDramaRepositoryImpl(),
    },
    {
      author: req.author,
      targetUser: req.targetUser,
      targetDrama: req.targetDrama,
      content: req.content,
      watchedEpisode: req.watchedEpisode,
    },
  );

  return c.json({ message: "success" as const });
});

export default route;
