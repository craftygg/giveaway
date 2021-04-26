import Discord from 'discord.js';

export const GiveawayMessages = {};

export const GiveawayStartOptions = {};

export const defaultGiveawayMessages = {
	giveaway: '@everyone\n\n🎉🎉 **GIVEAWAY** 🎉🎉',
	giveawayEnded: '@everyone\n\n🎉🎉 **GIVEAWAY ENDED** 🎉🎉',
	inviteToParticipate: 'React with 🎉 to participate!\n Make sure that `crafty.gg/giveaway` is your status and you are online.',
	timeRemaining: 'Time remaining: **{duration}**',
	winMessage: 'Congratulations, {winners}! You won **{prize}**!\n{messageURL}',
	embedFooter: 'Powered by the discord-giveaways package',
	noWinner: 'Giveaway cancelled, no valid participations.',
	winners: 'winner(s)',
	endedAt: 'End at',
	hostedBy: 'Hosted by: {user}',
	units: {
		seconds: 'seconds',
		minutes: 'minutes',
		hours: 'hours',
		days: 'days',
		pluralS: false,
	},
};

export const GiveawaysManagerOptions = {};

export const defaultManagerOptions = {
	storage: './giveaways.json',
	updateCountdownEvery: 5000,
	endedGiveawaysLifetime: 0,
	hasGuildMemberIntent: false,
	default: {
		botsCanWin: false,
		exemptPermissions: [Discord.Permissions.FLAGS.ADMINISTRATOR, Discord.Permissions.FLAGS.MANAGE_MESSAGES],
		exemptMembers: () => false,
		embedColor: '#FF0000',
		reaction: '🎉',
	},
};

export const GiveawayRerollOptions = {};

export const defaultRerollOptions = {
	winnerCount: null,
	messages: {
		congrat: ':tada: New winner(s) : {winners}! Congratulations!\n{messageURL}',
		error: 'No valid participations, no winners can be chosen!',
	},
};

export const GiveawayEditOptions = {};

export const GiveawayData = {};
