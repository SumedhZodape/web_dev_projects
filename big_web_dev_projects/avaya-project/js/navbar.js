let navbar = document.getElementById('navbar-js').innerHTML = 
`<nav class="navbar navbar-light fixed-top pt-lg-0 pt-md-1 pt-sm-2 pt-2 pb-lg-0 pb-md-1 pb-sm-2 pb-2" id="header">
<div class="container nav-container-mb">
    <a class="navbar-brand logo" href="./index.html">
        <span class="logo-1" id="logo-color">Ava</span><span class="logo-2 color-golden">Ya</span>
    </a>
    <button class="navbar-toggler" id="nav-border" type="button" data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        <span class="navbar-toggler-icon">
<i class="fas fa-bars" id="nav-icon"></i>
</span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header pb-0">
            <a class="logo text-decoration-none">
            </a>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                aria-label="Close">
                <i class="fa-solid fa-bars"></i>
                </button>
        </div>
        <div class="offcanvas-body pt-0">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="./index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./about.html">About Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./blogs.html">Blogs</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./contact.html">Contact Us</a>
                </li>
            </ul>
        </div>
    </div>
</div>
</nav>`