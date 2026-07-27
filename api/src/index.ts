import { serve } from "bun";
import { routes } from "#routes/routes.ts";


const server = serve({
	port: 3000,
	fetch: (req) => {
		return routes(req);
	},
});

console.log(`¡Servidor iniciado! Escuchando: ${server.url}`);