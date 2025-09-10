<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    /**
     * Create a new controller instance.
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the user dashboard
     */
    public function index()
    {
        $user = Auth::user();
        
        // Basic dashboard stats
        $stats = [
            'projects' => rand(1, 5), // Mock data
            'active_services' => rand(1, 3),
            'total_spent' => '₦' . number_format(rand(50000, 500000)),
            'support_tickets' => rand(0, 2),
        ];

        return view('dashboard.index', compact('user', 'stats'));
    }

    /**
     * Show user profile
     */
    public function profile()
    {
        $user = Auth::user();
        return view('dashboard.profile', compact('user'));
    }

    /**
     * Update user profile
     */
    public function updateProfile(Request $request)
    {
        $user = Auth::user();
        
        $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'nullable|string|max:20',
            'business_name' => 'nullable|string|max:255',
            'business_type' => 'nullable|string|in:retail,service,restaurant,healthcare,education,tech,finance,other',
        ]);

        $user->update($request->only(['name', 'phone', 'business_name', 'business_type']));

        return back()->with('success', 'Profile updated successfully!');
    }
}