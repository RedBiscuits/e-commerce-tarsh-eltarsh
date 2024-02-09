<?php

namespace App\Http\Requests\Product;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string',
            'description' => 'required|string',
            'price' => 'required|integer|min:0',
            'quantity' => 'required|integer|min:0',
            'category_id' => 'integer|min:1|exists:categories,id',
            'vendor_id' => 'integer|min:1|exists:users,id',
            'options' => 'array',
        ];
    }
}
