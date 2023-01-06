<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $itens = [
            'Electrolux',
            'Brastemp',
            'Fischer',
            'Samsung',
            'LG'
        ];

        foreach ($itens as $key => $item) {
            DB::table('categories')->insert(
                    [ 'description' => $item]
                );
        };
    }
}
