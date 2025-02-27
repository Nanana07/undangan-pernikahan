// Countdown
const targetDate = new Date("2025-12-31").getTime();
const timer = setInterval(() => {
    let now = new Date().getTime();
    let distance = targetDate - now;
    
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("timer").innerHTML = `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;
    
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "Hari Bahagia Telah Tiba!";
    }
}, 1000);

// RSVP Form
document.getElementById("rsvpForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let nama = document.getElementById("nama").value;
    document.getElementById("rsvpStatus").innerHTML = `Terima kasih, ${nama}! Sampai jumpa di acara kami.`;
});
