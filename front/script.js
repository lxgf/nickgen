const output = document.querySelector('.result__val')

const generateBnt = document.querySelector('.btn')
const copyBtn = document.querySelector('.copy')

if (typeof eel == 'object')
    output.innerHTML = 'Нажмите кнопку'

const generateHandle = async () => {
    const syllablesNumber = document.querySelector('input[name="syllables_number"]').value || 3
    const lettersInSyllable = document.querySelector('input[name="letters_in_syllable"]').checked && 3 || 2
    const pascalCase = document.querySelector('input[name="pascal_case"]').checked

    output.innerHTML = await eel.generate_nick_py(syllablesNumber, lettersInSyllable, pascalCase)()
}

const infoBlock = document.querySelector('.info')

const copyHandle = () => {
    let textarea = document.createElement('textarea');

    document.body.appendChild(textarea);
    textarea.value = output.innerHTML;

    textarea.select();
    document.execCommand("copy");
    
    document.body.removeChild(textarea);

    infoBlock.classList.add('hidden')
    setTimeout(infoBlock.classList.add('minified'), 100)
    


}

generateBnt.addEventListener('click', generateHandle)
copyBtn.addEventListener('click', copyHandle)
