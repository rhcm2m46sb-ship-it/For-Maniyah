// Basic Information
valentineName: "Niyah"                    // Your Valentine's name
pageTitle: "Will You Be My Valentine? " // Browser tab title

// Floating Background Elements
floatingEmojis: {
    hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis in background
    bears: ['🧸', '🐻']                       // Bear emojis in background
}

// Questions and Buttons
questions: {
    first: {
        text: "Do you like me?",                   // First question
        yesBtn: "Yes-click bottom right",          // Yes button text
        noBtn: "No",                               // No button text
        secretAnswer: "raising ur weekly payments❤️" // Hidden message
    },
    second: {
        text: "How much do you like me?",          // Second question
        startText: "This much!",                   // Text before percentage
        nextBtn: "Next ❤️"                         // Next button text
    },
    third: {
        text: "Will you be my Valentine?",      // Final question
        yesBtn: "Yes",                            // Yes button text
        noBtn: "No clicck if ur fat"               // No button text
    }
}

// Love Meter Messages
loveMessages: {
    extreme: "uuu soo smartttt💝",  // Shows above 5000%
    high: "dawwwwwww💝",            // Shows above 1000%
    normal: "nstawpp 🥰"            // Shows above 100%
}

// Final Celebration
celebration: {
    title: "bruh yay ig 💖",     // Celebration title
    message: "jokesiessss Thank you My lovee",          // Celebration message
    emojis: "🎁💖🤗💝💋❤️💕"                        // Celebration emojis
}

// Website Colors
colors: {
    backgroundStart: "#ffafbd",      // Background gradient start
    backgroundEnd: "#ffc3a0",        // Background gradient end
    buttonBackground: "#ff6b6b",     // Button color
    buttonHover: "#ff8787",          // Button hover color
    textColor: "#ff4757"            // Text color
}

// Animation Settings
animations: {
    floatDuration: "15s",           // How long hearts float (10-20s)
    floatDistance: "50px",          // Sideways movement (30-70px)
    bounceSpeed: "0.5s",            // Bounce animation speed (0.3-0.7s)
    heartExplosionSize: 1.5         // Final heart explosion size (1.2-2.0)
}

// Music Settings
music: {
    enabled: true, // Music feature is enabled
    autoplay: true, // Try to autoplay (note: some browsers may block this)
    musicUrl: "YOUR_CLOUDINARY_URL_HERE", // Paste your music URL here
    startText: "🎵 Play Music", // Button text to start music
    stopText: "🔇 Stop Music", // Button text to stop music
    volume: 0.5 // Volume level (0.0 to 1.0)
}
window.VALENTINE_CONFIG = CONFIG; 
