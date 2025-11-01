// Products data and functionality
let products = [];
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Load products from JSON
async function loadProducts() {
    try {
        const response = await fetch('products.json');
        products = await response.json();
        displayProducts(products);
        populateOrderDropdown(); // Populate dropdown when products are loaded
    } catch (error) {
        console.error('Error loading products:', error);
        // Fallback products if JSON fails to load
        products = [
            {
                "id": 1,
                "name": "Web Template - Business",
                "description": "Responsive and SEO-friendly business template",
                "price": 1500,
                "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                "category": "template",
                "tags": ["bestseller", "new"]
            },
            {
                "id": 2,
                "name": "UI Kit - Modern Design",
                "description": "Customizable components for modern applications",
                "price": 900,
                "image": "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                "category": "ui-kit",
                "tags": ["new"]
            }
        ];
        displayProducts(products);
        populateOrderDropdown();
    }
}

// Display products in the shop section
function displayProducts(productsToShow) {
    const container = document.getElementById('productsContainer');
    container.innerHTML = '';

    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card bg-white rounded-xl shadow hover:shadow-md transition-all border border-slate-100';
        productCard.innerHTML = `
            <div class="p-4">
                <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover rounded-lg mb-4">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="font-semibold text-lg">${product.name}</h3>
                    ${product.tags && product.tags.includes('bestseller') ? 
                        '<span class="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">Best Seller</span>' : ''}
                </div>
                <p class="text-slate-600 text-sm">${product.description}</p>
                <div class="mt-4 flex items-center justify-between">
                    <span class="text-indigo-600 font-bold">৳${product.price}</span>
                    <button onclick="openOrderModal(${product.id})" class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                        Order Now
                    </button>
                </div>
            </div>
        `;
        container.appendChild(productCard);
    });
}

// Populate order dropdown with products
function populateOrderDropdown() {
    const itemSelect = document.getElementById('itemSelect');
    itemSelect.innerHTML = '<option value="">Select a product...</option>';
    
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name; // Using product name as value
        option.textContent = `${product.name} - ৳${product.price}`;
        itemSelect.appendChild(option);
    });
}

// Open order modal with pre-selected product
function openOrderModal(productId = null) {
    const modal = document.getElementById('details_5');
    const itemSelect = document.getElementById('itemSelect');
    
    if (productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            itemSelect.value = product.name; // Set value using product name
            updateSelectedProductInfo(product.name);
        }
    } else {
        document.getElementById('selectedProductInfo').classList.add('hidden');
        document.getElementById('orderTotal').textContent = '৳0';
    }
    
    modal.showModal();
}

// Update product info when selection changes
function setupOrderModal() {
    const itemSelect = document.getElementById('itemSelect');
    const orderForm = document.getElementById('orderForm');
    
    itemSelect.addEventListener('change', function() {
        const productId = this.value;
        if (productId) {
            updateSelectedProductInfo(productId);
        } else {
            document.getElementById('selectedProductInfo').classList.add('hidden');
            document.getElementById('orderTotal').textContent = '৳0';
        }
    });
    
    // orderForm.addEventListener('submit', function(e) {
    //     e.preventDefault();
    //     submitOrder();
    // });
}

// Update selected product information
function updateSelectedProductInfo(productName) {
    const product = products.find(p => p.name === productName);
    if (!product) return;
    
    const productInfo = document.getElementById('selectedProductInfo');
    const productImage = document.getElementById('selectedProductImage');
    const productNameElement = document.getElementById('selectedProductName');
    const productDescription = document.getElementById('selectedProductDescription');
    const productPrice = document.getElementById('selectedProductPrice');
    const orderTotal = document.getElementById('orderTotal');
    
    productImage.src = product.image;
    productImage.alt = product.name;
    productNameElement.textContent = product.name;
    productDescription.textContent = product.description;
    productPrice.textContent = `৳${product.price}`;
    orderTotal.textContent = `৳${product.price}`;
    
    productInfo.classList.remove('hidden');
}

// Submit order function
function submitOrder() {
    const productName = document.getElementById('itemSelect').value; // Get product name
    const name = document.getElementById('orderName').value;
    const phone = document.getElementById('orderPhone').value;
    const requirements = document.getElementById('orderRequirements').value;
    
    if (!productName || !name || !phone) {
        alert('Please fill in all required fields');
        return;
    }
    
    const product = products.find(p => p.name === productName); // Find by name
    
    // Simulate order submission
    const orderData = {
        product: product.name,
        price: product.price,
        customer: name,
        phone: phone,
        requirements: requirements,
        timestamp: new Date().toISOString()
    };
    
    console.log('Order submitted:', orderData);
    
    // Show success message
    alert(`Order placed successfully!\n\nProduct: ${product.name}\nTotal: ৳${product.price}\nWe will contact you at ${phone} shortly.`);
    
    // Close modal and reset form
    document.getElementById('details_5').close();
    document.getElementById('orderForm').reset();
    document.getElementById('selectedProductInfo').classList.add('hidden');
}

// Sort products
function setupSorting() {
    const sortSelect = document.getElementById('sortSelect');
    sortSelect.addEventListener('change', function() {
        let sortedProducts = [...products];
        
        switch(this.value) {
            case 'newest':
                sortedProducts.sort((a, b) => b.id - a.id);
                break;
            case 'bestselling':
                sortedProducts.sort((a, b) => {
                    const aBestseller = a.tags && a.tags.includes('bestseller');
                    const bBestseller = b.tags && b.tags.includes('bestseller');
                    return bBestseller - aBestseller;
                });
                break;
            case 'price-low':
                sortedProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                sortedProducts.sort((a, b) => b.price - a.price);
                break;
        }
        
        displayProducts(sortedProducts);
    });
}

// Cart functionality
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    showNotification(`${product.name} added to cart!`);
    updateCartCount();
}

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) {
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'cart-notification bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Contact form handling
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<div class="loading-spinner"></div> Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
        submitBtn.classList.remove('bg-indigo-600');
        submitBtn.classList.add('bg-green-600');
        
        setTimeout(() => {
            contactForm.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.classList.remove('bg-green-600');
            submitBtn.classList.add('bg-indigo-600');
            submitBtn.disabled = false;
        }, 3000);
    });
}

// Mobile menu functionality
function setupMobileMenu() {
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
    mobileMenuButton.className = 'md:hidden p-2 text-slate-700';
    
    const header = document.querySelector('header');
    const nav = header.querySelector('.flex.items-center.justify-between');
    nav.appendChild(mobileMenuButton);
    
    const mobileMenu = document.getElementById('mobileMenu');
    
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Close mobile menu when clicking on links
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
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
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    setupSorting();
    setupContactForm();
    setupMobileMenu();
    setupSmoothScrolling();
    setupOrderModal(); // Initialize order modal
    updateCartCount();
    
    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all service cards and product cards
    document.querySelectorAll('.service-card, .product-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Contact Us button functionality
document.getElementById('cartBtn').addEventListener('click', function() {
    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth'
    });
});


// <!-- ✅ Google reCAPTCHA -->
const form = document.getElementById("orderForm");
  const status = document.getElementById("status");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    status.innerText = "Sending...";

    const formData = new FormData(form);

    let response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { "Accept": "application/json" }
    });

    if (response.ok) {
      status.innerText = "✅ Message Sent Successfully!";
      form.reset();
      grecaptcha.reset();
    } else {
      status.innerText = "❌ Failed! Check reCAPTCHA or try again.";
    }
  });