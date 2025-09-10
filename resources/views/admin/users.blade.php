@extends('layouts.dashboard')

@section('title', 'User Management')

@section('content')
<div class="container mx-auto px-6 py-8">
    <!-- Header -->
    <div class="flex items-center justify-between mb-8 animate-fade-in">
        <div>
            <h1 class="text-4xl font-orbitron font-bold mb-4">
                <span class="text-white">User </span>
                <span class="neon-text-cyan">Management</span>
            </h1>
            <p class="text-xl text-gray-300">
                Manage all users, roles, and permissions
            </p>
        </div>
        <a href="{{ route('admin.users.create') }}" class="neon-button-cyan px-6 py-3 rounded-lg font-medium hover:scale-105 transition-all duration-300">
            <div class="flex items-center space-x-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                <span>Add User</span>
            </div>
        </a>
    </div>

    <!-- Filters -->
    <div class="glass border-2 border-neon-cyan/30 rounded-2xl p-6 mb-8 animate-slide-in-up" style="animation-delay: 0.2s">
        <form method="GET" action="{{ route('admin.users') }}" class="grid md:grid-cols-4 gap-4">
            <div>
                <label for="search" class="block text-sm font-medium text-gray-300 mb-2">Search</label>
                <input
                    type="text"
                    id="search"
                    name="search"
                    value="{{ request('search') }}"
                    placeholder="Name, email, or business..."
                    class="w-full neon-input rounded-lg px-4 py-2"
                />
            </div>
            
            <div>
                <label for="role" class="block text-sm font-medium text-gray-300 mb-2">Role</label>
                <select id="role" name="role" class="w-full neon-input rounded-lg px-4 py-2">
                    <option value="">All Roles</option>
                    <option value="admin" {{ request('role') === 'admin' ? 'selected' : '' }}>Admin</option>
                    <option value="user" {{ request('role') === 'user' ? 'selected' : '' }}>User</option>
                </select>
            </div>
            
            <div>
                <label for="status" class="block text-sm font-medium text-gray-300 mb-2">Status</label>
                <select id="status" name="status" class="w-full neon-input rounded-lg px-4 py-2">
                    <option value="">All Status</option>
                    <option value="active" {{ request('status') === 'active' ? 'selected' : '' }}>Active</option>
                    <option value="inactive" {{ request('status') === 'inactive' ? 'selected' : '' }}>Inactive</option>
                </select>
            </div>
            
            <div class="flex items-end space-x-2">
                <button type="submit" class="neon-button-magenta px-6 py-2 rounded-lg font-medium">
                    Filter
                </button>
                <a href="{{ route('admin.users') }}" class="glass border border-gray-600 px-6 py-2 rounded-lg font-medium text-gray-300 hover:text-white transition-colors">
                    Clear
                </a>
            </div>
        </form>
    </div>

    <!-- Users Table -->
    <div class="glass border-2 border-neon-magenta/30 rounded-2xl p-8 animate-slide-in-up" style="animation-delay: 0.4s">
        <div class="overflow-x-auto">
            <table class="w-full">
                <thead>
                    <tr class="border-b border-white/10">
                        <th class="text-left py-4 text-gray-300 font-medium">User</th>
                        <th class="text-left py-4 text-gray-300 font-medium">Role</th>
                        <th class="text-left py-4 text-gray-300 font-medium">Business</th>
                        <th class="text-left py-4 text-gray-300 font-medium">Status</th>
                        <th class="text-left py-4 text-gray-300 font-medium">Joined</th>
                        <th class="text-left py-4 text-gray-300 font-medium">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse($users as $user)
                    <tr class="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td class="py-4">
                            <div class="flex items-center space-x-3">
                                <div class="w-10 h-10 bg-gradient-to-br from-neon-cyan to-neon-magenta rounded-full flex items-center justify-center">
                                    <span class="text-background font-bold text-sm">{{ substr($user->name, 0, 1) }}</span>
                                </div>
                                <div>
                                    <p class="text-white font-medium">{{ $user->name }}</p>
                                    <p class="text-gray-400 text-sm">{{ $user->email }}</p>
                                    @if($user->phone)
                                        <p class="text-gray-500 text-xs">{{ $user->phone }}</p>
                                    @endif
                                </div>
                            </div>
                        </td>
                        <td class="py-4">
                            <span class="px-3 py-1 rounded-full text-sm font-medium {{ $user->role === 'admin' ? 'bg-neon-magenta/20 text-neon-magenta' : 'bg-neon-cyan/20 text-neon-cyan' }}">
                                {{ ucfirst($user->role) }}
                            </span>
                        </td>
                        <td class="py-4">
                            @if($user->business_name)
                                <p class="text-white font-medium">{{ $user->business_name }}</p>
                                @if($user->business_type)
                                    <p class="text-gray-400 text-sm">{{ ucfirst($user->business_type) }}</p>
                                @endif
                            @else
                                <span class="text-gray-500">-</span>
                            @endif
                        </td>
                        <td class="py-4">
                            <form method="POST" action="{{ route('admin.users.toggle-status', $user) }}" class="inline">
                                @csrf
                                @method('PATCH')
                                <button type="submit" class="px-3 py-1 rounded-full text-sm font-medium transition-colors {{ $user->is_active ? 'bg-neon-green/20 text-neon-green hover:bg-neon-green/30' : 'bg-red-500/20 text-red-400 hover:bg-red-500/30' }}">
                                    {{ $user->is_active ? 'Active' : 'Inactive' }}
                                </button>
                            </form>
                        </td>
                        <td class="py-4 text-gray-300">
                            <p>{{ $user->created_at->format('M d, Y') }}</p>
                            <p class="text-xs text-gray-500">{{ $user->created_at->diffForHumans() }}</p>
                        </td>
                        <td class="py-4">
                            <div class="flex items-center space-x-3">
                                <a href="{{ route('admin.users.edit', $user) }}" class="text-neon-cyan hover:text-neon-magenta transition-colors">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                    </svg>
                                </a>
                                
                                @if($user->id !== auth()->id())
                                <form method="POST" action="{{ route('admin.users.delete', $user) }}" class="inline" onsubmit="return confirm('Are you sure you want to delete this user?')">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="text-red-400 hover:text-red-300 transition-colors">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                        </svg>
                                    </button>
                                </form>
                                @endif
                            </div>
                        </td>
                    </tr>
                    @empty
                    <tr>
                        <td colspan="6" class="py-12 text-center">
                            <div class="text-gray-400">
                                <svg class="w-12 h-12 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                                </svg>
                                <p class="text-lg font-medium">No users found</p>
                                <p class="text-sm">Try adjusting your search criteria</p>
                            </div>
                        </td>
                    </tr>
                    @endforelse
                </tbody>
            </table>
        </div>

        <!-- Pagination -->
        @if($users->hasPages())
        <div class="mt-8 flex justify-center">
            {{ $users->links() }}
        </div>
        @endif
    </div>
</div>
@endsection