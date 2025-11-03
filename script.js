// Product data
const products = [
    {
        id: 1,
        name: "Student Management System",
        price: 5000,
        category: "web",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Complete student management system with admin panel",
        features: ["Student Registration", "Grade Management", "Attendance Tracking", "Report Generation"]
    },
    {
        id: 2,
        name: "E-commerce Website",
        price: 8000,
        category: "web",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Full-featured e-commerce platform with payment integration",
        features: ["Product Catalog", "Shopping Cart", "Payment Gateway", "Order Management"]
    },
    {
        id: 3,
        name: "Library Management System",
        price: 4500,
        category: "web",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Automated library system for book tracking and management",
        features: ["Book Catalog", "Member Management", "Borrow/Return System", "Fine Calculation"]
    },
    {
        id: 4,
        name: "Hospital Management System",
        price: 7000,
        category: "web",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Comprehensive hospital management solution",
        features: ["Patient Registration", "Appointment Scheduling", "Billing System", "Inventory Management"]
    },
    {
        id: 5,
        name: "Food Delivery App UI",
        price: 3500,
        category: "mobile",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Modern UI design for food delivery application",
        features: ["User-friendly Interface", "Restaurant Listings", "Order Tracking", "Payment Integration"]
    },
    {
        id: 6,
        name: "Fitness Tracker App",
        price: 4000,
        category: "mobile",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Mobile app for fitness tracking and workout plans",
        features: ["Workout Plans", "Progress Tracking", "Calorie Counter", "Social Features"]
    },
    {
        id: 7,
        name: "Business Card Design",
        price: 500,
        category: "design",
        image: "https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Professional business card design",
        features: ["Modern Design", "Print Ready", "Multiple Revisions", "Source Files"]
    },
    {
        id: 8,
        name: "Website Template",
        price: 2000,
        category: "ready",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Responsive website template with clean code",
        features: ["Fully Responsive", "Clean Code", "Easy Customization", "Documentation"]
    }
];

