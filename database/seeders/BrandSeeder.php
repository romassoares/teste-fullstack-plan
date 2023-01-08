<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BrandSeeder extends Seeder
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
            DB::table('brands')->insert(
                    [ 'description' => $item]
                );
        };
    }
}
