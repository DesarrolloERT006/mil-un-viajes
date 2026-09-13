const boton = document.getElementById("menu-btn");
const menu = document.getElementById("menu-lateral");
const overlay = document.getElementById("menu-overlay");
const cerrar = document.getElementById("menu-cerrar");

function abrirMenu() {
    menu.classList.add("activo");
    if (overlay) overlay.classList.add("activo");
}

function cerrarMenu() {
    menu.classList.remove("activo");
    if (overlay) overlay.classList.remove("activo");
}

boton.addEventListener("click", function () {
    if (menu.classList.contains("activo")) {
        cerrarMenu();
    } else {
        abrirMenu();
    }
});

if (cerrar) cerrar.addEventListener("click", cerrarMenu);
if (overlay) overlay.addEventListener("click", cerrarMenu);

// Resalta en el menú el enlace de la página actual
const rutaActual = window.location.pathname.split("/").pop() || "index.html";
menu.querySelectorAll("a").forEach(function (enlace) {
    if (enlace.getAttribute("href") === rutaActual) {
        enlace.classList.add("active");
    }
});

// =========================================================
// SELECTOR DE IDIOMA PROPIO (controla por detrás el widget
// oculto de Google Translate, en vez de mostrar su desplegable
// nativo sin estilo)
// =========================================================
const langSwitcher = document.getElementById("langSwitcher");
const langSwitcherBtn = document.getElementById("langSwitcherBtn");
const langMenu = document.getElementById("langMenu");

if (langSwitcher && langSwitcherBtn && langMenu) {
    langSwitcherBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        langSwitcher.classList.toggle("open");
    });

    document.addEventListener("click", function () {
        langSwitcher.classList.remove("open");
    });

    langMenu.addEventListener("click", function (e) {
        e.stopPropagation();
    });

    langMenu.querySelectorAll("button[data-lang]").forEach(function (botonIdioma) {
        botonIdioma.addEventListener("click", function () {
            const idioma = botonIdioma.getAttribute("data-lang");
            const dominio = window.location.hostname;

            // Mismo mecanismo (cookie "googtrans" + recarga) que usa el botón
            // "ES" para resetear el idioma: es la forma fiable de decirle a
            // Google Translate qué idioma mostrar al cargar la página.
            document.cookie = `googtrans=/es/${idioma}; path=/`;
            if (dominio) {
                document.cookie = `googtrans=/es/${idioma}; domain=${dominio}; path=/`;
            }
            window.location.reload();
        });
    });
}
