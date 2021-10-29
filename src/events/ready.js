export default (client) => {
  client.user.setActivity("crafty.gg/giveaway in custom status", {
    type: "WATCHING",
  });
  console.log(
    `Ready as ${client.user.tag} to serve in ${client.channels.cache.size} channels on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users.`
  );
};
