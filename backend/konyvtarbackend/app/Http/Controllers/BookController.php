<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Http\Requests\StoreBookRequest;
use App\Http\Requests\UpdateBookRequest;
use Illuminate\Support\Facades\Validator;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     * GET
     * Listázó függvény
     */
    public function index()
    {
        $books=Book::all();
        return response()->json($books);
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
     * POST
     * Új könyy létrehozása és felvétele az adatbázisba
     */
    public function store(StoreBookRequest $request)
    {
        $validator = Validator::make($request->all(), (new StoreBookRequest())->rules());
        if ($validator->fails()) {
            $errormsg = "";
            foreach ($validator->errors()->all() as $error) {
                $errormsg .= $error . " ";
            }
            $errormsg = trim($errormsg);
            return response()->json(["message" => $errormsg], 400);
        }
        $book = new Book();
        $book->fill($request->all());
        $book->save();
        return response()->json($book, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Book $id)
    {
       //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Book $book)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBookRequest $request, Book $book)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Book $book)
    {
        //
    }
}
