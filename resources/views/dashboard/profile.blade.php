@extends('layouts.dashboard')

@section('title', 'Profile Settings')

@section('content')
<div class="container mx-auto px-6 py-8">
    <!-- Header -->
    <div class="mb-8 animate-fade-in">
        <h1 class="text-4xl font-orbitron font-bold mb-4">
            <span class="text-white">Profile </span>
            <span class="neon-text-cyan">Settings</span>
        </h1>
        <p class="text-xl text-gray-300">
            Manage your account information and preferences
        </p>
    </div>

    <div class="grid lg:grid-cols-3 gap-8">
        <!-- Profile Form -->
        <div class="lg:col-span-2">
            <div class="glass border-2 border-neon-cyan/30 rounded-2xl p-8 animate-slide-in-up" style="animation-delay: 0.2s">
                <h2 class="text-2xl font-orbitron font-bold text-white mb-6">Personal Information</h2>
                
                <form method="POST" action="{{ route('profile.update') }}" class="space-y-6">
                    @csrf
                    @method('PUT')
                    
                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <label for="name" class="block text-sm font-medium text-gray-300 mb-2">
                                Full Name *
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value="{{ old('name', $user->name) }}"
                                class="w-full neon-input rounded-lg px-4 py-3 @error('name') border-red-500 @enderror"
                                required
                            />
                            @error('name')
                                <p class="text-red-400 text-sm mt-1">{{ $message }}</p>
                            @enderror
                        </div>
                        
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-300 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                value="{{ $user->email }}"
                                class="w-full neon-input rounded-lg px-4 py-3 bg-gray-800/50 cursor-not-allowed"
                                disabled
                            />
                            <p class="text-gray-400 text-xs mt-1">Email cannot be changed</p>
                        </div>
                    </div>

                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <label for="phone" class="block text-sm font-medium text-gray-300 mb-2">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value="{{ old('phone', $user->phone) }}"
                                class="w-full neon-input rounded-lg px-4 py-3 @error('phone') border-red-500 @enderror"
                                placeholder="+234 XXX XXX XXXX"
                            />
                            @error('phone')
                                <p class="text-red-400 text-sm mt-1">{{ $message }}</p>
                            @enderror
                        </div>
                        
                        <div>
                            <label for="business_type" class="block text-sm font-medium text-gray-300 mb-2">
                                Business Type
                            </label>
                            <select
                                id="business_type"
                                name="business_type"
                                class="w-full neon-input rounded-lg px-4 py-3 @error('business_type') border-red-500 @enderror"
                            >
                                <option value="">Select business type</option>
                                <option value="retail" {{ old('business_type', $user->business_type) == 'retail' ? 'selected' : '' }}>Retail/E-commerce</option>
                                <option value="service" {{ old('business_type', $user->business_type) == 'service' ? 'selected' : '' }}>Service Provider</option>
                                <option value="restaurant" {{ old('business_type', $user->business_type) == 'restaurant' ? 'selected' : '' }}>Restaurant/Food</option>
                                <option value="healthcare" {{ old('business_type', $user->business_type) == 'healthcare' ? 'selected' : '' }}>Healthcare</option>
                                <option value="education" {{ old('business_type', $user->business_type) == 'education' ? 'selected' : '' }}>Education</option>
                                <option value="tech" {{ old('business_type', $user->business_type) == 'tech' ? 'selected' : '' }}>Technology</option>
                                <option value="finance" {{ old('business_type', $user->business_type) == 'finance' ? 'selected' : '' }}>Finance</option>
                                <option value="other" {{ old('business_type', $user->business_type) == 'other' ? 'selected' : '' }}>Other</option>
                            </select>
                            @error('business_type')
                                <p class="text-red-400 text-sm mt-1">{{ $message }}</p>
                            @enderror
                        </div>
                    </div>

                    <div>
                        <label for="business_name" class="block text-sm font-medium text-gray-300 mb-2">
                            Business Name
                        </label>
                        <input
                            type="text"
                            id="business_name"
                            name="business_name"
                            value="{{ old('business_name', $user->business_name) }}"
                            class="w-full neon-input rounded-lg px-4 py-3 @error('business_name') border-red-500 @enderror"
                            placeholder="Your Company Ltd"
                        />
                        @error('business_name')
                            <p class="text-red-400 text-sm mt-1">{{ $message }}</p>
                        @enderror
                    </div>

                    <div class="flex justify-end">
                        <button
                            type="submit"
                            class="neon-button-cyan px-8 py-3 rounded-lg font-medium hover:scale-105 transition-all duration-300"
                        >
                            Update Profile
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <!-- Profile Summary -->
        <div class="space-y-8">
            <!-- Profile Card -->
            <div class="glass border-2 border-neon-magenta/30 rounded-2xl p-8 text-center animate-slide-in-up" style="animation-delay: 0.4s">
                <div class="w-24 h-24 bg-gradient-to-br from-neon-cyan to-neon-magenta rounded-full flex items-center justify-center mx-auto mb-6 animate-glow-pulse">
                    <span class="text-background font-orbitron font-bold text-4xl">{{ substr($user->name, 0, 1) }}</span>
                </div>
                
                <h3 class="text-xl font-orbitron font-bold text-white mb-2">{{ $user->name }}</h3>
                <p class="text-neon-cyan mb-4">{{ ucfirst($user->role) }} Member</p>
                
                <div class="space-y-2 text-sm">
                    <div class="flex justify-between">
                        <span class="text-gray-400">Member Since:</span>
                        <span class="text-white">{{ $user->created_at->format('M Y') }}</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-gray-400">Status:</span>
                        <span class="text-neon-green">{{ $user->is_active ? 'Active' : 'Inactive' }}</span>
                    </div>
                    @if($user->email_verified_at)
                    <div class="flex justify-between">
                        <span class="text-gray-400">Email:</span>
                        <span class="text-neon-green">Verified</span>
                    </div>
                    @endif
                </div>
            </div>

            <!-- Account Actions -->
            <div class="glass border-2 border-neon-purple/30 rounded-2xl p-8 animate-slide-in-up" style="animation-delay: 0.6s">
                <h3 class="text-xl font-orbitron font-bold text-white mb-6">Account Actions</h3>
                
                <div class="space-y-4">
                    <a href="{{ route('dashboard') }}" class="block glass border border-neon-cyan/30 px-4 py-3 rounded-lg text-center font-medium text-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300">
                        <div class="flex items-center justify-center space-x-2">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
                            </svg>
                            <span>Back to Dashboard</span>
                        </div>
                    </a>
                    
                    <a href="{{ route('get-started') }}" class="block glass border border-neon-magenta/30 px-4 py-3 rounded-lg text-center font-medium text-neon-magenta hover:bg-neon-magenta/10 transition-all duration-300">
                        <div class="flex items-center justify-center space-x-2">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                            </svg>
                            <span>Start New Project</span>
                        </div>
                    </a>
                    
                    <form method="POST" action="{{ route('logout') }}">
                        @csrf
                        <button type="submit" class="w-full glass border border-red-500/30 px-4 py-3 rounded-lg text-center font-medium text-red-400 hover:bg-red-500/10 transition-all duration-300">
                            <div class="flex items-center justify-center space-x-2">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                                </svg>
                                <span>Logout</span>
                            </div>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection