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
def decode_ints(s_from, s_to, L):
  """
  s_from, s_to are lowercase strings of equal length, each                                                                                   
  only containing character digits 0-9 in some order
  L is a list of positive ints 
  Returns a tuple of (map, L_decoded) where:
  * map is a dict of 10 keys mapping an int digit in s_from at index i
  to a corresponding int digit in s_to at index i.
  * L_decoded is list of decoded ints using the map, where each digit
  in the int is mapped to its corresponding digit from the map
  (ignore all leading zeroes in decoded ints. ) """

  mapD = {}
  L_decoded = []

  for i0 in range(len(s_from)):
      mapD[int(s_from[i0])] = int(s_to[i0])
  print("mapD = ", mapD)

  def helper(n):
      if (n==0):
          return 0
      else:
          return (10*helper(n//10) + mapD[n%10])

  for i1 in range(len(L)):
      L_decoded.append(helper(L[i1]))
      
  return (mapD, L_decoded)

s_from = "0123456789"
s_to =   "9876543210"
L = [1, 5, 123]

print(decode_ints(s_from, s_to, L))
# prints a tuple:
# ({0:9,1:8,2:7,3:6,4:5,5:4,6:3,7:2,8:1,9:0}, [8, 4, 876]) 
*)

(* ****** ****** *)

val s_fr = "0123456789"
val s_to = "9876543210"

(* ****** ****** *)

#typedef key = sint
#typedef itm = sint
#typedef map = list@(key,itm)

(* ****** ****** *)

val kxs =
gseq_z2map_lstrm
<  strn,strn  >
<  cgtz,cgtz  >(s_fr, s_to) where
{
#impltmp
z2map$fopr
< cgtz,cgtz >
<(sint,sint)>
(    x,y    ) = (x - '0', y - '0')
}

(* ****** ****** *)

val map =
gmap_unstrm_vt<map><key,itm>(kxs)

(* ****** ****** *)

fun
helper(ds: sint): sint =
let
//
#impltmp
<xs><x0>
gmap_search$exn() =
$raise(NotFoundExn2()) where
{
  excptcon NotFoundExn2 of () }
fun
fopr(d1: sint): sint =
gmap_search<map><key,itm>(map, d1)
in//let
if (ds = 0)
then 0 else 10*helper(ds/10)+fopr(ds%10)
end (*let*) // helper(ds)

val L1 =
list(1, 5, 123)

val L2 =
list_map(L1) where
{ #impltmp map$fopr<sint><sint> = helper }

(* ****** ****** *)

val () =
gmap_print
<map><key,itm>(map) where
{
#impltmp
g_print$out<>() = g_stderr<>()
}
val () = prerrln()
val () = prerrln( "L2 = ", L2 )

(* ****** ****** *)

(* end of [ZLX/MIT-ASE-6.0001/PSet-2.dats] *)
