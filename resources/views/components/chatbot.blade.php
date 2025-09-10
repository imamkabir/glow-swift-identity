<div id="chatbot-container">
    <!-- Floating Chat Button -->
    <button
        id="chatbot-toggle"
        class="fixed bottom-6 right-6 w-16 h-16 neon-button-cyan rounded-full flex items-center justify-center z-50 animate-float"
    >
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
        </svg>
    </button>

    <!-- Chat Modal -->
    <div id="chatbot-modal" class="fixed bottom-6 right-6 w-96 h-[500px] glass border-2 border-neon-cyan/30 rounded-2xl z-50 flex-col overflow-hidden hidden">
        <!-- Header -->
        <div class="flex items-center justify-between p-4 border-b border-white/10">
            <div class="flex items-center space-x-3">
                <div class="w-8 h-8 bg-gradient-to-br from-neon-cyan to-neon-magenta rounded-full flex items-center justify-center">
                    <span class="text-background font-orbitron font-bold text-sm">N</span>
                </div>
                <h3 class="font-orbitron font-bold neon-text-cyan">Neon Assistant</h3>
            </div>
            <button id="chatbot-close" class="text-gray-400 hover:text-white transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </div>

        <!-- Messages -->
        <div id="chatbot-messages" class="flex-1 p-4 overflow-y-auto space-y-4">
            <div class="flex justify-start">
                <div class="max-w-[80%] p-3 rounded-lg glass text-gray-300">
                    <p class="text-sm">Hello! I'm your AI assistant. How can I help you today?</p>
                    <p class="text-xs opacity-60 mt-1" id="initial-timestamp"></p>
                </div>
            </div>
        </div>

        <!-- Input -->
        <div class="p-4 border-t border-white/10">
            <div class="flex space-x-2">
                <input
                    type="text"
                    id="chatbot-input"
                    placeholder="Type your message..."
                    class="flex-1 neon-input rounded-lg px-3 py-2 text-sm"
                />
                <button id="chatbot-send" class="neon-button-cyan p-2 rounded-lg">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotModal = document.getElementById('chatbot-modal');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSend = document.getElementById('chatbot-send');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const initialTimestamp = document.getElementById('initial-timestamp');

    // Set initial timestamp
    initialTimestamp.textContent = new Date().toLocaleTimeString();

    // Toggle chatbot
    chatbotToggle.addEventListener('click', function() {
        chatbotModal.classList.remove('hidden');
        chatbotModal.classList.add('flex');
        chatbotToggle.style.display = 'none';
    });

    chatbotClose.addEventListener('click', function() {
        chatbotModal.classList.add('hidden');
        chatbotModal.classList.remove('flex');
        chatbotToggle.style.display = 'flex';
    });

    // Send message
    function sendMessage() {
        const message = chatbotInput.value.trim();
        if (!message) return;

        // Add user message
        addMessage(message, 'user');
        chatbotInput.value = '';

        // Simulate bot response
        setTimeout(() => {
            const response = getIntelligentResponse(message);
            addMessage(response, 'bot');
        }, 800);
    }

    function addMessage(content, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `flex ${type === 'user' ? 'justify-end' : 'justify-start'}`;
        
        const timestamp = new Date().toLocaleTimeString();
        
        messageDiv.innerHTML = `
            <div class="max-w-[80%] p-3 rounded-lg ${type === 'user' ? 'bg-neon-cyan/20 text-white' : 'glass text-gray-300'}">
                <p class="text-sm">${content}</p>
                <p class="text-xs opacity-60 mt-1">${timestamp}</p>
            </div>
        `;
        
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function getIntelligentResponse(userMessage) {
        const msg = userMessage.toLowerCase();
        
        if (msg.includes('about') || msg.includes('neon tech') || msg.includes('company')) {
            return "Neon Tech Enterprises is not just a company — it's a movement! We revolutionize digital identity by getting anyone from startup founders to government agencies online in under 48 hours. Founded in Nigeria in 2025, we're expanding globally with our futuristic approach combining AI, blockchain, and quantum computing. Our mission: make digital transformation fast, affordable, and unforgettable! 🚀";
        }
        if (msg.includes('services') || msg.includes('what do you do')) {
            return "We offer 3 revolutionary services: 🌍 Website Blueprints (48-hour websites), 🛡️ Cybersecurity (AI-powered protection), and 🔐 Digital Fingerprints (blockchain identity). From ₦30k-₦100k, we deliver professional, secure, and lightning-fast solutions!";
        }
        if (msg.includes('price') || msg.includes('cost') || msg.includes('how much')) {
            return "Our prices are incredibly affordable: ₦30,000 - ₦100,000 depending on your needs. That includes everything: design, development, hosting, security, and a dashboard so easy even a baby can use it! 💰";
        }
        if (msg.includes('time') || msg.includes('how long') || msg.includes('48 hours')) {
            return "48 hours or LESS! That's our guarantee. We're not just fast - we're revolutionary. Most companies take weeks or months, but we've perfected the art of rapid digital transformation without compromising quality! ⚡";
        }
        if (msg.includes('contact') || msg.includes('phone') || msg.includes('email')) {
            return "Contact us instantly! 📱 WhatsApp: 09039500022 | 📧 Email: imamkabir397@gmail.com | 🐦 Twitter & 📸 Instagram: @neontech | We respond in under 2 hours, every single day!";
        }
        if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
            return "Hello! Welcome to Neon Tech Enterprises! 🌟 I'm your AI assistant, ready to help you transform your digital presence. Whether you need a website, cybersecurity, or digital identity solutions - I've got you covered! What can I help you with today?";
        }
        if (msg.includes('founder') || msg.includes('team') || msg.includes('who')) {
            return "We're a revolutionary team of digital innovators based in Lagos, Nigeria, but operating globally! Our founders are visionaries who believe anyone deserves a stunning digital presence in 48 hours. We're not just developers - we're dream makers! 🌍✨";
        }
        
        return "I'm here to help with anything about Neon Tech! Ask me about our services, pricing, timeline, or how we can transform your business in 48 hours. What specific information do you need? 🚀";
    }

    // Event listeners
    chatbotSend.addEventListener('click', sendMessage);
    chatbotInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
});
</script>