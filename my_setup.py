import os
name_proj = "nickgen"
noconsole = " --windowed " # ставим "" - если нужна консоль, " --windowed " - если не нужна 
onefile = " --onefile " # указываем, что exe должен быть упакован в один файл
icon = r" -i=front\assets\images\favicon.ico"
if __name__ == "__main__":
    cmd_txt = f'python -m eel main.py front {onefile} {noconsole} {icon} --name {name_proj}'
    os.system(cmd_txt)