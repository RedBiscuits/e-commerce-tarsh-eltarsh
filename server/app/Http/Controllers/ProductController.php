<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Http\Requests\Product\StoreProductRequest;
use App\Http\Requests\Product\UpdateProductRequest;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $commodities = Product::query()
            ->when(request('name'), function ($query, $search) {
                $query->where('name', 'like', "$search%");
            })
            ->when(request('description'), function ($query, $search) {
                $query->where('description', 'like', "$search%");
            })
            ->when(request('price'), function ($query, $price) {
                $query->where('price', $price);
            })
            ->when(request('category_id'), function ($query, $category) {
                $query->where('category_id', $category);
            })
            ->when(request('vendor_id'), function ($query, $vendor) {
                $query->where('vendor_id', $vendor);
            })
            ->when(request('quantity'), function ($query, $quantity) {
                $query->where('quantity', $quantity);
            })
            ->with(['media', 'category'])
            ->paginate();

        return $this->respondOk($commodities);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {

        $product = Product::create($request->validated());

        if ($request->hasFile('image')) {
            $product->addMediaFromRequest('image')->toMediaCollection();
        }

        return $this->respondCreated($product->load(['media', 'category']));
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        return $this->respondOk($product->load(['media', 'category']));
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        $product->update($request->validated());

        if ($request->hasFile('image')) {
            $product->clearMediaCollection('images');
            $product->addMediaFromRequest('image')->toMediaCollection();
        }

        return $this->respondOk($product);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();
        return $this->respondOk(null);
    }
}
