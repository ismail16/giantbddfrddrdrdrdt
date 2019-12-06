<?php

namespace App\Http\Controllers\Frontend;

use App\Models\Blog;
use App\Models\Category;
use App\Models\Contact;
use App\Models\Editor;
use App\Models\Faq;
use App\Models\About;
use App\Models\ArticleProcessingCharge;
use App\Models\OpenAccess;
use App\Models\Privacy;
use App\Models\RefundPolicy;
use App\Models\Sub_menu;
use App\Models\Subcategory;
use App\Models\Author\Submit;
use App\Models\Term;
use App\Models\ImageSlider;
use App\Models\announcements;
use App\Models\Submission_timer;
use App\Models\Certification;
use App\Http\Controllers\Controller;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PagesController extends Controller
{

    public function index()
    {
        $categories = Category::all();
        $journals = Submit::orderBy('id', 'DESC')
                            ->orderBy('id', 'DESC')
                            ->where('status', '=',1)
                            ->where('is_payment', '=',1)
                            ->where('publish','=',1)
                            ->paginate(5);
        $view_counts = Submit::orderBy('view_count', 'DESC')
                            ->where('is_payment', 1)
                            ->where('publish',1)
                            ->where('status', 1)
                            ->get();
        $ImageSlides = ImageSlider::all();
        $announcements = announcements::orderBy('id', 'DESC')->paginate(5);
        $blogs = Blog::all();
        $about = About::first();
        $submission_timer = Submission_timer::orderBy('id', 'desc')->first();
        $certifications = Certification::all();
        $testimonials = Testimonial::orderBy('id', 'DESC')->where('status', 1)->get();
        return view('website.pages.index', compact('categories','journals','view_counts','ImageSlides','announcements','blogs','submission_timer','about','certifications','testimonials'));
    }

    public function single_article($url)
    {
        $contact = Contact::all();
        $article = Submit::orderBy('id', 'DESC')
            ->where('status', 1)
            ->where('is_payment', 1)
            ->where('publish',1)
            ->where('title_slug', $url)
            ->first();
        return view('website.pages.single_article', compact('article', 'contact'));
    }

    public function article_search_result(Request $request)
    {
        $title_or_keyword = $request->title_or_keyword;
        $journal_category = $request->journal_category;

        $categories = Category::orderBy('id', 'asc')->get();
        $certifications = Certification::all();

        $journals = Submit::orderByDesc('id')
                        ->Where('journal_id', 'LIKE', '%' . $journal_category . '%')
                        ->Where(function ($query) use ($title_or_keyword) {
                            $query->where('ptitle', 'LIKE', '%' . $title_or_keyword . '%')
                                    ->orWhere('paper_id', 'LIKE', '%' . $title_or_keyword . '%');
                            })
                        ->Where([
                            ['status',1],
                            ['is_payment',1],
                            ['publish',1],
                        ])
                        ->paginate(5);

        $journals->appends ( array (
                'ptitle' => $title_or_keyword
        ));

        $view_counts = Submit::orderBy('view_count', 'DESC')
                                ->where('is_payment', 1)
                                ->where('publish',1)
                                ->where('status', 1)
                                ->get();

        $announcements = announcements::all();
        $submission_timer = Submission_timer::first();

        return view('website.pages.article_search_result',compact('categories','journals','view_counts','announcements','submission_timer','certifications','testimonials'));
    }


    public function about_us()
    {
        $about_us = About::first();
        $contacts = Contact::all();
        return view('website.pages.about_us', compact('about_us','pictures','contacts'));
    }

    public function contact_us()
    {
        $contacts = Contact::all();
        return view('website.pages.contact', compact('contacts'));
    }

    public function apc()
    {
        $contact = Contact::all();
        $apcs = ArticleProcessingCharge::all();
        $categories = Category::all();
        return view('website.pages.apc', compact('apcs', 'contact','categories'));
    }

    public function open_access()
    {

        $contact = Contact::all();
        $open_access = OpenAccess::all();
        $categories = Category::all();
        $journals = Submit::orderBy('id', 'DESC')->where('status', 1)->paginate(5);
        return view('website.pages.open_access', compact('contact','open_access','categories','journals'));
    }

    public function terms_condition()
    {
        $contact = Contact::all();
        $terms = Term::all();
        return view('website.pages.terms_condition', compact('terms', 'contact'));
    }

    public function privacy_policy()
    {
        $contact = Contact::all();
        $privacys = Privacy::all();
        return view('website.pages.privacy_policy', compact('privacys', 'contact'));
    }

    public function refund_policy()
    {
        $contact = Contact::all();
        $refund_policys = RefundPolicy::all();
        return view('website.pages.refund_policy', compact('refund_policys', 'contact'));
    }

    public function authors()
    {
        $contacts = Contact::all();
        $categories = Category::all();
        return view('website.pages.authors', compact('categories', 'contacts'));
    }

    public function editors()
    {
        $contact = Contact::all();
        $editors = Editor::paginate(10);

        return view('website.pages.editors', compact('contact','editors'));
    }

    public function faq()
    {
        $faqs = Faq::all();
        // return $faqs;
        return view('website.pages.faq',compact('faqs'));
    }
    public function aim_and_scope(){
        return view('website.pages.aim_and_scope');
    }

    public function paper_submission_guideline(){
        return view('author.pages.paper_submission_guideline');
    }


}
