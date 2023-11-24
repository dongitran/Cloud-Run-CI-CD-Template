const http = require('http');
const { Telegraf, Markup, Extra } = require("telegraf");

const hostname = '0.0.0.0';
const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const bot = new Telegraf("6811707045:AAG6SB2ry5vbtZEvgWa1mrgeqwG4Z3Sk8dw");
bot.start((ctx) => ctx.reply("Hello, I'm dev bot~"));
bot.on("sticker", (ctx) => ctx.reply("👍"));

bot.on("text", async (ctx) => {
    bot.telegram.sendMessage(ctx.update.message.from.id, ctx.update.message.text);
});

bot.launch();