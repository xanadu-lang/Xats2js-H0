(* ****** ****** *)
#include
"./../../..\
/shared0/xats2js_prelude.hats"
(* ****** ****** *)
#staload
"prelude\
/DATS/CATS/JS/Node/g_print.dats"
(* ****** ****** *)
(*
//
// HX-2020-11-23:
// This example shows how to
// manipulate a stream_vt in JS
//
*)
//
#extern
fun
JS_fromto
(n: int): strm_vt(int) = $exname()
#extern
fun
JS_sieve_helper
(ns: strm_vt(int)): strm_vt(int) = $exname()
//
(* ****** ****** *)

val thePrimes =
JS_sieve_helper(JS_fromto(2))
val ((*void*)) =
(print("thePrimes = "); print(thePrimes); println())

(* ****** ****** *)

(* end of [mytest0_mytest09.dats] *)
