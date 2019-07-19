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
//Route::get('/statut/{ip}', 'CiscoController@statut')->name('cisco.statut');
//Route::get('/cmd/{ip}/{cmd}', 'CiscoController@cmd')->name('cisco.cmd');
//Route::post('/cossh/{ip}/{port}/{username}/{password}', 'CiscoController@cossh')->name('cisco.cossh');
//Route::get('/test', 'CiscoController@test')->name('cisco.test');
//Route::get('/console', 'consoleController@show')->name('console.show');


Route::group(['middleware' => ['cors']], function()
{
    header('Access-Control-Allow-Origin:  *');
    header('Access-Control-Allow-Methods:  POST, GET, OPTIONS, PUT, DELETE');
    header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Origin, Authorization');
    Route::get('/statut/{ip}', 'CiscoController@statut')->name('cisco.statut');
    Route::get('/cmd/', 'CiscoController@cmd')->name('cisco.cmd');
    Route::post('/cossh/{ip}/{port}/{username}/{password}', 'CiscoController@cossh')->name('cisco.cossh');
    Route::get('/test', 'CiscoController@test')->name('cisco.test');
});