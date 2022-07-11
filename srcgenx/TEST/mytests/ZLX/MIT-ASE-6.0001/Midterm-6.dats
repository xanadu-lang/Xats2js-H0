(*
def list_copy(xs):
    ys = [];
    for x in xs:
        ys.append(x);
    return ys;

def deep_copy(L):
    L1 = [];
    for element in L:
        L1.append(list_copy(element))
    return L1;

def deep_reverse(L):
    for element in L:
        element.reverse()
    L.reverse()

L = [[0, 1, 2], [1, 2, 3], [3, 2, 1], [10, -10, 100]]
L1 = deep_copy(L);
print("L =", L)
print("L1 =", L1)
deep_reverse(L)
print("L =", L)
print("L1 =", L1)
*)

(* ****** ****** *)

(* end of [Midterm-6.dats] *)
