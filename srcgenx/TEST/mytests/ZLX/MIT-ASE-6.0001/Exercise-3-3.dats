(*
print("Please think of a number between 0 and 100!")
start = 0
end = 100
resp = ""
while resp != "c":
    resp = ""
    guess = (start+end)//2
    while resp not in ["h", "l", "c"]:
        if resp != "":
            print("Sorry, I did not understand your input.")
        print("Is your secret number "+str(guess)+"?")
        resp = input("Enter 'h' to indicate the guess is too high. Enter 'l' to indicate the guess is too low. Enter 'c' to indicate I guessed correctly.")
    if resp == "h":
        end = guess
    elif resp == "l":
        start = guess
print("Game over. Your secret number was "+str(guess))
*)

(* ****** ****** *)

(* end of [Exercise-3-3.dats] *)
