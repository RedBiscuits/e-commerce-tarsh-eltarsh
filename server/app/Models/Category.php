<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Category extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    protected $fillable = ['name'];


    public function offers()
    {
        return $this->hasMany(Offer::class, 'category_id');
    }

    public function products()
    {
        return $this->hasMany(Product::class, 'category_id');
    }
}
