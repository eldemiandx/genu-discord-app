// Variables de entorno de la APP.
export const env = Object.freeze({
	app_id: required("APP_ID"),
	guild_id: required("GUILD_ID"),
	client_secret: required("CLIENT_SECRET"),
	public_key: required("PUBLIC_KEY"),
	token: required("TOKEN"),
});

function required(name: string): string {
	const value = process.env[name];

	if (!value) {
		throw new Error(`Falta la variable de entorno: ${name}`);
	}
	return value;
}
