export default function AuthRoutes(fastify, opts, done) {
  fastify.post("/register", {}, (request, reply) => {
    // register user
  });

  fastify.post("/authorize", {}, (request, reply) => {
    // authorize user
  });

  done();
}
