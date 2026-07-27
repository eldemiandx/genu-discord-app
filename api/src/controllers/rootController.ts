export function root() {
	return Response.json(
		{
			message: "Hola mundo",
		},
		{
			status: 200,
		},
	);
}
