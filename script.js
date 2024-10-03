document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("themeToggle")
    const icon = themeToggle.querySelector("i")
    const navbar = document.getElementsByClassName("navbar")[0]

    // Check for saved theme preference or default to light theme
    const savedTheme = localStorage.getItem("theme") || "light"
    document.body.classList.toggle("dark-mode", savedTheme === "dark")
    setTheme(savedTheme == "dark")

    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode")
        const isDarkMode = document.body.classList.contains("dark-mode")
        localStorage.setItem("theme", isDarkMode ? "dark" : "light")
        setTheme(isDarkMode)
    })

    function setTheme(isDarkMode) {
        document.body.classList.toggle("dark-mode", isDarkMode)
        // navbar.classList.toggle('navbar-light', !isDarkMode)
        navbar.classList.toggle("navbar-dark", isDarkMode)
        updateIcon(isDarkMode)
    }

    function updateIcon(isDarkMode) {
        if (isDarkMode) {
            icon.classList.remove("fa-sun")
            icon.classList.add("fa-moon")
        } else {
            icon.classList.remove("fa-moon")
            icon.classList.add("fa-sun")
        }
    }
})
