<?php

namespace App\Http\Requests\Offer;

use Illuminate\Foundation\Http\FormRequest;

class StoreOfferRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth('sanctum')->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => ['required', 'string'],
            'description' => ['required', 'string'],
            'discount' => ['required', 'numeric' , 'between:0,100'],
            'commodity_id' => ['nullable', 'exists:commodities,id'],
            'category_id' => ['nullable', 'exists:categories,id'],
            'image' => ['nullable', 'image' , 'mimes:jpeg,png,jpg,gif', 'max:2048'],
        ];
    }
}
