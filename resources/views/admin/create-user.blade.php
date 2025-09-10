@extends('layouts.dashboard')

@section('title', 'Create User')

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
                <span class="text-white">Create </span>
                <span class="neon-text-cyan">User</span>
            </h1>
        </div>
        <p class="text-xl text-gray-300">
            Add a new user to the system
        </p>
    </div>

    <div class="max-w-2xl mx-auto">
        <div class="glass border-2 border-neon-cyan/30 rounded-2xl p-8 animate-slide-in-up" style="animation-delay: 0.2s">
            <form method="POST" action="{{ route('admin.users.store') }}" class="space-y-6">
                @csrf
                
                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <label for="name" class="block text-sm font-medium text-gray-300 mb-2">
                            Full Name *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value="{{ old('name') }}"
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
                            value="{{ old('email') }}"
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
                            Password *
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            class="w-full neon-input rounded-lg px-4 py-3 @error('password') border-red-500 @enderror"
                            required
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
                            <option value="">Select role</option>
                            <option value="user" {{ old('role') === 'user' ? 'selected' : '' }}>User</option>
                            <option value="admin" {{ old('role') === 'admin' ? 'selected' : '' }}>Admin</option>
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
                            value="{{ old('phone') }}"
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
                            <option value="retail" {{ old('business_type') == 'retail' ? 'selected' : '' }}>Retail/E-commerce</option>
                            <option value="service" {{ old('business_type') == 'service' ? 'selected' : '' }}>Service Provider</option>
                            <option value="restaurant" {{ old('business_type') == 'restaurant' ? 'selected' : '' }}>Restaurant/Food</option>
                            <option value="healthcare" {{ old('business_type') == 'healthcare' ? 'selected' : '' }}>Healthcare</option>
                            <option value="education" {{ old('business_type') == 'education' ? 'selected' : '' }}>Education</option>
                            <option value="tech" {{ old('business_type') == 'tech' ? 'selected' : '' }}>Technology</option>
                            <option value="finance" {{ old('business_type') == 'finance' ? 'selected' : '' }}>Finance</option>
                            <option value="other" {{ old('business_type') == 'other' ? 'selected' : '' }}>Other</option>
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
                        value="{{ old('business_name') }}"
                        class="w-full neon-input rounded-lg px-4 py-3 @error('business_name') border-red-500 @enderror"
                        placeholder="Company Ltd"
                    />
                    @error('business_name')
                        <p class="text-red-400 text-sm mt-1">{{ $message }}</p>
                    @enderror
                </div>

                <div class="flex justify-between items-center pt-6">
                    <a href="{{ route('admin.users') }}" class="glass border border-gray-600 px-6 py-3 rounded-lg font-medium text-gray-300 hover:text-white transition-colors">
                        Cancel
                    </a>
                    <button
                        type="submit"
                        class="neon-button-cyan px-8 py-3 rounded-lg font-medium hover:scale-105 transition-all duration-300"
                    >
                        Create User
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection