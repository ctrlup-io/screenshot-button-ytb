
function saveDataURLAsImage(data, filename = 'untitled.jpeg') {
    const link = document.createElement('a')
    link.style.hidden = true
    link.href = data
    link.download = filename
    document.body.appendChild(link)
    link.click()
}

function saveVideoAsImage() {
    const video = document.getElementsByTagName('video')[0]
    const title = [...document.getElementsByTagName('h1')].filter(h1 => h1.innerText.trim())[0].innerText
    const canvas = document.createElement('canvas')
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    const context = canvas.getContext('2d')
    context.drawImage(video, 0, 0, canvas.width, canvas.height)
    const dataURL = canvas.toDataURL('image/jpeg')
    saveDataURLAsImage(dataURL, title)
}

function createTakeScreenshotButton() {
    const controls = document.getElementsByClassName('ytp-right-controls')[0]
    const className = 'ytp-button-screenshot-button'
    if (!document.getElementsByClassName(className).length) {
        const button = document.createElement('button')
        button.classList.add('ytp-button', 'ytp-button-screenshot-button')
        button.innerHTML = `<svg aria-hidden="true" viewBox="0 0 24 24" style="padding:10px 0px;height:calc(100% - 20px);" fill="#fff"><path d="M20 3H4c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h4v2h8v-2h4c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 14H4V5h16v12z"/><path d="M6.5 7.5H9V6H5v4h1.5zM19 12h-1.5v2.5H15V16h4z"/></svg>`
        button.onclick = saveVideoAsImage
        controls.appendChild(button)
    }
}

createTakeScreenshotButton()