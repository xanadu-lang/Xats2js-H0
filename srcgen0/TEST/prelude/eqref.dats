(* ****** ****** *)
#include
"./../../..\
/share/xats2js_prelude.hats"
(* ****** ****** *)
#staload
"prelude\
/DATS/CATS/JS/Node/g_print.dats"
(* ****** ****** *)

val () =
println("0===0: ", 0===0)
val () =
println("'0'==='0': ", '0' === '0')
val () =
println("\"0\"===\"0\": ", "0" === "0")
val () =
println("true!==true: ", true !== true)

(* ****** ****** *)

(* end of [eqref.dats] *)
