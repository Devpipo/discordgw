client.on("message")
module.exports = {

    token: "ODMyMzAzODE3NzI2NzU0ODU2.YHh1VQ.KOne1SeGQhTIP-ulJdJTxaa34ZY", //Token bot

    idbot: "832303817726754856", //Bot ID

    prefix: "g!", //Bot prefix

    basiclang: "fr", //The basic language of the bot, "fr" for French and "en" for English

    embeds: {
        color: "BLUE", //Embed color (in English)
        footers: "Dev by Pipodraw" //Embed footer
    },

    start: {
        loading: "STREAMING", //Loading status
        activity: "g!help" //Status
    },

    events: {
        addcolor: "GREEN", //The color of the event add (in English)
        remcolor: "RED" //The color of the event remove (in English)
    },

    reaction: "🎉", //Reaction to the giveaways if you in the console you see 'unknown emoji' that's what this emoji is not recognized by Discord

    grole: "Giveaways", //If the member doesn't have permission to handle messages he can still use the giveaways commands if he has the role configured right here

    auth: {
        support: "https://discord.gg/hESjUR5k42", //The link of your Discord server
        dperms: "8" //The permissions that the bot asks on we want to add it on a Discord server (8 = moderator)
    },
};
