<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PostController extends Controller
{
  public function index() {
    echo 'POST CONTROLLER INDEX';
  }
  public function create() {
    $context = [
      'records' => [

      ],
    ];
    return view('post.create', $context);
  }
  public function store(Request $request) {
    echo 'POST CONTROLLER STORE';
  }
  public function show($id) {
    echo 'POST CONTROLLER SHOW';
  }
  public function edit($id) {
    echo 'POST CONTROLLER EDIT';
  }
  public function update(Request $request, $id) {
    echo 'POST CONTROLLER UPDATE';
  }
  public function destroy($id) {
    echo 'POST CONTROLLER DESTROY';
  }
}
