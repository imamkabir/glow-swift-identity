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
                @if(auth()->user()->isAdmin())
                    <a href="{{ route('admin.index') }}" class="text-sm font-medium transition-all duration-300 hover:text-neon-cyan {{ request()->routeIs('admin.index') ? 'neon-text-cyan' : 'text-gray-300' }}">
                        Dashboard
                    </a>
                    <a href="{{ route('admin.users') }}" class="text-sm font-medium transition-all duration-300 hover:text-neon-cyan {{ request()->routeIs('admin.users*') ? 'neon-text-cyan' : 'text-gray-300' }}">
                        Users
                    </a>
                @else
                    <a href="{{ route('dashboard') }}" class="text-sm font-medium transition-all duration-300 hover:text-neon-cyan {{ request()->routeIs('dashboard') ? 'neon-text-cyan' : 'text-gray-300' }}">
                        Dashboard
                    </a>
                    <a href="{{ route('profile') }}" class="text-sm font-medium transition-all duration-300 hover:text-neon-cyan {{ request()->routeIs('profile') ? 'neon-text-cyan' : 'text-gray-300' }}">
                        Profile
                    </a>
                @endif
                
                <a href="{{ route('home') }}" class="text-sm font-medium transition-all duration-300 hover:text-neon-cyan text-gray-300">
                    Back to Site
                </a>
                
                <!-- User Menu -->
                <div class="relative group">
                    <button class="flex items-center space-x-2 text-sm font-medium text-gray-300 hover:text-neon-cyan transition-colors">
                        <div class="w-8 h-8 bg-gradient-to-br from-neon-cyan to-neon-magenta rounded-full flex items-center justify-center">
                            <span class="text-background font-bold text-xs">{{ substr(auth()->user()->name, 0, 1) }}</span>
                        </div>
                        <span>{{ auth()->user()->name }}</span>
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    
                    <div class="absolute right-0 mt-2 w-48 glass border border-white/10 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div class="py-2">
                            @if(!auth()->user()->isAdmin())
                                <a href="{{ route('profile') }}" class="block px-4 py-2 text-sm text-gray-300 hover:text-neon-cyan hover:bg-white/5 transition-colors">
                                    Profile Settings
                                </a>
                            @endif
                            <form method="POST" action="{{ route('logout') }}">
                                @csrf
                                <button type="submit" class="w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-neon-cyan hover:bg-white/5 transition-colors">
                                    Logout
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
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
                @if(auth()->user()->isAdmin())
                    <a href="{{ route('admin.index') }}" class="text-sm font-medium transition-colors {{ request()->routeIs('admin.index') ? 'neon-text-cyan' : 'text-gray-300 hover:text-neon-cyan' }}">
                        Dashboard
                    </a>
                    <a href="{{ route('admin.users') }}" class="text-sm font-medium transition-colors {{ request()->routeIs('admin.users*') ? 'neon-text-cyan' : 'text-gray-300 hover:text-neon-cyan' }}">
                        Users
                    </a>
                @else
                    <a href="{{ route('dashboard') }}" class="text-sm font-medium transition-colors {{ request()->routeIs('dashboard') ? 'neon-text-cyan' : 'text-gray-300 hover:text-neon-cyan' }}">
                        Dashboard
                    </a>
                    <a href="{{ route('profile') }}" class="text-sm font-medium transition-colors {{ request()->routeIs('profile') ? 'neon-text-cyan' : 'text-gray-300 hover:text-neon-cyan' }}">
                        Profile
                    </a>
                @endif
                
                <a href="{{ route('home') }}" class="text-sm font-medium transition-colors text-gray-300 hover:text-neon-cyan">
                    Back to Site
                </a>
                
                <form method="POST" action="{{ route('logout') }}">
                    @csrf
                    <button type="submit" class="text-sm font-medium transition-colors text-gray-300 hover:text-neon-cyan text-left">
                        Logout
                    </button>
                </form>
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