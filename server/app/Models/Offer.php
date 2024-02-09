<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
class Offer extends Model implements HasMedia
{
    use HasFactory , InteractsWithMedia;

    protected $fillable = [
        'title',
        'description',
        'discount',
        'commodity_id',
        'category_id',
    ];

    public function category(){
        return $this->belongsTo(Category::class , 'category_id');
    }
}
