<?php

namespace App\Http\Controllers;

use App\Models\Rental;
use App\Models\Book;
use App\Http\Requests\StoreRentalRequest;
use App\Http\Requests\UpdateRentalRequest;
use Carbon\Carbon;

class RentalController extends Controller
{
    public function rentBook($id)
    {
        $book = Book::find($id);
        if (is_null($book)) {
            return response()->json(["message" => "A megadott azonosítóval nem található könyv."], 404);
        }

        // Ellenőrizzük, hogy a könyv már foglalt-e
        $existingRental = Rental::where('book_id', $id)
                                ->where('start_date', '<=', Carbon::now())
                                ->where('end_date', '>=', Carbon::now())
                                ->first();
        if ($existingRental) {
            return response()->json(['error' => 'A könyv már foglalt'], 409);
        }

        // Kölcsönzés létrehozása
        $rental = new Rental;
        $rental->book_id = $id;
        $rental->start_date = Carbon::now();
        $rental->end_date = Carbon::now()->addWeek();
        $rental->save();

        // Siker esetén válasz JSON formátumban
        return response()->json([
            'id' => $rental->id,
            'book_id' => $rental->book_id,
            'start_date' => $rental->start_date->toDateString(),
            'end_date' => $rental->end_date->toDateString()
        ]);
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRentalRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Rental $rental)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Rental $rental)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRentalRequest $request, Rental $rental)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Rental $rental)
    {
        //
    }
}
