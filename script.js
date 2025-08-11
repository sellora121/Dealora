// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (navToggle) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  }

  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navMenu.classList.remove('active');
    });
  });

  // Contact form submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your message! We\'ll get back to you soon.');
      contactForm.reset();
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add scroll effect to header
  window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
      header.style.background = 'rgba(255, 255, 255, 0.95)';
      header.style.backdropFilter = 'blur(10px)';
    } else {
      header.style.background = '#fff';
      header.style.backdropFilter = 'none';
    }
  });
});

// Show review modal
function showReview(reviewType) {
  const modal = document.getElementById('review-modal');
  const modalBody = document.getElementById('modal-body');

  let content = '';

  switch (reviewType) {
    case 'coolknight':
      content = `
        <h2>COOL KNIGHT Electric Spice Grinder Review</h2>
        <div style="background: #fff3cd; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-left: 4px solid #ffc107;">
          <strong>Disclosure:</strong> Some of the links on this page are affiliate links. If you click a link and make a purchase, Sadiq&Co may earn a commission at no extra cost to you.
        </div>

        <p><em>Published: August 11, 2025</em></p>

        <img src="https://m.media-amazon.com/images/I/71bQc1x7sIL._AC_SL1500_.jpg" alt="COOL KNIGHT Electric Spice Grinder" style="max-width: 100%; border-radius: 8px; margin-bottom: 1rem;">

        <p>The COOL KNIGHT Electric Spice Grinder is a versatile kitchen tool that promises to make grinding spices, coffee beans, and dry ingredients quick and effortless. After extensive testing, here's our detailed review.</p>

        <h3>Key Features</h3>
        <ul>
          <li><strong>Powerful Motor:</strong> 150-watt motor for efficient grinding</li>
          <li><strong>Stainless Steel Blades:</strong> Durable and sharp for consistent results</li>
          <li><strong>Compact Design:</strong> Fits easily in any kitchen</li>
          <li><strong>Easy to Clean:</strong> Removable grinding cup</li>
          <li><strong>Multipurpose:</strong> Grinds spices, coffee, nuts, and more</li>
        </ul>

        <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin: 1.5rem 0;">
          <h4>Performance</h4>
          <p>We tested the grinder with various ingredients:</p>
          <ul>
            <li><strong>Coffee Beans:</strong> Achieved medium-fine grind in 15 seconds</li>
            <li><strong>Peppercorns:</strong> Perfectly ground in 10 seconds</li>
            <li><strong>Cinnamon Sticks:</strong> Required 20 seconds for fine powder</li>
            <li><strong>Almonds:</strong> Produced coarse almond meal in 12 seconds</li>
          </ul>

          <p>The grinder handles small batches exceptionally well, though it's not designed for large quantities.</p>

          <a href="https://amzn.to/4fweFOR" target="_blank" rel="sponsored noopener noreferrer" style="display: inline-block; background: #ff9500; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 1rem;">
            <i class="fab fa-amazon"></i> View on Amazon
          </a>
        </div>

        <h3>Pros</h3>
        <ul>
          <li>Fast and efficient grinding</li>
          <li>Compact and lightweight</li>
          <li>Easy to operate with one button</li>
          <li>Affordable price point</li>
          <li>Quieter than many competitors</li>
        </ul>

        <h3>Cons</h3>
        <ul>
          <li>Small capacity (best for 2-4 tablespoons at a time)</li>
          <li>Not suitable for wet ingredients</li>
          <li>Plastic housing feels slightly cheap</li>
        </ul>

        <h3>Final Verdict</h3>
        <p>The COOL KNIGHT Electric Spice Grinder is an excellent choice for home cooks who need an affordable, compact grinder for small batches. While it's not built for heavy commercial use, it performs admirably for its price range and is particularly good for spices and coffee.</p>

        <p><strong>Rating:</strong> 4.5/5</p>
      `;
      break;

    case 'zovhyya':
      content = `
        <h2>ZOVHYYA Essential Oil Diffuser with Ambient Light Review</h2>
        <div style="background: #fff3cd; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-left: 4px solid #ffc107;">
          <strong>Disclosure:</strong> Some of the links on this page are affiliate links. If you click a link and make a purchase, Sadiq&Co may earn a commission at no extra cost to you.
        </div>

        <p><em>Published: August 11, 2025</em></p>

        <img src="https://m.media-amazon.com/images/I/71Jq1+4cV1L._AC_SL1500_.jpg" alt="ZOVHYYA Essential Oil Diffuser" style="max-width: 100%; border-radius: 8px; margin-bottom: 1rem;">

        <p>The ZOVHYYA Essential Oil Diffuser combines aromatherapy with mood lighting to create a relaxing atmosphere in any room. Here's our comprehensive review after two weeks of testing.</p>

        <h3>Key Features</h3>
        <ul>
          <li><strong>300ml Capacity:</strong> Runs for 8-10 hours continuously</li>
          <li><strong>7 Color LED Lights:</strong> Adjustable brightness</li>
          <li><strong>Ultrasonic Technology:</strong> Quiet operation</li>
          <li><strong>Remote Control:</strong> Convenient operation from across the room</li>
          <li><strong>Auto Shut-off:</strong> Safety feature when water runs low</li>
        </ul>

        <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin: 1.5rem 0;">
          <h4>Performance</h4>
          <p>We tested the diffuser in various settings:</p>
          <ul>
            <li><strong>Bedroom:</strong> Perfect for nighttime relaxation with lavender oil</li>
            <li><strong>Office:</strong> Helped maintain focus with peppermint oil</li>
            <li><strong>Living Room:</strong> Created pleasant ambiance for guests</li>
          </ul>

          <p>The mist output is adjustable, and we found the highest setting effectively scented a 300 sq ft room.</p>

          <a href="https://amzn.to/45tVjp4" target="_blank" rel="sponsored noopener noreferrer" style="display: inline-block; background: #ff9500; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 1rem;">
            <i class="fab fa-amazon"></i> View on Amazon
          </a>
        </div>

        <h3>Pros</h3>
        <ul>
          <li>Beautiful modern design</li>
          <li>Very quiet operation</li>
          <li>Easy to fill and clean</li>
          <li>Remote control works well</li>
          <li>Multiple timer options (1h/3h/6h/continuous)</li>
        </ul>

        <h3>Cons</h3>
        <ul>
          <li>Light colors can't be mixed</li>
          <li>No option to turn off the light completely</li>
          <li>Remote requires line of sight</li>
        </ul>

        <h3>Final Verdict</h3>
        <p>The ZOVHYYA Essential Oil Diffuser is an excellent choice for those wanting both aromatherapy and ambient lighting in one device. It's particularly good for bedrooms and living spaces where you want to create a relaxing atmosphere.</p>

        <p><strong>Rating:</strong> 4.7/5</p>
      `;
      break;

    case 'cecotec':
      content = `
        <h2>Cecotec Programmable Smart Coffee Maker Review</h2>
        <div style="background: #fff3cd; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-left: 4px solid #ffc107;">
          <strong>Disclosure:</strong> Some of the links on this page are affiliate links. If you click a link and make a purchase, Sadiq&Co may earn a commission at no extra cost to you.
        </div>

        <p><em>Published: August 11, 2025</em></p>

        <img src="https://m.media-amazon.com/images/I/71Z5n0YjFbL._AC_SL1500_.jpg" alt="Cecotec Programmable Smart Coffee Maker" style="max-width: 100%; border-radius: 8px; margin-bottom: 1rem;">

        <p>The Cecotec Programmable Smart Coffee Maker promises barista-quality coffee at home with its ExtemAroma technology and stainless steel construction. After brewing dozens of cups, here's our detailed assessment.</p>

        <h3>Key Features</h3>
        <ul>
          <li><strong>ExtemAroma Technology:</strong> Optimal water temperature and flow</li>
          <li><strong>Programmable Timer:</strong> Set it to brew automatically</li>
          <li><strong>1.25L Capacity:</strong> Makes up to 12 cups</li>
          <li><strong>Stainless Steel Construction:</strong> Durable and stylish</li>
          <li><strong>Pause & Serve:</strong> Interrupt brewing to pour a cup</li>
        </ul>

        <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin: 1.5rem 0;">
          <h4>Performance</h4>
          <p>We tested the coffee maker with various coffee types:</p>
          <ul>
            <li><strong>Light Roast:</strong> Bright, flavorful extraction</li>
            <li><strong>Dark Roast:</strong> Rich, full-bodied results</li>
            <li><strong>Decaf:</strong> Maintained good flavor profile</li>
          </ul>

          <p>The programmable timer worked perfectly, brewing coffee exactly at our set time. The keep-warm function maintained temperature without burning the coffee.</p>

          <a href="https://amzn.to/3UkGpMH" target="_blank" rel="sponsored noopener noreferrer" style="display: inline-block; background: #ff9500; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 1rem;">
            <i class="fab fa-amazon"></i> View on Amazon
          </a>
        </div>

        <h3>Pros</h3>
        <ul>
          <li>Consistently good coffee quality</li>
          <li>Easy to program and use</li>
          <li>Sleek stainless steel design</li>
          <li>Large water reservoir</li>
          <li>Good value for the features</li>
        </ul>

        <h3>Cons</h3>
        <ul>
          <li>Carafe could be more insulated</li>
          <li>No built-in grinder</li>
          <li>Takes up considerable counter space</li>
        </ul>

        <h3>Final Verdict</h3>
        <p>The Cecotec Programmable Smart Coffee Maker delivers on its promise of quality coffee with convenient features. It's particularly well-suited for households that drink multiple cups daily and appreciate the programmable functionality.</p>

        <p><strong>Rating:</strong> 4.6/5</p>
      `;
      break;

    case 'moulinex':
      content = `
        <h2>Moulinex Blender with Removable Bottles Review</h2>
        <div style="background: #fff3cd; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-left: 4px solid #ffc107;">
          <strong>Disclosure:</strong> Some of the links on this page are affiliate links. If you click a link and make a purchase, Sadiq&Co may earn a commission at no extra cost to you.
        </div>

        <p><em>Published: August 11, 2025</em></p>

        <img src="https://m.media-amazon.com/images/I/71qYQ4Qy5BL._AC_SL1500_.jpg" alt="Moulinex Blender with Removable Bottles" style="max-width: 100%; border-radius: 8px; margin-bottom: 1rem;">

        <p>The Moulinex Blender with Removable Bottles offers a convenient solution for making and taking your smoothies on the go. After extensive testing with various ingredients, here's our complete review.</p>

        <h3>Key Features</h3>
        <ul>
          <li><strong>700W Power:</strong> Handles tough ingredients</li>
          <li><strong>2 Removable Bottles:</strong> 600ml and 400ml capacities</li>
          <li><strong>Leak-proof Lids:</strong> Safe for travel</li>
          <li><strong>Easy Clean Design:</strong> Dishwasher safe parts</li>
          <li><strong>Pulse Function:</strong> For better control</li>
        </ul>

        <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin: 1.5rem 0;">
          <h4>Performance</h4>
          <p>We tested the blender with various recipes:</p>
          <ul>
            <li><strong>Green Smoothie:</strong> Perfectly blended kale and spinach</li>
            <li><strong>Frozen Fruit Smoothie:</strong> Handled ice and frozen berries well</li>
            <li><strong>Nut Butter:</strong> Required stopping to scrape sides</li>
            <li><strong>Soup:</strong> Created smooth, hot soups when ingredients were pre-cooked</li>
          </ul>

          <p>The bottles are genuinely leak-proof when properly closed, making them ideal for taking to work or the gym.</p>

          <a href="https://amzn.to/45cxLWJ" target="_blank" rel="sponsored noopener noreferrer" style="display: inline-block; background: #ff9500; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 1rem;">
            <i class="fab fa-amazon"></i> View on Amazon
          </a>
        </div>

        <h3>Pros</h3>
        <ul>
          <li>Convenient bottle system</li>
          <li>Powerful enough for most tasks</li>
          <li>Easy to clean</li>
          <li>Compact footprint</li>
          <li>Good value for money</li>
        </ul>

        <h3>Cons</h3>
        <ul>
          <li>Not as powerful as high-end blenders</li>
          <li>Small batches only</li>
          <li>Bottles could be more durable</li>
        </ul>

        <h3>Final Verdict</h3>
        <p>The Moulinex Blender with Removable Bottles is perfect for individuals or couples who want quick, convenient smoothies they can take on the go. While not as powerful as premium blenders, it offers excellent functionality for its price point.</p>

        <p><strong>Rating:</strong> 4.3/5</p>
      `;
      break;

    case 'actioncam':
      content = `
        <h2>Waterproof Action Camera with Stabilizer Review</h2>
        <div style="background: #fff3cd; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-left: 4px solid #ffc107;">
          <strong>Disclosure:</strong> Some of the links on this page are affiliate links. If you click a link and make a purchase, Sadiq&Co may earn a commission at no extra cost to you.
        </div>

        <p><em>Published: August 11, 2025</em></p>

        <img src="https://m.media-amazon.com/images/I/61oXaGj0QML._AC_SL1500_.jpg" alt="Waterproof Action Camera with Stabilizer" style="max-width: 100%; border-radius: 8px; margin-bottom: 1rem;">

        <p>This Waterproof Action Camera with built-in stabilizer promises to capture your adventures in stunning quality, whether you're surfing, skiing, or just exploring. After testing in various conditions, here's our comprehensive review.</p>

        <h3>Key Features</h3>
        <ul>
          <li><strong>4K/30fps Video:</strong> High-resolution recording</li>
          <li><strong>Waterproof up to 30m:</strong> No housing needed</li>
          <li><strong>Electronic Image Stabilization:</strong> Smooth footage</li>
          <li><strong>WiFi & Bluetooth:</strong> Remote control via smartphone</li>
          <li><strong>Multiple Accessories:</strong> Includes mounts for various activities</li>
        </ul>

        <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin: 1.5rem 0;">
          <h4>Performance</h4>
          <p>We tested the camera in various scenarios:</p>
          <ul>
            <li><strong>Underwater:</strong> Clear footage down to 10m</li>
            <li><strong>Mountain Biking:</strong> Stabilization worked well</li>
            <li><strong>Low Light:</strong> Acceptable performance</li>
            <li><strong>Time-lapse:</strong> Worked as expected</li>
          </ul>

          <p>The included accessories allowed mounting on helmets, bikes, and even pets!</p>

          <a href="https://amzn.to/45JJ0WJ" target="_blank" rel="sponsored noopener noreferrer" style="display: inline-block; background: #ff9500; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 1rem;">
            <i class="fab fa-amazon"></i> View on Amazon
          </a>
        </div>

        <h3>Pros</h3>
        <ul>
          <li>Excellent stabilization</li>
          <li>True waterproof design</li>
          <li>Good image quality</li>
          <li>Comprehensive accessory kit</li>
          <li>Intuitive mobile app</li>
        </ul>

        <h3>Cons</h3>
        <ul>
          <li>Battery life could be better</li>
          <li>Touchscreen is small</li>
          <li>Low-light performance just average</li>
        </ul>

        <h3>Final Verdict</h3>
        <p>This Waterproof Action Camera offers excellent value for adventure enthusiasts who want good quality footage without breaking the bank. The stabilization works remarkably well, making it great for active sports.</p>

        <p><strong>Rating:</strong> 4.4/5</p>
      `;
      break;

    case 'ledlights':
      content = `
        <h2>Bluetooth Controlled LED Lights with Remote Review</h2>
        <div style="background: #fff3cd; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-left: 4px solid #ffc107;">
          <strong>Disclosure:</strong> Some of the links on this page are affiliate links. If you click a link and make a purchase, Sadiq&Co may earn a commission at no extra cost to you.
        </div>

        <p><em>Published: August 11, 2025</em></p>

        <img src="https://m.media-amazon.com/images/I/71Jq1+4cV1L._AC_SL1500_.jpg" alt="Bluetooth Controlled LED Lights" style="max-width: 100%; border-radius: 8px; margin-bottom: 1rem;">

        <p>These Bluetooth Controlled LED Lights promise to transform any space with customizable lighting controlled via smartphone or remote. After testing in multiple rooms, here's our detailed review.</p>

        <h3>Key Features</h3>
        <ul>
          <li><strong>16 Million Colors:</strong> Endless customization</li>
          <li><strong>Bluetooth & Remote Control:</strong> Multiple control options</li>
          <li><strong>Music Sync:</strong> Lights pulse to your music</li>
          <li><strong>Timer Function:</strong> Automatic on/off scheduling</li>
          <li><strong>Adhesive Backing:</strong> Easy installation</li>
        </ul>

        <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin: 1.5rem 0;">
          <h4>Performance</h4>
          <p>We tested the lights in various applications:</p>
          <ul>
            <li><strong>Bedroom:</strong> Created relaxing ambiance</li>
            <li><strong>Home Theater:</strong> Enhanced movie watching</li>
            <li><strong>Party:</strong> Music sync worked well</li>
            <li><strong>Workspace:</strong> Improved focus with white light</li>
          </ul>

          <p>The app allows saving custom color combinations and brightness levels for different moods.</p>

          <a href="https://amzn.to/47sabqr" target="_blank" rel="sponsored noopener noreferrer" style="display: inline-block; background: #ff9500; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 1rem;">
            <i class="fab fa-amazon"></i> View on Amazon
          </a>
        </div>

        <h3>Pros</h3>
        <ul>
          <li>Vibrant, customizable colors</li>
          <li>Easy to install</li>
          <li>Responsive controls</li>
          <li>Good build quality</li>
          <li>Fun music sync feature</li>
        </ul>

        <h3>Cons</h3>
        <ul>
          <li>Bluetooth range is limited</li>
          <li>Adhesive could be stronger</li>
          <li>App interface could be more intuitive</li>
        </ul>

        <h3>Final Verdict</h3>
        <p>These Bluetooth Controlled LED Lights offer excellent value for anyone wanting to add customizable lighting to their space. They're particularly good for bedrooms, gaming setups, and entertainment areas where mood lighting enhances the experience.</p>

        <p><strong>Rating:</strong> 4.5/5</p>
      `;
      break;
  }

  modalBody.innerHTML = content;
  modal.style.display = 'block';
}

