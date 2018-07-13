export function control(obj) {

    let isMouseDown = false
    let preX = 0

    document.addEventListener('mousedown', onDocumentMouseDown, false)
    document.addEventListener('mousemove', onDocumentMouseMove, false)
    document.addEventListener('mouseup', onDocumentMouseUp, false)

    function onDocumentMouseDown(event) {
        isMouseDown = true
        preX = event.clientX
        event.preventDefault()
    }

    function onDocumentMouseMove(event) {
        if (isMouseDown) {
            obj.rotation.y += (event.clientX - preX) * 0.01
            preX = event.clientX
            event.preventDefault()
        }
    }

    function onDocumentMouseUp() {
        isMouseDown = false
    }

    document.addEventListener('touchstart', onTouchStart, false)
    document.addEventListener('touchmove', onTouchMove, false)

    function onTouchStart(event) {
        preX = event.touches[0].clientX
    }

    function onTouchMove(event) {
        obj.rotation.y += (event.touches[0].clientX - preX) * 0.01
        preX = event.touches[0].clientX
    }
}