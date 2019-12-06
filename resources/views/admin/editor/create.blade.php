@extends('admin.layouts.app')

@section('title', 'Create Editor')

@push('css')
{{--    <link rel="stylesheet" href="{{asset('admin/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.css')}}">--}}
{{--    <link rel="stylesheet" href="{{asset('admin/bower_components/ckeditor/contents.css')}}">--}}
@endpush

@section('content')

    <div class="row">
        <div class="col-xs-12">
            <div class="box box-warning">
                <div class="box-header with-border">
                    <h3 class="box-title">Fill-Up Editor Form</h3>
                </div>
                <div class="box-body">
                    <form action="{{route('admin.editor-panel.store')}}" role="form"
                          enctype="multipart/form-data" method="post">

                        {{csrf_field()}}

                        <div class="row">

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="col-2 col-form-label">Name <span style="color: red;">*</span></label>
                                    <div class="col-10">
                                        <input name="name" type="text" placeholder="Enter Name Of Editor" class="form-control" required>
                                        @if($errors->has('title'))
                                            {{ $errors->title }}
                                        @endif
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="col-2 col-form-label">Email <span style="color: red;">*</span></label>
                                    <div class="col-10">
                                        <input name="email" type="email" placeholder="Enter Email Of Editor" class="form-control" required>
                                        @if($errors->has('email'))
                                            {{ $errors->email }}
                                        @endif
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="col-2 col-form-label">Position<span style="color: red;">*</span></label>
                                    <div class="col-10">
                                        <select class="form-control" name="editor_position">
                                            <option value="Editor-in-Chief">Editor-in-Chief</option>
                                            <option value="Associate-Editor">Associate-Editor</option>
                                            <option value="Co-Editor">Co-Editor</option>
                                            <option value="Sub-Editor">Sub-Editor</option>
                                            <option value="Editor">Editor</option>
                                            <option value="Co-ordinator">Co-ordinator</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="col-2 col-form-label">Category<span style="color: red;">*</span></label>
                                    <div class="col-10">
                                        <select class="form-control" name="category_id">

                                            @foreach($categories as $category)
                                            <option value="{{$category->id}}">{{$category->name}}</option>
                                            @endforeach

                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="col-2 col-form-label">Web</label>
                                    <div class="col-10">
                                        <input name="web" type="text" placeholder="Enter Web Of Editor" class="form-control">
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="recipient-name" class="col-form-label"> Image:</label>
                                    <input type="file" name="image">
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="recipient-name" class="col-form-label">Message:</label>
                            <textarea name="message" id="message" class="form-control" cols="5" rows="3" style="resize:none" placeholder="Enter Message"></textarea>

                        </div>

                        <div class="form-group">
                            <label class="col-2 col-form-label">Description</label>
                            <div class="col-10">
                                <textarea name="description" id="editor1" class="form-control ckeditor" cols="5" rows="2"></textarea>
                                @if($errors->has('description'))
                                    {{ $errors->description }}
                                @endif
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="recipient-name" class="col-form-label">Meta Title:</label>
                            <input type="text" class="form-control" id="recipient-name" name="meta_title"
                                   placeholder="Enter Meta Title">
                        </div>

                        <div class="form-group">
                            <label>Meta Description:</label>
                            <textarea name="meta_description" id="meta_description" class="form-control" cols="5" rows="3" style="resize:none" placeholder="Enter Description" required=""></textarea>
                        </div>
                        <button type="submit" class="btn btn-sm btn-primary  pull-right"><i class="fa fa-plus-circle"></i> Create</button>
                        <a href="{{route('admin.editor-panel.index')}}" class="btn btn-sm btn-default  pull-right" style="margin-right: 5px;">Cancel</a>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection

@push('scripts')
    @parent
    <script src="{{asset('admin/bower_components/ckeditor/ckeditor.js')}}"></script>
    <script src="{{asset('admin/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.js')}}"></script>

    <script type="text/javascript">
        $(function () {
            CKEDITOR.replace('editor1');
        })
    </script>
@endpush