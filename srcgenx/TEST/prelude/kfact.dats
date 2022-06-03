(* ****** ****** *)
#include
"./../../..\
/xshared/xats2js_prelude.hats"
(* ****** ****** *)

#extern
fun
<ans:type>
kfact
( n: int
, k: int -<cref> ans): ans

#impltmp
<ans>
kfact =
fix
kf(n, k0) =>
if n > 0
then kf(n-1, lam(r) => k0(n * r))
else k0(1) // end of [if]

val
fact =
lam(n) => kfact<int>(n, lam r => r)

(* ****** ****** *)

val fact10 =
let val ans = fact(10) in ans end

(* ****** ****** *)
//
val () =
( g_print("fact10 = ");
  g_print(fact10); g_print("\n") )
//
(* ****** ****** *)

(* end of [prelude_kfact.dats] *)
