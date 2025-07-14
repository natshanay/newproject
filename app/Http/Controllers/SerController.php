<?php

namespace App\Http\Controllers;
use App\Models\Abebe;
use App\Models\Contact;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SerController extends Controller
{

    public function index()
    {
        // $ser = Abebe::with('contact')->find(18);
        
        $ser = Abebe::find(1);
        
        $ser->contact();

        return inertia('ser/index',
        [
            "contact"=>$contact,
            "ser"=>$ser
        ]
    );
        
    }


    public function create()
    {
        return inertia('ser/create');
        
    }

    
  
    public function store(Request $request)
    {
        
     $abe = Abebe::create([
    
    'name' => $request->name,
    'email' => $request->email,
    'password' => $request->password,
        
]);


$abe->contact()->create([
    'address' => $request->address,
    'number' => $request->number,
    'city' => $request->city,
    'zip_code' => $request->zip_code,
]);

return redirect()->route("sers.index");

}
  
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
