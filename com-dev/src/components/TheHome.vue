<template>
    <section class="section-blog-wrapper">
        
    <!-- Navlinks -->
    <header class="main-header">
        <div class="cda-head-section">
            <div class="logo">
                <img src="../assets/imgs/property_management_logo_design_4__1_-removebg-preview 2.png" alt="Logo">
            </div>

            <input type="checkbox" id="input" name="input">
            <div class="headerContainer">
            <label for="input" id="hambugger"></label>
            </div> 

            <div class="left-section">
                <div class="cda-nav-links">
                    <ul class="nav-links">
                        <div class="logoNav barimg">
                            <img src="../assets/imgs/nav.png" alt="Logo">
                        </div>
                        <li><a href="#" class="logoNav">Home</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">How it works</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#" class="logoNav">Contact us</a></li>
                        <label for="input" class="close-icon logoNav">
                            <img src="../assets/imgs/Close Icon.png" alt="">
                        </label>
                    </ul>
                </div>
                <div class="nav-buttons">
                    <button class="btn login-btn">Sign in</button>
                    <button class="btn signup-btn">Sign up</button>
                </div> 
            </div>
         </div>
    </header>

     <section class="cda-content-wrap">
        <div class="hero">
            <div class="overlay-section"></div>
            <div class="content">
                <h1>Community Development Association Management Software</h1>
                <p>Bringing together the CDA executive committees, residents, 
                    and local businesses in one integrated platform</p>
            </div>
            <div class="features">
                    <img src="../assets/imgs/Feature Card.png" alt="Feature 0">
                    <img src="../assets/imgs/Feature Card (1).png" alt="Feature 1">
                    <img src="../assets/imgs/Feature Card (2).png" alt="Feature 2">
                    <img src="../assets/imgs/Feature Card (3).png" alt="Feature 3">
            </div>
            <div class="cda-buttons">
                <button class="btn cda-login">Get started for free </button>
                <button class="btn cda-info-btn"> Talk to us </button>
            </div>
        </div>
     </section> 

 <!-- Features Section -->
    
    <section>
       <div class="section-hero">
        <div class="overlay-section"></div>
                <div class="features-cda">
                    <div class="card">
                        <img src="../assets/imgs/Frame 54.png" alt="">
                        <div class="cda-cards-info-det">
                            <h2 class="card-snip">Easy Registration </h2>
                            <p class="card-details-mssg">Users—including admins, property owners, and tenants—can easily register 
                            and get started quickly</p>
                        </div>
                    </div>
                    <div class="card card-top">
                        <img src="../assets/imgs/Frame 55.png" alt="">
                        <div class="cda-cards-info-det">
                            <h2 class="card-snip">Seamless</h2>
                            <p class="card-details-mssg">Stay connected with real-time notifications for seamless management among admins,
                                 property owners, and tenants</p>
                        </div>
                    </div>
                </div>
                
                <div class="features-cda">
                    <div class="card">
                        <img src="../assets/imgs/Frame 56.png" alt="">
                        <div class="cda-cards-info-det">

                            <h2 class="card-snip">Efficient Setup and Management </h2>
                            <p class="card-details-mssg">Admin can easily setup fees for properties while owners 
                                and tenants get notified instantly</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="../assets/imgs/Frame 55 (1).png" alt="">
                        <div class="cda-cards-info-det">
                            <h2 class="card-snip">Complete Payment History</h2>
                            <p class="card-details-mssg">Keep track of payments, approvals, and due dates with
                                 easy-to-access records and reminders</p>
                        </div>
                    </div>
                </div>
       </div>
    </section>

    <!-- my code here  -->
        <div class="section-Detail-Blog">
            <div class="Detail-Blog">
                <div class="section-title">
                    <h3 class="Detail-Title-name">How it works</h3>
                <p class="Detail-Message-paragrah">Managing your community has never been easier</p>
                </div>
                <div class="Card-Grid cda-card" ref="target">
                    <div class="Detail-Blog-Card-Grids">
                        <div class="card-blog-messg ">
                            <img src="../assets/imgs/card-one.png" class="Card-Grid-img" alt="Image">
                            <h6 class="card-snip rem-space">Register</h6>
                        </div>
                        <p class="card-details-mssg mssg-card-color">Admins, Property Owners, and Tenants can quickly sign up and connect within minutes</p>
                    </div>
                    <div class="Detail-Blog-Card-Grids">
                        <div class="card-blog-messg">
                            <img src="../assets/imgs/card-two.png" class="Card-Grid-img" alt="Image">
                            <h6 class="card-snip rem-space">Set up fees and notifications</h6>
                        </div>
                        <p class="card-details-mssg mssg-card-color">Admins can assign fees to specific properties and notify owners and tenants in real-time</p>
                    </div>
                    <div class="Detail-Blog-Card-Grids ">
                        <div class="card-blog-messg">
                            <img src="../assets/imgs/card-three.png" class="Card-Grid-img" alt="Image">
                            <h6 class="card-snip rem-space">Make and approve payments</h6>
                        </div>
                        <p class="card-details-mssg mssg-card-color">Property owners and tenants can submit payments, which are approved by admins with just a click.</p>
                    </div>
                    <div class="Detail-Blog-Card-Grids">
                        <div class="card-blog-messg">
                            <img src="../assets/imgs/card-four.png" class="Card-Grid-img" alt="Image">
                            <h6 class="card-snip rem-space">Track Everything</h6>
                        </div>
                        <p class="card-details-mssg mssg-card-color">Get a full overview of all payments, due dates, and notifications — keeping everyone in the loop.</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- footer section  -->
        <div class="section-blog-footer">
            <div class="overlay"></div>
            <div class="foot-one-details">
                <img src="../assets/imgs/logo.png" alt="logo">
                <p class="card-details-mssg mssg-footer-color foot-paragraph-mssg">We simplify CDA management for admins, property owners, and tenants with easy tools and real-time updates.</p>
            </div>
            <div class="foot-two-details foot-centre">
                <h3 class="foot-title footer-fz">Pages</h3>
                <div class="foot-navList">
                    <nav class="foot-navitems">
                        <li class="foot-items"><a class="mssg-footer-color" href="#">About Us</a></li>
                        <li class="foot-items"><a class="mssg-footer-color" href="#">Features</a></li>
                        <li class="foot-items"><a class="mssg-footer-color" href="#">How it works</a></li>
                        <li class="foot-items"><a class="mssg-footer-color" href="#">Why choose us?</a></li>
                    </nav>
                </div>
            </div>
            <div class="foot-three-details foot-centre">
                <h3 class="foot-title">Contact</h3>
                <div class="foot-navList">
                    <nav class="foot-navitems">
                        <li class="foot-items mssg-footer-color">Feel free to get in touch with us</li>
                        <li class="foot-items mssg-footer-color">+234 915 780 0332</li>
                        <li class="foot-items mssg-footer-color">vnicomhub@gmail.com</li>
                        <li class="foot-items mssg-footer-color">hello@vnicom.com</li>
                    </nav>
                </div>
            </div>
        </div>
    </section>

</template>

<script setup>
  import { ref, computed} from 'vue'
  import { useMouseInElement } from '@vueuse/core';
  const target = ref(null)

  const { elementX, elementY, isOutside, elementHeight, elementWidth } =
  useMouseInElement(target)

  const cardTransform = computed(() => {
    const MAX_ROTATION = 6

    const rX = (
    MAX_ROTATION / 2 -
    (elementY.value / elementHeight.value) * MAX_ROTATION
  ).toFixed(2) // HANDLE X-AXIS

  const rY = (
    (elementX.value / elementWidth.value) * MAX_ROTATION - MAX_ROTATION / 2
  ).toFixed(2) // HANDLE Y-AXIS
  
  return isOutside.value ? '' : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotatey(${rY}deg)`
  })
</script>



<style scoped>
.card{
    transform: v-bind(cardTransform);
    transition: transform 0.25s ease-out;
}

</style>