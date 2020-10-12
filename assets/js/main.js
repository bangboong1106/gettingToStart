// const video=document.querySelectorAll('.home-content__declaration h3')
// for(var i=0 ; i<video.length; i++){
//     video[i].onclick=function(e){
//         $(this).data('url');
//        alert('hello')

//        iframe.scr(url);
//     }

// }

// const video_click=document.querySelector('social-video')
const modal = document.querySelector('#modal')
const video = document.querySelectorAll('.social-video')
const span = document.querySelector('#close')
var src = document.querySelector("#iframe-video")
for (let i = 0; i < video.length; i++) {
    video[i].addEventListener("click", function (e) {
        e.preventDefault();
        var src1 = video[i].getAttribute('data-url')
        src.src = src1
        modal.style.display = "block";
    })
}
window.addEventListener("keydown",function(e){
    e.preventDefault();
    let keyCode = e.keyCode;
    switch (keyCode) {
        case 27:
            modal.style.display="none"
            break;
        default:
            break;
    }
})



span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}

// $('#social-video').click(function (e) {
//     e.perventDefault();
//     var iframe=$(this).data('url');
//          modalWindow.show({
//         iframeUrl:iframe,

//     })
// })