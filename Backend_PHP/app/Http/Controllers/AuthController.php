<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(LoginRequest $request ) {
        try{
            if($request->validated()){
                $user = User::where("mail", '=', $request->email)->where("pw", '=', md5($request->password))->first();
                if($user) {
                    http_response_code(200);
                    return json_encode($user);
                }
                return -1;
            }
        }
        catch (\Throwable $exception){
            return $exception->getMessage();
        }
    }

    public function logout() {
        Auth::logout();
    }
}
