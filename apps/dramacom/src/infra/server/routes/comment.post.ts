import { OpenAPIHono, createRoute, z } from "@hono/zod-openapi";
import { ShowCommentList } from "../../../usecase/show-comment-list";
import { MemoryCommentRpositoryImpl } from "../../memory/memory-repository-impl";
import { commentSchema } from "../schema/schema";

const schema = createRoute({
  method: "post",
  path: "/api/comment",
  request: {
    query: z
      .object({
        limit: z.coerce
          .number()
          .int()
          .positive()
          .openapi({ example: 10, description: "取得上限" }),
        start: z.optional(z.string().uuid()).openapi({
          example: "8ef54669-8b92-c53e-e563-5f60405dde24",
          description: "リストのはじめの要素のID",
        }),
      })
      .openapi("QueryParameters"),
  },
  responses: {
    201: {
      content: {
        "application/json": {
          schema: z.array(commentSchema),
        },
      },
      description: "コメント一覧を取得",
    },
  },
});

const route = new OpenAPIHono();

route.openapi(schema, async (c) => {
  const { limit, start } = c.req.valid("query");

  const output = await ShowCommentList(
    { commentRepository: new MemoryCommentRpositoryImpl() },
    { limit, start },
  );

  return c.json(
    output.map((v) => ({
      id: v.id,
      author: v.author,
      targetUser: v.targetUser,
      targetDrama: v.targetDrama,
      content: v.content,
      watchedEpisode: v.watchedEpisode,
    })),
  );
});

export default route;
