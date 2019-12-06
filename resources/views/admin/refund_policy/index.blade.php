@extends('admin.layouts.app')

@section('breadcumb')
    <li class="breadcrumb-item"><a href="{{route('admin.dashboard')}}"><i class="fa fa-dashboard"></i> Home</a></li>
    <li class="breadcrumb-item active"><a href="{{route('admin.refundPolicy.index')}}">Refund Policy</a></li>
@endsection

@section('title', 'Refund Policy | SDIP')

@push('css')
    <link rel="stylesheet" href="{{asset('admin/bower_components/datatables-bs/css/dataTables.bootstrap.min.css')}}">
    <style>
        .table-actions-bar .table-action-btn {
            color: #98a6ad;
            display: inline-block;
            width: 28px;
            border-radius: 50%;
            text-align: center;
            line-height: 24px;
            font-size: 20px;
        }
    </style>
@endpush

@section('content')

    <div class="row">
        @if(session()->has('message'))
            <div class="col-lg-12 col-xl-12">
                <div class="card-box">
                    <div class="alert alert-danger">
                        {{session('message')}}
                    </div>
                </div>
            </div>
        @endif
        <div class="col-xs-12">
            <div class="box">
                <div class="box-body">
                    <a href="{{route('admin.refundPolicy.create')}}" class="pull-right btn btn-xs btn-primary"> <i
                                class="fa fa-plus"></i> Add New</a>
                    <br>
                    <br>
                    <table id="example1" class="table table-bordered table-striped">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Refund Policy Title</th>
                            <th>Creation Date</th>
                            <th class="text-center">status</th>
                        </tr>
                        </thead>

                        <tbody>

                        @foreach($refundPolicy as $item)
                            <tr>
                                <td><a href="#">{{$loop->index+1}}</a></td>
                                <td>{{$item->refund_title}}</td>
                                <td>{{$item->created_at->format('d M Y')}}</td>
                                <td class="text-center">
                                    <a href="{{route('admin.refundPolicy.edit',$item->id)}}"
                                       class="btn btn-xs btn-success table-action-btn"><i
                                                class="fa fa-pencil-square-o"></i></a>

                                    <a href="#" class="btn btn-xs btn-danger table-action-btn about_us_delete"
                                       data-content="{{$loop->index+1}}"><i
                                                class="fa fa-trash-o"></i></a>

                                    <form id="about_us_delete{{$loop->index+1}}"
                                          action="{{route('admin.refundPolicy.destroy',$item->id)}}"
                                          method="post" class="delete"
                                          data-content="{{$item->id}}"
                                          style="display: none;">
                                        {{csrf_field()}}
                                        {{method_field('DELETE')}}
                                    </form>

                                </td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                </div>

            </div>

        </div>

    </div>

@endsection

@push('scripts')
    <script src="{{asset('js/bootbox.min.js')}}"></script>
    <script src="{{asset('admin/bower_components/datatables/js/jquery.dataTables.min.js')}}"></script>
    <script src="{{asset('admin/bower_components/datatables-bs/js/dataTables.bootstrap.min.js')}}"></script>
    <script>
        $(function () {
            $('#example1').DataTable()
            $('#example2').DataTable({
                'paging': true,
                'lengthChange': false,
                'searching': false,
                'ordering': true,
                'info': true,
                'autoWidth': false
            })
        })
    </script>
    <script>
        $(document).on("click", ".about_us_delete", function (e) {
            var index = $(this).data('content');

            bootbox.confirm({
                message: "Do you want to remove this?",
                buttons: {
                    confirm: {
                        label: 'Yes',
                        className: 'btn-vinndo'
                    },
                    cancel: {
                        label: 'No',
                        className: 'btn-default'
                    }
                },
                callback: function (result) {
                    if (result) {
                        $("#about_us_delete" + index).submit();
                    }
                }
            });
        });
    </script>
@endpush