const output = document.querySelector('.result__val')

const generateBnt = document.querySelector('.btn')
const copyBtn = document.querySelector('.copy')

const numberInput = document.querySelector('input[name="syllables_number"]')

if (typeof eel == 'object')
    output.innerHTML = 'Нажмите кнопку'

const generateHandle = async () => {
    const syllablesNumber = parseInt(document.querySelector('input[name="syllables_number"]').value) || 3
    const lettersInSyllable = document.querySelector('input[name="letters_in_syllable"]').checked && 3 || 2
    const pascalCase = document.querySelector('input[name="pascal_case"]').checked

    output.innerHTML = await eel.generate_nick_py(syllablesNumber, lettersInSyllable, pascalCase)()
}

const infoBlock = document.querySelector('.info')

const showMessage = message => {
    infoBlock.innerHTML = message
    infoBlock.classList.toggle('hidden')
    setTimeout(() => infoBlock.classList.toggle('minified'), 500)

    setTimeout(() => {
        infoBlock.classList.toggle('minified')
        setTimeout(() => infoBlock.classList.toggle('hidden'), 500)
        infoBlock.innerHTML = ''
    }, 3000)
}

const copyHandle = () => {
    copyValue = output.innerHTML

    if (copyValue === 'Нажмите кнопку') {
        showMessage('Сперва сгенерируйте ник')
        return
    }

    let textarea = document.createElement('textarea');
    document.body.appendChild(textarea);
    textarea.value = copyValue;

    textarea.select();
    document.execCommand("copy");
    
    document.body.removeChild(textarea);

    showMessage('Скопировано!')
}

generateBnt.addEventListener('click', generateHandle)
copyBtn.addEventListener('click', copyHandle)


const numberTypeHandle = e => {
    const value = e.target.value
    if (value > 10) numberInput.value = 10
    if (value < 2) numberInput.value = 2
}

numberInput.addEventListener('change', e => numberTypeHandle(e))
