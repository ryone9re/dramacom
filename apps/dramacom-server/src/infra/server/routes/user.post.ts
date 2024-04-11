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
          schema: z.object({
            id: z.string().uuid().openapi({
              example: "8ef54669-8b92-c53e-e563-5f60405dde24",
              description: "ユーザーID",
            }),
            name: z
              .string()
              .min(1)
              .openapi({ example: "田中太郎", description: "ユーザー名" }),
          }),
        },
      },
      description: "成功時には成功レスポンスが返る",
    },
  },
});

const route = new OpenAPIHono();

route.openapi(schema, async (c) => {
  const { name } = c.req.valid("param");

  const output = await CreateUser(
    { userRepository: new MemoryUserRepositoryImpl() },
    { name },
  );

  return c.json({ id: output.id, name: output.name });
});

export default route;
