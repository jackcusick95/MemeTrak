import "../styles/about.scss";
import "../styles/navbar.scss";

export function openModal() {
    const modal = document.querySelector(".modal")
    const mainContentContainer = document.querySelector('.main-content-container')
    modal.style.display = 'block';
    document.querySelector("body").style.overflow = 'hidden';
    document.querySelector("body").style.background = 'rgba(0,0,0,0.6)';
    mainContentContainer.style.visibility = 'hidden'
    // document.querySelector('footer').style.visibility = 'hidden'
}

export function closeModal() {
    const modal = document.querySelector(".modal")
    const mainContentContainer = document.querySelector('.main-content-container')
    modal.style.display = 'none';
    document.querySelector("body").style.overflow = 'visible';
    document.querySelector("body").style.background = 'white';
    mainContentContainer.style.visibility = 'visible'
    // document.querySelector('footer').style.visibility = 'visible'
}

export function addEventListeners() {
     const navBar = document.querySelector(".nav-bar-container")
     const about = document.querySelector(".about")
     const modal = document.querySelector(".modal")
     const closeModalBtn = document.querySelector('.close-btn')
     const mainContentContainer = document.querySelector('.main-content-container')

    navBar.onclick = (e) => {

        if (e.target === about) {
            return openModal()
        }
        closeModal()
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {

            closeModal()
        }
    })

    closeModalBtn.onclick = () => {
        closeModal()
    }
}; 