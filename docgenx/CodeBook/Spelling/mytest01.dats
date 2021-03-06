(* ****** ****** *)
#include"\
$(XATS2JSD)\
/xshared/xats2js_prelude.hats"
(* ****** ****** *)
#staload SP = "./spelling.dats"
(* ****** ****** *)
#staload _ =
"prelude\
/DATS/CATS/JS/Node/g_print.dats"
(* ****** ****** *)
#staload _ =
"xatslib\
/githwxi\
/DATS/CATS/JS/Node/basics0.dats"
(* ****** ****** *)
#staload
"xatslib/githwxi/SATS/githwxi.sats"
#staload _ =
"xatslib/githwxi/DATS/f00path.dats"
(* ****** ****** *)
//
#impltmp
$SP.spelling$char<>() = 'a'
#impltmp
$SP.spelling$chars<>() = "acfilnu"
//
(* ****** ****** *)
//
#impltmp
$SP.spelling$words<>() =
fpath_strmize_line("/usr/share/dict/words")
//
(* ****** ****** *)

local
//
val
theChar =
$SP.spelling$char<>()
val
theChars =
$SP.spelling$chars<>()
//
val
theWords =
$SP.spelling<>()
val
theWords =
listize(theWords)
val
theWords =
mergesort0(theWords) where
{
#impltmp
g_cmp<strn>(x1, x2) =
let
val
sgn =
g_cmp(length(x1), length(x2))
in
if sgn != 0 then -sgn else strn_cmp(x1, x2)
end (*let*) // end of [#impltmp g_cmp]
}
//
val
theWords = list_vt2t(theWords)
//
in
val () = println("theChar = ", theChar)
val () = println("theChars = ", theChars)
val () = println("theWords = ", theWords)
end // end of [local]

(* ****** ****** *)

(* end of [mytest01.dats] *)
