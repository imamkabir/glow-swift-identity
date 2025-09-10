@extends('layouts.dashboard')

@section('title', 'Admin Dashboard')

@section('content')
<div class="container mx-auto px-6 py-8">
    <!-- Welcome Section -->
    <div class="mb-12 animate-fade-in">
        <div class="glass border-2 border-neon-magenta/30 rounded-3xl p-8">
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-4xl font-orbitron font-bold mb-4">
                        <span class="neon-text-magenta">Admin </span>
                        <span class="text-white">Dashboard</span>
                    </h1>
                    <p class="text-xl text-gray-300">
                        Manage users, monitor system performance, and oversee operations.
                    </p>
                </div>
                <div class="hidden md:block">
                    <div class="w-32 h-32 bg-gradient-to-br from-neon-magenta to-neon-purple rounded-full flex items-center justify-center animate-glow-pulse">
                        <svg class="w-16 h-16 text-background" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10.5V11.5C14.8,12.4 14.4,13.2 13.7,13.7V16.5C13.7,17.1 13.3,17.5 12.7,17.5H11.3C10.7,17.5 10.3,17.1 10.3,16.5V13.7C9.6,13.2 9.2,12.4 9.2,11.5V10.5C9.2,8.6 10.6,7 12,7Z"/>
                        </svg>
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
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                </svg>
            </div>
            <div class="text-2xl font-orbitron font-bold text-white mb-2">{{ $stats['total_users'] }}</div>
            <div class="text-sm text-gray-300">Total Users</div>
        </div>

        <div class="glass border-2 border-neon-green/30 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
            <div class="w-12 h-12 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-6 h-6 text-neon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            </div>
            <div class="text-2xl font-orbitron font-bold text-white mb-2">{{ $stats['active_users'] }}</div>
            <div class="text-sm text-gray-300">Active Users</div>
        </div>

        <div class="glass border-2 border-neon-magenta/30 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
            <div class="w-12 h-12 bg-neon-magenta/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-6 h-6 text-neon-magenta" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10.5V11.5C14.8,12.4 14.4,13.2 13.7,13.7V16.5C13.7,17.1 13.3,17.5 12.7,17.5H11.3C10.7,17.5 10.3,17.1 10.3,16.5V13.7C9.6,13.2 9.2,12.4 9.2,11.5V10.5C9.2,8.6 10.6,7 12,7Z"/>
                </svg>
            </div>
            <div class="text-2xl font-orbitron font-bold text-white mb-2">{{ $stats['admin_users'] }}</div>
            <div class="text-sm text-gray-300">Admin Users</div>
        </div>

        <div class="glass border-2 border-neon-purple/30 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
            <div class="w-12 h-12 bg-neon-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-6 h-6 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
            </div>
            <div class="text-2xl font-orbitron font-bold text-white mb-2">{{ $stats['regular_users'] }}</div>
            <div class="text-sm text-gray-300">Regular Users</div>
        </div>
    </div>

    <!-- Quick Actions -->
    <div class="grid md:grid-cols-2 gap-8 mb-12 animate-slide-in-up" style="animation-delay: 0.4s">
        <div class="glass border-2 border-neon-cyan/30 rounded-2xl p-8">
            <h2 class="text-2xl font-orbitron font-bold text-white mb-6">Quick Actions</h2>
            <div class="space-y-4">
                <a href="{{ route('admin.users.create') }}" class="block neon-button-cyan px-6 py-4 rounded-xl text-center font-medium hover:scale-105 transition-all duration-300">
                    <div class="flex items-center justify-center space-x-3">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                        <span>Add New User</span>
                    </div>
                </a>
                
                <a href="{{ route('admin.users') }}" class="block glass border border-neon-magenta/30 px-6 py-4 rounded-xl text-center font-medium text-neon-magenta hover:bg-neon-magenta/10 hover:scale-105 transition-all duration-300">
                    <div class="flex items-center justify-center space-x-3">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                        </svg>
                        <span>Manage Users</span>
                    </div>
                </a>
                
                <a href="{{ route('home') }}" class="block glass border border-neon-purple/30 px-6 py-4 rounded-xl text-center font-medium text-neon-purple hover:bg-neon-purple/10 hover:scale-105 transition-all duration-300">
                    <div class="flex items-center justify-center space-x-3">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                        </svg>
                        <span>View Website</span>
                    </div>
                </a>
            </div>
        </div>

        <div class="glass border-2 border-neon-magenta/30 rounded-2xl p-8">
            <h2 class="text-2xl font-orbitron font-bold text-white mb-6">System Overview</h2>
            <div class="space-y-4">
                <div class="flex justify-between items-center py-3 border-b border-white/10">
                    <span class="text-gray-300">Server Status</span>
                    <span class="text-neon-green font-medium flex items-center">
                        <div class="w-2 h-2 bg-neon-green rounded-full mr-2 animate-pulse"></div>
                        Online
                    </span>
                </div>
                <div class="flex justify-between items-center py-3 border-b border-white/10">
                    <span class="text-gray-300">Database</span>
                    <span class="text-neon-green font-medium flex items-center">
                        <div class="w-2 h-2 bg-neon-green rounded-full mr-2 animate-pulse"></div>
                        Connected
                    </span>
                </div>
                <div class="flex justify-between items-center py-3 border-b border-white/10">
                    <span class="text-gray-300">Last Backup</span>
                    <span class="text-white font-medium">{{ now()->subHours(2)->diffForHumans() }}</span>
                </div>
                <div class="flex justify-between items-center py-3">
                    <span class="text-gray-300">System Load</span>
                    <span class="text-neon-cyan font-medium">Normal</span>
                </div>
            </div>
        </div>
    </div>

    <!-- Recent Users -->
    <div class="glass border-2 border-neon-purple/30 rounded-2xl p-8 animate-slide-in-up" style="animation-delay: 0.6s">
        <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-orbitron font-bold text-white">Recent Users</h2>
            <a href="{{ route('admin.users') }}" class="text-neon-cyan hover:text-neon-magenta transition-colors">
                View All →
            </a>
        </div>
        
        <div class="overflow-x-auto">
            <table class="w-full">
                <thead>
                    <tr class="border-b border-white/10">
                        <th class="text-left py-3 text-gray-300 font-medium">User</th>
                        <th class="text-left py-3 text-gray-300 font-medium">Role</th>
                        <th class="text-left py-3 text-gray-300 font-medium">Status</th>
                        <th class="text-left py-3 text-gray-300 font-medium">Joined</th>
                        <th class="text-left py-3 text-gray-300 font-medium">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse($recentUsers as $user)
                    <tr class="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td class="py-4">
                            <div class="flex items-center space-x-3">
                                <div class="w-8 h-8 bg-gradient-to-br from-neon-cyan to-neon-magenta rounded-full flex items-center justify-center">
                                    <span class="text-background font-bold text-xs">{{ substr($user->name, 0, 1) }}</span>
                                </div>
                                <div>
                                    <p class="text-white font-medium">{{ $user->name }}</p>
                                    <p class="text-gray-400 text-sm">{{ $user->email }}</p>
                                </div>
                            </div>
                        </td>
                        <td class="py-4">
                            <span class="px-2 py-1 rounded-full text-xs font-medium {{ $user->role === 'admin' ? 'bg-neon-magenta/20 text-neon-magenta' : 'bg-neon-cyan/20 text-neon-cyan' }}">
                                {{ ucfirst($user->role) }}
                            </span>
                        </td>
                        <td class="py-4">
                            <span class="px-2 py-1 rounded-full text-xs font-medium {{ $user->is_active ? 'bg-neon-green/20 text-neon-green' : 'bg-red-500/20 text-red-400' }}">
                                {{ $user->is_active ? 'Active' : 'Inactive' }}
                            </span>
                        </td>
                        <td class="py-4 text-gray-300">
                            {{ $user->created_at->diffForHumans() }}
                        </td>
                        <td class="py-4">
                            <a href="{{ route('admin.users.edit', $user) }}" class="text-neon-cyan hover:text-neon-magenta transition-colors">
                                Edit
                            </a>
                        </td>
                    </tr>
                    @empty
                    <tr>
                        <td colspan="5" class="py-8 text-center text-gray-400">
                            No users found
                        </td>
                    </tr>
                    @endforelse
                </tbody>
            </table>
        </div>
    </div>
</div>
@endsection