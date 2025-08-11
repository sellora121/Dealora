
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
    anchor.addEventListener('click', function (e) {
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
  
  switch(reviewType) {
    case 'coffee':
      content = `
        <h2>Best Coffee Grinders for Home Brewing</h2>
        <div style="background: #fff3cd; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-left: 4px solid #ffc107;">
          <strong>Disclosure:</strong> Some of the links on this page are affiliate links. If you click a link and make a purchase, DealOra may earn a commission at no extra cost to you.
        </div>
        
        <p><em>Published: December 20, 2023</em></p>
        
        <p>Finding the perfect coffee grinder can transform your daily brew from ordinary to extraordinary. After testing over 15 different models, we've identified the best options for every budget and brewing method.</p>
        
        <h3>Our Top Pick: Baratza Encore</h3>
        <p>The Baratza Encore consistently delivers uniform grounds and offers excellent value for money. Its 40mm conical burrs produce consistent results for everything from drip coffee to French press.</p>
        
        <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin: 1.5rem 0;">
          <h4>Key Features:</h4>
          <ul>
            <li>40mm conical burr set</li>
            <li>40 grind settings</li>
            <li>Easy to clean and maintain</li>
            <li>Excellent customer support</li>
          </ul>
          
          <a href="https://www.amazon.com/dp/B000T9SCZ2?tag=dealora-20" target="_blank" rel="sponsored noopener noreferrer" style="display: inline-block; background: #ff9500; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 1rem;">
            <i class="fab fa-amazon"></i> Check Price on Amazon
          </a>
        </div>
        
        <h3>Budget Option: Krups GX5000</h3>
        <p>For those just starting their coffee journey, the Krups GX5000 offers surprising quality at an affordable price point.</p>
        
        <h3>Premium Choice: Baratza Vario-W</h3>
        <p>Professional-grade grinding with digital timer and precision dosing makes this perfect for serious coffee enthusiasts.</p>
        
        <h3>Testing Methodology</h3>
        <p>Each grinder was tested for:</p>
        <ul>
          <li>Grind consistency across different settings</li>
          <li>Speed and efficiency</li>
          <li>Noise levels</li>
          <li>Ease of cleaning</li>
          <li>Durability over extended use</li>
        </ul>
        
        <p>Whether you're brewing pour-over, espresso, or French press, the right grinder makes all the difference. Our testing shows that investing in quality burr grinders significantly improves coffee flavor and consistency.</p>
      `;
      break;
      
    case 'camping':
      content = `
        <h2>Top 7 Camping Stoves Under $100</h2>
        <div style="background: #fff3cd; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-left: 4px solid #ffc107;">
          <strong>Disclosure:</strong> Some of the links on this page are affiliate links. If you click a link and make a purchase, DealOra may earn a commission at no extra cost to you.
        </div>
        
        <p><em>Published: December 18, 2023</em></p>
        
        <p>A reliable camping stove is essential for any outdoor adventure. We've tested dozens of portable stoves to find the best options that won't break your budget.</p>
        
        <h3>1. MSR PocketRocket 2</h3>
        <p>Ultralight and efficient, the PocketRocket 2 is perfect for backpacking. Boils water in just 3.5 minutes.</p>
        
        <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin: 1.5rem 0;">
          <h4>Specs:</h4>
          <ul>
            <li>Weight: 2.6 oz</li>
            <li>Boil Time: 3.5 minutes</li>
            <li>Fuel: Isobutane-propane canister</li>
            <li>Wind resistant design</li>
          </ul>
          
          <a href="https://www.amazon.com/dp/B00ENDRORM?tag=dealora-20" target="_blank" rel="sponsored noopener noreferrer" style="display: inline-block; background: #ff9500; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 1rem;">
            <i class="fab fa-amazon"></i> Check Price on Amazon
          </a>
        </div>
        
        <h3>2. Coleman Classic Propane Stove</h3>
        <p>Perfect for car camping with two adjustable burners and excellent wind protection.</p>
        
        <h3>3. Jetboil Flash</h3>
        <p>Integrated cooking system that excels at boiling water quickly and efficiently.</p>
        
        <h3>4. Snow Peak LiteMax</h3>
        <p>Minimal weight with maximum performance for ultralight backpacking.</p>
        
        <h3>5. Primus Classic Trail</h3>
        <p>Robust construction with excellent flame control for precise cooking.</p>
        
        <h3>6. BRS-3000T</h3>
        <p>Incredibly lightweight titanium construction at an unbeatable price.</p>
        
        <h3>7. Etekcity Ultralight</h3>
        <p>Budget-friendly option that doesn't compromise on performance.</p>
        
        <h3>What to Consider</h3>
        <ul>
          <li><strong>Weight:</strong> Critical for backpacking trips</li>
          <li><strong>Fuel Type:</strong> Canister vs. liquid fuel</li>
          <li><strong>Cooking Style:</strong> Just boiling water vs. actual cooking</li>
          <li><strong>Wind Resistance:</strong> Important for exposed campsites</li>
          <li><strong>Stability:</strong> Larger pots need more stable stoves</li>
        </ul>
        
        <p>Each of these stoves has been tested in real camping conditions to ensure they meet our standards for reliability, efficiency, and value.</p>
      `;
      break;
      
    case 'blender':
      content = `
        <h2>How to Choose a Blender for Smoothies</h2>
        <div style="background: #fff3cd; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-left: 4px solid #ffc107;">
          <strong>Disclosure:</strong> Some of the links on this page are affiliate links. If you click a link and make a purchase, DealOra may earn a commission at no extra cost to you.
        </div>
        
        <p><em>Published: December 15, 2023</em></p>
        
        <p>Not all blenders are created equal when it comes to making perfect smoothies. Here's everything you need to know to choose the right one for your needs.</p>
        
        <h3>Key Features for Smoothie Blenders</h3>
        
        <h4>1. Motor Power</h4>
        <p>Look for at least 1000 watts for frozen fruit and ice. More power means smoother results and longer lifespan.</p>
        
        <h4>2. Blade Design</h4>
        <p>Multi-level blades create better vortex action, ensuring all ingredients get properly blended.</p>
        
        <h4>3. Container Shape</h4>
        <p>Narrow, tall containers work better for small batches, while wider containers handle larger volumes.</p>
        
        <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin: 1.5rem 0;">
          <h3>Our Top Recommendation: Vitamix 5200</h3>
          <p>Professional-grade performance with a 2-horsepower motor that handles anything you throw at it.</p>
          
          <h4>Why We Love It:</h4>
          <ul>
            <li>Powerful 2HP motor</li>
            <li>Variable speed control</li>
            <li>Self-cleaning</li>
            <li>7-year warranty</li>
            <li>Perfectly smooth results every time</li>
          </ul>
          
          <a href="https://www.amazon.com/dp/B00LBQMMHW?tag=dealora-20" target="_blank" rel="sponsored noopener noreferrer" style="display: inline-block; background: #ff9500; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 1rem;">
            <i class="fab fa-amazon"></i> Check Price on Amazon
          </a>
        </div>
        
        <h3>Budget-Friendly Options</h3>
        
        <h4>NutriBullet Pro 900</h4>
        <p>Compact and powerful, perfect for single-serving smoothies. Great extraction power for the price.</p>
        
        <h4>Oster Versa Pro</h4>
        <p>Excellent value with 1400-watt motor and dual direction blade technology.</p>
        
        <h3>What Ingredients to Test</h3>
        <p>When evaluating blenders, we test with:</p>
        <ul>
          <li>Frozen berries and banana</li>
          <li>Leafy greens (kale, spinach)</li>
          <li>Ice cubes</li>
          <li>Protein powder</li>
          <li>Nuts and seeds</li>
        </ul>
        
        <h3>Common Mistakes to Avoid</h3>
        <ul>
          <li><strong>Choosing based on price alone:</strong> A good blender is an investment</li>
          <li><strong>Ignoring motor power:</strong> Weak motors burn out quickly</li>
          <li><strong>Not considering size:</strong> Make sure it fits your kitchen and needs</li>
          <li><strong>Forgetting about noise:</strong> Some blenders are extremely loud</li>
        </ul>
        
        <h3>Maintenance Tips</h3>
        <p>To keep your blender running smoothly:</p>
        <ul>
          <li>Clean immediately after use</li>
          <li>Use the self-clean function if available</li>
          <li>Don't overload the container</li>
          <li>Add liquid first, then solids</li>
          <li>Replace blades when they become dull</li>
        </ul>
        
        <p>The right blender will make smoothie preparation effortless and enjoyable, turning healthy eating into a daily habit rather than a chore.</p>
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
      
      <p><strong>Last updated: December 20, 2023</strong></p>
      
      <p>DealOra.com ("we," "our," or "us") participates in various affiliate marketing programs, which means we may get paid commissions on editorially chosen products purchased through our links to retailer sites.</p>
      
      <h3>Amazon Associates Program</h3>
      <p>DealOra is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.</p>
      
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
      
      <p>If you have any questions about our affiliate relationships or this disclosure, please contact us at contact@dealora.com.</p>
    `;
  } else if (policyType === 'privacy') {
    content = `
      <h2>Privacy Policy</h2>
      
      <p><strong>Last updated: December 20, 2023</strong></p>
      
      <p>At DealOra ("we," "our," or "us"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.</p>
      
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
      <p>If you have questions about this Privacy Policy, please contact us at contact@dealora.com.</p>
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
