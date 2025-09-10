<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Show the home page
     */
    public function index()
    {
        return view('home');
    }

    /**
     * Show the about page
     */
    public function about()
    {
        return view('about');
    }

    /**
     * Show the services page
     */
    public function services()
    {
        return view('services');
    }

    /**
     * Show the contact page
     */
    public function contact()
    {
        return view('contact');
    }

    /**
     * Show the get started page
     */
    public function getStarted()
    {
        return view('get-started');
    }
}