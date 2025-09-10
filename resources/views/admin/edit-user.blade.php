@extends('layouts.dashboard')

@section('title', 'Edit User')

@section('content')
<div class="container mx-auto px-6 py-8">
    <!-- Header -->
    <div class="mb-8 animate-fade-in">
        <div class="flex items-center space-x-4 mb-4">
            <a href="{{ route('admin.users') }}" class="text-gray-300 hover:text-neon-cyan transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
            </a>
            <h1 class="text-4xl font-orbitron font-bold">
                <span class="text-white">Edit </span>
                <span class="neon-text-cyan">User</span>
            </h1>
        </div>
        <p class="text-xl text-gray-300">
            Update user information and settings
        </p>
    </div>

    <div class="grid lg:grid-cols-3 gap-8">
        <!-- Edit Form -->
        <div class="lg:col-span-2">
            <div class="glass border-2 border-neon-cyan/30 rounded-2xl p-8 animate-slide-in-up" style="animation-delay: 0.2s">
                <form method="POST" action="{{ route('admin.users.update', $user) }}" class="space-y-6">
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
                                Email Address *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value="{{ old('email', $user->email) }}"
                                class="w-full neon-input rounded-lg px-4 py-3 @error('email') border-red-500 @enderror"
                                required
                            />
                            @error('email')
                                <p class="text-red-400 text-sm mt-1">{{ $message }}</p>
                            @enderror
                        </div>
                    </div>

                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <label for="password" class="block text-sm font-medium text-gray-300 mb-2">
                                New Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                class="w-full neon-input rounded-lg px-4 py-3 @error('password') border-red-500 @enderror"
                                placeholder="Leave blank to keep current password"
                            />
                            @error('password')
                                <p class="text-red-400 text-sm mt-1">{{ $message }}</p>
                            @enderror
                        </div>
                        
                        <div>
                            <label for="role" class="block text-sm font-medium text-gray-300 mb-2">
                                Role *
                            </label>
                            <select
                                id="role"
                                name="role"
                                class="w-full neon-input rounded-lg px-4 py-3 @error('role') border-red-500 @enderror"
                                required
                            >
                                <option value="user" {{ old('role', $user->role) === 'user' ? 'selected' : '' }}>User</option>
                                <option value="admin" {{ old('role', $user->role) === 'admin' ? 'selected' : '' }}>Admin</option>
                            </select>
                            @error('role')
                                <p class="text-red-400 text-sm mt-1">{{ $message }}</p>
                            @enderror
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
                            placeholder="Company Ltd"
                        />
                        @error('business_name')
                            <p class="text-red-400 text-sm mt-1">{{ $message }}</p>
                        @enderror
                    </div>

                    <div>
                        <label class="flex items-center space-x-3">
                            <input
                                type="checkbox"
                                name="is_active"
                                value="1"
                                {{ old('is_active', $user->is_active) ? 'checked' : '' }}
                                class="rounded border-gray-600 text-neon-cyan focus:ring-neon-cyan"
                            />
                            <span class="text-gray-300">User is active</span>
                        </label>
                    </div>

                    <div class="flex justify-between items-center pt-6">
                        <a href="{{ route('admin.users') }}" class="glass border border-gray-600 px-6 py-3 rounded-lg font-medium text-gray-300 hover:text-white transition-colors">
                            Cancel
                        </a>
                        <button
                            type="submit"
                            class="neon-button-cyan px-8 py-3 rounded-lg font-medium hover:scale-105 transition-all duration-300"
                        >
                            Update User
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <!-- User Info -->
        <div class="space-y-8">
            <!-- User Card -->
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
                        <span class="{{ $user->is_active ? 'text-neon-green' : 'text-red-400' }}">
                            {{ $user->is_active ? 'Active' : 'Inactive' }}
                        </span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-gray-400">Last Updated:</span>
                        <span class="text-white">{{ $user->updated_at->diffForHumans() }}</span>
                    </div>
                </div>
            </div>

            <!-- Danger Zone -->
            @if($user->id !== auth()->id())
            <div class="glass border-2 border-red-500/30 rounded-2xl p-8 animate-slide-in-up" style="animation-delay: 0.6s">
                <h3 class="text-xl font-orbitron font-bold text-red-400 mb-6">Danger Zone</h3>
                
                <div class="space-y-4">
                    <form method="POST" action="{{ route('admin.users.toggle-status', $user) }}">
                        @csrf
                        @method('PATCH')
                        <button
                            type="submit"
                            class="w-full glass border border-yellow-500/30 px-4 py-3 rounded-lg text-center font-medium text-yellow-400 hover:bg-yellow-500/10 transition-all duration-300"
                        >
                            {{ $user->is_active ? 'Deactivate' : 'Activate' }} User
                        </button>
                    </form>
                    
                    <form method="POST" action="{{ route('admin.users.delete', $user) }}" onsubmit="return confirm('Are you sure you want to delete this user? This action cannot be undone.')">
                        @csrf
                        @method('DELETE')
                        <button
                            type="submit"
                            class="w-full glass border border-red-500/30 px-4 py-3 rounded-lg text-center font-medium text-red-400 hover:bg-red-500/10 transition-all duration-300"
                        >
                            Delete User
                        </button>
                    </form>
                </div>
            </div>
            @endif
        </div>
    </div>
</div>
@endsection