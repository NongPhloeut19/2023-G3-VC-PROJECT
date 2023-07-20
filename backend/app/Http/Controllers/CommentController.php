<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $comment = Comment::all();
        return response()->json(['success'=>true, 'data'=>$comment], 200);
    }

    // public function getComment()
    // {
    //     $comments = Comment::where('role', 3)
    //         ->select('id', 'body', 'user_id')
    //         ->get();
    //     return response()->json($comments);
    // }
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        
        $comments = Comment::store($request);
        return $comments;
        
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
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
