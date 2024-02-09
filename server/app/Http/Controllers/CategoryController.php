<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Category::query()
            ->when(request('title'), function ($query, $search) {
                $query->where('title', 'like', "%$search%");
            })
            ->with('media')
            ->paginate();

        return $this->respondOk($categories);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'exists:categories,name', 'unique:categories,name'],
            'image' => ['nullable', 'image', 'mimes:jpeg,png,jpg,gif', 'max:2048'],
        ]);

        $category = Category::create($request->validated()['name']);

        if ($request->hasFile('image')) {
            $category->addMediaFromRequest('image')->toMediaCollection();
        }

        return $this->respondCreated($category);
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category)
    {
        return $this->respondOk($category->load('media'));
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Category $category)
    {
        $request->validate([
            'name' => ['string', 'exists:categories,name', 'unique:categories,name'],
            'image' => ['nullable', 'image', 'mimes:jpeg,png,jpg,gif', 'max:2048'],
        ]);

        $category->update([
            'name' => $request->get('name', $category->name)
        ]);

        if ($request->hasFile('image')) {
            $category->clearMediaCollection('images');
            $category->addMediaFromRequest('image')->toMediaCollection();
        }

        return $this->respondOk($category->load('media'));

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        $category->delete();
        return $this->respondOk(null);
    }


    public function loadOffers(Category $category){
        return $this->respondOk($category->load(['media' , 'offers']));
    }

    public function loadCommodities(Category $category){
        return $this->respondOk($category->load(['media' , 'commodities']));
    }
}
