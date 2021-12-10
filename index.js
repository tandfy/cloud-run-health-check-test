const fastify = require("fastify")({
  logger: true,
});

fastify.get("/hello", () => {
  return "world";
});

fastify.get("/error", () => {
  throw new Error("error");
});

fastify.get("/crash", () => {
  process.exit(1);
});

if (Math.random() < 0.5) fastify.listen(8080, "0.0.0.0");
