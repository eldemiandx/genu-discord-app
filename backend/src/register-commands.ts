import { ApplicationCommandOptionType, REST, Routes } from "discord.js";
import { env } from "#core/env.ts";

const commands = [
	{
		name: "ping",
		description: "Indica si la APP está activa.",
	},
	{
		name: "add",
		description: "Sumá dos números.",
		options: [
			{
				name: "first-number",
				description: "El primer número.",
				type: ApplicationCommandOptionType.Number,
				require: true,
			},
			{
				name: "second-number",
				description: "El segundo número.",
				type: ApplicationCommandOptionType.Number,
				require: true,
			},
		],
	},
];

const rest = new REST().setToken(env.token);

(async () => {
	try {
		console.log("Registrando comandos...");

		await rest.put(Routes.applicationGuildCommands(env.app_id, env.guild_id), {
			body: commands,
		});

		console.log(`Registrados ${commands.length} comandos.`);
	} catch (error) {
		console.log(`[ERROR]: ${error}`);
	}
})();
