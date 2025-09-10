<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AdminController extends Controller
{
    /**
     * Create a new controller instance.
     */
    public function __construct()
    {
        $this->middleware(['auth', 'admin']);
    }

    /**
     * Show the admin dashboard
     */
    public function index()
    {
        $stats = [
            'total_users' => User::count(),
            'active_users' => User::active()->count(),
            'admin_users' => User::admins()->count(),
            'regular_users' => User::users()->count(),
        ];

        $recentUsers = User::latest()->take(5)->get();

        return view('admin.index', compact('stats', 'recentUsers'));
    }

    /**
     * Show users management page
     */
    public function users(Request $request)
    {
        $query = User::query();

        // Search functionality
        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%")
                  ->orWhere('business_name', 'like', "%{$search}%");
            });
        }

        // Filter by role
        if ($request->filled('role')) {
            $query->where('role', $request->role);
        }

        // Filter by status
        if ($request->filled('status')) {
            $query->where('is_active', $request->status === 'active');
        }

        $users = $query->latest()->paginate(15);

        return view('admin.users', compact('users'));
    }

    /**
     * Show create user form
     */
    public function createUser()
    {
        return view('admin.create-user');
    }

    /**
     * Store new user
     */
    public function storeUser(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
            'role' => 'required|in:user,admin',
            'phone' => 'nullable|string|max:20',
            'business_name' => 'nullable|string|max:255',
            'business_type' => 'nullable|string|in:retail,service,restaurant,healthcare,education,tech,finance,other',
        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => $request->role,
            'phone' => $request->phone,
            'business_name' => $request->business_name,
            'business_type' => $request->business_type,
            'email_verified_at' => now(),
        ]);

        return redirect()->route('admin.users')->with('success', 'User created successfully!');
    }

    /**
     * Show edit user form
     */
    public function editUser(User $user)
    {
        return view('admin.edit-user', compact('user'));
    }

    /**
     * Update user
     */
    public function updateUser(Request $request, User $user)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $user->id,
            'role' => 'required|in:user,admin',
            'phone' => 'nullable|string|max:20',
            'business_name' => 'nullable|string|max:255',
            'business_type' => 'nullable|string|in:retail,service,restaurant,healthcare,education,tech,finance,other',
            'is_active' => 'boolean',
        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        $user->update($request->only([
            'name', 'email', 'role', 'phone', 'business_name', 'business_type', 'is_active'
        ]));

        // Update password if provided
        if ($request->filled('password')) {
            $user->update(['password' => Hash::make($request->password)]);
        }

        return redirect()->route('admin.users')->with('success', 'User updated successfully!');
    }

    /**
     * Delete user
     */
    public function deleteUser(User $user)
    {
        // Prevent deleting the last admin
        if ($user->isAdmin() && User::admins()->count() <= 1) {
            return back()->withErrors(['error' => 'Cannot delete the last admin user.']);
        }

        $user->delete();

        return back()->with('success', 'User deleted successfully!');
    }

    /**
     * Toggle user status
     */
    public function toggleUserStatus(User $user)
    {
        $user->update(['is_active' => !$user->is_active]);

        $status = $user->is_active ? 'activated' : 'deactivated';
        return back()->with('success', "User {$status} successfully!");
    }
}