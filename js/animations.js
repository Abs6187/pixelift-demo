// Animation controls for PixeLift

document.addEventListener('DOMContentLoaded', function() {
    // Hero animation
    const heroLottie = new DotLottie({
        autoplay: true,
        loop: true,
        canvas: document.querySelector('#hero-lottie'),
        src: "https://lottie.host/4db68bbd-31f6-4cd8-84eb-189de081159a/IGmMCqhzpt.lottie",
    });

    // Service animations
    const contentWritingLottie = new DotLottie({
        autoplay: true,
        loop: true,
        canvas: document.querySelector('#content-writing-lottie'),
        src: "https://lottie.host/eb7896d8-6fb6-4472-b9ed-eb37c9d6d595/fJDR9sUcYO.lottie",
    });

    const graphicDesignLottie = new DotLottie({
        autoplay: true,
        loop: true,
        canvas: document.querySelector('#graphic-design-lottie'),
        src: "https://lottie.host/af561e50-8c7e-42e9-9a92-5d50d6ef9dde/j7R6fMlpUP.lottie",
    });

    const videoEditingLottie = new DotLottie({
        autoplay: true,
        loop: true,
        canvas: document.querySelector('#video-editing-lottie'),
        src: "https://lottie.host/048d24c5-c725-4853-a430-7c26a0b4b89f/bt9jvaMB6I.lottie",
    });

    const socialMediaLottie = new DotLottie({
        autoplay: true,
        loop: true,
        canvas: document.querySelector('#social-media-lottie'),
        src: "https://lottie.host/9770c74d-93e4-4c13-9f5d-de9b7b3dc515/gAeEvA9klp.lottie",
    });

    // Contact animation
    const contactLottie = new DotLottie({
        autoplay: true,
        loop: true,
        canvas: document.querySelector('#contact-lottie'),
        src: "https://lottie.host/49baab20-9592-4960-87f4-8ca5c7e5f999/NKPPNYuSi5.lottie",
    });
});
