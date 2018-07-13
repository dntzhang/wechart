export function control(obj) {

    let isMouseDown = false
    let preX = null

    let scale = 1
    let preDistance = null

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
    document.addEventListener('touchend', onTouchEnd, false)

    function onTouchStart(event) {
        preX = event.touches[0].clientX
    }

    function onTouchMove(event) {
        if (event.touches.length > 1) {
            var dx = event.touches[0].pageX - event.touches[1].pageX;
            var dy = event.touches[0].pageY - event.touches[1].pageY;
            var distance = Math.sqrt(dx * dx + dy * dy);
            if (preDistance !== null) {
                scale += 0.1 * (distance / preDistance) - 1
                if (scale < 0.2) scale = 0.2
                obj.scale.x = obj.scale.y = obj.scale.z = scale
            } else {
                preDistance = distance
            }
        } else {
            obj.rotation.y += (event.touches[0].clientX - preX) * 0.01
            preX = event.touches[0].clientX
        }

    }


    function onTouchEnd() {
        preDistance = null
    }


}