//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "254793410376";
global.owner = process.env.OWNER_NUMBER || "254793410376";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU9vd0YyOFBYTlFEZWNNdVIzQnprOU40cEVwZEJGbCtxS0FoZHc2WG5HUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUtnT1Z6cmhITW9ZRWpsWmxkMmpUakFhWjJFa2xJbUQyRHdMRUdYTGd5TT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3T1FZWGdaTnp5eGU3WU93Vk9jZysyMEd5b0hGeHlQN25pM1drRjJuem5zPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJZ0hiYmFmenRpdUI1SGRuOTVZckp5VFI0dkcrMmttZlFjVDhjdlJHeUdvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlENXAzd3IyNjZDQStFUWJlWmRyVlBiZEY1V2c4RnVsZ25rNmdCek9NV1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9sa29ud0RTY2laakFSSnFPOEU4TVNLRVNHa2ZwdHRMUHA1ejAxWjlPd2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU4wODBQSmpOWjNmRUZQdEp3UzFUYkJwa2ozbGlZOGtucXhzVXFBQXpsRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSDl3M1BiTUNSdDFYVjhjQUFwZXJpNDFCSDNVaXJNeHRaSStUb1pkaXloST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxSTCt6bVlhTDBReDV0SDNGdnArczJxbVEzalZTQmpYVnRjeks2Tng0S2dMT0tNcHJ1b1hLaUZtRzRkcHhIeTVTTzErY2FoSlNCUUpxdFhQaDd2OWh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ5LCJhZHZTZWNyZXRLZXkiOiJ5TXBUOG51WFlGVnhxbE5aZVN0WFNpcXNFa3YwOEVjb3Vld1hPazJXeVVVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc5MzQxMDM3NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI3M0E3M0NCQTQ3QUIyNDA1MDA1ODAxOTE5QURDMEY2RSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIwMzg3NjI4fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3OTM0MTAzNzZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNjU5OUMwNzYzNUU2MkJBRjE4OTAxQTJGNjhBRDkwRjAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMDM4NzYyOH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiZGdkU3ozeDJSVENKZFJ3YVFkQ0ZPUSIsInBob25lSWQiOiIzZTJkZjYzMS1jZWYxLTRmOGMtYjljYy1hNjg3YmI1YzQ5ZDAiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSi9kdkkvWlphaUIxQ3Ewc3RNV1pKbHMwbENjPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InN3SW9jWlFXVFUxWE1KWGFFUFdNRmxvOVFiQT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI2U1ZDUkUzNSIsIm1lIjp7ImlkIjoiMjU0NzkzNDEwMzc2OjI3QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMZkdnK0VHRUp1UXJMUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIzRk96cEQyODdCcSt5OVZPd0Y0Q0crc1JQVmFULzV5L3ZudFhzTVZHbkJvPSIsImFjY291bnRTaWduYXR1cmUiOiJ6WXdaMTh4cmI3RUsyNnFoSStGdy9YeFNIdjBLYlBpNjdROGVtTXBpWGJsc3NNT3RIU2FwTU1yUzhuL3VoMW1KUzBiWWc5cEZiSzc5TVo1MWRkOWpDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiOGN0KzZ2NVY4UThTcnZoSU1LN21NRENwWHJpL3k5ODAxVVlqRVUzQzB6Ry9kSG5udm42eXN3RG9lSXVXa2JzTDlCK3ZnZXk3OHM4UnhraCtaZ1l3aEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3OTM0MTAzNzY6MjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZHhUczZROXZPd2F2c3ZWVHNCZUFodnJFVDFXay8rY3Y3NTdWN0RGUnB3YSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDM4NzYyNSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMdm8ifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "ALCACER JOE",
  ownername: process.env.OWNER_NAME || "ALCACER JOE",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
