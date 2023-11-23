<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    public function index(){
        $students = Student::all();

        //headling jika data kosong
        if ($students->isEmpty()){
            $data = [
                'message' => "Data not found",
                'data' => []
            ];

            return response()->json($data, 200);
        
        //headling jika data tidak ada
        }else{
            $data = [
                'message' => "Data not found",
                'data' => []
            ];

            return response()->json($data, 404);
        }
    }


    public function store(Request $request){
        // $input = [
		//     'nama' => $request->nama,
		//     'nim' => $request->nim,
		//     'email' => $request->email,
		//     'jurusan' => $request->jurusan
		// ];

        $validateData = $request->validate([
            'nama' => 'required',
		    'nim' => 'numeric|required',
		    'email' => 'email|required',
		    'jurusan' => 'required'
        ]);

        $students = Student::create($validateData);
        
        $data = [
            'message' => 'Student is created succesfully',
            'data' => $students
        ];

        return response()->json($data, 201);
    }

    public function update(Request $request, $id){
        $student = Student::find($id);

        if ($student) {
            // menangkap data request
            $input = [
                'nama' => $request->nama ?? $student->nama,
                'nim' => $request->nim ?? $student->nim, 
                'email' => $request->email ?? $student->email,
                'jurusan' => $request->jurusan ?? $student->jurusan,
            ];

            // melakukan update data
            $student->update($input);

            $data = [
                'message' => 'Student is updated',
                'data' => $student,
            ];
            // menampilkan data (json) dan kode 200
            return response()->json($data, 200);
            
        } else {
            $data = [
                'message' => 'Data not found'
            ];

            return response()->json($data, 404);
        }
    }

    public function destroy($id){
        // mencari id students yang ingin di hapus
        $student = Student::find($id);

        // menghandle data yang tidak ada
        if ($student) {
            // hapus data student tersebut
            $student->delete();

            $data = [
                'message' => 'Student is deleted'
            ];
            // mengembalikan data (json) dan kode 200
            return response()->json($data, 200);

        } else {
            $data = [
                'message' => 'Data not found'
            ];

            return response()->json($data, 404);
        }
    }

    // mendapatkan detail resource student (method show)
    public function show($id){
        $student = student::find($id);

        if ($student){
            $data = [
                'message' => 'Get detail student',
                'data' => $student,
            ];
            // mengembalikan data (json) dan kode 200
            return response()->json($data, 200);
        }else{
            $data = [
                'message' => 'Student not found',
            ];
            // mengemmbalikan data (json) dan kode 404
            return response()->json($data, 404);
        }
    }
}