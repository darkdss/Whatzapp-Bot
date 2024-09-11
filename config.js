const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "7FlEBLiT#Jxm66Q858ns92bkzGxAmNhIO2MwxNeoNnjedToNDIP4",
MONGODB: process.env.MONGODB || "mongodb://mongo:KhDcfCyOvPeqFRmQmSxyqmWnUmmuugbw@autorack.proxy.rlwy.net:45346",
//ALIVE_IMG: process.env.ALIVE_IMG || "https://raw.githubusercontent.com/Pasidu403/DATABASE/main/user-data/IMG-20240909-WA0068(1).jpg",
//ALIVE_MSG: process.env.ALIVE_MSG || "> H E L L O *I AM QUEEN NIPUU* 👸",
//AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
//MODE: process.env.MODE || "public",    
};
