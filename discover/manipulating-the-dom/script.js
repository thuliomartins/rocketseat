const body = document.querySelector("body");
const btnOpenModal = document.querySelector("#btn-open-modal");
const modal = document.querySelector("#modal");

btnOpenModal.addEventListener('click', () => {

    btnOpenModal.classList.add("invisible");
    modal.classList.remove("invisible");
    body.style.backgroundColor = "rgba(0, 0, 0, 0.6)";

})

document.addEventListener('keydown', (event) => {

    const isEscKey = event.key === 'Escape';
    const containClassInvisible = ! modal.classList.contains('invisible');

    if (isEscKey && containClassInvisible) {
        modal.classList.add("invisible");
        body.style.backgroundColor = "rgba(0, 0, 0, 0)";
        btnOpenModal.classList.remove("invisible");
    }

});
