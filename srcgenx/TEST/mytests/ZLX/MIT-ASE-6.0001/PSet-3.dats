(* ****** ****** *)
#staload
"xatslib\
/libcats/SATS/libcats.sats"
#staload
"xatslib\
/libcats/SATS/synoug0.sats"
(* ****** ****** *)
#staload
"xatslib\
/githwxi/SATS/genv000.sats"
#staload
"xatslib\
/githwxi/SATS/githwxi.sats"
(* ****** ****** *)
//
// HX:
// For templates resolution
//
(* ****** ****** *)
#include
"prelude\
/HATS/prelude_dats.hats"
#include
"prelude\
/HATS/CATS/JS/prelude_dats.hats"
(* ****** ****** *)
#staload _ =
"xatslib\
/libcats/DATS/synoug0.dats"
(* ****** ****** *)
#staload _ =
"xatslib\
/githwxi/DATS/genv000.dats"
#staload _ =
"xatslib\
/githwxi/DATS/f00path.dats"
#staload _ =
"xatslib\
/githwxi/DATS/g00iout.dats"
(* ****** ****** *)
//
// #ifdef(_XATSOPT_JS_)
//
#staload
"xatslib\
/githwxi\
/DATS/CATS/JS/Node/basics0.dats"
//
// #endif // end of [ifdef(_XATSOPT_JS_)]
//
(* ****** ****** *)

(*
def max_contig_subseq_sum(L):
    """ 
    L is a list of integers, at least one positive
    Returns the maximum sum of a contiguous subsequence in L. A contiguous subsequence
    is made up of consecutive elements. It can be of any length, and start at any point. 
    """
    # your code here

    def helper1(xs):
        if (xs == []):
            return 0
        else:
            x0 = xs[0]
            res = x0 + helper1(xs[1:])
            if (res < 0):
                return 0
            else:
                return res
        
    def helper2(xs):
        if (xs == []):
            return (0, 0)
        else:
            res1 = helper1(xs)
            res2 = helper2(xs[1:])
            if (res1 >= res2[1]):
                return (0, res1)
            else:
                return (res2[0]+1, res2[1])
    
    return (helper2(L))[1]

print(max_contig_subseq_sum([3, 4, -1, 5, -4]))   # prints 11
print(max_contig_subseq_sum([3, 4, -8, 15, -1, 2]))  # prints 16
*)

(* ****** ****** *)

fun
<a:t0>
helper
( x0: a
, xs: strm(a)): a =
let
val rs =
strm_scanl<a>(xs, x0)
in//let
case+ !xs of
|strmcon_nil() => x0
|strmcon_cons(x1, xs) =>
max
(gseq_max_ini(rs,x1),helper(x0,xs))
end where
{
#impltmp
scanl$fopr
< a >< a >(r0,x0) = g_max<a>(r0,x0)
} (*where*) // end of [helper(x0,xs)]

(* ****** ****** *)

val xs =
list(3,4,-1,5,-4)
val xs =
strm_vt2t(strmize(xs))
val r0 = helper(0, xs)
val () = prerrln("r0 = ", r0)

val xs =
list(3,4,-8,15,-1,2)
val xs =
strm_vt2t(strmize(xs))
val r0 = helper(0, xs)
val () = prerrln("r0 = ", r0)

(* ****** ****** *)

(* end of [ZLX/MIT-ASE-6.0001/PSet-3.dats] *)
