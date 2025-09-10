<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create admin user
        User::create([
            'name' => 'Admin User',
            'email' => 'admin@neontech.enterprises',
            'password' => Hash::make('password'),
            'role' => 'admin',
            'email_verified_at' => now(),
        ]);

        // Create regular user
        User::create([
            'name' => 'John Doe',
            'email' => 'user@neontech.enterprises',
            'password' => Hash::make('password'),
            'role' => 'user',
            'email_verified_at' => now(),
            'phone' => '+234 123 456 7890',
            'business_name' => 'Sample Business',
            'business_type' => 'tech',
        ]);

        // Create additional test users
        User::factory(10)->create();
    }
}