// Service details data
const serviceDetails = {
    'web-development': {
        title: 'Web Development',
        description: 'Complete web development solutions using modern technologies like JSP, Java, Oracle, HTML/CSS, JavaScript, and more.',
        features: [
            'Full-stack web application development',
            'Database design and implementation',
            'Responsive design for all devices',
            'User authentication and authorization',
            'API development and integration',
            'Deployment and hosting support'
        ],
        pricing: [
            { type: 'Basic Website', price: '৳3,000 - ৳5,000' },
            { type: 'Dynamic Web Application', price: '৳5,000 - ৳15,000' },
            { type: 'E-commerce Platform', price: '৳8,000 - ৳25,000' }
        ],
        deliveryTime: '5-15 days depending on complexity',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    'ui-design': {
        title: 'UI/UX Design',
        description: 'Professional UI/UX design services that create engaging and user-friendly interfaces for web and mobile applications.',
        features: [
            'User research and persona development',
            'Wireframing and prototyping',
            'Visual design and branding',
            'Interactive prototypes',
            'Mobile-first responsive design',
            'Design system creation'
        ],
        pricing: [
            { type: 'Basic UI Design', price: '৳1,500 - ৳3,000' },
            { type: 'Complete UI/UX Package', price: '৳3,000 - ৳8,000' },
            { type: 'Brand Identity + UI/UX', price: '৳5,000 - ৳12,000' }
        ],
        deliveryTime: '3-7 days depending on scope',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    'mobile-apps': {
        title: 'Mobile App Development',
        description: 'Native and cross-platform mobile application development for Android and iOS platforms.',
        features: [
            'Native Android (Java/Kotlin) development',
            'Cross-platform (Flutter/React Native) development',
            'UI/UX design for mobile',
            'Backend integration',
            'App store deployment assistance',
            'Post-launch support and maintenance'
        ],
        pricing: [
            { type: 'Basic Mobile App', price: '৳5,000 - ৳10,000' },
            { type: 'Advanced Mobile App', price: '৳10,000 - ৳25,000' },
            { type: 'Enterprise Mobile Solution', price: '৳25,000+' }
        ],
        deliveryTime: '7-20 days depending on features',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    'ready-products': {
        title: 'Ready-to-Sell Products',
        description: 'Pre-built templates, themes, and small tools that you can customize and sell directly to clients.',
        features: [
            'Website templates and themes',
            'Mobile app templates',
            'Small business tools',
            'Documentation and customization guide',
            'Reseller license',
            'Regular updates and support'
        ],
        pricing: [
            { type: 'Website Template', price: '৳1,000 - ৳3,000' },
            { type: 'Mobile App Template', price: '৳2,000 - ৳5,000' },
            { type: 'Business Tool', price: '৳1,500 - ৳4,000' }
        ],
        deliveryTime: 'Instant download after purchase',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Load products
    loadProducts();
    
    // Setup event listeners
    setupEventListeners();
    
    // Initialize modals
    initializeModals();
    
    // Setup form handlers
    setupFormHandlers();
    
    // Add mobile menu button
    addMobileMenuButton();
}

function addMobileMenuButton() {
    const header = document.querySelector('header');
    const nav = header.querySelector('.flex.items-center.justify-between');
    
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
    mobileMenuButton.className = 'md:hidden p-2 text-slate-700 mobile-menu-button';
    mobileMenuButton.addEventListener('click', toggleMobileMenu);
    
    nav.appendChild(mobileMenuButton);
}

function loadProducts() {
    const container = document.getElementById('productsContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    products.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden';
    
    card.innerHTML = `
        <div class="relative overflow-hidden">
            <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover transition-transform duration-300 hover:scale-105">
            <div class="absolute top-2 right-2 bg-indigo-600 text-white text-xs font-medium px-2 py-1 rounded">৳${product.price}</div>
        </div>
        <div class="p-4">
            <h3 class="font-semibold text-lg mb-2">${product.name}</h3>
            <p class="text-slate-600 text-sm mb-3">${product.description}</p>
            <div class="flex justify-between items-center mt-4">
                <button class="view-details-btn text-indigo-600 hover:text-indigo-800 text-sm font-medium transition-colors" data-id="${product.id}">
                    View Details
                </button>
                <button class="order-btn px-3 py-1 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700 transition-colors" data-id="${product.id}">
                    Order Now
                </button>
            </div>
        </div>
    `;
    
    return card;
}

function setupEventListeners() {
    // Quick order button
    const quickOrderBtn = document.getElementById('quickOrderBtn');
    if (quickOrderBtn) {
        quickOrderBtn.addEventListener('click', openOrderModal);
    }
    
    // WhatsApp buttons
    const whatsappBtn = document.getElementById('whatsappBtn');
    const whatsappFloating = document.getElementById('whatsappFloating');
    
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', openWhatsApp);
    }
    
    if (whatsappFloating) {
        whatsappFloating.addEventListener('click', openWhatsApp);
    }
    
    // Sort products
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', sortProducts);
    }
    
    // Close modals when clicking outside
    document.addEventListener('click', function(event) {
        const serviceModal = document.getElementById('serviceModal');
        const customModal = document.getElementById('customModal');
        
        if (serviceModal && event.target === serviceModal) {
            serviceModal.close();
        }
        
        if (customModal && event.target === customModal) {
            closeModal();
        }
    });
}

function initializeModals() {
    // Service modal
    const serviceModal = document.getElementById('serviceModal');
    if (serviceModal) {
        serviceModal.addEventListener('click', function(event) {
            if (event.target === serviceModal) {
                serviceModal.close();
            }
        });
    }
    
    // Custom modal (order modal)
    const customModal = document.getElementById('customModal');
    if (customModal) {
        customModal.addEventListener('click', function(event) {
            if (event.target === customModal) {
                closeModal();
            }
        });
        
        // Populate product options in order form
        const itemSelect = document.getElementById('itemSelect');
        if (itemSelect) {
            // Add service options
            Object.keys(serviceDetails).forEach(key => {
                const option = document.createElement('option');
                option.value = serviceDetails[key].title;
                option.textContent = serviceDetails[key].title + ' (Service)';
                itemSelect.appendChild(option);
            });
            
            // Add product options
            products.forEach(product => {
                const option = document.createElement('option');
                option.value = product.name;
                option.textContent = product.name + ' (Product)';
                option.setAttribute('data-product-id', product.id);
                itemSelect.appendChild(option);
            });
            
            // Add custom option
            const customOption = document.createElement('option');
            customOption.value = 'custom';
            customOption.textContent = 'Custom Project (Describe in details)';
            itemSelect.appendChild(customOption);
            
            // Add event listener for product selection
            itemSelect.addEventListener('change', function() {
                updateSelectedProductInfo(this.value);
            });
        }
    }
    
    // Add event listeners for product order buttons
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('order-btn')) {
            const productId = event.target.getAttribute('data-id');
            openOrderModalWithProduct(productId);
        }
        
        if (event.target.classList.contains('view-details-btn')) {
            const productId = event.target.getAttribute('data-id');
            viewProductDetails(productId);
        }
    });
}

function setupFormHandlers() {
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
    }
    
    // Order form with reCAPTCHA
    const orderForm = document.getElementById('orderForm');
    if (orderForm) {
        orderForm.addEventListener('submit', handleOrderFormSubmit);
    }
}

