(* ****** ****** *)
//
(*
HX-2022-01-22:
Note that
[n0] is environmental!
*)
//
fun
loop
(i1: int, r2: int): int =
if
i1 < n0
then loop(i1+1, (i1+1)*r2) else r2

(* ****** ****** *)

(* end of [fbody.dats] *)
