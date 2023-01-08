<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|min:3|max:100',
            'description' => 'required|min:3|max:500',
            'voltage'=> 'required|numeric',
            'brand_id' => 'required'
        ];
    }
    public function messages()
        {
            return [
                'name.required' => 'O nome é obrigatório',
                'name.min'=>'mínimo de 3 caracteres.',
                'name.max'=>'máximo de 100 caracteres.',
                'description.required' => 'A descrição é obrigatória.',
                'description.min'=>'mínimo de 3 caracteres.',
                'description.max'=>'máximo de 500 caracteres.',
                'voltage.required' => 'A voltagem é obrigatória.',
                'voltage.numeric' =>'digite apenas números.',
                'brand_id.required' => 'A Marca é obrigatória.',
            ];
        }
}
