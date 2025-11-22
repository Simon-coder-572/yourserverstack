import Fastify from "fastify";

const app = Fastify();

app.get("/", () => {
  return { ok: true };
});

app.listen({ port: 3000 }, () => {
  console.log("server draait");
});
