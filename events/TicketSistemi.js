const {Permissions, MessageEmbed, MessageActionRow, MessageSelectMenu }=require('discord.js')
const { kategori, yetkili } = require('../config.json');
module.exports = {
    name: 'interactionCreate',
    async execute(client, interaction) {
        if (!interaction.isSelectMenu()) return;
        
	const row = new MessageActionRow()
                .addComponents(
                    new MessageSelectMenu()
                    .setCustomId('del')
                    .setPlaceholder('Bileti silmek için seçin!')
					.addOptions([
						{
							label: '🔥 Silinen bilet',
							description: 'Kanalı sil',
							value: 'delete',
						}
					])
                );
                
                
        let catégorie = kategori
        let roleStaff = interaction.guild.roles.cache.get(yetkili)

        let DejaUnChannel = interaction.guild.channels.cache.find(c => c.topic == interaction.user.id)
        
        if(interaction.customId === "del") {
            if (interaction.values[0] == "delete") {
                const channel = interaction.channel
                channel.delete();
              
            }
        }

        if (interaction.customId == "select") {
            if (DejaUnChannel) return interaction.reply({content: 'Sunucuda zaten açık bir biletiniz var.', ephemeral: true})
            if (interaction.values[0] == "yetkili") {
                interaction.guild.channels.create(`ticket-${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const yetkili = new MessageEmbed()
                    .setTitle('Yetkili alım başvurusu yapmak için bilet')
                    .setDescription('Lütfen başvurunuzu detaylandırın, böylece bir sunucu moderatörü sorumluluğu üstlenecek.')
                    .setFooter('TheTomenTosaDev. Ticket')
                    c.send({embeds: [yetkili], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `<:art:970266097913827348> Biletiniz başarıyla açıldı. <#${c.id}>`, ephemeral: true})
                })
                
            } else if (interaction.values[0] == "şikayet") {
                interaction.guild.channels.create(`ticket-${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const şikayet = new MessageEmbed()
                    .setTitle('❓ | Question bileti.')
                    .setDescription('Selamlar, öncelikle <#1013877435458129981> kanalını dikkatlice okuyunuz, sorunuz kanalda bulunmuyor ise dilediğiniz gibi soru sorabilirsiniz.')
                    .setFooter('PabloV | PC Optimizer')
                    c.send({embeds: [şikayet], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `❓ | ***Biletiniz başarı ile açıldı!*** <#${c.id}>`, ephemeral: true})
                })
            } else if (interaction.values[0] == "ortaklık") {
                interaction.guild.channels.create(`ticket-${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const embed = new MessageEmbed()
                    .setTitle('💸 | Payment bileti.')
                    .setDescription('Selamlar, <#1016001324778799125> ve <#1013877435458129981> adlı kanallardan detaylıca bilgi öğrenip, ödemenizi buradan <@372787088778723328> ile iletişime geçerek işlemlere başlayabilirsiniz.')
                    .setFooter('PabloV | PC Optimizer')
                    c.send({embeds: [embed], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `💸 | ***Biletiniz başarı ile açıldı!*** <#${c.id}>`, ephemeral: true})
                })
                
            
                
            
            }
        }
    }
}