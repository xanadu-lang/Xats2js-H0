(* ****** ****** *)
#include"\
$(XATS2JSD)\
/xshared/xats2js_prelude.hats"
(* ****** ****** *)
#staload DB = "./doublet.dats"
(* ****** ****** *)
#staload
"prelude\
/DATS/CATS/JS/basics1.dats"
(* ****** ****** *)
#staload _ =
"prelude\
/DATS/CATS/JS/Node/g_print.dats"
(* ****** ****** *)
#staload
"xatslib/githwxi/SATS/githwxi.sats"
#staload _ =
"xatslib/githwxi/DATS/f00path.dats"
(* ****** ****** *)
#staload _ =
"xatslib\
/githwxi/DATS/CATS/JS/Node/basics0.dats"
(* ****** ****** *)
#implfun
$DB.theDict_make
((*void*)) =
(
  theDict) where
{
//
(*
val () =
println
("theDict_make: called")
*)
//
val ws =
fpath_strmize_line
("/usr/share/dict/words")
//
val
theDict =
XATS2JS_jsobjmap_make_nil()
val
((*void*)) =
strm_vt_foreach0(ws) where
{
#typedef wx = strn
#impltmp
foreach0$work<wx>(wx) =
XATS2JS_jsobjmap_insert_any(theDict, wx, 0)
}
} (* end of [theDict_make] *)
(* ****** ****** *)

val
water_blood =
$DB.doublet_play("water", "blood")
val ((*void*)) =
println("water_blood = ", water_blood)

(* ****** ****** *)

val
wheat_bread =
$DB.doublet_play("wheat", "bread")
val ((*void*)) =
println("wheat_bread = ", wheat_bread)

(* ****** ****** *)

(* end of [mytest01.dats] *)