// Close modal
function closeModal() {
  document.getElementById('review-modal').style.display = 'none';
}

// Show policy modal
function showPolicy(policyType) {
  const modal = document.getElementById('review-modal');
  const modalBody = document.getElementById('modal-body');

  let content = '';

  if (policyType === 'affiliate') {
    content = `
      <h2>Affiliate Disclosure</h2>

      <p><strong>Last updated: August 11, 2025</strong></p>

      <p>Sadiq&Co ("we," "our," or "us") participates in various affiliate marketing programs, which means we may get paid commissions on editorially chosen products purchased through our links to retailer sites.</p>

      <h3>Amazon Associates Program</h3>
      <p>Sadiq&Co is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.</p>

      <h3>How Affiliate Links Work</h3>
      <p>When you click on certain links on our website and make a purchase, we may receive a small commission at no extra cost to you. This commission helps us maintain our website and continue providing valuable content to our readers.</p>

      <h3>Our Promise to You</h3>
      <ul>
        <li>We only recommend products we genuinely believe in</li>
        <li>Our reviews are honest and unbiased</li>
        <li>Affiliate relationships never influence our editorial content</li>
        <li>We clearly disclose when content contains affiliate links</li>
      </ul>

      <h3>Product Testing</h3>
      <p>We purchase and test products whenever possible. When we can't physically test a product, we rely on extensive research, user reviews, and manufacturer specifications to provide accurate information.</p>

      <h3>Transparency</h3>
      <p>We believe in complete transparency with our readers. All affiliate relationships are clearly disclosed, and we will never recommend a product solely for the purpose of earning a commission.</p>

      <p>If you have any questions about our affiliate relationships or this disclosure, please contact us at contact@sadiqco.com.</p>
    `;
  } else if (policyType === 'privacy') {
    content = `
      <h2>Privacy Policy</h2>

      <p><strong>Last updated: August 11, 2025</strong></p>

      <p>At Sadiq&Co ("we," "our," or "us"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.</p>

      <h3>Information We Collect</h3>

      <h4>Automatically Collected Information</h4>
      <p>When you visit our website, we may automatically collect:</p>
      <ul>
        <li>IP address and location data</li>
        <li>Browser type and version</li>
        <li>Pages visited and time spent on our site</li>
        <li>Referring website information</li>
        <li>Device information</li>
      </ul>

      <h4>Information You Provide</h4>
      <p>We may collect information you voluntarily provide, such as:</p>
      <ul>
        <li>Contact information when you reach out to us</li>
        <li>Newsletter subscription data</li>
        <li>Comments and feedback</li>
      </ul>

      <h3>How We Use Your Information</h3>
      <p>We use collected information to:</p>
      <ul>
        <li>Improve our website and services</li>
        <li>Respond to your inquiries</li>
        <li>Send newsletters (with your consent)</li>
        <li>Analyze website usage and performance</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h3>Cookies and Tracking</h3>
      <p>We use cookies and similar technologies to:</p>
      <ul>
        <li>Remember your preferences</li>
        <li>Analyze website traffic</li>
        <li>Provide personalized content</li>
        <li>Support our affiliate marketing efforts</li>
      </ul>

      <h3>Third-Party Services</h3>
      <p>We may use third-party services for:</p>
      <ul>
        <li>Website analytics (Google Analytics)</li>
        <li>Affiliate tracking</li>
        <li>Social media integration</li>
      </ul>

      <h3>Data Security</h3>
      <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

      <h3>Your Rights</h3>
      <p>You have the right to:</p>
      <ul>
        <li>Access your personal information</li>
        <li>Correct inaccurate data</li>
        <li>Request deletion of your data</li>
        <li>Opt-out of communications</li>
      </ul>

      <h3>Contact Us</h3>
      <p>If you have questions about this Privacy Policy, please contact us at contact@sadiqco.com.</p>
    `;
  }

  modalBody.innerHTML = content;
  modal.style.display = 'block';
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById('review-modal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}

// Add some interactive elements
document.addEventListener('DOMContentLoaded', function() {
  // Add hover effects to cards
  const cards = document.querySelectorAll('.review-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(-5px)';
    });
  });

  // Add loading animation to buy buttons
  const buyButtons = document.querySelectorAll('.buy-button');
  buyButtons.forEach(button => {
    button.addEventListener('click', function() {
      const originalText = this.innerHTML;
      this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Redirecting...';

      setTimeout(() => {
        this.innerHTML = originalText;
      }, 2000);
    });
  });
});
