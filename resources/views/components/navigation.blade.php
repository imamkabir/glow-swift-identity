<nav class="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
    <div class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
            <!-- Enhanced Logo -->
            <a href="{{ route('home') }}" class="flex items-center space-x-3 group">
                <div class="w-10 h-10 bg-gradient-to-br from-neon-cyan to-neon-magenta rounded-xl flex items-center justify-center animate-glow-pulse group-hover:animate-spin transition-all duration-300">
                    <span class="text-background font-orbitron font-bold text-xl">N</span>
                </div>
                <div class="hidden md:block">
                    <h1 class="text-xl font-orbitron font-bold neon-text-cyan group-hover:text-glow transition-all">
                        NEON TECH
                    </h1>
                    <p class="text-xs text-gray-400 -mt-1 tracking-widest">ENTERPRISES</p>
                </div>
            </a>

            <!-- Desktop Navigation -->
            <div class="hidden md:flex items-center space-x-8">
                <a href="{{ route('home') }}" class="text-sm font-medium transition-all duration-300 hover:text-neon-cyan {{ request()->routeIs('home') ? 'neon-text-cyan' : 'text-gray-300' }}">
                    Home
                </a>
                <a href="{{ route('about') }}" class="text-sm font-medium transition-all duration-300 hover:text-neon-cyan {{ request()->routeIs('about') ? 'neon-text-cyan' : 'text-gray-300' }}">
                    About
                </a>
                <a href="{{ route('services') }}" class="text-sm font-medium transition-all duration-300 hover:text-neon-cyan {{ request()->routeIs('services') ? 'neon-text-cyan' : 'text-gray-300' }}">
                    Services
                </a>
                <a href="{{ route('contact') }}" class="text-sm font-medium transition-all duration-300 hover:text-neon-cyan {{ request()->routeIs('contact') ? 'neon-text-cyan' : 'text-gray-300' }}">
                    Contact
                </a>
                
                @auth
                    <a href="{{ auth()->user()->isAdmin() ? route('admin.index') : route('dashboard') }}" class="text-sm font-medium transition-all duration-300 hover:text-neon-cyan text-gray-300">
                        {{ auth()->user()->isAdmin() ? 'Admin Panel' : 'Dashboard' }}
                    </a>
                    <form method="POST" action="{{ route('logout') }}" class="inline">
                        @csrf
                        <button type="submit" class="text-sm font-medium transition-all duration-300 hover:text-neon-cyan text-gray-300">
                            Logout
                        </button>
                    </form>
                @else
                    <a href="{{ route('login') }}" class="text-sm font-medium transition-all duration-300 hover:text-neon-cyan text-gray-300">
                        Login
                    </a>
                    <a href="{{ route('get-started') }}" class="neon-button-cyan px-6 py-2 rounded-lg text-sm font-medium">
                        Get Started
                    </a>
                @endauth
            </div>

            <!-- Mobile Menu Button -->
            <button id="mobile-menu-button" class="md:hidden p-2 text-gray-300 hover:text-neon-cyan transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>

        <!-- Mobile Navigation -->
        <div id="mobile-menu" class="md:hidden mt-4 pb-4 border-t border-white/10 hidden">
            <div class="flex flex-col space-y-4 pt-4">
                <a href="{{ route('home') }}" class="text-sm font-medium transition-colors {{ request()->routeIs('home') ? 'neon-text-cyan' : 'text-gray-300 hover:text-neon-cyan' }}">
                    Home
                </a>
                <a href="{{ route('about') }}" class="text-sm font-medium transition-colors {{ request()->routeIs('about') ? 'neon-text-cyan' : 'text-gray-300 hover:text-neon-cyan' }}">
                    About
                </a>
                <a href="{{ route('services') }}" class="text-sm font-medium transition-colors {{ request()->routeIs('services') ? 'neon-text-cyan' : 'text-gray-300 hover:text-neon-cyan' }}">
                    Services
                </a>
                <a href="{{ route('contact') }}" class="text-sm font-medium transition-colors {{ request()->routeIs('contact') ? 'neon-text-cyan' : 'text-gray-300 hover:text-neon-cyan' }}">
                    Contact
                </a>
                
                @auth
                    <a href="{{ auth()->user()->isAdmin() ? route('admin.index') : route('dashboard') }}" class="text-sm font-medium transition-colors text-gray-300 hover:text-neon-cyan">
                        {{ auth()->user()->isAdmin() ? 'Admin Panel' : 'Dashboard' }}
                    </a>
                    <form method="POST" action="{{ route('logout') }}">
                        @csrf
                        <button type="submit" class="text-sm font-medium transition-colors text-gray-300 hover:text-neon-cyan text-left">
                            Logout
                        </button>
                    </form>
                @else
                    <a href="{{ route('login') }}" class="text-sm font-medium transition-colors text-gray-300 hover:text-neon-cyan">
                        Login
                    </a>
                    <a href="{{ route('get-started') }}" class="neon-button-cyan px-6 py-2 rounded-lg text-sm font-medium text-center">
                        Get Started
                    </a>
                @endauth
            </div>
        </div>
    </div>
</nav>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
});
</script>