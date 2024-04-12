import { OpenAPIHono, createRoute, z } from "@hono/zod-openapi";
import { HTTPException } from "hono/http-exception";
import type { StatusCode } from "hono/utils/http-status";
import { ShowDramaDetail } from "../../../usecase/show-drama-detail";
import { UsecaseError } from "../../../usecase/usecase-error";
import { MemoryDramaRepositoryImpl } from "../../memory/memory-repository-impl";
import { dramaSchema } from "../schema/schema";

const schema = createRoute({
  method: "get",
  path: "/api/drama/:id",
  request: {
    params: z.object({
      id: z.string().openapi({
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

  try {
    const output = await ShowDramaDetail(
      { dramaRepository: new MemoryDramaRepositoryImpl() },
      { id },
    );

    return c.json({
      id: output.id,
      title: output.title,
      description: output.description,
      casts: output.casts,
      director: output.director,
      thumbnail: output.thumbnail,
      episodes: output.episodes,
    });
  } catch (e) {
    if (e instanceof UsecaseError) {
      throw new HTTPException(e.httpHints as StatusCode, {
        message: e.message,
      });
    }

    throw e;
  }
});

export default route;
