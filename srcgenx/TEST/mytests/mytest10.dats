(* ****** ****** *)
#include
"./../../..\
/xshared/xats2js_prelude.hats"
(* ****** ****** *)
#staload
"prelude\
/DATS/CATS/JS/Node/g_print.dats"
(* ****** ****** *)
#staload =
"prelude/DATS/CATS/JS/basics1.dats"
(* ****** ****** *)
val kxs =
XATS2JS_jsobjmap_make_nil<string>()
(* ****** ****** *)
val-
optn_vt_nil() = 
XATS2JS_jsobjmap_insert_opt(kxs, "a", 'a')
val-
optn_vt_nil() = 
XATS2JS_jsobjmap_insert_opt(kxs, "b", 'b')
(* ****** ****** *)
val keys =
println("kxs['a'] = ", XATS2JS_jsobjmap_keyq(kxs, "a"))
val keys =
println("kxs['z'] = ", XATS2JS_jsobjmap_keyq(kxs, "z"))
(* ****** ****** *)
val () =
println0("kxs['a'] = ", XATS2JS_jsobjmap_search_opt(kxs, "a"))
val () =
println1("kxs['z'] = ", XATS2JS_jsobjmap_search_opt(kxs, "z"))
(* ****** ****** *)

(* end of [mytests_mytest10.dats] *)
