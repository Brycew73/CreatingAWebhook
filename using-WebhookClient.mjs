import { config } from './config.mjs';

import { EmbedBuilder, WebhookClient } from 'discord.js';

const webhookClient = new WebhookClient({
  id: config.webhookId,
  token: config.webhookToken
});

const embed = new EmbedBuilder()
  .setColor(0x0099FF)
  .setTitle('Some title')
  .setURL('https://discord.js.org/')
  .setAuthor({
    name: 'Some name',
    iconURL: 'https://i.imgur.com/AfFp7pu.png',
    url: 'https://discord.js.org' })
  .setDescription('Some description here')
  .setThumbnail('https://i.imgur.com/AfFp7pu.png')
  .addFields(
    { name: 'Regular field title', value: 'Some value here' },
    { name: '\u200B', value: '\u200B' },
    { name: 'Inline field title', value: 'Some value here', inline: true },
    { name: 'Inline field title', value: 'Some value here', inline: true },
  )
  .addFields({
    name: 'Inline field title',
    value: 'Some value here',
    inline: true })
  .setImage('https://i.imgur.com/AfFp7pu.png')
  .setTimestamp()
  .setFooter({
    text: 'Some footer text here',
    iconURL: 'https://i.imgur.com/AfFp7pu.png' });

webhookClient.send({
  content: 'This is some *remarkable* content!',
  username: 'Oscar Winters',
  avatarURL: 'https://pxl01-ycpedu.terminalfour.net/fit-in/540x540/filters:format(webp)/prod01/ycp-cdnpxl-media/media/york-website/offices-and-departments/giving/staff/winters.jpg',
  embeds: [ embed ]
});
