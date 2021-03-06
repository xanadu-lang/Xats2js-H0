(* ****** ****** *)
#include
"./../../..\
/xshared/xats2js_prelude.hats"
(* ****** ****** *)

fun
kfibo(n, k) =
if n > 1
then
kfibo
( n-1
, lam(r1) =>
  kfibo
  (n-2, lam(r2) => k(r1+r2))
)
else k(n)

val
fibo =
lam(n) => kfibo(n, lam r => r)

(* ****** ****** *)

val fibo10 =
let val ans = fibo(10) in ans end

(* ****** ****** *)
//
val () =
( g_print("fibo10 = ");
  g_print(fibo10); g_print("\n") )
//
(* ****** ****** *)

(* end of [prelude_kfibo.dats] *)
