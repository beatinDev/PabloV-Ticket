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
					.setPlaceholder('Lütfen talebinizin türünü seçiniz.')
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
                title: 'PabloV Ticket - Destek Sistemi',
                description: 'Lütfen talebiniz ile eşleşen ***başlığı*** seçerek biletinizi oluşturunuz.  \<:beatiNkalp:1016073458364465243>',
              image: {
              url: "https://i.hizliresim.com/lkiq0ps.png"
              },  
              color: "RANDOM",
                footer: {text: 'PabloV | PC Optimizer'}
            }],
            components: [row]
        })
    }
}
