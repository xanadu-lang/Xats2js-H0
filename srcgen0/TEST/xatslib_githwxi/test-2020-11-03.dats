(* ****** ****** *)
#include
"./../../..\
/shared0/xats2js_prelude.hats"
(* ****** ****** *)
#staload _ =
"prelude\
/DATS/CATS/JS/Node/g_print.dats"
(* ****** ****** *)
#staload
"xatslib/githwxi/DATS/mygist0.dats"
(* ****** ****** *)
//
val cs =
listize(cs) where
{
val cs =
"ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}
val () = println("cs = ", cs)
//
(* ****** ****** *)
val
the_lines =
(
strn_split_lines(text)) where
{
val text = "1\n2\n3\n4\n5\n6\n"
}
(* ****** ****** *)
val () =
loop(1, the_lines) where
{
fun
loop
( i0: int
, xs: strm_vt(strn)): void =
(
case+ !xs of
| ~
strmcon_vt_nil() => ()
| ~
strmcon_vt_cons(x0, xs) =>
(println("line#", i0, " = ", x0); loop(i0+1, xs))
)
}
(* ****** ****** *)

(* end of [test-2020-11-03.dats] *)
