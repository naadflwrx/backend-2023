<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    public function index(){
        $students = Student::all();

        $data = [
            'message' => 'Get all students',
            'data' => $students
        ];

        return response()->json($data, 200);
    }

    public function store(Request $request){
        $input = [
            'nama' => $request->nama,
            'nim' => $request->nim, 
            'email' => $request->email,
            'jurusan' => $request->jurusan
        ];

        $data = [
            'message' => 'Student is created succesfully',
            'data' => $students,
        ];

        return response()->json($data, 201);
    }
}
