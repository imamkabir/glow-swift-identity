@extends('layouts.dashboard')

@section('title', 'Dashboard')

@section('content')
<div class="container mx-auto px-6 py-8">
    <!-- Welcome Section -->
    <div class="mb-12 animate-fade-in">
        <div class="glass border-2 border-neon-cyan/30 rounded-3xl p-8">
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-4xl font-orbitron font-bold mb-4">
                        <span class="text-white">Welcome back, </span>
                        <span class="neon-text-cyan">{{ $user->name }}</span>
                    </h1>
                    <p class="text-xl text-gray-300">
                        Ready to transform your digital presence? Let's build something amazing together.
                    </p>
                </div>
                <div class="hidden md:block">
                    <div class="w-32 h-32 bg-gradient-to-br from-neon-cyan to-neon-magenta rounded-full flex items-center justify-center animate-glow-pulse">
                        <span class="text-background font-orbitron font-bold text-6xl">{{ substr($user->name, 0, 1) }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 animate-slide-in-up" style="animation-delay: 0.2s">
        <div class="glass border-2 border-neon-cyan/30 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
            <div class="w-12 h-12 bg-neon-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-6 h-6 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
            </div>
            <div class="text-2xl font-orbitron font-bold text-white mb-2">{{ $stats['projects'] }}</div>
            <div class="text-sm text-gray-300">Active Projects</div>
        </div>

        <div class="glass border-2 border-neon-magenta/30 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
            <div class="w-12 h-12 bg-neon-magenta/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-6 h-6 text-neon-magenta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            </div>
            <div class="text-2xl font-orbitron font-bold text-white mb-2">{{ $stats['active_services'] }}</div>
            <div class="text-sm text-gray-300">Active Services</div>
        </div>

        <div class="glass border-2 border-neon-purple/30 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
            <div class="w-12 h-12 bg-neon-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-6 h-6 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                </svg>
            </div>
            <div class="text-2xl font-orbitron font-bold text-white mb-2">{{ $stats['total_spent'] }}</div>
            <div class="text-sm text-gray-300">Total Spent</div>
        </div>

        <div class="glass border-2 border-neon-green/30 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
            <div class="w-12 h-12 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-6 h-6 text-neon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            </div>
            <div class="text-2xl font-orbitron font-bold text-white mb-2">{{ $stats['support_tickets'] }}</div>
            <div class="text-sm text-gray-300">Support Tickets</div>
        </div>
    </div>

    <!-- Quick Actions -->
    <div class="grid md:grid-cols-2 gap-8 mb-12 animate-slide-in-up" style="animation-delay: 0.4s">
        <div class="glass border-2 border-neon-cyan/30 rounded-2xl p-8">
            <h2 class="text-2xl font-orbitron font-bold text-white mb-6">Quick Actions</h2>
            <div class="space-y-4">
                <a href="{{ route('get-started') }}" class="block neon-button-cyan px-6 py-4 rounded-xl text-center font-medium hover:scale-105 transition-all duration-300">
                    <div class="flex items-center justify-center space-x-3">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                        <span>Start New Project</span>
                    </div>
                </a>
                
                <a href="{{ route('services') }}" class="block glass border border-neon-magenta/30 px-6 py-4 rounded-xl text-center font-medium text-neon-magenta hover:bg-neon-magenta/10 hover:scale-105 transition-all duration-300">
                    <div class="flex items-center justify-center space-x-3">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0H8m8 0v6a2 2 0 01-2 2H10a2 2 0 01-2-2V6"></path>
                        </svg>
                        <span>Browse Services</span>
                    </div>
                </a>
                
                <a href="{{ route('contact') }}" class="block glass border border-neon-purple/30 px-6 py-4 rounded-xl text-center font-medium text-neon-purple hover:bg-neon-purple/10 hover:scale-105 transition-all duration-300">
                    <div class="flex items-center justify-center space-x-3">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                        </svg>
                        <span>Contact Support</span>
                    </div>
                </a>
            </div>
        </div>

        <div class="glass border-2 border-neon-magenta/30 rounded-2xl p-8">
            <h2 class="text-2xl font-orbitron font-bold text-white mb-6">Account Information</h2>
            <div class="space-y-4">
                <div class="flex justify-between items-center py-3 border-b border-white/10">
                    <span class="text-gray-300">Name</span>
                    <span class="text-white font-medium">{{ $user->name }}</span>
                </div>
                <div class="flex justify-between items-center py-3 border-b border-white/10">
                    <span class="text-gray-300">Email</span>
                    <span class="text-white font-medium">{{ $user->email }}</span>
                </div>
                @if($user->phone)
                <div class="flex justify-between items-center py-3 border-b border-white/10">
                    <span class="text-gray-300">Phone</span>
                    <span class="text-white font-medium">{{ $user->phone }}</span>
                </div>
                @endif
                @if($user->business_name)
                <div class="flex justify-between items-center py-3 border-b border-white/10">
                    <span class="text-gray-300">Business</span>
                    <span class="text-white font-medium">{{ $user->business_name }}</span>
                </div>
                @endif
                <div class="flex justify-between items-center py-3">
                    <span class="text-gray-300">Member Since</span>
                    <span class="text-white font-medium">{{ $user->created_at->format('M Y') }}</span>
                </div>
            </div>
            
            <div class="mt-6">
                <a href="{{ route('profile') }}" class="block neon-button-magenta px-6 py-3 rounded-xl text-center font-medium hover:scale-105 transition-all duration-300">
                    Update Profile
                </a>
            </div>
        </div>
    </div>

    <!-- Recent Activity -->
    <div class="glass border-2 border-neon-purple/30 rounded-2xl p-8 animate-slide-in-up" style="animation-delay: 0.6s">
        <h2 class="text-2xl font-orbitron font-bold text-white mb-6">Recent Activity</h2>
        <div class="space-y-4">
            <div class="flex items-center space-x-4 p-4 glass rounded-lg">
                <div class="w-10 h-10 bg-neon-cyan/20 rounded-full flex items-center justify-center">
                    <svg class="w-5 h-5 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </div>
                <div class="flex-1">
                    <p class="text-white font-medium">Account created successfully</p>
                    <p class="text-gray-400 text-sm">Welcome to Neon Tech Enterprises!</p>
                </div>
                <div class="text-gray-400 text-sm">
                    {{ $user->created_at->diffForHumans() }}
                </div>
            </div>
            
            <div class="flex items-center space-x-4 p-4 glass rounded-lg opacity-50">
                <div class="w-10 h-10 bg-neon-magenta/20 rounded-full flex items-center justify-center">
                    <svg class="w-5 h-5 text-neon-magenta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                </div>
                <div class="flex-1">
                    <p class="text-white font-medium">Ready to start your first project?</p>
                    <p class="text-gray-400 text-sm">Click "Start New Project" to begin your digital transformation</p>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection