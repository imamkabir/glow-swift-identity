@extends('layouts.app')

@section('title', 'Login - Neon Tech Enterprises')

@section('content')
<main class="pt-24 min-h-screen flex items-center justify-center">
    <div class="container mx-auto px-6 py-20">
        <!-- Back Button -->
        <div class="mb-8 animate-fade-in">
            <a href="{{ route('home') }}" class="inline-flex items-center text-gray-300 hover:text-neon-cyan transition-colors">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                Back to Home
            </a>
        </div>

        <div class="max-w-md mx-auto">
            <!-- Logo -->
            <div class="text-center mb-8 animate-fade-in" style="animation-delay: 0.2s">
                <div class="w-16 h-16 mx-auto bg-gradient-to-br from-neon-cyan to-neon-magenta rounded-full flex items-center justify-center animate-glow-pulse mb-4">
                    <span class="text-background font-orbitron font-bold text-2xl">N</span>
                </div>
                <h1 class="text-2xl font-orbitron font-bold">
                    <span class="neon-text-cyan">NEON TECH</span>
                </h1>
                <p class="text-xs text-gray-400">ENTERPRISES</p>
            </div>

            <!-- Form Container -->
            <div class="glass border-2 border-neon-cyan/30 rounded-2xl p-8 animate-slide-in-up" style="animation-delay: 0.4s">
                <!-- Toggle Buttons -->
                <div class="flex mb-8 bg-white/5 rounded-lg p-1">
                    <div class="flex-1 py-2 rounded-md text-sm font-medium transition-all duration-300 neon-button-cyan text-center">
                        Login
                    </div>
                    <a href="{{ route('register') }}" class="flex-1 py-2 rounded-md text-sm font-medium transition-all duration-300 text-gray-400 hover:text-white text-center">
                        Register
                    </a>
                </div>

                <!-- Form -->
                <form method="POST" action="{{ route('login') }}" class="space-y-6">
                    @csrf
                    
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-300 mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value="{{ old('email') }}"
                            class="w-full neon-input rounded-lg px-4 py-3 @error('email') border-red-500 @enderror"
                            placeholder="Enter your email"
                            required
                        />
                        @error('email')
                            <p class="text-red-400 text-sm mt-1">{{ $message }}</p>
                        @enderror
                    </div>

                    <div>
                        <label for="password" class="block text-sm font-medium text-gray-300 mb-2">
                            Password
                        </label>
                        <div class="relative">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                class="w-full neon-input rounded-lg px-4 py-3 pr-12 @error('password') border-red-500 @enderror"
                                placeholder="Enter your password"
                                required
                            />
                            <button
                                type="button"
                                onclick="togglePassword()"
                                class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                            >
                                <svg id="eye-open" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                </svg>
                                <svg id="eye-closed" class="w-5 h-5 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"></path>
                                </svg>
                            </button>
                        </div>
                        @error('password')
                            <p class="text-red-400 text-sm mt-1">{{ $message }}</p>
                        @enderror
                    </div>

                    <div class="flex items-center justify-between text-sm">
                        <label class="flex items-center text-gray-300">
                            <input
                                type="checkbox"
                                name="remember"
                                class="mr-2 rounded border-gray-600 text-neon-cyan focus:ring-neon-cyan"
                            />
                            Remember me
                        </label>
                        <a href="#" class="text-neon-cyan hover:text-neon-magenta transition-colors">
                            Forgot password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        class="w-full neon-button-cyan py-3 rounded-lg text-lg font-medium transition-all duration-300"
                    >
                        Sign In
                    </button>
                </form>

                <!-- Footer Text -->
                <div class="mt-8 text-center text-sm text-gray-400">
                    Don't have an account?
                    <a href="{{ route('register') }}" class="text-neon-cyan hover:text-neon-magenta transition-colors">
                        Sign up
                    </a>
                </div>
            </div>
        </div>
    </div>
</main>

<script>
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const eyeOpen = document.getElementById('eye-open');
    const eyeClosed = document.getElementById('eye-closed');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeOpen.classList.add('hidden');
        eyeClosed.classList.remove('hidden');
    } else {
        passwordInput.type = 'password';
        eyeOpen.classList.remove('hidden');
        eyeClosed.classList.add('hidden');
    }
}
</script>
@endsection