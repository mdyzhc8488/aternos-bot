const mineflayer = require('mineflayer');

// Create bot with your Aternos server details
function createBot() {
  const bot = mineflayer.createBot({
    host: 'Famous_SMP_1M.aternos.me', // Aapka server IP
    port: 50705,                       // Port
    username: 'AFK_Bot_' + Math.floor(Math.random() * 10000) // Random bot name
  });

  // Jab bot join kare, AFK loop start karo
  bot.on('spawn', () => {
    console.log('✅ Bot joined successfully!');

    // Jump every 60 seconds to avoid AFK kick
    setInterval(() => {
      bot.setControlState('jump', true);
      setTimeout(() => {
        bot.setControlState('jump', false);
      }, 500);
    }, 60000); // Jump every 60 seconds
  });

  // Jab disconnect ho, auto reconnect
  bot.on('end', () => {
    console.log('⚠️ Disconnected. Reconnecting...');
    setTimeout(createBot, 5000); // Reconnect after 5 seconds
  });

  bot.on('error', err => {
    console.log('❌ Error:', err);
  });
}

createBot();
