const modal = document.querySelector(".modal");
const body = document.querySelector("body");
const openModal = document.querySelector(".main-section__btn");
const form = document.querySelector(".modal__content");
const modalBtn = document.querySelector(".modal__btn");
const modalTextArea = document.querySelector(".modal__textarea");

openModal.addEventListener("click", function () {
    modal.style.display = "flex";
    body.style.overflow = "hidden";
});

window.addEventListener("click", function (e) {
    if (e.target == modal){
        modal.style.display = "none";
        body.style.overflow = "scroll";
    }
});

const createUserAdditionalInfo = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const textarea = e.target[2].value;

    const userInfo = {
        name,
        email,
        textarea,
    }

    console.log(userInfo);
};

form.addEventListener("submit", function (e) {
    createUserAdditionalInfo(e)
});