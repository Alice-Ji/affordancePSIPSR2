console.log("🚀 script.js has loaded successfully!");
window.setUsername = function () {
  const input = document.getElementById("username-input").value.trim();
  if (input) {
    localStorage.setItem("username", input); // Store username
    document.getElementById("username-container").style.display = "none"; // Hide input box
    document.getElementById("app").style.display = "block"; // Show feed
    username = input; // Set global username
    renderFeed(); // Ensure the feed loads properly
  } else {
    alert("Please enter a username.");
  }
};

let username = localStorage.getItem("username");

if (username) {
  document.getElementById("username-container").style.display = "none";
  document.getElementById("app").style.display = "block";
}

let likeCount = 0;

// Sample post data
const posts = [
  {
    type: "image",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-image-1.jpg",
    ],
    caption:
      "Enrolling in school.. at last 😎📚🧠\nDoes it suit me?\nI’m doing an exhibition with my Taipei friends, I’ll post about it soon! 👩‍💻",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "image",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-image-2.jpg",
    ],
    caption:
      "They made a huge rug of me🪢🧞‍♂️👼🏻🧠\nWhere and how to use it?\n\nWell, I’m the type to make it first.",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "image",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-image-3.jpg",
    ],
    caption: "Guess what he’s making🤔",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "image",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-image-4.jpg",
    ],
    caption: "⚡️⚜️Lost my face for the PRE55URE",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "image",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-image-5.jpg",
    ],
    caption:
      "I was recently in Dubai 🇦🇪🧠.\n\nWorldgovsummit, a summit inviting heads of state from 150 countries. Entrepreneurs, prime ministers and princes of various countries, inventors, etc. It was a really valuable experience and I am grateful for all the wonderful encounters ᘎ🧠.\n\nThe trip made me want to visit more and more countries.\nThe world is still so big🌏",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "image",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-image-6.jpg",
    ],
    caption: "Definitely NOT a summit",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "image",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-image-7.jpg",
    ],
    caption: "Fast car faster life🏎️",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "image",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-image-8.jpg",
    ],
    caption:
      "There are a lot of mysteries in this picture😇\nI'm moving on to the next stage 🧠.",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "image",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-image-9.jpg",
    ],
    caption: "SO MUCH WORK😑",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "image",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-image-10.jpg",
    ],
    caption: "🎨🧸❤️‍🔥🧬🔮💸🪫🚁🎲",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "image",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-image-11.jpg",
    ],
    caption:
      "This is my bike that I built with Kazuya and Sakmo a few years ago.\nI got interested in motorcycles because of the anime AKIRA.I wanted to ride a futuristic bike like that.\nHowever, if the design was too similar to AKIRA, it would be boring, so we tried to come up with our own ideas.\nIt took all kinds of trial and error .The motorcycle is powered by an amber with a blue bee inside.\n\nIt’s a joke not a lot of people getLOL 🐝 \nI wonder if anyone who knows what I'm talking about can understand?I don't think it’s that deep😎.\nI actually made this one 3 years ago already, but for some reason I didn't upload it, so I just uploaded it now: 🏍️\n\nBooooooo 🏍️🐝",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "image",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-image-12.jpg",
    ],
    caption: "I didn't even have time to dress up this year🎃💦",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "image",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-image-13.jpg",
    ],
    caption: "TYSM everyone 💗🧠🌸",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "image",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-image-14.jpg",
    ],
    caption: "pon pon pon pon?",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "image",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-image-15.jpg",
    ],
    caption: "She drew her and I on a T-shirt 🫣👯‍♀️",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "image",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-image-16.jpg",
    ],
    caption:
      "What’s the Tokyo club that’s on my mind right now?\n Hint: it’s where the feltzine party is tonight 💭⚡️🙀",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "image",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-image-17.jpg",
    ],
    caption: "New swimsuit. Check it out.",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "image",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-image-18.jpg",
    ],
    caption: "dailies…",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "image",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-image-19.jpg",
    ],
    caption: "I have no valentines so I made gloves to keep me warm…",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "image",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-image-20.jpg",
    ],
    caption: "Quality time w. 🐶",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "video",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-video-1.mp4",
    ],
    caption: "Alright, here’s a question.\nGuess what is being used?",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "video",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-video-2.mp4",
    ],
    caption: "CAME WITH THE HEAT🔥🥵🔥 \nARIGATO",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "video",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-video-3.mp4",
    ],
    caption: "NEW SONG TEASER\nstay tuned",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "video",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-video-4.mp4",
    ],
    caption: "Glass or distorting mirror?",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "video",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-video-5.mp4",
    ],
    caption: "New Glasses, Who Dis?™️",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "video",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-video-6.mp4",
    ],
    caption: "VROOM VROOM",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "video",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-video-7.mp4",
    ],
    caption:
      "It's hard to convey feelings. May this world be as peaceful as possible. 🕊️🧠\n\nNow, I will continue to take on various challenges in 2025!\nAs many challenges as there are failures. I heard that the more failures one has, the more one can get something big.\n\nSo I will learn a lot from my many failures.\n\nI will be releasing many projects soon, so please watch out for them 🧠⚡️🤍",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "video",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-video-8.mp4",
    ],
    caption:
      "I’m nervous lately 🫢\n\nI want people to understand me more, so I’m going to start a YouTube. Subscribe to me there !",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "video",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-video-9.mp4",
    ],
    caption: "Scene 1 Take 1",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "video",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-video-10.mp4",
    ],
    caption: "Between sets 👧🏻",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "video",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-video-11.mp4",
    ],
    caption:
      "Kyoto trip ⛩️⚡️🌸\nBut Ppl jumped off of here ? 😱⚡️🤨\nLearning about Japanese history is always interesting but sometimes… bizarre facts come out.. I started reading into one of the most famous tourist spots the kiyomizu temple when I visited Kyoto and yeah.. people jumped off here (and mostly survived!) to make a wish 😱 I’m glad I’m alive now when my wish is in a form of the Amazon wish list… 🤭",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "video",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-video-12.mp4",
    ],
    caption:
      "Interviewing Steve Aoki\nI was too nervous 😫\nWhat should I ask next when I see him???",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "video",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-video-13.mp4",
    ],
    caption: "Took a pic with Alla !!\nBut wait…?!? 👍❤️",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "video",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-video-14.mp4",
    ],
    caption: "Which one is the real me?",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "video",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-video-15.mp4",
    ],
    caption: "been pretty busy these dayss 💭⚡️🤯",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "video",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-video-16.mp4",
    ],
    caption: "Jumping on the tiktok filter bandwagon📱💅🏻",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "video",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-video-17.mp4",
    ],
    caption: "HE—LLO—",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "video",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-video-18.mp4",
    ],
    caption: "I looove her songs!!! Thx oshuclips for stopping me 🎧⚡️❤️",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "video",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-video-19.mp4",
    ],
    caption: "My first time going to fashion week 👠 LOVING THE DESIGNS",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "video",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-video-20.mp4",
    ],
    caption: "BEANIE BABE",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "carousel",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-1.1.jpg",
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-1.2.jpg",
    ],
    caption:
      "Water.\nWater And Send from Outer Space.\nAnyone knows what book this is?\nHas anyone read it?\nI don't know, there are a lot of opinions out there, but I personally think it's kind of cool: ❄️\nBecause it's hard to prove or even explain human beings themselves, as hard as it is to prove or explain the 3rd dimension, or the 4th dimension.\nThere are so many things we don't understand that we can't always deny everything.\nAh, isn't it fun?\nEarth is fun.🌏",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "carousel",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-2.1.jpg",
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-2.2.jpg",
    ],
    caption:
      "Zen-——\nI went to temple and chanted sutras.\nI’d heard them before, but it was my first time actually reciting them myself.\nIt’s like I finally understood how humans lose themselves and feel a sense of unity.\nIt felt like the boundary between me and the person next to me just disappeared.",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "carousel",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-3.1.jpg",
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-3.2.jpg",
    ],
    caption: "Friends who ramen together stay together 🍜👯🧠",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "carousel",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-4.1.jpg",
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-4.2.jpg",
    ],
    caption: "This is how the world is made🌏🧠⚡️",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "carousel",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-5.1.jpg",
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-5.2.jpg",
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-5.3.jpg",
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-5.4.jpg",
    ],
    caption: "congratulations🧠⚡️🤍",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "carousel",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-6.1.jpg",
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-6.2.jpg",
    ],
    caption: "Recent Myself👯‍♀️💨",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "carousel",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-7.1.jpg",
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-7.2.jpg",
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-7.3.jpg",
    ],
    caption:
      "Happy New Year? Has anyone seen the commercial?\nIt’s my first time staring in a cable TV commercial☺️\n\nWhile I have done this before overseas, it’s actually my first time in Japan☺️!",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "carousel",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-8.1.jpg",
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-8.2.jpg",
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-8.3.jpg",
    ],
    caption:
      "happy holidays🎄\nLet's spend Christmas in Tokyo in pink🌸\nTokyo is fun after all😂.",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "carousel",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-9.1.jpg",
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-9.2.jpg",
    ],
    caption:
      "I went to the Torinoichi at the Otori Shrine in Asakusa. ⛩️\nI bought a bamboo rake（kumade）at Yoshida, one of the oldest families making kumade! we go every year with people from our company Aww🤤.\nThe bamboo kumade are so cute!\n\nAnyone who went to the Torinoichi market 🤚🏻?",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "carousel",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-10.1.jpg",
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-10.2.jpg",
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-10.3.jpg",
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-10.4.jpg",
    ],
    caption: "Mohawk WHO🤡",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "carousel",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-11.1.jpg",
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-11.2.jpg",
    ],
    caption:
      "So it’s been a minute since my hairstyle changed but someone made a hat of my original hair\nWell, he was the one that stole my bob hair in the first place to make this… but …\nThe beanie’s pretty fire ? So should I say thank you? 🙄",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "carousel",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-12.1.jpg",
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-12.2.jpg",
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-12.3.jpg",
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-12.4.jpg",
    ],
    caption:
      "I don’t know where my pink bob hair is.\nBut now I’m thinking… I fit other hairstyles too?\nSo now I’m fantasizing 😳💭🧠",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "carousel",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-13.1.jpg",
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-13.2.jpg",
    ],
    caption: "Happy Birthday Dear Emi ㊗️🎂🐈\n\n I wanna eat RAMEN 🍜",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "carousel",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-14.1.jpg",
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-14.2.jpg",
    ],
    caption: "I looovee her songs! Guess who?✌️❤️🎧",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "carousel",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-15.1.jpg",
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-15.2.jpg",
    ],
    caption: "🍬🍜🛒👩🏻‍🦰👨🏻‍🦰✨",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "carousel",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-16.1.jpg",
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-16.2.jpg",
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-16.3.jpg",
    ],
    caption:
      "In Paris ✈️⚡️🧠\ndoublet ss 2025🏮🪭🎎🎀🇯🇵\nust in time to catch the Doublet collection\nWhere I’m… I’m on the runway too?\nAs a bag? Awwwww such an honor !!! ❤️❤️❤️",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "carousel",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-17.1.jpg",
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-17.2.jpg",
    ],
    caption:
      "Bape japan has a cafe in Shanghai ? ☕️⚡️🧠\nTook a first look 👀",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "carousel",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-18.1.jpg",
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-18.2.jpg",
    ],
    caption:
      "🙏 I've been flying around so much lately !\nIs it the same for everyone ? No more staying in one place?",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "carousel",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-19.1.jpg",
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-19.2.jpg",
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-19.3.jpg",
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-19.4.jpg",
    ],
    caption: "day with the pink gals 🌸🌙🥺\nNever blended in this good 😳",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "carousel",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-20.1.jpg",
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-20.2.jpg",
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-20.3.jpg",
    ],
    caption: "🧠❤️🎃",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "image",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-ad-image-JBL.jpg",
    ],
    caption:
      "[Sponsored by JBL]\nIt's time to feel alive, feel the music, feel the vibe!",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
];

