import { OpenAPIHono, createRoute, z } from "@hono/zod-openapi";
import { ShowDramaDetail } from "../../../usecase/show-drama-detail";
import { MemoryDramaRepositoryImpl } from "../../memory/memory-repository-impl";
import { dramaSchema } from "../schema/schema";

const schema = createRoute({
  method: "get",
  path: "/api/drama/:id",
  request: {
    params: z.object({
      id: z.string().uuid().openapi({
        example: "8ef54669-8b92-c53e-e563-5f60405dde24",
        description: "取得するドラマのID",
      }),
    }),
  },
  responses: {
    200: {
      content: {
        "application/json": {
          schema: dramaSchema,
        },
      },
      description: "ドラマ情報を取得",
    },
  },
});

const route = new OpenAPIHono();

route.openapi(schema, async (c) => {
  const { id } = c.req.valid("param");

  const output = await ShowDramaDetail(
    { dramaRepository: new MemoryDramaRepositoryImpl() },
    { id },
  );

  return c.json({
    id: output.id,
    description: output.description,
    number_of_episodes: output.numberOfEpisodes,
  });
});

export default route;
