const {MessageActionRow, MessageSelectMenu} = require('discord.js')
module.exports = {
    name: 'ticket',
    usage: 'Şablon',
    category: "mod",
    description: `Şablon komutu.`,
    async execute(client, message, args) {
		message.delete()
        const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Oluşturulacak bilet türünü seçin.')
					.addOptions([
						{
							label: '💸 | Payment',
							description: 'Satın alımlar amacı ile bir bilet oluşturun!',
							value: 'ortaklık',
						},
						{
							label: '❓ | Question',
							description: 'Herhangi bir sorunuz olduğunda buradan bir bilet oluşturun!',
							value: 'şikayet',
						},
                        {
							label: '❌ | Seçim Sıfırlama',
							description: 'Yetkili alım başvurusunda bulunmak için bir bilet açın',
							value: 'iptal',
						},
					]),
			);

        message.channel.send({
            embeds: [{
                title: 'Bilet Açın',
                description: '**__Bir Bilet Nasıl Açılır :__**\nLütfen açmak istediğiniz bilet türünü seçin.',
                color: "RED",
                footer: {text: 'TheTomenTosaDev. Ticket'}
            }],
            components: [row]
        })
    }
}
