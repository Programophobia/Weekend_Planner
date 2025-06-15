function generateBreakfastForDziubas() {
  const mains = [
    "grzanka z pastą z suszonych quizów i bazylii",
    "omlecik z glitch’em i avocado na backendzie",
    "croissant z API i odrobiną nostalgii",
    "ramen z wczorajszych myśli i jajkiem nadziei",
    "kasza jaglana z syropem z endpointów i chia z Jarka"
  ];

  const sides = [
    "matcha z logów przeglądarkowych",
    "kawa z mlekiem localhostowym",
    "koktajl z pikseli malinowych i odklejenia",
    "napar z herbaty liściastej i marzeń o footerze",
    "cold brew parzone przez faviconę"
  ];

  const vibes = [
    "w pidżamie i hoodie, słuchając playlisty RAVE-CAFE ☕🖤",
    "przy otwartym kodzie, ale zamkniętych oczach 😌",
    "ze świecącym tabem i sercem gotowym na świat 💻✨",
    "na dachu, gdzie favicony śpiewają 🌤️🪩",
    "przy stole z API, które nigdy nie błęduje 🫶"
  ];

  const main = mains[Math.floor(Math.random() * mains.length)];
  const side = sides[Math.floor(Math.random() * sides.length)];
  const vibe = vibes[Math.floor(Math.random() * vibes.length)];

  return `🍽️ Dziś na śniadanko: ${main}, do tego ${side}, podane ${vibe}.`;
}

console.log(generateBreakfastForDziubas());
