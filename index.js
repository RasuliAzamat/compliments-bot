require('dotenv').config()
const { Telegraf, Markup } = require('telegraf')
const axios = require('axios')

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start(ctx => ctx.reply('Hey! @rslazamat created me to make laugh )). Write me anything aaaand enjoyyy!!!'))

bot.on('message', async ctx => {
  try {
    const { data: compliment } = await axios.get(
      'https://8768zwfurd.execute-api.us-east-1.amazonaws.com/v1/compliments'
    )
    // const { data: translatedComplimentObj } = await axios.get(
    //   `https://api.mymemory.translated.net/get?q=${compliment}&langpair=English|Russian`
    // )
    // const translatedCompliment = translatedComplimentObj.matches[0]?.translation

    ctx.reply(compliment)
  } catch (error) {
    console.log(error)
  }
})

bot.launch()
