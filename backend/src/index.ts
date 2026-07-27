import { Client, Events, GatewayIntentBits } from "discord.js";
import { env } from "#core/env.ts";

/* ======================================== */
// APP de Discord

const app = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
});

app.on(Events.ClientReady, (client) => {
	console.log(`APP iniciada como ${client.user.displayName}.`);
});

app.on(Events.MessageCreate, (message) => {
	if (message.content === "ping") {
		message.reply("Pong!");
	}
});

app.on(Events.InteractionCreate, (interaction) => {
	if (!interaction.isChatInputCommand()) return;

	if (interaction.commandName === "add") {
		const num1 = interaction.options.getNumber("first-number", true);
		const num2 = interaction.options.getNumber("second-number", true);
		const suma = num1 + num2;
		``;
		interaction.reply({ content: `${suma}`, withResponse: true });
		console.log(interaction.commandName);
	}

	if (interaction.commandName === "ping") {
		interaction.reply({ content: "Pong!", withResponse: true });
		console.log(interaction.commandName);
	}
});

app.login(env.token);
