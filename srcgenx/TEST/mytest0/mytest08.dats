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
// [JS_fromto] shows how to
// implement a stream_vt in JS
//
*)
//
#extern
fun
JS_fromto
(n: int): strm_vt(int) = $exname()
//
(* ****** ****** *)

val theNats = JS_fromto(0)
val ((*void*)) =
(print("theNats = "); print(theNats); println())

(* ****** ****** *)

(* end of [mytest0_mytest08.dats] *)
