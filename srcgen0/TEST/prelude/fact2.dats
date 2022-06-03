(* ****** ****** *)
#include
"./../../..\
/shared0/xats2js_prelude.hats"
(* ****** ****** *)
//
#staload _ =
"prelude\
/DATS/CATS/JS/Node/g_print.dats"
//
(* ****** ****** *)

fun
fact
(n0: int): int =
loop(0, 1)
where { #include"./fbody.dats" }

(* ****** ****** *)
//
val () =
( g_print("fact10 = ");
  g_print(fact(10)); g_print("\n") )
//
(* ****** ****** *)

(* end of [prelude_fact2.dats] *)
