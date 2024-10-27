const HTMLIcons = {
    success: '<span class="material-symbols-outlined">task_alt</span>',
    danger: '<span class="material-symbols-outlined">error</span>',
    warning: '<span class="material-symbols-outlined">warning</span>',
    info: '<span class="material-symbols-outlined">info</span>',
};

function showToast(
    message = "Sample Message",
    toastType = "info",
    duration = 5000
) {
    if (!Object.keys(HTMLIcons).includes(toastType)) {
        toastType = "info";
    }

    let box = document.createElement("div");
    box.classList.add("toast", `toast-${toastType}`);
    box.innerHTML = `
    <div class="toast-content-wrapper">
        <div class="toast-icon">${HTMLIcons[toastType]}</div>
        <div class="toast-message">${message}</div>
        <div class="toast-progress"></div>
    </div>
    `.trim();

    duration = duration || 5000;
    box.querySelector(".toast-progress").style.animationDuration = `${duration / 1000}s`;

    let toastAlready = document.body.querySelector(".toast");
    if (toastAlready) { toastAlready.remove(); }
    document.body.appendChild(box)
}
