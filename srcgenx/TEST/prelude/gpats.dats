(* ****** ****** *)
#include
"./../../..\
/xshared/xats2js_prelude.hats"
(* ****** ****** *)

fun
not
(b0: bool): bool =
(
case+ b0 of
| true => false
| false => true
)
val () =
println("not(true) = ", not(true))
val () =
println("not(false) = ", not(false))

(* ****** ****** *)

fun
digit
(c0: char): sint =
(
case c0 of
| '0' => 0
| '1' => 1
| '2' => 2
| '3' => 3
| '4' => 4
| '5' => 5
| '6' => 6
| '7' => 7
| '8' => 8
| '9' => 9
| _ (* else *) => -1
)

val () =
println("digit('0') = ", digit('0'))
val () =
println("digit('1') = ", digit('1'))
val () =
println("digit('9') = ", digit('9'))
val () =
println("digit('a') = ", digit('a'))

(* ****** ****** *)

fun
fact(n: int): int =
(
case+ n of
| 0 => 1
| _(*else*) => n * fact(n-1)
) (* end of [fact] *)
val () = println("fact10 = ", fact(10))

(* ****** ****** *)

fun
fact(n: int): int =
(
case+ n of
| _ when (n<=0) => 1
| _ (*else*) => n * fact(n-1)
) (* end of [fact] *)
val () = println("fact10 = ", fact(10))

(* ****** ****** *)

fun
fibo(n: int): int =
(
case+ n of
| 0 => 0
| 1 => 1
| _(*else*) => fibo(n-1)+fibo(n-2)
) (* end of [fibo] *)
val () = println("fibo10 = ", fibo(10))

(* ****** ****** *)

fun
fibo(n: int): int =
(
case+ n of
| _ when (n=0) => 0
| _ when (n=1) => 1
| _ (*else*) => fibo(n-1)+fibo(n-2)
) (* end of [fibo] *)
val () = println("fibo10 = ", fibo(10))

(* ****** ****** *)

(* end of [gpats.dats] *)
