(*
Wed Jun  8 11:43:28 EDT 2022
*)
(* ****** ****** *)
#include
"./../../..\
/xshared/xats2js_prelude.hats"
(* ****** ****** *)
#staload
"prelude\
/DATS/CATS/JS/Node/g_print.dats"
(* ****** ****** *)

val cs = "Hello, world!"
val () =
println0("listize(cs) = ", listize(cs))
val () =
println0("rlistize(cs) = ", rlistize(cs))

(* ****** ****** *)

(* end of [mytests_mytest11.dats] *)
