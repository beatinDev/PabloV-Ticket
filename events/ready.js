module.exports = {
    name: 'ready',
    once: true,

    async execute(client) {
        console.log(`${client.user.username} Giriş Yapıldı`)

        var KARISIKDURUM = 1
        setInterval(async () => {
            status =  [`PabloV`, `PC Optimizer`, `discord.gg/PabloV`]
            KARISIKDURUM = (KARISIKDURUM + 2) % (status.length);
            client.user.setPresence({
                activities: [{
                    name: `${status[KARISIKDURUM]}`,
                    type: "PLAYING",
                  }],
                  status: "ONLINE"})
        }, 5000);
    }
}
