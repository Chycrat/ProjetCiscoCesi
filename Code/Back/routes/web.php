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

Route::get('/', function () {
    return view('welcome');
});

/*
* statut
*/
Route::get('/statut/{ip}', 'StatutController@show')->name('statut.show');
Route::get('/cmd/{ip}/{cmd}', 'StatutController@cmd')->name('statut.cmd');
//Route::get('/console', 'consoleController@show')->name('console.show');
