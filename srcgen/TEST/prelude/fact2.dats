(* ****** ****** *)
#staload
"prelude/DATS/bool.dats"
#staload
"prelude/DATS/char.dats"
#staload
"prelude/DATS/gint.dats"
#staload
"prelude/DATS/string.dats"
(* ****** ****** *)
#staload
"prelude\
/DATS/CATS/JS/basics.dats"
#staload
"prelude\
/DATS/CATS/JS/unsafe.dats"
#staload
"prelude\
/DATS/CATS/JS/g_print.dats"
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

(* end of [fact2.dats] *)
