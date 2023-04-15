import Link from "next/link"

function Footer (){
    return(
        <>
        <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top custom-footer">
            <p class="col-md-4 mb-0 text-muted">© 2023 ACM Entrepreneurship</p>

            <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
              <img src="images/harvest_book_logo_2.png" id="footer_logo" alt="HarvestBook Logo"/>
            </a>

            <ul class="nav col-md-4 justify-content-end">
            <li className="nav-item">
              <Link href="/" className="nav-link px-2 text-muted">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/calculator" className="nav-link px-2 text-muted">Calculator</Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link px-2 text-muted">About</Link>
            </li>
            </ul>
        </footer>
        </div>
        </>
    )
}

export default Footer;