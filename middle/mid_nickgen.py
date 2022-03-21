from back.nickgen import generate_nick
import eel

@eel.expose
def generate_nick_py(syllables_number: int, letters_in_syllable: int, pascal_case: bool) -> str:
    return generate_nick(syllables_number, letters_in_syllable, pascal_case)