//setupVideoAutoplay
function setupVideoAutoplay() {
  // make video play sound
  let userHasInteracted = false; // Track if the user has scrolled

  document.addEventListener("scroll", () => {
    if (!userHasInteracted) {
      document.querySelectorAll(".video-post").forEach((video) => {
        video.muted = false; // 🔊 Unmute all videos once scrolling starts
      });
      userHasInteracted = true; // Prevent further changes
    }
  }); // make video play sound

  const videos = document.querySelectorAll(".video-post");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target
            .play()
            .catch((error) => console.warn("Autoplay prevented:", error));
        } else {
          entry.target.pause();
        }
      });
    },
    { threshold: 0.9 }
  );

  videos.forEach((video) => {
    observer.observe(video);

    const playOverlay = video.parentElement.querySelector(".play-overlay"); // ✅ Finds the correct overlay for each video
    playOverlay.classList.remove("hidden"); // ✅ Show play button on page load

    video.addEventListener("click", () => {
      if (video.paused) {
        video.play();
        playOverlay.classList.add("hidden"); // ✅ Hide play button when playing
      } else {
        video.pause();
        playOverlay.classList.remove("hidden"); // ✅ Show play button when paused
      }
    });

    video.addEventListener("play", () => {
      setTimeout(() => playOverlay.classList.add("hidden"), 100); // ✅ Ensure it fades out after play starts
    });

    video.addEventListener("pause", () => {
      playOverlay.classList.remove("hidden"); // ✅ Show play button when paused
    });
  });
}

