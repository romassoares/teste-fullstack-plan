<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use function PHPUnit\Framework\isNull;

class Product extends Model
{
    use HasFactory;
    protected $fillable = ['name','description','voltage','brand_id'];

public function setAll($data){
    return [
        $this->name = $data['name'],
        $this->description = $data['description'],
        $this->voltage = $data['voltage'],
        $this->brand_id = $data['brand_id'],
    ];
}

    public function record($data){
        $result = Product::save($this->setAll($data));
        if ($result) 
            return true;
    }

    public function modify($data){
        $result = Product::update($this->setAll($data));
        if ($result) 
            return true;
    }

    public function remove($data){
        $result = Product::delete($data->id);
        if ($result) 
            return true;
    }

    public function brand(){
        return $this->hasOne(Brand::class,'id');
    }
}
