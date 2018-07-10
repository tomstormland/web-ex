<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/* php artisan make:middleware <middleware-name> */

Route::get('/', function () {
    return view('home');
});

Route::get('/name/{name}', function($name) {
  echo 'NAME: ' . $name;
});

Route::get('/name/{name?}', function($name = 'No Name') {
  return $name;
});

Route::get('/user/profile', 'UserController@profile')->name('profile');

Route::get('/lorem', 'LoremController@index');

Route::resource('post', 'PostController');
