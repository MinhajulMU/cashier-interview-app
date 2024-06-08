<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\CashierStoreRequest;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class AppsController extends Controller
{
    public function index(): Response
    {
        $data['exchange'] = session()->get('exchange') ?? [];
        return Inertia::render('Index',$data);
    }

    public function calculateStore(CashierStoreRequest $request) {
        $total_belanja = (int) $request->input('total_belanja');

        $arr = [100, 200, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000];
        $possibilities = $this->findCombinationsGreaterThan($total_belanja,$arr);
        $sumCombination = [];
        foreach ($possibilities as $key => $value) {
            $sumCombination[] = array_sum($value);
        }
        $sumCombination = array_unique($sumCombination);
        sort($sumCombination);
        session()->flash('exchange',  $sumCombination);
        return redirect()->route('index');
    } 


    private function findCombinationsGreaterThan($target, $arr) {
        $result = [];
        $n = count($arr);

        rsort($arr);
    
        $findCombination = function($total, $index, $combination) use ($target, &$arr, &$result, &$findCombination, $n) {
            if ($total > $target) {
                $result[] = $combination;
                return;
            }elseif ($total == $target) {
                return;
            }
            for ($i = $index; $i < $n; $i++) {
                $newTotal = $total + $arr[$i];
                $newCombination = array_merge($combination, [$arr[$i]]);
                $findCombination($newTotal, $i, $newCombination);
            }
        };
        $findCombination(0, 0, []);
    
        return $result;
    }


    
}
