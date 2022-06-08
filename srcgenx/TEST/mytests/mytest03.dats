(* ****** ****** *)
#include
"./../../..\
/xshared/xats2js_prelude.hats"
(* ****** ****** *)
#staload _ =
"prelude\
/DATS/CATS/JS/Node/g_print.dats"
(* ****** ****** *)
#staload
"xatslib/githwxi/DATS/mygist0.dats"
(* ****** ****** *)

val Ab = "Ab"
val ab = strn_lower(Ab)
val AB = strn_upper(ab)
val () = println("Ab = ", Ab)
val () = println("ab = ", ab)
val () = println("AB = ", AB)

(* ****** ****** *)
val () =
println("('a' - 'b') = ", 'a' - 'b')
(* ****** ****** *)

(* end of [mytests_mytest03.dats] *)
