import { OpenAPIHono, createRoute, z } from "@hono/zod-openapi";
import { ShowDramaList } from "../../../usecase/show-drama-list";
import { MemoryDramaRepositoryImpl } from "../../memory/memory-repository-impl";
import { dramaSchema } from "../schema/schema";

const schema = createRoute({
  method: "get",
  path: "/api/drama",
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
    200: {
      content: {
        "application/json": {
          schema: z.array(dramaSchema),
        },
      },
      description: "ドラマ情報の一覧を取得",
    },
  },
});

const route = new OpenAPIHono();

route.openapi(schema, async (c) => {
  const { limit, start } = c.req.valid("query");

  const output = await ShowDramaList(
    { dramaRepository: new MemoryDramaRepositoryImpl() },
    { limit, start },
  );

  return c.json(
    output.map((v) => ({
      id: v.id,
      title: v.title,
      description: v.description,
      casts: v.casts,
      director: v.director,
      thumbnail: v.thumbnail,
      numberOfEpisodes: v.numberOfEpisodes,
    })),
  );
});

export default route;
