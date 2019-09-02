const COLORS = {green: '#AEEA00', purple: '#AA00FF', orange: '#FF6D00', blue: '#00B8D4'}

const changeColor = (color) => {
    let elements = document.getElementsByClassName('custom-color-style')
    for(let element of elements) {
        element.style.background = color
    }
    let icon_elements = document.getElementsByClassName('custom-color-style-icons')
    for(let icon_element of icon_elements) {
        icon_element.style.color = color;
    }
    return color
}

document.getElementById('color-changer-green').addEventListener('click', () => {
    changeColor(COLORS.green)
})

document.getElementById('color-changer-purple').addEventListener('click', () => {
    changeColor(COLORS.purple)
})

document.getElementById('color-changer-orange').addEventListener('click', () => {
    changeColor(COLORS.orange)
})

document.getElementById('color-changer-blue').addEventListener('click', () => {
    changeColor(COLORS.blue)
})