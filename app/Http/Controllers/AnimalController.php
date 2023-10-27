<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AnimalController extends Controller
{
    public $animal = ["Kucing", "Ayam", "Ikan", "Burung"];

    public function index(){
        foreach ($this->animals as $animal) {
            echo $animal;
            echo "<br>";
        }
    }

    public function store(Request $request){
        array_push ($this->animals, $request->nama);
        echo "Nama hewan: $request->nama";
        echo "<br>";
        echo "Menambahkan hewan baru";
    }

    public function update(Request $request, $id){
        $this->animals[$index] = $request->nama;
        echo "Nama hewan: $request->nama";
        echo "<br>";
        echo "Mengupdate data hewan id $id";
    }

    public function destroy($id){
        array_splice ($this->animals, $id, 1);
        echo "Menghapus data hewan id $id";
    }

}
