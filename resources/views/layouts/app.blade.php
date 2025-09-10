<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@yield('title', 'Neon Tech Enterprises - Digital Identity in 48 Hours')</title>
    <meta name="description" content="@yield('description', 'Transform your business with Neon Tech Enterprises. From websites to digital fingerprints, we build your digital identity in 48 hours. Fast, affordable, futuristic.')">
    <meta name="author" content="Neon Tech Enterprises">
    <meta name="keywords" content="digital identity, website development, cybersecurity, blockchain, 48 hours, neon tech, enterprises, digital transformation">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <!-- Scripts -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])

    @stack('styles')
</head>
<body class="font-poppins antialiased bg-background text-foreground">
    <div class="min-h-screen">
        @include('components.navigation')
        
        <main>
            @yield('content')
        </main>
    </div>

    @include('components.chatbot')
    @stack('scripts')
</body>
</html>