import { OpenAPIHono, createRoute, z } from "@hono/zod-openapi";
import { CreateUser } from "../../../usecase/create-user";
import { MemoryUserRepositoryImpl } from "../../memory/memory-repository-impl";

const schema = createRoute({
  method: "post",
  path: "/api/user",
  request: {
    params: z.object({
      name: z
        .string()
        .min(0)
        .openapi({ example: "田中太郎", description: "ユーザー名" }),
    }),
  },
  responses: {
    201: {
      content: {
        "application/json": {
          schema: z.object({ message: z.literal("success") }),
        },
      },
      description: "コメント一覧を取得",
    },
  },
});

const route = new OpenAPIHono();

route.openapi(schema, async (c) => {
  const { name } = c.req.valid("param");

  await CreateUser(
    { userRepository: new MemoryUserRepositoryImpl() },
    { name },
  );

  return c.json({ message: "success" as const });
});

export default route;
