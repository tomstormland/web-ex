@extends('layouts.core')

@section('title', 'CREATE POST')

@section('sidebar')
  @parent

  <p>This is appended to the master sidebar.</p>
@endsection

@section('content')
  <p>This is my body content.</p>
  <p>The current UNIX timestamp is {{ time() }}.</p>

  @unless (Auth::check())
    You are not signed in.
  @endunless

  @if (count($records) === 1)
    I have one record!
  @elseif (count($records) > 1)
    I have multiple records!
  @else
    I don't have any records!
  @endif

  @isset($records)
  // $records is defined and is not null...
@endisset

@empty($records)
  // $records is "empty"...
@endempty

<script>
  var app = <?php echo json_encode([ 'name' => 'Tom Stormland' ]); ?>;
  var app = @json([ 'name' => 'Tom Stormland' ]);
  console.log(app);
</script>
@endsection
