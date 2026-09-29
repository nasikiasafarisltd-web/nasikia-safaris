import { LitElement, html, css } from 'https://cdn.skypack.dev/pin/lit@v2.3.1-xx2m8Ol8q0zpWqDkqruF/mode=imports,min/optimized/lit.js';



class NavbarComponent extends LitElement {

  static styles = css`
    :host {
      display: block;
    }
    .top-bar {
      background-color: #f8f9fa;
      color: white;
      padding: 5px 0;
      font-size: 14px;
    }
    .top-bar a {
      color: white;
      margin-right: 15px;
      text-decoration: none;
    }
    .top-bar a:hover {
      text-decoration: underline;
    }
    .top-bar .social-icons {
      display: flex;
      justify-content: flex-end;
    }
    .navbar {
      background-color: black;
      padding: 0.5rem 1rem;
    }
    .box h5{
      color:white;
      width:200px;
      text-align:center;
    }
    .scrolled {
      background-color: rgba(255, 255, 255,1) !important;
      color: black !important;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    }
    .scrolled a{
     color:black;
    }  
    .scrolled .box a{
      color:white;
    } 
    .fixed-top {
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 1030;
    }
   
   
    .nav-link {
      
      color:white;
      margin-right: 20px;
      font-size: 16px;
    }
    .nav-link.active {
      color: #f15d30;
    }
    .nav-link:hover {
      color: #f15d30;
    }
    .navbar-toggler {
      border-color: rgba(0, 0, 0, 0.1);
    }
    
    .btn-primary:hover {
      background-color: #e5551d;
      border-color: #e5551d;
    }
    .divider {
      margin: 0 10px;
      border-left: 1px solid #ccc;
      height: 15px;
    }
     .dropdown-menu {
      display: none;
      position: absolute;
      background-color: white;
      border: 1px solid rgba(0, 0, 0, 0.15);
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.175);
      z-index: 1000;
    }
    .dropdown.show .dropdown-menu {
      display: block;
    }
    .dropdown:hover .dropdown-menu {
      display: block;
      margin-top: 0; /* Optional: Adjust this value to control spacing between the dropdown and the nav item */
    }
    .box{
     display:flex;
     flex-direction: column;
     justify-content: center;
     align-items: space-around;
    }
    .sticky {
      position: sticky;
      top: 15%;
      z-index: 1;
      /* Ensure it's above other content */
      background-color: white;
      /* Adjust as needed */
      padding: 10px 0;
      /* Adjust as needed */
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      /* Optional: Add a shadow */
    }
    
    .sticky button {
      border: 1px solid #f15d30;
    }
    
    .sticky button:active {
      background-color: #f15d30;
    }

    .mega-menu1 {
      width: 900px;
      margin-left: -180px;
    }
    
    .mega-menu1 a:hover {
      text-decoration: underline;
      color: rgb(255, 255, 255);
    }
    
    /* Adjust width for mobile devices */
    @media (max-width: 767px) {
      .mega-menu1 {
        max-width: 400px;
        margin-left: 5px;
      }
    
      /* Style for navbar when screen width is less than or equal to 767px */
      .navbar-nav {
        max-height: 80vh;
        /* Adjust max-height as needed */
        overflow-y: auto;
        /* Enable vertical scrolling */
      }
    }
    
    @media (max-width: 991.98px) {
      .dropdown-menu {
        position: static;
        float: none;
        box-shadow: none;
      }
      .dropdown:hover .dropdown-menu {
        display: none; /* Disable hover behavior on mobile */
      }
      .dropdown.show .dropdown-menu {
        display: block;
      }
    }

    body {
      padding-top: 120px; /* Adjust this value based on your navbar's height */
    }
     

    .mega-menu1 {
  width: 900px;
  margin-left: -180px;
  z-index: 1000;
  background-color:white;
}
 

.mega-menu1 a:hover {
  text-decoration: underline;
  color: rgb(255, 255, 255);
}

/* Adjust width for mobile devices */
@media (max-width: 767px) {
  .mega-menu1 {
    max-width: 100%;
    
  }


  /* Style for navbar when screen width is less than or equal to 767px */
  .navbar-nav {
    max-height: 80vh;
    /* Adjust max-height as needed */
    overflow-y: auto;
    /* Enable vertical scrolling */
  }
}
 
}


  `;

