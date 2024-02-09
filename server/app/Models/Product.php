<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Product extends Model implements HasMedia
{
    use HasFactory ,InteractsWithMedia;

    protected $fillable = [
        'description',
        'price',
        'name',
        'options',
        'category_id',
        'quantity',
        'vendor_id',
        'category_id'
    ];

    public function category(){
        return $this->belongsTo(Category::class , 'category_id');
    }

    public function vendor(){
        return $this->belongsTo(User::class , 'vendor_id');
    }

    public function setOptionsAttribute($value)
    {
        $this->attributes['options'] = json_encode($value);
    }

    // Mutator to get 'options' attribute as an array
    public function getOptionsAttribute($value)
    {
        return json_decode($value, true);
    }
}
