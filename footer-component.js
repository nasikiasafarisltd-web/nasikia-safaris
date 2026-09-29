class FooterComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.showPopup = false;
    }




    connectedCallback() {
        this.shadowRoot.innerHTML = `
        <style>
        .popup-overlay {
            position: fixed;
            max-width: 800px;
            background: rgba(0, 0, 0, 0.5);
            display: none; /* Initially hidden */
            justify-content: center;
            align-items: center;
            z-index: 9999;
            top: 20%;
            left: 20%;
            width: 60%;
            height: auto;
        }

        .popup {
         background-color: #5A4A42;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
            position: relative;
        }

        .close-btn {
            cursor: pointer;
        }
        /* Adjust width for mobile devices */
    @media (max-width: 767px) {
      .popup-overlay {
        width: 100%;
        left:0;
      }
    </style>
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

          <!-- Footer Start -->
          <div class="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
              <div class="container py-5">
                  <div class="row g-5">
                      <div class="col-md-6 col-lg-6 col-xl-4">
                          <div class="footer-item">
                              <a href="index.html" class="p-0">
                                  <h4 class="text-white mb-4">Nasikia Safaris</h4>
                                  <img class="bg-white" src="img/NASIKIA.webp" alt="Logo"
                                      style="height: 80px; width: 148px;">
                              </a>
      
                              <div class="d-flex align-items-center">
                                  <i class="fas fa-map-marker-alt text-primary me-3"></i>
                                  <p class="text-white mb-0">P.O BOX 2135 Sakina – Arusha Tanzania </p>
                              </div>
                              <div class="d-flex align-items-center">
                                  <i class="fas fa-envelope text-primary me-3"></i>
                                  <p class="text-white mb-0">info@nasikiasafaris.com</p>
                              </div>
                              <div class="d-flex align-items-center">
                                  <i class="fa fa-phone-alt text-primary me-3"></i>
                                 <p class="text-white mb-0">+255 789 371 525</p>
                             </div>
                             <div class="d-flex align-items-center">
                            <i class="fa fa-phone-alt text-primary me-3"></i>
                            <p class="text-white mb-0">+255 666 101 067</p>
                        </div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3982.8972463620653!2d36.65724177497207!3d-3.3752862965993637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zM8KwMjInMzEuMCJTIDM2wrAzOSczNS4zIkU!5e0!3m2!1sen!2stz!4v1784468913172!5m2!1sen!2stz" width="300" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>

                        <div class="team-icon d-flex justify-content-start py-4">
                    <a class="btn btn-square btn-light rounded-circle mx-1 border border-1 border-light" style=
                      "background-color: #25D366;" href="https://wa.link/80v1p0"><i
                        class="fab fa-whatsapp text-white"></i></a>
                    <a class="btn btn-square btn-light rounded-circle mx-1  border border-1 border-light" style=
                    "background-color: #1877F2;" href="https://www.facebook.com/share/15MitUwun2/?mibextid=wwXIfr"><i
                            class="fab fa-facebook-f text-white"></i></a>
                    <a class="btn btn-square btn-dark rounded-circle mx-1  border border-1 border-light" href="https://www.tiktok.com/@nasikiasafaris?_t=ZM-8spXcR9qAx3&_r=1"><i class="fab fa-tiktok text-white"></i></a>
                    <a class="btn btn-square  rounded-circle mx-1  border border-1 border-light" style="background-image:linear-gradient(180deg,#f9ce34, #ee2a7b, #6228d7)" href="https://www.instagram.com/nasikiasafaris/profilecard/?igsh=MXVuMGw5a2o0eG52bg=="><i
                            class="fab fa-instagram text-white"></i></a>
                    <a class="btn btn-square  rounded-circle mx-1  border border-1 border-light" style="background: red;" href="https://www.youtube.com/@nasikiasafaristanzania992"><i
                            class="fab fa-youtube text-white"></i></a>        
                </div>
                          </div>
                      </div>
                      <div class="col-md-6 col-lg-6 col-xl-2">
                          <div class="footer-item">
                              <h4 class="text-white mb-4">Quick Links</h4>
                             

                              <a class="text-white" href="https://www.nasikiasafaris.com/climbing-kilimanjaro"><i class="fas fa-angle-right me-2 text-white"></i> About Mount Kilimanjaro</a>
                              <a class="text-white" href="https://www.nasikiasafaris.com/serengeti-national-park"><i class="fas fa-angle-right me-2 text-white"></i> Serengeti National Park</a>
                              <a class="text-white" href="https://www.nasikiasafaris.com/ngorongoro-crater"><i class="fas fa-angle-right me-2 text-white"></i> Ngorongoro Crater</a>
                              <a class="text-white" href="https://www.nasikiasafaris.com/zanzibar-island"><i class="fas fa-angle-right me-2 text-white"></i> Zanzibar Island</a>
                              <a class="text-white" href="https://www.nasikiasafaris.com/tanzania-safari-cost"><i class="fas fa-angle-right me-2 text-white"></i> Tanzania Safari Cost</a>
                              <a class="text-white" href="https://www.nasikiasafaris.com/tanzania-safari-trip"><i class="fas fa-angle-right me-2 text-white"></i> Tanzania Safari Trip</a>
                              <a class="text-white" href="https://www.nasikiasafaris.com/serengeti-safari-packages"><i class="fas fa-angle-right me-2 text-white"></i> Serengeti Safari Packages</a>
                             
                        </div>
                      </div>
                      <div class="col-md-6 col-lg-6 col-xl-2">
                          <div class="footer-item">
                              <h4 class="text-white mb-4">Support</h4>
                              <a class="text-white" href="index.html#"><i class="fas fa-angle-right me-2 text-white"></i> Privacy Policy</a>
                              <a class="text-white" href="/terms-and-conditions"><i class="fas fa-angle-right me-2 text-white"></i> Terms & Conditions</a>
                              <a class="text-white" href="/tanzania-accommodations"><i class="fas fa-angle-right me-2 text-white"></i> Accommodation</a>
                              <a class="text-white" href="index.html#"><i class="fas fa-angle-right me-2 text-white"></i> Support</a>
                              <a class="text-white" href="index.html#"><i class="fas fa-angle-right me-2 text-white"></i> FAQ</a>
                              <a class="text-white" href="index.html#"><i class="fas fa-angle-right me-2 text-white"></i> Help</a>
                          </div>
                      </div>
                      <div class="col-md-6 col-lg-6 col-xl-4">
                          <div class="footer-item">
                              <h4 class="text-white mb-4">Opening Hours</h4>
                              <div class="opening-date mb-3 pb-3">
                                  <div class="opening-clock flex-shrink-0">
                                      <h6 class="text-white mb-0 me-auto">Monday - Friday:</h6>
                                      <p class="mb-0 text-white"><i class="fas fa-clock text-primary me-2"></i> 08:00 AM - 17:00 PM</p>
                                  </div>
                                  <div class="opening-clock flex-shrink-0">
                                      <h6 class="text-white mb-0 me-auto">Satur - Sun:</h6>
                                      <p class="mb-0 text-white"><i class="fas fa-clock text-primary me-2"></i> 09:00 AM - 13:00 PM</p>
                                  </div>
                                  <div class="opening-clock flex-shrink-0">
                                      <h6 class="text-white mb-0 me-auto">Holiday:</h6>
                                      <p class="mb-0 text-white"><i class="fas fa-clock text-primary me-2"></i> 09:00 AM - 13:00 PM</p>
                                  </div>
                              </div>
                              <div>
                                  <p class="text-white mb-2">Payment Accepted</p>
                                  <img src="img/payment.png" class="img-fluid" alt="Image">
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <!-- Footer End -->
      
          <!-- Copyright Start -->
          <div class="container-fluid copyright py-4">
              <div class="container">
                  <div class="row align-items-center justify-content-center">
                      <div class="col-md-8 text-center text-center text-md-start mb-md-0 d-flex justify-content-center align-items-center">
                          <span class="text-body text-center"><a href="index.html#" class="border-bottom text-white text-center"><i
                                      class="fas fa-copyright text-light me-2"></i>Nasikia Safaris Ltd</a> 2026, All right
                              reserved.</span>
                      </div>
                      
                  </div>
              </div>
          </div>
          <!-- Copyright End --> 

          </div>   
          
          <!-- Popup Form -->
     
          <div class="popup-overlay" id="popupOverlay">

            <div class="popup">
              <div class="row " style="display:flex; justify-content: between; align-items-center">
              <div class="col-6 d-flex align-items-center justify-content-start">
              <h2 class="text-white">Get in Touch</h2>
              </div>
              <div class="col-6 d-flex align-items-center justify-content-end" >
              <span class="close-btn fs-1 text-white" @click="${this.closePopup}" id="closePopup">&times;</span>
              </div>
              </div>
              <form action="https://formcarry.com/s/VAiQIjoaemt" method="POST" >
                            <div class="row g-4">
                                <div class="col-lg-12 col-xl-6">
                                    <div class="form-floating">
                                        <input type="text" class="form-control border-1" id="name" name="name"
                                            placeholder="Your Name" required>
                                        <label for="name">Your Name</label>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-xl-6">
                                    <div class="form-floating">
                                        <input type="email" class="form-control border-1" id="email"
                                            placeholder="Your Email" name="email" required>
                                        <label for="email">Your Email</label>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-xl-6">
                                    <div class="form-floating">
                                        <input type="phone" class="form-control border-1" id="phone"
                                            placeholder="Phone"  name="phone" required>
                                        <label for="phone">Your Phone</label>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-xl-6">
                                    <div class="form-floating">
                                        <input type="text" class="form-control border-1" id="project" placeholder="" name="country" required>
                                        <label for="project">Your Country</label>
                                    </div>
                                </div>
                                
                                <div class="col-12">
                                    <div class="form-floating">
                                        <textarea class="form-control border-1" placeholder="Leave a message here"
                                            id="message"  name="message" required></textarea>
                                        <label for="message">Message</label>
                                    </div>
                                </div>
                                
                                <div class="col-12">
                                    <button type="submit" name="submit" class="btn btn-primary w-100 py-3">Send Message</button>
                                </div>
                            </div>
                        </form>
            </div>
          </div>
        
       
      `;

        // Show popup after 5 seconds
        setTimeout(() => {
            this.shadowRoot.getElementById('popupOverlay').style.display = 'flex';
        }, 20000);

        // Close popup on clicking close button
        this.shadowRoot.getElementById('closePopup').addEventListener('click', () => {
            this.shadowRoot.getElementById('popupOverlay').style.display = 'none';
        });

        // Cookie Consent Functionality
        const cookieBanner = this.shadowRoot.getElementById('cookie-banner');
        const acceptCookiesBtn = this.shadowRoot.getElementById('acceptCookies');

        // Set cookie with security attributes
        const setCookie = () => {
            document.cookie = "cookies_accepted=true; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT; Secure; SameSite=Lax";
            cookieBanner.style.display = 'none';
        };

        // Check for existing consent
        const checkCookieConsent = () => {
            return document.cookie.split(';').some(item =>
                item.trim().startsWith('cookies_accepted=')
            );
        };

        // Event listener for acceptance
        acceptCookiesBtn.addEventListener('click', setCookie);

        // Initial check
        if (checkCookieConsent()) {
            cookieBanner.style.display = 'none';
        }
    }
}
customElements.define("footer-component", FooterComponent);