// Function to shuffle posts using Fisher-Yates algorithm
function shufflePosts() {
  for (let i = posts.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [posts[i], posts[j]] = [posts[j], posts[i]]; // Swap elements
  }
}

// Function to render posts
function renderFeed() {
  shufflePosts(); // Randomize posts before rendering
  const feed = document.getElementById("feed");
  feed.innerHTML = ""; // Clear existing content

  posts.forEach((post, index) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");

    let mediaContent = "";
    if (post.type === "image") {
      mediaContent = `<img src="${post.media[0]}" alt="Post image">`;
    } else if (post.type === "video") {
      mediaContent = `
      <div class="video-container">
      <video class="video-post" muted loop playsinline>
          <source src="${post.media[0]}" type="video/mp4">
          Your browser does not support the video tag.
      </video>
      <div class="play-overlay hidden"></div> <!-- ✅ This is the only play button now -->
  </div>
      `;
    } else if (post.type === "carousel") {
      mediaContent = `
        <div class="carousel-container">
            <button class="carousel-btn left" onclick="prevImage(${index})">&lt;</button>
            <img id="carousel-${index}" src="${post.media[0]}" alt="Carousel Image">
            <button class="carousel-btn right" onclick="nextImage(${index})">&gt;</button>
            <div class="carousel-indicator" id="indicator-${index}">1 / ${post.media.length}</div>
        </div>
      `;
    }

    postElement.innerHTML = `
      <div class="post-header">
      <img class="avatar" src="${post.profilePic}" alt="Avatar">
          <span class="username">${post.username}</span>
      </div>
      ${mediaContent}
      <p>${post.caption.replace(/\n/g, "<br>")}</p>
      <div class="post-actions">
        <img id="like-btn-${index}" src="https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/ins-like1.png" 
             alt="Like" class="action-icon" onclick="window.likePost(${index})">
    
        <img id="comment-btn-${index}" 
             src="https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/ins-commentoff.png"
             alt="Comment disabled" 
             class="action-icon">
      </div>
      <div id="comment-section-${index}" class="comment-section hidden">
          <div class="comment-input-container">
              <input type="text" id="comment-input-${index}" placeholder="Add a comment...">
              <img id="send-comment-${index}" src="https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/ins-sendcomment.png" 
                   alt="Send" class="send-icon" onclick="window.addComment(${index})">
          </div>
          <ul id="comments-${index}"></ul>
      </div>
    `;

    feed.appendChild(postElement);
    updateComments(index);
  });

  setupVideoAutoplay(); // ✅ Ensure observer is set up after rendering
}

