import { swaggerUI } from "@hono/swagger-ui";
import { OpenAPIHono } from "@hono/zod-openapi";
import commentGetRoute from "./routes/comment.get";
import commentPostRoute from "./routes/comment.post";
import dramaGetRoute from "./routes/drama.get";
import dramaIdGetRoute from "./routes/drama.id.get";
import userPostRoute from "./routes/user.post";

const app = new OpenAPIHono();
app
  .doc("/schema", {
    openapi: "3.0.0",
    info: { version: "1.0.0", title: "dramacom" },
  })
  .get("/ui", swaggerUI({ url: "schema" }))
  .route("/", commentGetRoute)
  .route("/", commentPostRoute)
  .route("/", dramaGetRoute)
  .route("/", dramaIdGetRoute)
  .route("/", userPostRoute);

export default app;
