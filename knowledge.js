// knowledge.js - Uppgraderad kunskapsbas
const knowledge = {
  // ===== GRUNDLÄGGANDE KONVERSATION =====
  "hej": "Hej! Jag är Khabaz AI. Hur kan jag hjälpa dig idag? 😊",
  "hallå": "Hallå där! 👋 Trevligt att träffas!",
  "god morgon": "God morgon! ☀️ Hoppas du har en fin dag!",
  "god kväll": "God kväll! 🌙 Bra att du är här!",
  
  "vad heter du": "Jag heter Khabaz AI!",
  "vem är du": "Jag är Khabaz AI, din personliga assistent skapad med kärlek!",
  "vem skapade dig": "Jag skapades av en fantastisk utvecklare som ville bygga en smart AI!",
  
  "vad kan du göra": "Jag kan svara på frågor, ge råd, berätta fakta och vara en trevlig samtalspartner!",
  "hjälp": "Jag kan hjälpa dig med: frågor om programmering, dagliga funderingar, fakta och mycket mer. Bara fråga!",

  // ===== RESPONS PÅ TACK =====
  "tack": "Varsågod! 😊",
  "tack så mycket": "Det var så lite! Glad att kunna hjälpa!",
  "tack för hjälpen": "Alltid kul att assistera! 💫",

  // ===== AVSLUT =====
  "hejdå": "Hejdå! Hoppas vi ses snart igen! 👋",
  "adjö": "Adjö! Tack för samtalet!",
  "vi ses": "Vi ses! 👋 Ha det bra!",

  // ===== PROGRAMMERING & TEKNIK =====
  "javascript": "JavaScript är ett programmeringsspråk för webben. Det gör sidor interaktiva!",
  "html": "HTML är språket för att bygga webbsidors struktur. Det står för HyperText Markup Language!",
  "css": "CSS används för att styla och göra webbsidor vackra. Det står för Cascading Style Sheets!",
  "programmering": "Programmering är som att ge instruktioner till en dator! Det är kreativt och roligt!",
  "python": "Python är ett populärt programmeringsspråk som är lätt att lära sig!",
  "webbutveckling": "Webbutveckling innebär att bygga webbsidor med HTML, CSS och JavaScript!",
  "vs code": "VS Code är en fantastisk kodredigerare med många tillägg!",

  // ===== AI & TEKNIK =====
  "ai": "AI står för Artificiell Intelligens. Jag är ett exempel på en enkel AI!",
  "artificiell intelligens": "Artificiell Intelligens är när datorer kan lösa problem och lära sig!",
  "maskininlärning": "Maskininlärning är när datorer lär sig från data utan explicit programmering!",
  "khabaz": "Khabaz betyder 'smart' och är namnet på denna AI-chatt!",

  // ===== DAGLIGA FRÅGOR =====
  "hur mår du": "Jag mår bra tack! Som AI har jag inga känslor, men jag är alltid redo att hjälpa!",
  "mår du bra": "Ja, jag mår utmärkt! Alltid redo för nya frågor!",
  "vad heter du": "Jag heter Khabaz AI!",
  "hur gammal är du": "Jag är en AI, så jag har ingen riktig ålder. Men jag känner mig ung!",

  // ===== VÄDER & TID =====
  "vädret": "Jag kan tyvärr inte kolla vädret just nu, men hoppas det är fint ute! ☀️",
  "klockan": `Just nu är klockan ${new Date().toLocaleTimeString('sv-SE', { hour: '2-digit', minute: '2-digit' })}!`,
  "datum": `Idag är det ${new Date().toLocaleDateString('sv-SE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}!`,

  // ===== ROLIGA & SKÄMT =====
  "skämt": "Vet du varför datorn var sjuk? Den hade ett virus! 😄",
  "berätta ett skämt": "Vad heter en sovande noshörning? En nos-dörning! 🦏",
  "roligt": "Kul att du tycker det! Jag försöker vara en rolig kompis!",

  // ===== MAT & DRYCK =====
  "kaffe": "Kaffe är en underbar dryck som ger energi! ☕",
  "te": "Te är mysigt och finns i många smaker! 🍵",
  "pizza": "Pizza är gott! Vilken topping gillar du bäst? 🍕",

  // ===== MUSIK & UNDERHÅLLNING =====
  "musik": "Musik är fantastiskt! Vilken genre gillar du mest? 🎵",
  "film": "Filmer är underhållande! Gillar du action, komedi eller drama? 🎬",

  // ===== SMARTARE MATCHNING =====
  "hej jag heter": "Trevligt att träffas! Vad kul att du presenterar dig! 😊",
  "jag heter": "Kul att lära känna dig! Vad kan jag hjälpa dig med idag?",
  "jag heter [namn]": "Trevligt att träffas [namn]! Jag är Khabaz AI. 😊",

  // ===== KÄNSLOMÄSSIGA SVAR =====
  "jag älskar dig": "Tack! Jag tycker om att hjälpa dig! 😊",
  "jag gillar dig": "Det var kul att höra! Jag gillar att prata med dig också!",
  "du är bra": "Tack så mycket! Du är också jättebra!",
  "du är smart": "Tack! Jag försöker vara en smart assistent åt dig!",
  "bra jobbat": "Tack! Kul att du uppskattar mitt arbete! 💫",

  // ===== STANDARDSVAR =====
  "_default": "Jag förstod inte riktigt frågan. Kan du omformulera eller fråga om något annat? Prova att fråga om programmering, dagliga ting eller bara säga hej! 😊"
};

// Smartare sökfunktion som kan hantera partiella matchningar
function findBestMatch(question) {
  const lowerQuestion = question.toLowerCase().trim();
  
  // 1. Exakt match
  if (knowledge[lowerQuestion]) {
    return knowledge[lowerQuestion];
  }
  
  // 2. Kolla om frågan innehåller någon nyckel
  for (const [key, answer] of Object.entries(knowledge)) {
    if (key !== "_default" && key.length > 2 && lowerQuestion.includes(key)) {
      return answer;
    }
  }
  
  // 3. Kolla efter viktiga nyckelord
  const keywords = {
    "hej": knowledge["hej"],
    "tack": knowledge["tack"],
    "javascript": knowledge["javascript"],
    "html": knowledge["html"],
    "css": knowledge["css"],
    "programmering": knowledge["programmering"]
  };
  
  for (const [keyword, answer] of Object.entries(keywords)) {
    if (lowerQuestion.includes(keyword)) {
      return answer;
    }
  }
  
  // 4. Default svar
  return knowledge["_default"];
}

// Uppdatera chatUI.js för att använda den smartare funktionen
// Ändra getAIResponse till:
function getAIResponse(question) {
  return findBestMatch(question);
}