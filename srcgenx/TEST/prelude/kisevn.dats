(* ****** ****** *)
#include
"./../../..\
/xshared/xats2js_prelude.hats"
(* ****** ****** *)

fun
<ans:type>
kisevn
( x: int
, k: int -> ans): ans =
if x > 0
then kisodd(x-1, k) else k(1)
and
kisodd
( x: int
, k: int -> ans): ans =
if x > 0
then kisevn(x-1, k) else k(0)

(* ****** ****** *)

val isevn10 = kisevn(10, lam r => r)
val isodd10 = kisodd(10, lam r => r)

(* ****** ****** *)
//
val () =
( g_print("isevn10 = ");
  g_print(isevn10); g_print("\n") )
//
val () =
( g_print("isodd10 = ");
  g_print(isodd10); g_print("\n") )
//
(* ****** ****** *)

(* end of [kisevn.dats] *)
