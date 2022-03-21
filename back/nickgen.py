import random

consonants = [
    'b', 'c', 'd', 'f', 'g', 'h', 'j',
    'k', 'l', 'm', 'n', 'p', 'q', 'r',
    's', 't', 'v', 'w', 'x', 'y', 'z'
]

vowels = [
    'a', 'e', 'i', 'o', 'u'
]


def get_consonant():
    letter = consonants[random.randint(0, len(consonants) - 1)]
    return letter


def get_vowel():
    letter = vowels[random.randint(0, len(vowels) - 1)]
    return letter


def generate_syllable(consonants_number: int, vowels_number: int):
    match str(consonants_number) + str(vowels_number):
        case '11':
            return get_consonant() + get_vowel()
        case '12':
            return get_consonant() + get_vowel() + get_vowel()
        case '21':
            return get_consonant() + get_consonant() + get_vowel()
        case _:
            return get_consonant() + get_vowel()

def generate_nick(syllables_number: int, letters_in_syllable: int, pascal_case: bool):
    if 2 <= syllables_number <= 10:
        word = ''
        for i in range(syllables_number):
            if letters_in_syllable == 3:
                if pascal_case:
                    syllable = generate_syllable(random.randint(1, 2), random.randint(1, 2))
                    word += syllable.title()
                else:
                    word += generate_syllable(random.randint(1, 2), random.randint(1, 2))
            elif letters_in_syllable == 2:
                if pascal_case:
                    syllable = generate_syllable(1, 1)
                    word += syllable.title()
                else:
                    word += generate_syllable(1, 1)
            else:
                return('Incorrect letters in syllable number (2 or 3)')
                break

        return word
    else:
        return('Incorrect syllables number (must be >=2 and <=10)')
