import { Client, Collection } from "discord.js";
const client = new Client();

/* Events */
import message from "./events/message.js";
import ready from "./events/ready.js";

/* Commands */
import * as start_giveaway from "./commands/start-giveaway.js";
import * as reroll_giveaway from "./commands/reroll-giveaway.js";
import * as end_giveaway from "./commands/end-giveaway.js";

import config from "../config.json";
client.config = config;

// Init discord giveaways
import GiveawaysManager from "./Manager.js";
client.giveawaysManager = new GiveawaysManager(client, {
  storage: "./giveaways.json",
  updateCountdownEvery: 5000,
  default: {
    botsCanWin: false,
    embedColor: "#FF0000",
    reaction: "🎉",
  },
});
// We now have a client.giveawaysManager property to manage our giveaways!

client.giveawaysManager.on(
  "giveawayReactionAdded",
  (giveaway, member, reaction) => {
    console.log(
      `${member.user.tag} entered giveaway #${giveaway.messageID} (${reaction.emoji.name})`
    );
  }
);

client.giveawaysManager.on(
  "giveawayReactionRemoved",
  (giveaway, member, reaction) => {
    console.log(
      `${member.user.tag} unreact to giveaway #${giveaway.messageID} (${reaction.emoji.name})`
    );
  }
);

client.giveawaysManager.on("giveawayEnded", (giveaway, winners) => {
  console.log(
    `Giveaway #${giveaway.messageID} ended! Winners: ${winners
      .map((member) => member.user.username)
      .join(", ")}`
  );
});

client.on("message", message.bind(null, client));
client.on("ready", ready.bind(null, client));

client.commands = new Collection();

client.commands.set("start-giveaway", start_giveaway);
client.commands.set("reroll-giveaway", reroll_giveaway);
client.commands.set("end-giveaway", end_giveaway);

// Login
client.login(config.token);
