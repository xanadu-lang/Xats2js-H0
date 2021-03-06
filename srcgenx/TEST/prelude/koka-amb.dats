(* ****** ****** *)
#include
"./../../..\
/xshared/xats2js_prelude.hats"
(* ****** ****** *)

fun
xor(p: bool, q: bool): bool =
if (p)
then q
else (if q then false else true)

(* ****** ****** *)
//
(*
fun
<a:type>
append
( xs: list(a)
, ys: list(a)): list(a) =
(
case+ xs of
| list_nil() => ys
| list_cons(x0, xs) =>
  list_cons(x0, append(xs, ys))
)
*)
//
fun
<a:type>
append
( xs: list(a)
, ys: list(a)): list(a) =
  list_append<a>(xs, ys)
//
(* ****** ****** *)

#extern
fun
<ans:type>
kflip
(k0: bool -<cref> ans): ans

(* ****** ****** *)

fun
<ans:type>
kxor
( k0
: bool -<cref> ans): ans =
kflip
(lam(p) => kflip(lam(q) => k0(p \xor q)))

fun
kxor0
(
// nothing
) : list(bool) =
(
kxor<ans>
(
lam(x) =>
list_cons(x, list_nil())
)
) where
{
#typedef ans = list(bool)
#impltmp
kflip<ans>(k0) = append(k0(false), k0(true))
} (* end of [kxor0] *)

(* ****** ****** *)
//
val ans =
let
val ans =
kxor0((*void*)) in g_print(ans); g_print('\n'); ans
end // end of [val]
//
(* ****** ****** *)

(* end of [prelude_koka-amb.dats] *)
