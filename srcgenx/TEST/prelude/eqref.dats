(* ****** ****** *)
#include
"./../../..\
/xshared/xats2js_prelude.hats"
(* ****** ****** *)
#staload
"prelude\
/DATS/CATS/JS/Node/g_print.dats"
(* ****** ****** *)
//
#infix0 === !=== of 30
#symload === with g_eqref
#symload !=== with g_neqrf
//
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
