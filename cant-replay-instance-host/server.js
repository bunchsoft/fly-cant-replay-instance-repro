// Import the framework and instantiate it
import Fastify from "fastify";
const fastify = Fastify({
	logger: true,
});

fastify.get("/", async function handler() {
	return "ok";
});

fastify.post("/", async function handler(request, reply) {
	const { instanceId } = request.body;
	console.log(instanceId);
	reply
		.code(204)
		.header("fly-replay", "instance=" + instanceId)
		.send("");
});

fastify.post("/app", async function handler(request, reply) {
	const { instanceId } = request.body;
	console.log(instanceId);
	reply.code(204).header("fly-replay", "app=cant-replay-instance-child").send("");
});

// Run the server!
try {
	await fastify.listen({ port: 3000 });
} catch (err) {
	fastify.log.error(err);
	process.exit(1);
}