// ✅ reCAPTCHA for order form
async function handleOrderFormSubmit(e) {
    e.preventDefault();
    
    const status = document.getElementById('status');
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    // reCAPTCHA validation
    const recaptchaResponse = grecaptcha.getResponse();
    if (!recaptchaResponse) {
        status.innerText = "❌ Please complete the reCAPTCHA verification";
        status.style.color = "#ef4444";
        status.classList.remove('hidden');
        return;
    }

    status.innerText = "Sending...";
    status.style.color = "#334155";
    status.classList.remove('hidden');

    // Show loading state
    submitBtn.innerHTML = '<div class="loading-spinner mr-2"></div> Processing...';
    submitBtn.disabled = true;

    const formData = new FormData(orderForm);

    try {
        let response = await fetch(orderForm.action, {
            method: "POST",
            body: formData,
            headers: { "Accept": "application/json" }
        });

        if (response.ok) {
            status.innerText = "✅ Order Submitted Successfully!";
            status.style.color = "#10b981";
            orderForm.reset();
            grecaptcha.reset();
            
            // Show success message and close modal
            setTimeout(() => {
                closeModal();
                status.innerText = "";
                status.classList.add('hidden');
                showToast('Order placed successfully! We will contact you shortly.');
            }, 2000);
        } else {
            status.innerText = "❌ Failed to submit order. Please try again.";
            status.style.color = "#ef4444";
        }
    } catch (error) {
        status.innerText = "❌ Network error. Please check your connection.";
        status.style.color = "#ef4444";
    } finally {
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }
}

function openServiceModal(serviceId) {
    const modal = document.getElementById('serviceModal');
    const content = document.getElementById('serviceModalContent');
    
    if (!modal || !content) return;
    
    const service = serviceDetails[serviceId];
    if (!service) return;
    
    content.innerHTML = `
        <h3 class="text-2xl font-bold mb-4">${service.title}</h3>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
                <img src="${service.image}" alt="${service.title}" class="w-full h-64 object-cover rounded-lg">
            </div>
            <div>
                <p class="text-slate-600 mb-4">${service.description}</p>
                
                <h4 class="font-semibold text-lg mb-2">Key Features:</h4>
                <ul class="list-disc list-inside text-slate-600 mb-4 space-y-1">
                    ${service.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                
                <h4 class="font-semibold text-lg mb-2">Pricing:</h4>
                <ul class="text-slate-600 mb-4 space-y-1">
                    ${service.pricing.map(item => `<li><span class="font-medium">${item.type}:</span> ${item.price}</li>`).join('')}
                </ul>
                
                <div class="bg-slate-50 p-4 rounded-lg">
                    <p class="text-slate-700"><span class="font-medium">Delivery Time:</span> ${service.deliveryTime}</p>
                </div>
                
                <div class="mt-6 flex gap-3">
                    <button onclick="openOrderModalWithService('${service.title}')" class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                        Order This Service
                    </button>
                    <button onclick="closeServiceModal()" class="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
                        Close
                    </button>
                </div>
            </div>
        </div>
    `;
    
    modal.showModal();
}

function closeServiceModal() {
    const modal = document.getElementById('serviceModal');
    if (modal) modal.close();
}

function openModal() {
    const modal = document.getElementById('customModal');
    modal.classList.remove('hidden');
    document.getElementById('status').classList.add('hidden'); // reset error
}

function closeModal() {
    const modal = document.getElementById('customModal');
    modal.classList.add('hidden');
    // Reset reCAPTCHA when closing modal
    if (typeof grecaptcha !== 'undefined') {
        grecaptcha.reset();
    }
}

function openOrderModal() {
    openModal();
}

function openOrderModalWithProduct(productId) {
    const modal = document.getElementById('customModal');
    const itemSelect = document.getElementById('itemSelect');
    
    if (modal && itemSelect) {
        const product = products.find(p => p.id == productId);
        if (product) {
            itemSelect.value = product.name;
            updateSelectedProductInfo(product.name);
        }
        
        openModal();
    }
}

function openOrderModalWithService(serviceName) {
    const modal = document.getElementById('customModal');
    const itemSelect = document.getElementById('itemSelect');
    
    if (modal && itemSelect) {
        itemSelect.value = serviceName;
        updateSelectedProductInfo(serviceName);
        openModal();
    }
    
    // Close service modal
    closeServiceModal();
}

function updateSelectedProductInfo(selectedValue) {
    const productInfo = document.getElementById('selectedProductInfo');
    const productName = document.getElementById('selectedProductName');
    const productPrice = document.getElementById('selectedProductPrice');
    const productImage = document.getElementById('selectedProductImage');
    
    if (!productInfo || !productName || !productPrice || !productImage) return;
    
    // Check if it's a product
    const product = products.find(p => p.name === selectedValue);
    if (product) {
        productName.textContent = product.name;
        productPrice.textContent = `Price: ৳${product.price}`;
        productImage.innerHTML = `<img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">`;
        productInfo.classList.remove('hidden');
        return;
    }
    
    // Check if it's a service
    const serviceKey = Object.keys(serviceDetails).find(key => 
        serviceDetails[key].title === selectedValue
    );
    
    if (serviceKey) {
        const service = serviceDetails[serviceKey];
        productName.textContent = service.title;
        productPrice.textContent = `Starting from ${service.pricing[0].price}`;
        productImage.innerHTML = `<img src="${service.image}" alt="${service.title}" class="w-full h-full object-cover">`;
        productInfo.classList.remove('hidden');
        return;
    }
    
    // Hide if custom or no selection
    productInfo.classList.add('hidden');
}