// Function to switch to the next image in the carousel
window.nextImage = function (index) {
  if (posts[index].type === "carousel") {
    if (posts[index].currentIndex < posts[index].media.length - 1) {
      posts[index].currentIndex++;
      console.log(
        `➡️ Next Image: Now showing ${posts[index].currentIndex + 1} / ${
          posts[index].media.length
        }`
      );
      updateCarousel(index);
    }
  }
};

// Function to switch to the previous image in the carousel
window.prevImage = function (index) {
  if (posts[index].type === "carousel") {
    if (posts[index].currentIndex > 0) {
      posts[index].currentIndex--;
      console.log(
        `⬅️ Previous Image: Now showing ${posts[index].currentIndex + 1} / ${
          posts[index].media.length
        }`
      );
      updateCarousel(index);
    }
  }
};

// Function to update the carousel display, including the indicator
function updateCarousel(index) {
  let post = posts[index];

  console.log(
    `🔄 Updating carousel ${index}: Now at ${post.currentIndex + 1} / ${
      post.media.length
    }`
  );

  let imageElement = document.getElementById(`carousel-${index}`);
  let indicatorElement = document.getElementById(`indicator-${index}`);

  if (imageElement) {
    imageElement.src = post.media[post.currentIndex]; // Update the image
  } else {
    console.warn(`❌ Image element "carousel-${index}" not found.`);
  }

  if (indicatorElement) {
    indicatorElement.textContent = `${post.currentIndex + 1} / ${
      post.media.length
    }`; // Fix: Removed extra parentheses
  } else {
    console.warn(`❌ Indicator element "indicator-${index}" not found.`);
  }
}

