// Import the framework and instantiate it
import Fastify from "fastify";
const fastify = Fastify({
	logger: true,
});

fastify.get("/", async function handler() {
	return "ok";
});

fastify.post("/", async function handler() {
	return "hello from child";
});

fastify.post("/app", async function handler() {
	return "hello from child";
});

// Run the server!
try {
	await fastify.listen({ port: 3000 });
} catch (err) {
	fastify.log.error(err);
	process.exit(1);
}
