// chatUI.js - Hanterar chatten
const chatDiv = document.getElementById("chat");
const input = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

let isLoading = false;

// Event listeners
sendBtn.addEventListener("click", handleSend);
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && !isLoading) {
        handleSend();
    }
});

function handleSend() {
    if (isLoading) return;
    
    const text = input.value.trim();
    if (!text) return;

    addMessage("user", text);
    input.value = "";
    
    // Simulera lite fördröjning för naturlig känsla
    isLoading = true;
    sendBtn.disabled = true;
    sendBtn.textContent = "Tänker...";
    
    setTimeout(() => {
        const response = getAIResponse(text);
        addMessage("assistant", response);
        isLoading = false;
        sendBtn.disabled = false;
        sendBtn.textContent = "Skicka";
        input.focus();
    }, 800);
}

function addMessage(role, text) {
    const msg = document.createElement("div");
    msg.className = `message ${role}`;
    msg.textContent = text;
    chatDiv.appendChild(msg);
    chatDiv.scrollTop = chatDiv.scrollHeight;
}

function getAIResponse(question) {
    const lowerQuestion = question.toLowerCase().trim();
    
    // 1. Exakt match
    if (knowledge[lowerQuestion]) {
        return knowledge[lowerQuestion];
    }
    
    // 2. Sök efter nyckelord
    for (const [key, answer] of Object.entries(knowledge)) {
        if (key !== "_default" && lowerQuestion.includes(key.toLowerCase())) {
            return answer;
        }
    }
    
    // 3. Standard svar
    return knowledge["_default"];
}

// Startmeddelande när sidan laddas
window.addEventListener('load', () => {
    setTimeout(() => {
        addMessage("assistant", "Hej! 👋 Jag är Khabaz AI. Fråga mig vad som helst baserat på min kunskapsbas!");
    }, 500);
    input.focus();
});











// LÄGG TILL DENNA KOD EFTER DINA EXISTERANDE EVENT LISTENERS

// Smart Enter-beteende för mobil vs desktop
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && window.innerWidth > 768) {
        // På dator - skicka med Enter
        e.preventDefault();
        handleSend();
    }
    // På mobil - låt Enter skapa ny rad (inget görs, standardbeteende)
});









// LÄGG TILL DENNA KOD I SLUTET AV chatUI.js
// Smart Enter-beteende för mobil vs desktop
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && window.innerWidth > 768 && !e.shiftKey) {
        // På dator - skicka med Enter (om inte Shift+Enter)
        e.preventDefault();
        handleSend();
    }
    // På mobil - låt Enter skapa ny rad (standardbeteende)
});