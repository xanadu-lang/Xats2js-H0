(* ****** ****** *)
#include"\
$(XATS2JSD)\
/shared0/xats2js_prelude.hats"
(* ****** ****** *)
#extern
fun<>
spelling
((*void*)): strm_vt(strn)
(* ****** ****** *)
//
#extern
fun<>
spelling$char
((*void*)): char
#extern
fun<>
spelling$chars
((*void*)): strn
#extern
fun<>
spelling$words
((*void*)): strm_vt(strn)
//
(* ****** ****** *)

fun
wtest1
( xs
: strn
, c0: char): bool =
gseq_exists(xs) where
{
#impltmp
exists$test<char>(x0) = (c0 = x0)
}

(* ****** ****** *)

fun
wtest2
( xs: strn
, cs: strn): bool =
gseq_forall(xs) where
{
#impltmp
forall$test<char>(x0) = wtest1(cs, x0)
}

(* ****** ****** *)

#impltmp
spelling<>() =
(
strm_vt_filter0(spelling$words<>())
) where
{
val c0 = spelling$char<>()
val cs = spelling$chars<>()
#impltmp
filter0$test<strn>(w0) =
if wtest1(w0, c0) then wtest2(w0, cs) else false
}

(* ****** ****** *)

(* end of [spelling.dats] *)
