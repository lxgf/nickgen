import eel
from middle.mid_nickgen import *

if __name__ == '__main__':
    eel.init('front')
    eel.start('index.html', mode="chrome", size=(280, 500))