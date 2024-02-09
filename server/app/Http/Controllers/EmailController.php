<?php

namespace App\Http\Controllers;

use App\Mail\OfferTemplate;
use App\Mail\VerifySubscription;
use App\Models\Offer;
use App\Models\Subscription;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Spatie\Fork\Fork;
use App\Jobs\SendOfferEmail;

class EmailController extends Controller
{

    public function send_email(Request $request)
    {
    }

    public function subscribe(Request $request)
    {
        $request->validate([
            'email' => 'required|email|unique:subscriptions',
        ]);

        // Generate a random OTP (6-digit code)
        $otp = str_pad(random_int(0, 999999), 6, '0', STR_PAD_LEFT);

        // Create a new subscription
        $subscription = Subscription::create([
            'email' => $request->input('email'),
            'otp' => $otp,
        ]);


        Mail::to($subscription->email)->send(new VerifySubscription($otp));

        return $this->respondOk(['message' => 'Subscription created. Check your email for verification.']);
    }


    public function verify(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'otp' => 'required|digits:6',
        ]);

        $subscription = Subscription::where('email', $request->input('email'))
            ->where('otp', $request->input('otp'))
            ->first();

        if (!$subscription) {
            return $this->respondError(['message' => 'Invalid OTP.']);
        }

        $subscription->update([
            'otp' => null,
            'verified' => true,
        ]);

        return $this->respondOk(['message' => 'Subscription verified.']);
    }


    public function send_offer_email(Offer $offer)
    {
        $emails = Subscription::pluck('email')->toArray();

        foreach ($emails as $email) {
            SendOfferEmail::dispatch($email, $offer);
        }

        return response()->json(null, 204);
    }

    public function get_subscribers(Request $request)
    {

        $emails = Subscription::query()
            ->when($request->input('email'), function ($query) use ($request) {
                return $query->where('email', $request->input('email'));
            })
            ->when($request->input('verified'), function ($query) use ($request) {
                return $query->where('verified', $request->input('verified'));
            })
            ->pluck('email')
            ->toArray();
            
        return $this->respondOk($emails);
    }
}
