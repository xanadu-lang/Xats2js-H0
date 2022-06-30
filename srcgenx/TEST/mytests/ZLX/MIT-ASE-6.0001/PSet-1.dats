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
# Problem 1
s = "azcbobobegghakl"
count = 0
for i in range(len(s)):
    if s[i] in ["a", "e", "i", "o", "u"]:
        count += 1
print("Number of vowels:", count)

# Problem 2
s = "azcbobobegghakl"
count = 0
for i in range(len(s)-2):
    if s[i] == "b" and s[i+1] == "o" and s[i+2] == "b":
        count += 1
print("Number of times bob occurs is:", count)

# Problem 3
s = "azcbobobegghakl"
lsub = ""
for i in range(len(s)-1):
    j = i
    sub = s[j]
    while ord(s[j+1]) >= ord(s[j]):
        sub += s[j+1]
        j += 1
        if j == len(s)-1:
            break
    if len(sub) > len(lsub):
        lsub = sub
print("Longest substring in alphabetical order is:", lsub)
*)

(* ****** ****** *)

val () = prerrln("Hello, world!")

(* ****** ****** *)
//
val s =
"azcbobobegghakl"
//
(*
fun
vowelq(c: char): bool =
gseq_memberq<strn><char>("aeiou", c)
*)
//
val
vowelq=fmemq("aeiou")
//
val count =
gseq_foldl(s, 0) where
{
#impltmp
foldl$fopr
<char><sint>(n, c) = if vowelq(c) then n+1 else n+0
}
val () =
prerrln("The number of vowels in \"", s, "\": ", count)
//
(* ****** ****** *)

val s = "azcbobobegghakl"

fun
bobq(cs: strn): bool =
gseq_prefixq("bob", cs)

val
count = nbob(s, 0) where
{
fun
nbob(cs: strn, n: sint): sint =
if
nilq(cs) then n else
(if bobq(cs) then nbob(cs.tail(), n+1) else nbob(cs.tail(), n+0))
}
val () =
prerrln("The number of times [bob] occurs in \"", s, "\" is: ", count)

(* ****** ****** *)

(* end of [PSet-1.dats] *)
