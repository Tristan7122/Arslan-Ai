// 🔒 ULTRA PRO MAX SECURITY SYSTEM
const fs = require("fs");
const crypto = require("crypto");

// 🔐 Anti-Tamper & Clone Protection
const botName = "༄❀𝙿𝙷𝙾𝚁𝙰-𝙼𝙳❀༄";
const ownerNumber = "27634624586";
const securityHash = "a1b2c3d4e5f6g7h8i9j1"; // Change this to your unique hash

// 🚨 Security Check
if (__filename.includes('node_modules') === false) {
    const currentFile = fs.readFileSync(__filename, "utf8");
    const fileHash = crypto.createHash('sha256').update(currentFile).digest('hex');
    
    if (!currentFile.includes(botName) || !currentFile.includes(ownerNumber) || 
        !currentFile.includes(securityHash)) {
        console.log(`
╔══════════════════════════════════╗
║   🚨 UNAUTHORIZED ACCESS ALERT   ║
╠══════════════════════════════════╣
║                                  ║
║  Bot Security Violation Detected ║
║  Original Owner: ${ownerNumber}  ║
║  Current Hash: ${fileHash.slice(0, 12)}... ║
║                                  ║
║  ❌ SYSTEM SHUTDOWN INITIATED    ║
╚══════════════════════════════════╝
        `);
        process.exit(1);
    }
}

// ⚡ ULTRA PRO MAX SETTINGS
const settings = {
  // 🌟 Branding & Identity
  botName: "༄❀𝙿𝙷𝙾𝚁𝙰-𝙼𝙳❀༄",
  packname: "༄❀𝙿𝙷𝙾𝚁𝙰-𝙼𝙳❀༄",
  author: "𝚃𝚞𝚎𝚜𝚍𝚊𝚢",
  version: "3.0.0", // Major version upgrade
  
  // 👑 Ownership
  botOwner: "𝚃𝚞𝚎𝚜𝚍𝚊𝚢",
  ownerNumber: "27689344972",
  coOwners: "27634624586", // Add secondary owners if needed
  
  // ⚙️ Operation Modes
  MODE: "public", // public/private/group-only
  commandMode: "public", // Legacy support
  
  // 💎 Premium Features
  autoreact: {
    status: true,
    emoji: "🦋", // Default reaction
    whitelist: "27634624586" // Numbers to always react to
  },
  
  autoReply: {
    status: true,
    message: "🤖 ༄❀𝙿𝙷𝙾𝚁𝙰-𝙼𝙳❀༄ is currently busy. I'll reply soon!"
  },
  
  // 🔐 Security
  antiSpam: true,
  antiVirusScan: true,
  maxCommandUsage: 30, // Commands per minute limit
  
  // 🌐 APIs
  giphyApiKey: "qnl7ssQChTdPjsKta2Ax2LMaGXz303tq",
  openaiKey: "sk-proj-xxxxxxxxxxxxxxxx", // New format
  removeBgKey: "rmbg-xxxxxxxxxxxx",
  
  // 🎨 Media
  menuMedia: {
    image: "https://i.ibb.co/SD6M3ggy/41911f666fca7233.jpg",
    video: "https://i.imgur.com/L3cM1hE.mp4",
    gif: "ArslanMedia/media/menu.gif"
  },
  
  // 📊 Analytics
  analytics: true,
  errorReporting: true,
  
  // 🌍 Metadata
  description: "⚡ The Most Advanced WhatsApp Bot with ULTRA PRO MAX Features",
  website: "https://arslan-md.com",
  ytchannel: "https://youtube.com/@tristany71",
  repo: "https://github.com/Arslan-MD/Arslan-Ai",
  
  // 🔄 System
  autoUpdate: true,
  backupInterval: 24, // Hours
  maxLogSize: 50 // MB
};

// 💻 Developer Options
settings.devMode = false;
settings.debugLevel = "error"; // error/warning/info/debug

// 🛡️ Security Enhancements
settings.securityHash = securityHash;
settings.encryptionKey = "ultrapro-max-secure-key"; // For sensitive data

// ✅ Backward Compatibility
settings.commandMode = settings.MODE;

module.exports = settings;
