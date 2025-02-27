document.addEventListener("DOMContentLoaded", function() {
    // Inisialisasi AOS
    AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true
    });

    // GSAP Animasi Hero Section
    gsap.from(".hero h1", { duration: 1, opacity: 0, y: -50 });
    gsap.from(".hero h2", { duration: 1, opacity: 0, y: 50, delay: 0.5 });
    gsap.from(".hero button", { duration: 1, opacity: 0, scale: 0.5, delay: 1 });

    // Countdown Timer
    const targetDate = new Date("2025-12-31").getTime();
    setInterval(() => {
        const now = new Date().getTime();
        const diff = targetDate - now;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        document.getElementById("countdown").innerText = `${days} hari lagi`;
    }, 1000);

    // Musik Latar Autoplay
    document.getElementById("openInvite").addEventListener("click", function() {
        document.getElementById("background-music").play();
    });

    // Efek Bintang (Particles.js)
    particlesJS("particles-js", {
        particles: {
            number: { value: 80 },
            size: { value: 3 },
            move: { speed: 1 }
        }
    });
});
