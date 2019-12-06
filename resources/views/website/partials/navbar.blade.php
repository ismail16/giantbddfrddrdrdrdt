{{--<header class="_box-shadow-inset _py-3">--}}
    <nav class="navbar navbar-expand-lg navbar-dark bg-navbar mb-0 border-0 rounded-0 py-0" style="_height: 70px;">
        <div class="container" style="_max-width: 1200px;">
            <a class="navbar-brand" href="{{url('/')}}">
                <img src="{{asset('images/logos/jhhj.png')}}" alt="The John Hopkins Medical Journal" title="The John Hopkins Medical Journal" class="logo" style="height: 55px;">
            </a>

            <button class="navbar-toggler white" type="button" data-toggle="collapse" data-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse flex-row-end" id="mainNavbar" style="z-index: 999;background-color: #134448;">
                <div class="collapse navbar-collapse flex-row-end" id="mainNavbar">
                    <div class="collapse navbar-collapse flex-row-end" id="mainNavbar">
                        <div class="navbar-nav">
                            <a href="/" title="Home" class="nav-item nav-link">
                                <i class="fa fa-home" title="Home"></i> Home
                            </a>
                            <a title="About Us" href="{{route('about_us')}}" class="nav-item nav-link">
                                <i class="fas fa-eye"></i> About Us
                            </a>

                            <div class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="Journals" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Journals">
                                    <i class="fas fa-info-circle"></i> Information & Guidelines
                                </a>
                                <div class="dropdown-menu" aria-labelledby="Journals">
                                    <a href="{{route('apc')}}" class="dropdown-item">Article Processing Charges</a>
                                    <a href="{{route('open_access')}}" class="dropdown-item">Open Access Policy</a>
                                    <a href="{{route('terms_condition')}}" class="dropdown-item">Terms and Conditions</a>
                                    <a href="{{route('privacy_policy')}}" class="dropdown-item">Privacy Policy</a>
                                    <a href="{{route('create.feedback')}}" class="dropdown-item">User Feedback</a>
                                    <a title="For Authors" href="{{ route('authors') }}" class="dropdown-item">Information For Authors</a>
                                    <a title="Editorial Board" href="{{route('editors')}}" class="dropdown-item">Information Editorial Board</a>
                                    <a href="{{ route('contact_us') }}" title="Contact Us" class="dropdown-item">
                                        </i> Contact Us
                                    </a>

                                    <a title="Faq" href="{{ route('faq') }}" class="dropdown-item">FAQ</a>
                                </div>
                            </div>
                             <a title="Editorial Board" target="_blank" href="{{route('paper_submission_guideline')}}" class="nav-item nav-link">Paper Submission Guideline</a>


                        </div>
                    </div>
                    <div class="collapse navbar-collapse flex-row-reverse" id="mainNavbar">
                        <div class="navbar-nav">

                            @if (Route::has('login'))
                                @auth
                                    <a href="{{ route('admin.dashboard') }}" title="Home" class="nav-item nav-link">
                                        <i class="fas fa-home" title="Home"></i> Dashboard
                                    </a>
                                    <a href="{{ route('logout') }}" title="Logout" class="nav-item nav-link"  onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                                        <i class="fas fa-key" title="Logout"></i> Logout
                                    </a>
                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        @csrf
                                    </form>
                                @else

                                    @if (Route::has('register'))
                                        <a href="{{ route('authorregister') }}" title="Home" class="nav-item nav-link">
                                            <i class="fas fa-key" title="Home"></i> Register
                                        </a>
                                    @endif

                                    <a href="{{ route('authorlogin') }}" title="Home" class="nav-item nav-link">
                                        <i class="fas fa-key" title="Home"></i> Login
                                    </a>
                                    <span class="nav-item nav-link">
                                        <a class="btn btn-sm btn-outline-success" style="font-size: 12px;font-weight: bold;color: #fff;padding: 1px 6px;" href="{{ route('author.paper-submission.create') }}">Submit Now</a>
                                    </span>


                                @endauth
                            @endif
                        </div>
                    </div>
                </div>
            </div>
    </nav>
{{--</header>--}}
