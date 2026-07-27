import { none } from "#controllers/noneController.ts";
import { root } from "#controllers/rootController.ts";

export function routes(req: Request) {
	const { url } = req;
	const { pathname } = new URL(url);

	if (pathname === "/") {
		return root();
	}

	if (pathname === "/form") {
		return form(req);
	}

	return none();
}

// FUNCTIONS

async function form(req: Request) {
	const form = await req.formData();

	console.log(form);

	return Response.json({
		ok: true,
	});
}
