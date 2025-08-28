// Navbar Counters
let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

// Define Vars
const heartCounter = document.getElementById('header-heart-count');
const coinCounter = document.getElementById('header-coin-count');
const copyCounterEl = document.querySelector('.copy-history');
const historyContainer = document.querySelector('.call-history');
const clearHistoryBtn = document.getElementById('history-clear-btn');

// Heart Button
document.querySelectorAll('.card-heart-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        heartCount++;
        heartCounter.textContent = heartCount;
    });
});

// Copy Button
document.querySelectorAll('#card-copy').forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        const card = btn.closest('div.single-card-box');
        const number = card.querySelector('h2').textContent.trim();

        navigator.clipboard.writeText(number).then(() => {
            alert(`✅ ${number} copied to clipboard`);
        });

        copyCount++;
        copyCounterEl.textContent = `${copyCount} copy`;
    });
});

// Call Button
document.querySelectorAll('#card-call').forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        const card = btn.closest('div.single-card-box');
        const text = card.querySelector('h3').textContent.trim();
        const serviceName = text
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
        const number = card.querySelector('h2').textContent.trim();

        if (coinCount < 20) {
            alert('⚠️ Not enough coins to make a call!');
            return;
        }

        coinCount -= 20;
        coinCounter.textContent = coinCount;

        alert(`📞 Calling ${serviceName} at ${number}...`);

        const now = new Date();
        const time = now.toLocaleTimeString();

        const historyItem = document.createElement('div');
        historyItem.className = 'flex justify-between items-center bg-[#fafafa] p-4 gap-4 rounded-lg';
        historyItem.innerHTML = `
        <div>
            <h4 class="text-[#111] font-['inter'] text-lg font-semibold capitalize">${serviceName}</h4>
            <p class="text-[#5c5c5c] font-['hind_madurai'] font-normal text-lg">${number}</p>
        </div>
        <span class="text-[#111] font-['hind_madurai'] font-normal text-lg whitespace-nowrap">${time}</span>
        `;
        historyContainer.appendChild(historyItem);
    });
});

// Clear History Button
clearHistoryBtn.addEventListener('click', () => {
    historyContainer.innerHTML = '';
});
