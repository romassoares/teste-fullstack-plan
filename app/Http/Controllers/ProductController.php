<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Models\Brand;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    protected $prod;
    public function __construct(Product $product)
    {
        $this->prod = $product;
    }

    public function index()
    {
        $products = DB::table('products')
        ->join('brands','products.brand_id','=','brands.id')
        ->select('products.id','products.name','products.description','products.voltage','brands.description as brand')
        ->get();
        $brands = Brand::get();
        return response()->json(['products'=>$products,'brands'=>$brands],200);
    }

    public function store(ProductRequest $request)
    {
        $isvalidated = $request->validated();

        if($isvalidated){
            $salved = $this->prod->record($isvalidated);
            if($salved){
                return response()->json(['prod_id'=>$salved],200);
            }else{
                return response()->json(['error' => 'Não autorizado.'], 401);
            }
        }
    }

    public function show($id)
    {
        $product = Product::find($id);
        if($product){
            return response()->json(['product'=>$product],200);
        }else{
            return response()->json(['error' => 'Produto não encontrado.'], 401);
        }
    }

    public function edit($id)
    {
        $product = Product::find($id);
        if($product){
            return response()->json(['product'=>$product],200);
        }else{
            return response()->json(['error' => 'Produto não encontrado.'], 401);
        }
    }

    public function update(ProductRequest $request, Product $product)
    {
        $isvalidated = $request->validated();
        if($isvalidated){
            $modified = $this->prod->modify($request);
            if($modified){
                return response()->json(['prod_id'=>$modified],200);
            }else{
                return response()->json(['error' => 'Não autorizado.'], 401);
            }
        }
    }

    public function destroy($id)
    {
        $product = Product::find($id);
        if($product){
            $result = $this->prod->remove($product);
            
            if($result){
                return response()->json(['msg'=>'Item removido com sucesso.'],200);
            }else{
                return response()->json(['error' => 'Erro ao tentar deletar o item.'], 401);
            }
        }else{
            return response()->json(['error' => 'Produto não encontrado.'], 401);
        }
    }
}
