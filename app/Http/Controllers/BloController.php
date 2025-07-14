<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Contact;
class BloController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('blog/index');
    }
    
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        
        return inertia('contact/create');
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        
     Contact::create([
    
    'abebe_id' => $request->contact,
    'address' => $request->address,
    'number' => $request->number,
    'city' => $request->city,
    'zip_code' => $request->zip_code,


         
]);
return redirect()->route('sers.index');
}

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
