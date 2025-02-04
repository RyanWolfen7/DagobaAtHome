import { Elysia } from "elysia";
import views from "./views";

const app = new Elysia()
.use(views)
.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