// Function to like a post (only once)
window.likePost = function (index) {
  let likeBtn = document.getElementById(`like-btn-${index}`);
  if (!posts[index].liked) {
    posts[index].likes++;
    posts[index].liked = true;
    likeCount++; // Increase total like count
    likeBtn.src =
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/ins-like2.png";
  } else {
    posts[index].likes--;
    posts[index].liked = false;
    likeCount--; // Decrease total like count if unliked
    likeBtn.src =
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/ins-like1.png";
  }
    // ✅ Send updated data to Qualtrics on every like
  sendCommentsToQualtrics();
};

// Function to add a comment
window.addComment = function (index) {
  const input = document.getElementById(`comment-input-${index}`);
  if (input.value.trim()) {
    posts[index].comments.push(input.value);
    updateComments(index);
    input.value = ""; // Clear input
  }
};

// Function to update comments
function updateComments(index) {
  const commentList = document.getElementById(`comments-${index}`);
  commentList.innerHTML = ""; // Clear and re-add comments

  posts[index].comments.forEach((comment) => {
    const newComment = document.createElement("li");
    newComment.textContent = comment;

    // 🚨 THIS FORCES THE COMMENTS TO BE ON A NEW LINE 🚨
    newComment.style.display = "block";
    newComment.style.width = "100%";
    newComment.style.marginTop = "5px";
    newComment.style.wordWrap = "break-word";
    newComment.style.clear = "both"; // 💥 Ensures no floating elements next to it

    commentList.appendChild(newComment);
  });

  // 🚀 FORCES THE BROWSER TO RERENDER THE COMMENTS 🚀
  commentList.style.display = "none";
  setTimeout(() => (commentList.style.display = "block"), 10);
}

// Load the feed when the page loads
renderFeed();

// Global variable to store all comments
let collectedComments = [];

window.addComment = function (index) {
  const input = document.getElementById(`comment-input-${index}`);
  if (input.value.trim()) {
    let comment = `${localStorage.getItem("username")}: ${input.value.trim()}`;
    posts[index].comments.push(comment);
    collectedComments.push(comment);
    updateComments(index);
    input.value = "";

    console.log("✅ New comment:", comment);

    // Send to Qualtrics
    sendCommentsToQualtrics();
  }
};

window.sendCommentsToQualtrics = function () {
  let commentsString = collectedComments.join(" | ");
  let qualtricsURL = "https://illinois.qualtrics.com";

  console.log("Sending to Qualtrics:", {
    comments: commentsString,
    likes: likeCount,
  });

  window.parent.postMessage(
    { comments: commentsString, likes: likeCount },
    qualtricsURL
  );
};

window.toggleComment = function (index) {
  let commentSection = document.getElementById(`comment-section-${index}`);
  commentSection.classList.toggle("hidden"); // Show/hide comment section
};
