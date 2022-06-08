(* ****** ****** *)
#include
"./../../..\
/xshared/xats2js_prelude.hats"
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
(n: int): strm_vt(int) = $extnam()
#extern
fun
JS_sieve_helper
(ns: strm_vt(int)): strm_vt(int) = $extnam()
//
(* ****** ****** *)

val thePrimes =
JS_sieve_helper(JS_fromto(2))
val ((*void*)) =
(print0("thePrimes = ");print0(thePrimes);println())

(* ****** ****** *)

(* end of [mytests_mytest09.dats] *)