function viewProductDetails(productId) {
    const product = products.find(p => p.id == productId);
    if (!product) return;
    
    const modal = document.getElementById('serviceModal');
    const content = document.getElementById('serviceModalContent');
    
    if (!modal || !content) return;
    
    content.innerHTML = `
        <h3 class="text-2xl font-bold mb-4">${product.name}</h3>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
                <img src="${product.image}" alt="${product.name}" class="w-full h-64 object-cover rounded-lg">
                <div class="mt-4 bg-slate-50 p-4 rounded-lg">
                    <p class="text-slate-700"><span class="font-medium">Price:</span> ৳${product.price}</p>
                    <p class="text-slate-700 mt-2"><span class="font-medium">Category:</span> ${product.category}</p>
                </div>
            </div>
            <div>
                <p class="text-slate-600 mb-4">${product.description}</p>
                
                <h4 class="font-semibold text-lg mb-2">Features:</h4>
                <ul class="list-disc list-inside text-slate-600 mb-4 space-y-1">
                    ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                
                <div class="mt-6 flex gap-3">
                    <button onclick="openOrderModalWithProduct(${product.id})" class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                        Order This Product
                    </button>
                    <button onclick="closeServiceModal()" class="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
                        Close
                    </button>
                </div>
            </div>
        </div>
    `;
    
    modal.showModal();
}

function sortProducts() {
    const sortSelect = document.getElementById('sortSelect');
    if (!sortSelect) return;
    
    const sortBy = sortSelect.value;
    let sortedProducts = [...products];
    
    switch(sortBy) {
        case 'newest':
            // Keep original order (newest first based on ID)
            break;
        case 'bestselling':
            // Simulate best selling (random for demo)
            sortedProducts.sort(() => Math.random() - 0.5);
            break;
        case 'price-low':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
    }
    
    const container = document.getElementById('productsContainer');
    if (!container) return;
    
    container.innerHTML = '';
    sortedProducts.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
}

function openWhatsApp() {
    const phone = '8801732854793';
    const message = 'Hello, I am interested in your services. Can you provide more information?';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

function handleContactFormSubmit(event) {
    event.preventDefault();
    
    const submitBtn = document.getElementById('submitBtn');
    const originalText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.innerHTML = '<div class="loading-spinner mr-2"></div> Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        // Show success message
        showToast('Message sent successfully! We will contact you soon.');
        
        // Reset form
        document.getElementById('contactForm').reset();
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

function showToast(message) {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
    toast.textContent = message;
    
    // Add to page
    document.body.appendChild(toast);
    
    // Show toast
    setTimeout(() => {
        toast.classList.remove('translate-x-full');
        toast.classList.add('translate-x-0');
    }, 100);
    
    // Hide and remove after delay
    setTimeout(() => {
        toast.classList.remove('translate-x-0');
        toast.classList.add('translate-x-full');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animation for elements
function checkScroll() {
    const elements = document.querySelectorAll('.service-card, .fade-in');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }
    });
}

// Initial check
checkScroll();

// Check on scroll
window.addEventListener('scroll', checkScroll);

// Close modal with ESC key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Ensure reCAPTCHA is properly rendered when modal opens
function ensureRecaptchaRendering() {
    // This function ensures reCAPTCHA is properly rendered
    if (typeof grecaptcha !== 'undefined' && grecaptcha.render) {
        // Find the reCAPTCHA widget and re-render if needed
        const recaptchaElement = document.querySelector('.g-recaptcha');
        if (recaptchaElement && !recaptchaElement.hasAttribute('data-callback')) {
            grecaptcha.render(recaptchaElement, {
                sitekey: '6Ldutv4rAAAAAOV9_-EgukKngBodNashC6XxPfPz'
            });
        }
    }
}

// Call this when modal opens
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to ensure reCAPTCHA renders properly when modal opens
    const modal = document.getElementById('customModal');
    if (modal) {
        // Use MutationObserver to detect when modal becomes visible
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    if (!modal.classList.contains('hidden')) {
                        // Modal is now visible, ensure reCAPTCHA is rendered
                        setTimeout(ensureRecaptchaRendering, 100);
                    }
                }
            });
        });
        
        observer.observe(modal, {
            attributes: true,
            attributeFilter: ['class']
        });
    }
});