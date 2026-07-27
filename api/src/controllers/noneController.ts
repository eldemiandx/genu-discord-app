export function none() {
	return Response.json(
		{
			msg: "Ni idea bro...",
		},
		{
			status: 404,
		},
	);
}