  constructor() {
    super();
    
    // Add the favicon to the document head
    const faviconLink = document.createElement('link');
    faviconLink.rel = 'icon';
    faviconLink.href = 'favicon/favicon.ico'; // Replace with the actual path to your favicon
    document.head.appendChild(faviconLink);
  
     // Add Google Analytics script
     const script = document.createElement('script');
     script.src = 'https://www.googletagmanager.com/gtag/js?id=G-EP6X0NYLM7';
     script.async = true;
     document.head.appendChild(script);
 
     script.onload = () => {
       const gaScript = document.createElement('script');
       gaScript.textContent = `
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         gtag('config','G-EP6X0NYLM7');
       `;
       document.head.appendChild(gaScript);
     };

    this.isCollapsed = true;  // State to track the collapse state
  }
  handleScroll() {
    const navbar = this.shadowRoot.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  toggleCollapse() {
    const collapseElement = this.shadowRoot.querySelector('#ftco-nav');
    this.isCollapsed = !this.isCollapsed;
    if (this.isCollapsed) {
      collapseElement.classList.remove('show');
    } else {
      collapseElement.classList.add('show');
    }
  }

  toggleDropdown(event) {
    const dropdown = event.currentTarget;
    dropdown.classList.toggle('show');
  }

  firstUpdated() {
    // Show popup after a delay (e.g., 5 seconds)
    setTimeout(() => {
      this.showPopup = true;
      this.requestUpdate();
    }, 5000);
  }

  closePopup() {
    this.showPopup = false;
    this.requestUpdate();
  }

  render() {
    return html`
    <link
        href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Playwrite+DE+Grund:wght@100..400&display=swap"
        rel="stylesheet">
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wdth,wght@0,75..100,300..800;1,75..100,300..800&display=swap"
        rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Arizonia&display=swap" rel="stylesheet" />
   <link rel="stylesheet" href="css/bootstrap-datepicker.css" />
   <!-- Icon Font Stylesheet -->
   <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
   <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />
 
   <!-- Icon Font Stylesheet -->
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />

   <!-- Customized Bootstrap Stylesheet -->
   <link href="css/bootstrap.min.css" rel="stylesheet">
   <!-- Template Stylesheet -->
   <link href="css/style.css" rel="stylesheet">

      <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-white" id="ftco-navbar">
        <div class="container-fluid">
        <a href="https://www.nasikiasafaris.com/" class="navbar-brand p-0">
          <img src="img/NASIKIA.webp" alt="Logo" style="width: 170px;">
         </a>
          <button class="navbar-toggler" style="color:black; " type="button" @click="${this.toggleCollapse}" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            Menu
         </button>
          <div class="collapse navbar-collapse" id="ftco-nav">
                <div class="navbar-nav mx-auto ">
                    <a href="https://www.nasikiasafaris.com/" class="nav-item nav-link fw-bold">Home</a>
                    <li class="nav-item dropdown" @click="${this.toggleDropdown}">
                  <a class="nav-link dropdown-toggle fw-bold" role="button" aria-expanded="false">
                    Safaris
                 </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="https://www.nasikiasafaris.com/tanzania-high-end-safari">High End Safari
                       Packages</a></li>
                    <li><a class="dropdown-item" href="https://www.nasikiasafaris.com/tanzania-luxury-safaris">Luxury Safari
                       Packages</a></li>
                    <li><a class="dropdown-item" href="https://www.nasikiasafaris.com/tanzania-flying-safari">Flying Safari
                       Packages</a></li>   
                    <li><a class="dropdown-item" href="https://www.nasikiasafaris.com/tanzania-honeymoon-safari">Honeymoon Safari
                       Packages</a></li>
                    <li><a class="dropdown-item" href="https://www.nasikiasafaris.com/family-safaris">Family Safari
                       Packages</a></li>
                   <li><a class="dropdown-item" href="https://www.nasikiasafaris.com/serengeti-migration">Migration Safari
                       Packages</a></li>   
                    <li><a class="dropdown-item" href="https://www.nasikiasafaris.com/tanzania-midrange-safari">Midrange Safari
                       Packages</a></li>
                    <li><a class="dropdown-item" href="https://www.nasikiasafaris.com/tanzania-safari">Tanzania Safari</a></li>   
                    <li><a class="dropdown-item" href="https://www.nasikiasafaris.com/tanzania-national-parks">Tanzania National Parks</a></li>                  
                  </ul>
                </li>
                    <a href="/climbing-kilimanjaro" class="nav-item nav-link fw-bold">Climbing</a>
                    <a href="/zanzibar-beach-holiday" class="nav-item nav-link fw-bold">Zanzibar</a>
                    <a href="https://nasikiasafaris.com/blog" class="nav-item nav-link fw-bold">Blog</a>
                    <a href="/about" class="nav-item nav-link fw-bold">About</a>
                    <a href="/contact" class="nav-item nav-link fw-bold">Contact</a>
                </div>
                <div class="team-icon d-flex justify-content-start py-4">
                <div class="d-inline-flex align-items-center" style="height: 45px;">
                <img class="img-fluid rounded-circle border border-1 border-dark mx-1" src="img/united-states.png" alt="american" style="width: 27px;height: 27px;">
              <img class="img-fluid rounded-circle border border-1 border-dark mx-1" src="img/france.png" alt="france" style="width: 27px;height: 27px;">
               <img class="img-fluid rounded-circle border border-1 border-dark mx-1" src="img/italy.png" alt="italy" style="width: 27px;height: 27px;">
              <img class="img-fluid rounded-circle border border-1 border-dark mx-1" src="img/china.png" alt="german" style="width: 27px;height: 27px;">
                </div>
            </div>
                <a href="https://nasikiasafaris.com/travel-proposal" class="btn rounded-pill py-2 px-4 flex-shrink-0 fw-bold" style="background-color:#EC5E3C; color:white;">SEND AN INQUIRY</a>
            </div>
        </div>
      </nav>

      
    `;
  }
}

customElements.define('navbar-component', NavbarComponent);