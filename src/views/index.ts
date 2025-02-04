import { Elysia } from "elysia";
import Home from "./Home";
import { html } from "@elysiajs/html";

const views = (app: Elysia) => app
.use(html())
.get('/', Home)
export default views