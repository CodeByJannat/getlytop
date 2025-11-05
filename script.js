// Product data
const products = [
    {
        id: 1,
        name: "Student Management System",
        price: 5000,
        category: "web",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Complete student management system with admin panel",
        features: ["Student Registration", "Grade Management", "Attendance Tracking", "Report Generation"],
        tags: ["bestselling"]
    },
    {
        id: 2,
        name: "E-commerce Website",
        price: 8000,
        category: "web",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Full-featured e-commerce platform with payment integration",
        features: ["Product Catalog", "Shopping Cart", "Payment Gateway", "Order Management"],
        tags: ["new"]
    },
    {
        id: 3,
        name: "Library Management System",
        price: 4500,
        category: "web",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Automated library system for book tracking and management",
        features: ["Book Catalog", "Member Management", "Borrow/Return System", "Fine Calculation"],
        tags: ["popular"]
    },
    {
        id: 4,
        name: "Hospital Management System",
        price: 7000,
        category: "web",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Comprehensive hospital management solution",
        features: ["Patient Registration", "Appointment Scheduling", "Billing System", "Inventory Management"],
        tags: ["bestselling"]
    },
    {
        id: 5,
        name: "Food Delivery App UI",
        price: 3500,
        category: "mobile",
        image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Modern UI design for food delivery application",
        features: ["User-friendly Interface", "Restaurant Listings", "Order Tracking", "Payment Integration"],
        tags: ["new"]
    },
    {
        id: 6,
        name: "Fitness Tracker App",
        price: 4000,
        category: "mobile",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Mobile app for fitness tracking and workout plans",
        features: ["Workout Plans", "Progress Tracking", "Calorie Counter", "Social Features"],
        tags: ["popular"]
    },
    {
        id: 7,
        name: "Business Card Design",
        price: 500,
        category: "design",
        image: "https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Professional business card design with modern layouts and print-ready files",
        features: ["Modern Design", "Print Ready", "Multiple Revisions", "Source Files", "High Resolution", "Vector Format"],
        tags: ["new"]
    },
    {
        id: 8,
        name: "Website Template",
        price: 2000,
        category: "ready",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Responsive website template with clean code",
        features: ["Fully Responsive", "Clean Code", "Easy Customization", "Documentation"],
        tags: ["bestselling"]
    }
];

// Feature details data
const featureDetails = {
    'guarantee': {
        title: 'Guarantee & Support',
        icon: 'fas fa-shield-alt',
        color: 'green',
        description: 'আমরা আপনার প্রজেক্টের জন্য ৩ মাসের সম্পূর্ণ গ্যারান্টি প্রদান করি।',
        details: [
            '৩ মাসের সম্পূর্ণ সাপোর্ট - কোনো সমস্যা হলে আমরা সমাধান করব',
            'বাগ ফিক্সিং - প্রজেক্টে কোনো সমস্যা থাকলে বিনামূল্যে ঠিক করব',
            'কোড ক্লিয়ারিফিকেশন - কোড বুঝতে সমস্যা হলে সহায়তা করব',
            'রিভিশন সাপোর্ট - ছোটখাটো পরিবর্তনের জন্য বিনামূল্যে রিভিশন',
            'ডকুমেন্টেশন সাপোর্ট - প্রজেক্ট বুঝতে সাহায্য করব',
            'Viva প্রিপারেশন - প্রজেক্ট ডিফেন্সের জন্য গাইডলাইন'
        ],
        benefits: [
            'নিশ্চিন্তে প্রজেক্ট জমা দিতে পারবেন',
            'যেকোনো সময় সাহায্য পাবেন',
            'প্রজেক্টের মান বজায় থাকবে',
            'সময়মতো সমাধান পাওয়া যাবে'
        ]
    },
    'customization': {
        title: 'Customization',
        icon: 'fas fa-palette',
        color: 'blue',
        description: 'আপনার চাহিদা অনুযায়ী সম্পূর্ণ কাস্টমাইজড প্রজেক্ট তৈরি করি।',
        details: [
            'ব্যক্তিগত চাহিদা অনুযায়ী ডিজাইন - আপনার পছন্দের মতো UI/UX',
            'Feature Customization - আপনার প্রয়োজনীয় ফিচার যোগ করা',
            'Color Scheme - আপনার পছন্দের রঙে প্রজেক্ট তৈরি',
            'Logo & Branding - আপনার ব্র্যান্ডিং অনুযায়ী',
            'Database Design - আপনার প্রয়োজন অনুযায়ী ডেটাবেস',
            'Functionality - আপনার চাহিদা অনুযায়ী ফাংশনালিটি'
        ],
        benefits: [
            'আপনার চাহিদা অনুযায়ী প্রজেক্ট',
            'ইউনিক এবং পার্সোনালাইজড',
            'আপনার ব্র্যান্ডের সাথে মিল',
            'সব প্রয়োজনীয় ফিচার থাকবে'
        ]
    },
    'fast-delivery': {
        title: 'Fast Delivery',
        icon: 'fas fa-shipping-fast',
        color: 'purple',
        description: 'সময়মতো প্রজেক্ট ডেলিভারি নিশ্চিত করি - কোনো কমপ্রমাইজ নেই।',
        details: [
            'সময়মতো ডেলিভারি - নির্ধারিত সময়ে প্রজেক্ট পাবেন',
            'Urgent Delivery - জরুরি প্রজেক্টের জন্য দ্রুত ডেলিভারি',
            'Progress Updates - নিয়মিত আপডেট পাবেন',
            'Quality Assurance - দ্রুততার সাথে মান বজায় রাখি',
            'Multiple Revision Support - দ্রুত রিভিশন সম্পন্ন',
            'Timeline Management - সময়সীমা অনুযায়ী কাজ'
        ],
        benefits: [
            'সময়মতো প্রজেক্ট পাবেন',
            'জরুরি প্রজেক্টের জন্য দ্রুত সার্ভিস',
            'নিয়মিত আপডেট',
            'মানের সাথে দ্রুততা'
        ]
    }
};

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

// Reviews data storage (in real app, this would be from backend)
let reviews = [
    {
        id: 1,
        name: "Sobnom Sraboni",
        projectType: "Hospital Management System",
        rating: 5,
        review: "অসাধারণ কাজ! Hospital Management System প্রজেক্টটি সম্পূর্ণ পেশাদার মানের ছিল। UI/UX ডিজাইন খুব সুন্দর এবং ব্যবহারকারী-বান্ধব। ডাটাবেজ ডিজাইন নিখুঁত ছিল এবং সব ফাংশনালিটি সঠিকভাবে কাজ করছে। ডকুমেন্টেশন খুব বিস্তারিত ছিল যার ফলে ভাইভা তে কোনো সমস্যা হয়নি। সাপোর্ট টিম খুব দ্রুত সাড়া দিয়েছে এবং সব সময় সাহায্য করেছে। Getly Project Shop এর সাথে কাজ করা আমার জন্য একটি দুর্দান্ত অভিজ্ঞতা ছিল। অত্যন্ত সুপারিশকৃত!",
        date: "2025-01-20"
    },
    {
        id: 2,
        name: "Rafid Ahmed",
        projectType: "Student Management System",
        rating: 5,
        review: "অসাধারণ কাজ! সময়মতো প্রজেক্ট পেয়েছি এবং কোয়ালিটি খুব ভালো। ভাইভা তে খুব ভালো ফিডব্যাক পেয়েছি। কোড কোয়ালিটি চমৎকার এবং ডকুমেন্টেশন খুব পরিষ্কার ছিল।",
        date: "2024-12-15"
    },
    {
        id: 3,
        name: "Sumaiya Islam",
        projectType: "E-commerce Website",
        rating: 5,
        review: "সবচেয়ে ভালো অভিজ্ঞতা ছিল। সাপোর্ট খুব ভালো এবং প্রজেক্ট সম্পূর্ণ পেশাদার। পেমেন্ট গেটওয়ে ইন্টিগ্রেশন নিখুঁত ছিল। খুব সন্তুষ্ট!",
        date: "2025-02-10"
    },
    {
        id: 4,
        name: "Imran Hasan",
        projectType: "Library Management System",
        rating: 4,
        review: "ডিজাইন খুব সুন্দর হয়েছে এবং ডকুমেন্টেশন ভালো ছিল। ডাটাবেজ সঠিকভাবে নরমালাইজ করা ছিল। ভাইভা তে সব প্রশ্নের উত্তর দিতে পারেছি। কিছু ছোটখাটো ফিচার আরও ভালো হতে পারত কিন্তু সামগ্রিকভাবে খুব সন্তুষ্ট!",
        date: "2024-11-28"
    },
    {
        id: 5,
        name: "Tania Haque",
        projectType: "Food Delivery App",
        rating: 5,
        review: "মোবাইল অ্যাপ ডেভেলপমেন্ট এর জন্য Getly Project Shop বেছে নেওয়া আমার সেরা সিদ্ধান্ত ছিল। UI/UX ডিজাইন আধুনিক এবং আকর্ষণীয়। রিয়েল-টাইম ট্র্যাকিং ফিচার নিখুঁতভাবে কাজ করছে। টিম খুব সহায়ক এবং পেশাদার।",
        date: "2025-01-05"
    },
    {
        id: 6,
        name: "Ahmed Hasan",
        projectType: "Online Banking System",
        rating: 4,
        review: "সিকিউরিটি ফিচারগুলো খুব ভালোভাবে বাস্তবায়ন করা ছিল। কোড কোয়ালিটি ভালো এবং ডকুমেন্টেশন বিস্তারিত ছিল। ভাইভা তে অধ্যাপক খুব মুগ্ধ হয়েছেন। কিছু উন্নত ফিচার আরও যোগ করা যেতে পারে কিন্তু সামগ্রিকভাবে সেরা সেবা প্রদানকারী!",
        date: "2024-10-20"
    },
    {
        id: 7,
        name: "Faria Akter",
        projectType: "Hotel Booking System",
        rating: 5,
        review: "ডাটাবেজ ডিজাইন খুব পেশাদার ছিল। UI ডিজাইন আধুনিক এবং রেসপন্সিভ। সব ফিচার সঠিকভাবে কাজ করছে। ডকুমেন্টেশন বিস্তারিত ছিল। সাপোর্ট টিম ২৪/৭ উপলব্ধ ছিল। অত্যন্ত সুপারিশকৃত!",
        date: "2025-02-25"
    },
    {
        id: 8,
        name: "Sakib Rahman",
        projectType: "Inventory Management System",
        rating: 4,
        review: "প্রজেক্টটি সময়মতো ডেলিভারি হয়েছে। কোড স্ট্রাকচার পরিষ্কার এবং রক্ষণাবেক্ষণযোগ্য। ডকুমেন্টেশন ভালো ছিল। ভাইভা প্রস্তুতিতে সাহায্য করেছে। কিছু ছোটখাটো উন্নতি করা যেতে পারে কিন্তু চমৎকার সেবা!",
        date: "2024-09-15"
    },
    {
        id: 9,
        name: "Nusrat Jahan",
        projectType: "School Management System",
        rating: 5,
        review: "সবিস্তার সমাধান পেয়েছি। সব মডিউল সঠিকভাবে ইন্টিগ্রেট করা ছিল। ব্যবহারকারী ইন্টারফেস স্বজ্ঞাত এবং ব্যবহার করা সহজ। রিপোর্ট জেনারেশন ফিচার নিখুঁত। ডকুমেন্টেশন খুব সহায়ক ছিল।",
        date: "2025-03-08"
    },
    {
        id: 10,
        name: "Rashedul Islam",
        projectType: "Pharmacy Management System",
        rating: 5,
        review: "মেডিকেল বিলিং সিস্টেম খুব নির্ভুল ছিল। ইনভেন্টরি ব্যবস্থাপনা নিখুঁত। প্রিন্ট রিপোর্ট ফিচার চমৎকার। কোড কোয়ালিটি এবং ডকুমেন্টেশন দুটোই শীর্ষমানের। ভাইভা তে পূর্ণ নম্বর পেয়েছি। ধন্যবাদ Getly!",
        date: "2024-12-30"
    },
    {
        id: 11,
        name: "Najma Khatun",
        projectType: "Restaurant Management System",
        rating: 4,
        review: "প্রজেক্টটি ভালো হয়েছে। UI ডিজাইন আধুনিক এবং কার্যকারিতা সঠিকভাবে কাজ করছে। ডকুমেন্টেশন পরিষ্কার ছিল। কিছু উন্নত রিপোর্টিং ফিচার আরও যোগ করা যেতে পারে কিন্তু সামগ্রিকভাবে সন্তুষ্ট!",
        date: "2024-08-22"
    },
    {
        id: 12,
        name: "Mahbub Alam",
        projectType: "Car Rental System",
        rating: 5,
        review: "নিখুঁত সেবা! সিস্টেম খুব পেশাদার এবং ব্যবহারকারী-বান্ধব। ডাটাবেজ ডিজাইন চমৎকার। সব ফিচার নিখুঁতভাবে কাজ করছে। ডকুমেন্টেশন খুব বিস্তারিত ছিল। ভাইভা তে চমৎকার ফিডব্যাক পেয়েছি।",
        date: "2025-01-12"
    },
    {
        id: 13,
        name: "Ayesha Khanam",
        projectType: "Online Shopping System",
        rating: 4,
        review: "ওয়েবসাইট ডিজাইন সুন্দর এবং কার্যকরী। সব ফিচার সঠিকভাবে কাজ করছে। ডকুমেন্টেশন যথেষ্ট ভালো ছিল। কিছু ছোটখাটো সমস্যা ছিল কিন্তু দ্রুত সমাধান করা হয়েছে। ভালো সেবা!",
        date: "2024-07-10"
    },
    {
        id: 14,
        name: "Kamrul Hasan",
        projectType: "Booking Management System",
        rating: 5,
        review: "অসাধারণ কাজ! সিস্টেম খুবই ব্যবহারযোগ্য এবং ইন্টারফেস সুন্দর। ডাটাবেজ সঠিকভাবে ডিজাইন করা হয়েছে। সব ফিচার নিখুঁতভাবে কাজ করছে। ভাইভা তে খুব ভালো ফলাফল পেয়েছি।",
        date: "2025-02-18"
    },
    {
        id: 15,
        name: "Rokeya Begum",
        projectType: "Clinic Management System",
        rating: 4,
        review: "প্রজেক্টটি ভালো হয়েছে। মূল ফিচারগুলো সঠিকভাবে কাজ করছে। ডকুমেন্টেশন পরিষ্কার ছিল। কিছু অতিরিক্ত ফিচার আরও যোগ করা যেতে পারে কিন্তু সামগ্রিকভাবে সন্তুষ্ট।",
        date: "2024-06-25"
    },
    {
        id: 16,
        name: "Shahin Ahmed",
        projectType: "Order Management System",
        rating: 5,
        review: "চমৎকার সেবা! প্রজেক্টটি সময়মতো পেয়েছি এবং সব কিছু নিখুঁতভাবে কাজ করছে। কোড কোয়ালিটি এবং ডকুমেন্টেশন দুটোই শীর্ষমানের। ভাইভা তে পূর্ণ নম্বর পেয়েছি।",
        date: "2024-11-10"
    },
    {
        id: 17,
        name: "Nazia Parveen",
        projectType: "Healthcare Management",
        rating: 4,
        review: "সিস্টেমটি ভালো কাজ করছে। ডিজাইন সুন্দর এবং ব্যবহার করা সহজ। কিছু ফিচার আরও উন্নত করা যেতে পারে কিন্তু সামগ্রিকভাবে ভালো সেবা পেয়েছি।",
        date: "2025-01-28"
    },
    {
        id: 18,
        name: "Asif Rahman",
        projectType: "Supply Chain Management",
        rating: 5,
        review: "অত্যন্ত পেশাদার কাজ! সব ফিচার নিখুঁতভাবে কাজ করছে। ডাটাবেজ ডিজাইন এবং কোড কোয়ালিটি দুটোই চমৎকার। ডকুমেন্টেশন খুব বিস্তারিত ছিল। অত্যন্ত সুপারিশকৃত!",
        date: "2024-10-05"
    }
];

let currentRating = 0;

// Star rating functionality
function initStarRating() {
    const starButtons = document.querySelectorAll('.star-btn');
    const ratingValue = document.getElementById('ratingValue');
    const ratingText = document.getElementById('ratingText');
    
    if (!starButtons.length || !ratingValue || !ratingText) return;
    
    starButtons.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            currentRating = rating;
            ratingValue.value = rating;
            
            // Update star colors
            starButtons.forEach((star, i) => {
                if (i < rating) {
                    star.querySelector('i').classList.remove('text-gray-300');
                    star.querySelector('i').classList.add('text-yellow-400');
                } else {
                    star.querySelector('i').classList.remove('text-yellow-400');
                    star.querySelector('i').classList.add('text-gray-300');
                }
            });
            
            // Update rating text
            const ratingTexts = {
                1: "খুব খারাপ",
                2: "খারাপ",
                3: "সাধারণ",
                4: "ভালো",
                5: "খুব ভালো"
            };
            ratingText.textContent = ratingTexts[rating] || '';
        });
        
        btn.addEventListener('mouseenter', function() {
            const hoverRating = parseInt(this.getAttribute('data-rating'));
            starButtons.forEach((star, i) => {
                if (i < hoverRating) {
                    star.querySelector('i').classList.add('text-yellow-300');
                }
            });
        });
        
        btn.addEventListener('mouseleave', function() {
            starButtons.forEach((star, i) => {
                if (i >= currentRating) {
                    star.querySelector('i').classList.remove('text-yellow-300');
                }
            });
        });
    });
}

// Display reviews
function displayReviews() {
    const container = document.getElementById('reviewsContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    reviews.forEach(review => {
        const reviewCard = document.createElement('div');
        reviewCard.className = 'review-card bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1';
        
        const starIcons = Array.from({ length: 5 }, (_, i) => {
            return i < review.rating 
                ? '<i class="fas fa-star text-yellow-400"></i>' 
                : '<i class="far fa-star text-gray-300"></i>';
        }).join('');
        
        reviewCard.innerHTML = `
            <div class="flex items-start justify-between mb-4">
                <div class="flex-1">
                    <h4 class="font-bold text-lg text-slate-800 mb-1">${review.name}</h4>
                    <p class="text-sm text-purple-600 font-semibold mb-2">${review.projectType}</p>
                    <div class="flex items-center gap-1 text-lg">
                        ${starIcons}
                    </div>
                </div>
                <div class="text-xs text-slate-500">${review.date}</div>
            </div>
            <p class="text-slate-600 leading-relaxed">${review.review}</p>
        `;
        
        container.appendChild(reviewCard);
    });
    
    updateAverageRating();
}

// Update average rating
function updateAverageRating() {
    if (reviews.length === 0) return;
    
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const average = (totalRating / reviews.length).toFixed(1);
    
    const averageRatingEl = document.getElementById('averageRating');
    const totalReviewsEl = document.getElementById('totalReviews');
    
    if (averageRatingEl) averageRatingEl.textContent = average;
    if (totalReviewsEl) totalReviewsEl.textContent = reviews.length;
}

// Handle review form submission
function handleReviewSubmit(e) {
    e.preventDefault();
    
    const reviewerName = document.getElementById('reviewerName');
    const projectType = document.getElementById('projectType');
    const ratingValue = document.getElementById('ratingValue');
    const reviewText = document.getElementById('reviewText');
    
    if (!reviewerName || !projectType || !ratingValue || !reviewText) return;
    
    const name = reviewerName.value.trim();
    const project = projectType.value.trim();
    const rating = parseInt(ratingValue.value);
    const text = reviewText.value.trim();
    
    if (!rating || rating < 1 || rating > 5) {
        showToast('Please select a rating');
        return;
    }
    
    if (!name || !project || !text) {
        showToast('Please fill in all fields');
        return;
    }
    
    // Create new review
    const newReview = {
        id: reviews.length + 1,
        name: name,
        projectType: project,
        rating: rating,
        review: text,
        date: new Date().toISOString().split('T')[0]
    };
    
    // Add to reviews array (in real app, send to backend)
    reviews.unshift(newReview);
    
    // Reset form
    const reviewForm = document.getElementById('reviewForm');
    if (reviewForm) reviewForm.reset();
    
    currentRating = 0;
    const starButtons = document.querySelectorAll('.star-btn');
    starButtons.forEach(star => {
        const icon = star.querySelector('i');
        if (icon) {
            icon.classList.remove('text-yellow-400');
            icon.classList.add('text-gray-300');
        }
    });
    
    const ratingTextEl = document.getElementById('ratingText');
    if (ratingTextEl) ratingTextEl.textContent = '';
    
    // Update display
    displayReviews();
    
    // Show success message
    showToast('ধন্যবাদ! আপনার রিভিউ সফলভাবে জমা হয়েছে।');
    
    // Scroll to reviews in modal
    setTimeout(() => {
        const reviewsContainer = document.getElementById('reviewsContainer');
        if (reviewsContainer) {
            reviewsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 300);
}

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    addParticleEffect();
});

// Add particle effect to hero section
function addParticleEffect() {
    const hero = document.querySelector('section.relative');
    if (!hero) return;
    
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    hero.appendChild(particlesContainer);
    
    // Create particles
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

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
    card.className = 'product-card bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden fade-in-on-scroll flex flex-col';
    
    card.innerHTML = `
        <div class="relative overflow-hidden group flex-shrink-0">
            <img src="${product.image}" alt="${product.name}" class="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            ${product.tags && product.tags.includes('bestselling') ? `
                <div class="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse-slow">
                    <i class="fas fa-star mr-1"></i> Best Selling
        </div>
            ` : ''}
            ${product.tags && product.tags.includes('new') ? `
                <div class="absolute top-4 left-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    <i class="fas fa-star mr-1"></i> New
                </div>
            ` : ''}
            ${product.tags && product.tags.includes('popular') ? `
                <div class="absolute top-4 left-4 bg-gradient-to-r from-purple-400 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    <i class="fas fa-star mr-1"></i> Popular
                </div>
            ` : ''}
        </div>
        <div class="p-6 flex flex-col flex-grow">
            <h3 class="font-bold text-xl mb-2 text-slate-800 line-clamp-2 min-h-[3.5rem]">${product.name}</h3>
            <p class="text-slate-600 text-sm mb-4 leading-relaxed line-clamp-3 flex-grow">${product.description}</p>
            <div class="flex justify-between items-center mt-auto pt-4">
                <button class="group/btn view-details-btn text-indigo-600 hover:text-indigo-800 text-sm font-semibold transition-all flex items-center gap-2" data-id="${product.id}">
                    View Details
                    <i class="fas fa-arrow-right group-hover/btn:translate-x-1 transition-transform"></i>
                </button>
                <button class="order-btn px-5 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 whitespace-nowrap" data-id="${product.id}">
                    <i class="fas fa-shopping-cart mr-2"></i>Order Now
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
    
    // Review form
    const reviewForm = document.getElementById('reviewForm');
    if (reviewForm) {
        reviewForm.addEventListener('submit', handleReviewSubmit);
    }
    
    // Reviews button
    const reviewsBtn = document.getElementById('reviewsBtn');
    if (reviewsBtn) {
        reviewsBtn.addEventListener('click', openReviewsModal);
    }
    
    // Initialize star rating
    initStarRating();
    
    // Display existing reviews
    displayReviews();
}

// ✅ Order form handler with optional reCAPTCHA
async function handleOrderFormSubmit(e) {
    e.preventDefault();
    
    const status = document.getElementById('status');
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    const orderForm = document.getElementById('orderForm');
    
    // Check if reCAPTCHA is available and validate if present
    let recaptchaValid = true;
    if (typeof grecaptcha !== 'undefined' && grecaptcha.getResponse) {
        try {
    const recaptchaResponse = grecaptcha.getResponse();
            const recaptchaContainer = document.getElementById('recaptchaContainer');
            
            // Only validate if reCAPTCHA container is visible
            if (recaptchaContainer && !recaptchaContainer.classList.contains('hidden')) {
                if (!recaptchaResponse || recaptchaResponse.length === 0) {
        status.innerText = "❌ Please complete the reCAPTCHA verification";
        status.style.color = "#ef4444";
        status.classList.remove('hidden');
                    recaptchaValid = false;
                    return;
                }
            }
        } catch (error) {
            // If reCAPTCHA fails, continue without it
            console.log('reCAPTCHA validation skipped:', error);
            recaptchaValid = true;
        }
    }

    if (!recaptchaValid) {
        return;
    }

    status.innerText = "Sending...";
    status.style.color = "#334155";
    status.classList.remove('hidden');

    // Show loading state
    submitBtn.innerHTML = '<div class="loading-spinner mr-2"></div> Processing...';
    submitBtn.disabled = true;

    // Get form data
    const formData = new FormData(orderForm);
    
    // Add additional form data for better tracking
    formData.append('_subject', 'New Order from Getly Project Shop');
    formData.append('_format', 'plain');
    
    // Also create a readable message format
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });
    
    // Create a formatted message
    const messageBody = `
New Order Received:

Name: ${formObject.name || 'N/A'}
Phone: ${formObject.phone || 'N/A'}
Email: ${formObject.email || 'N/A'}
Service: ${formObject.service || 'N/A'}
Urgency: ${formObject.urgency || 'normal'}
Details: ${formObject.details || 'N/A'}
    `.trim();

    try {
        // Try Formspree submission
        let response;
        try {
            response = await fetch(orderForm.action, {
            method: "POST",
            body: formData,
                headers: { 
                    "Accept": "application/json"
                }
            });

            // Try to parse JSON response
            let responseData;
            try {
                responseData = await response.json();
            } catch (jsonError) {
                // If JSON parsing fails, check if response is OK
                if (response.ok || response.status === 200 || response.status === 302) {
                    responseData = { success: true };
                } else {
                    throw new Error('Form submission failed');
                }
            }

            // Check for Formspree success indicators
            if (response.ok || response.status === 200 || response.status === 302 || 
                (responseData && (responseData.success || responseData.next))) {
                // Success - Show congratulations message
                status.innerHTML = `
                    <div class="space-y-4 p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl shadow-lg">
                        <div class="text-center">
                            <div class="text-6xl mb-4">🎉</div>
                            <h3 class="text-2xl font-bold text-green-800 mb-2">অর্ডার কনফার্ম হয়েছে!</h3>
                            <p class="text-green-700 font-semibold mb-4">আপনার Order সফলভাবে পাঠানো হয়েছে</p>
                            <div class="bg-white rounded-lg p-4 border-2 border-green-200">
                                <p class="text-slate-700 text-sm mb-2"><strong>✅ Order Status:</strong> Confirmed</p>
                                <p class="text-slate-600 text-sm mb-2">আমরা আপনার order পেয়েছি</p>
                                <p class="text-slate-600 text-sm">আমরা শীঘ্রই (২৪ ঘন্টার মধ্যে) আপনার সাথে যোগাযোগ করবো</p>
                            </div>
                            <button onclick="closeModal()" class="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold transition-colors">
                                ধন্যবাদ
                            </button>
                        </div>
                    </div>
                `;
                status.classList.remove('hidden');
                
            orderForm.reset();
                
                // Reset reCAPTCHA if available
                if (typeof grecaptcha !== 'undefined' && grecaptcha.reset) {
                    try {
            grecaptcha.reset();
                    } catch (error) {
                        // Ignore reCAPTCHA reset errors
                    }
                }
            
                // Close modal after 5 seconds
            setTimeout(() => {
                closeModal();
                status.innerText = "";
                status.classList.add('hidden');
                }, 5000);
        } else {
                // Form submission failed - show WhatsApp option
                console.log('Formspree submission failed, showing WhatsApp option...');
                
                // Create WhatsApp message with order details
                const whatsappMessage = encodeURIComponent(`🎓 নতুন অর্ডার - Getly Project Shop\n\n📋 Order Details:\n\n${messageBody}\n\nআমরা শীঘ্রই আপনার সাথে যোগাযোগ করবো।`);
                
                // Show WhatsApp option
                status.innerHTML = `
                    <div class="space-y-3 p-4 bg-green-50 border-2 border-green-200 rounded-lg">
                        <p class="text-green-800 font-semibold">📱 WhatsApp-এ Order পাঠান:</p>
                        <a href="https://wa.me/8801732854793?text=${whatsappMessage}" 
                           target="_blank"
                           onclick="showOrderConfirmation()"
                           class="block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 text-center transition-colors font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
                            💬 WhatsApp-এ Order পাঠান
                        </a>
                        <p class="text-xs text-green-700 mt-2">WhatsApp খুলে আপনার order details সহ message পাঠানো হবে</p>
                    </div>
                `;
                status.classList.remove('hidden');
                
                // Don't reset form so user can see their data
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        } catch (fetchError) {
            // If fetch itself fails, show fallback
            throw fetchError;
        }
    } catch (error) {
        console.error('Order submission error:', error);
        
        // Show WhatsApp option on error
        const whatsappMessage = encodeURIComponent(`🎓 নতুন অর্ডার - Getly Project Shop\n\n📋 Order Details:\n\n${messageBody}\n\nআমরা শীঘ্রই আপনার সাথে যোগাযোগ করবো।`);
        
        status.innerHTML = `
            <div class="space-y-3 p-4 bg-green-50 border-2 border-green-200 rounded-lg">
                <p class="text-green-800 font-semibold">📱 WhatsApp-এ Order পাঠান:</p>
                <a href="https://wa.me/8801732854793?text=${whatsappMessage}" 
                   target="_blank"
                   onclick="showOrderConfirmation()"
                   class="block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 text-center transition-colors font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
                    💬 WhatsApp-এ Order পাঠান
                </a>
                <p class="text-xs text-green-700 mt-2">WhatsApp খুলে আপনার order details সহ message পাঠানো হবে</p>
            </div>
        `;
        status.classList.remove('hidden');
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
    
    // Get service color theme
    const serviceColors = {
        'web-development': { primary: 'indigo', gradient: 'from-indigo-600 to-purple-600', icon: 'fas fa-code' },
        'ui-design': { primary: 'pink', gradient: 'from-pink-600 to-rose-600', icon: 'fas fa-palette' },
        'mobile-apps': { primary: 'green', gradient: 'from-green-600 to-emerald-600', icon: 'fas fa-mobile-alt' },
        'ready-products': { primary: 'purple', gradient: 'from-purple-600 to-violet-600', icon: 'fas fa-box' }
    };
    
    const theme = serviceColors[serviceId] || { primary: 'indigo', gradient: 'from-indigo-600 to-purple-600', icon: 'fas fa-code' };
    
    content.innerHTML = `
        <div class="space-y-6">
            <!-- Header Section -->
            <div class="relative overflow-hidden rounded-2xl bg-gradient-to-br ${serviceId === 'web-development' ? 'from-indigo-500 to-purple-600' : serviceId === 'ui-design' ? 'from-pink-500 to-rose-600' : serviceId === 'mobile-apps' ? 'from-green-500 to-emerald-600' : 'from-purple-500 to-violet-600'} text-white p-8">
                <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
                <div class="relative z-10">
                    <div class="flex items-center gap-4 mb-4">
                        <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                            <i class="${theme.icon} text-3xl text-white"></i>
            </div>
            <div>
                            <h3 class="text-4xl font-extrabold mb-2">${service.title}</h3>
                            <p class="text-white/90 text-lg">${service.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <!-- Image Section -->
                <div class="lg:col-span-2">
                    <div class="relative rounded-2xl overflow-hidden shadow-2xl group">
                        <img src="${service.image}" alt="${service.title}" class="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    
                    <!-- Quick Info Cards -->
                    <div class="mt-4 space-y-3">
                        <div class="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-xl border-2 border-indigo-100">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
                                    <i class="fas fa-clock"></i>
                                </div>
                                <div>
                                    <div class="text-xs text-slate-500 font-medium">Delivery Time</div>
                                    <div class="text-sm font-bold text-slate-800">${service.deliveryTime}</div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border-2 border-green-100">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white">
                                    <i class="fas fa-check-circle"></i>
                                </div>
                                <div>
                                    <div class="text-xs text-slate-500 font-medium">Quality</div>
                                    <div class="text-sm font-bold text-slate-800">100% Guaranteed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Features Section -->
                <div class="lg:col-span-2">
                    <div class="space-y-6">
                        <!-- Key Features Section -->
                        <div class="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border-2 border-slate-200 shadow-lg">
                            <h4 class="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                                <div class="w-12 h-12 bg-gradient-to-br ${theme.gradient} rounded-xl flex items-center justify-center text-white shadow-lg">
                                    <i class="fas fa-list-check text-xl"></i>
                                </div>
                                <span>Key Features</span>
                            </h4>
                            <div class="space-y-4">
                                ${service.features.map((feature, index) => `
                                    <div class="group relative overflow-hidden bg-white rounded-xl border-2 border-slate-200 hover:shadow-xl transition-all duration-300 hover:border-indigo-300">
                                        <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${theme.gradient} opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <div class="p-5 flex items-start gap-4">
                                            <div class="w-12 h-12 bg-gradient-to-br ${theme.gradient} rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                                <i class="fas fa-check-double text-lg"></i>
                                            </div>
                                            <div class="flex-1 pt-1">
                                                <p class="text-slate-800 font-semibold text-base leading-relaxed group-hover:text-slate-900">${feature}</p>
                                            </div>
                                            <div class="opacity-0 group-hover:opacity-100 transition-opacity text-indigo-600">
                                                <i class="fas fa-arrow-right"></i>
                                            </div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                </div>
                
                        <!-- Benefits Section -->
                        <div class="bg-gradient-to-br from-slate-50 via-white to-slate-50 p-6 rounded-2xl border-2 border-slate-200 shadow-lg">
                            <h4 class="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                                <div class="w-12 h-12 bg-gradient-to-br ${theme.gradient} rounded-xl flex items-center justify-center text-white shadow-lg">
                                    <i class="fas fa-gift text-xl"></i>
                                </div>
                                <span>আপনার সুবিধা</span>
                            </h4>
                            <div class="space-y-4">
                                <div class="group flex items-center gap-4 bg-gradient-to-r from-white to-green-50/50 rounded-xl border-2 border-green-200 hover:border-green-400 p-5 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                                    <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                        <i class="fa-solid fa-shield-halved text-2xl"></i>
                                    </div>
                                    <div class="flex-1 min-w-0">
                                        <h5 class="font-extrabold text-slate-800 mb-1 text-lg group-hover:text-green-700 transition-colors">নিশ্চিত মান</h5>
                                        <p class="text-slate-700 leading-snug font-medium text-sm">প্রফেশনাল মানের কোয়ালিটি নিশ্চিত করা হয়েছে। বিশ্ববিদ্যালয়ের স্ট্যান্ডার্ড অনুযায়ী প্রজেক্ট তৈরি করা হয়।</p>
                                    </div>
                                </div>
                                <div class="group flex items-center gap-4 bg-gradient-to-r from-white to-blue-50/50 rounded-xl border-2 border-blue-200 hover:border-blue-400 p-5 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                                    <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                        <i class="fas fa-headset text-2xl"></i>
                                    </div>
                                    <div class="flex-1 min-w-0">
                                        <h5 class="font-extrabold text-slate-800 mb-1 text-lg group-hover:text-blue-700 transition-colors">২৪/৭ সাপোর্ট</h5>
                                        <p class="text-slate-700 leading-snug font-medium text-sm">যেকোনো সময় সাহায্য পাবেন। WhatsApp, Email, বা Phone এর মাধ্যমে আমাদের সাথে যোগাযোগ করতে পারবেন।</p>
                                    </div>
                                </div>
                                <div class="group flex items-center gap-4 bg-gradient-to-r from-white to-purple-50/50 rounded-xl border-2 border-purple-200 hover:border-purple-400 p-5 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                                    <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                        <i class="fas fa-sync-alt text-2xl"></i>
                                    </div>
                                    <div class="flex-1 min-w-0">
                                        <h5 class="font-extrabold text-slate-800 mb-1 text-lg group-hover:text-purple-700 transition-colors">রিভিশন সাপোর্ট</h5>
                                        <p class="text-slate-700 leading-snug font-medium text-sm">প্রয়োজনে বিনামূল্যে রিভিশন করা হবে। ছোটখাটো পরিবর্তনের জন্য কোনো অতিরিক্ত চার্জ নেই।</p>
                                    </div>
                                </div>
                                <div class="group flex items-center gap-4 bg-gradient-to-r from-white to-orange-50/50 rounded-xl border-2 border-orange-200 hover:border-orange-400 p-5 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                                    <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                        <i class="fas fa-rocket text-2xl"></i>
                                    </div>
                                    <div class="flex-1 min-w-0">
                                        <h5 class="font-extrabold text-slate-800 mb-1 text-lg group-hover:text-orange-700 transition-colors">দ্রুত ডেলিভারি</h5>
                                        <p class="text-slate-700 leading-snug font-medium text-sm">সময়মতো প্রজেক্ট পাবেন। জরুরি প্রজেক্টের জন্য Fast Track সার্ভিসও পাওয়া যায়।</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Pricing & CTA Section -->
                    <div class="mt-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6 rounded-2xl border-2 border-indigo-200">
                        <div class="flex items-center justify-between flex-wrap gap-4">
                            <div>
                                <div class="text-sm text-slate-600 font-medium mb-1">Customized Pricing Available</div>
                                <div class="text-2xl font-extrabold text-slate-800">Contact Us for Quote</div>
                            </div>
                            <div class="flex gap-3">
                                <button onclick="closeServiceModal()" class="px-6 py-3 border-2 border-slate-300 rounded-xl hover:bg-white transition-all font-semibold text-slate-700">
                                    <i class="fas fa-times mr-2"></i>Close
                    </button>
                                <button onclick="openOrderModalWithService('${service.title}'); closeServiceModal();" class="px-6 py-3 bg-gradient-to-r ${theme.gradient} text-white rounded-xl hover:shadow-xl transition-all font-bold transform hover:scale-105">
                                    <i class="fas fa-shopping-cart mr-2"></i>Order Now
                    </button>
                            </div>
                        </div>
                    </div>
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
    // Reset reCAPTCHA when closing modal (if available)
    if (typeof grecaptcha !== 'undefined' && grecaptcha.reset) {
        try {
        grecaptcha.reset();
        } catch (error) {
            // Ignore reCAPTCHA reset errors
        }
    }
}

function openOrderModal() {
    openModal();
}

// Reviews Modal Functions
function openReviewsModal() {
    const modal = document.getElementById('reviewsModal');
    if (modal) {
        modal.classList.remove('hidden');
        displayReviews();
    }
}

function closeReviewsModal() {
    const modal = document.getElementById('reviewsModal');
    if (modal) {
        modal.classList.add('hidden');
    }
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
        productPrice.textContent = `Contact us for pricing`;
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
        productPrice.textContent = `Contact us for pricing details`;
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
    
    // Get category color
    const categoryColors = {
        'web': { bg: 'from-blue-500 to-cyan-600', icon: 'fas fa-globe' },
        'mobile': { bg: 'from-green-500 to-emerald-600', icon: 'fas fa-mobile-alt' },
        'design': { bg: 'from-pink-500 to-rose-600', icon: 'fas fa-palette' },
        'ready': { bg: 'from-purple-500 to-violet-600', icon: 'fas fa-box' }
    };
    const catColor = categoryColors[product.category] || { bg: 'from-indigo-500 to-purple-600', icon: 'fas fa-cube' };
    
    content.innerHTML = `
        <div class="space-y-6">
            <!-- Header Section -->
            <div class="relative overflow-hidden rounded-2xl bg-gradient-to-br ${catColor.bg} text-white p-8">
                <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
                <div class="relative z-10">
                    <div class="flex items-center gap-4 mb-4">
                        <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                            <i class="${catColor.icon} text-3xl text-white"></i>
                        </div>
                        <div class="flex-1">
                            <h3 class="text-4xl font-extrabold mb-2">${product.name}</h3>
                            <div class="flex items-center gap-3 flex-wrap">
                                <span class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-sm font-semibold">
                                    <i class="fas fa-tag mr-2"></i>${product.category.toUpperCase()}
                                </span>
                                ${product.tags && product.tags.includes('bestselling') ? `
                                    <span class="px-3 py-1 bg-yellow-400/90 backdrop-blur-sm rounded-lg text-sm font-bold text-slate-800">
                                        <i class="fas fa-fire mr-2"></i>Best Seller
                                    </span>
                                ` : ''}
                                ${product.tags && product.tags.includes('new') ? `
                                    <span class="px-3 py-1 bg-green-400/90 backdrop-blur-sm rounded-lg text-sm font-bold text-slate-800">
                                        <i class="fas fa-sparkles mr-2"></i>New
                                    </span>
                                ` : ''}
                                ${product.tags && product.tags.includes('popular') ? `
                                    <span class="px-3 py-1 bg-purple-400/90 backdrop-blur-sm rounded-lg text-sm font-bold text-slate-800">
                                        <i class="fas fa-star mr-2"></i>Popular
                                    </span>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <!-- Image & Info Section -->
                <div class="lg:col-span-1 space-y-4">
                    <div class="relative rounded-2xl overflow-hidden shadow-2xl group">
                        <img src="${product.image}" alt="${product.name}" class="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    
                    <!-- Quick Info Cards -->
                    <div class="space-y-3">
                        <div class="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-xl border-2 border-indigo-100">
                            <div class="flex items-center gap-3">
                                <div class="w-12 h-12 bg-gradient-to-br ${catColor.bg} rounded-xl flex items-center justify-center text-white">
                                    <i class="fas fa-layer-group"></i>
                                </div>
            <div>
                                    <div class="text-xs text-slate-500 font-medium">Category</div>
                                    <div class="text-sm font-bold text-slate-800">${product.category.charAt(0).toUpperCase() + product.category.slice(1)} Project</div>
                </div>
                            </div>
                        </div>
                        <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border-2 border-green-100">
                            <div class="flex items-center gap-3">
                                <div class="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white">
                                    <i class="fas fa-check-circle"></i>
            </div>
            <div>
                                    <div class="text-xs text-slate-500 font-medium">Quality</div>
                                    <div class="text-sm font-bold text-slate-800">Professional Grade</div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl border-2 border-blue-100">
                            <div class="flex items-center gap-3">
                                <div class="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                                    <i class="fas fa-headset"></i>
                                </div>
                                <div>
                                    <div class="text-xs text-slate-500 font-medium">Support</div>
                                    <div class="text-sm font-bold text-slate-800">3 Months Included</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Content Section -->
                <div class="lg:col-span-2 space-y-6">
                    <!-- Description -->
                    <div class="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border-2 border-slate-200 shadow-lg">
                        <h4 class="text-xl font-bold text-slate-800 mb-3 flex items-center gap-2">
                            <i class="fas fa-info-circle text-indigo-600"></i>
                            Project Overview
                        </h4>
                        <p class="text-slate-700 leading-relaxed text-base">${product.description}</p>
                    </div>
                    
                    <!-- Features Section -->
                    <div class="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border-2 border-slate-200 shadow-lg">
                        <h4 class="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                            <i class="fas fa-star text-yellow-500"></i>
                            Key Features
                        </h4>
                        <div class="space-y-3">
                            ${product.features.map((feature, index) => `
                                <div class="bg-white rounded-xl border-2 border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all group p-4 overflow-hidden">
                                    <div class="flex items-center gap-4">
                                        <div class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                                            <span class="text-sm font-bold">${index + 1}</span>
                                        </div>
                                        <div class="flex-1 min-w-0">
                                            <p class="text-slate-700 font-semibold text-base leading-relaxed break-words" style="word-wrap: break-word; overflow-wrap: break-word;">${feature}</p>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <!-- What You Get Section -->
                    <div class="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6 rounded-2xl border-2 border-indigo-200 shadow-lg">
                        <h4 class="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                            <i class="fas fa-gift text-purple-600"></i>
                            What You'll Get
                        </h4>
                        <div class="grid grid-cols-2 gap-3">
                            <div class="flex items-center gap-2 text-slate-700">
                                <i class="fas fa-check-circle text-green-600"></i>
                                <span class="text-sm font-medium">Complete Source Code</span>
                            </div>
                            <div class="flex items-center gap-2 text-slate-700">
                                <i class="fas fa-check-circle text-green-600"></i>
                                <span class="text-sm font-medium">Documentation</span>
                            </div>
                            <div class="flex items-center gap-2 text-slate-700">
                                <i class="fas fa-check-circle text-green-600"></i>
                                <span class="text-sm font-medium">Database Setup</span>
                            </div>
                            <div class="flex items-center gap-2 text-slate-700">
                                <i class="fas fa-check-circle text-green-600"></i>
                                <span class="text-sm font-medium">Installation Guide</span>
                            </div>
                            <div class="flex items-center gap-2 text-slate-700">
                                <i class="fas fa-check-circle text-green-600"></i>
                                <span class="text-sm font-medium">3 Months Support</span>
                            </div>
                            <div class="flex items-center gap-2 text-slate-700">
                                <i class="fas fa-check-circle text-green-600"></i>
                                <span class="text-sm font-medium">Free Revisions</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- CTA Section -->
                    <div class="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6 rounded-2xl border-2 border-indigo-200">
                        <div class="flex items-center justify-between flex-wrap gap-4">
                            <div>
                                <div class="text-sm text-slate-600 font-medium mb-1">Customized Pricing Available</div>
                                <div class="text-2xl font-extrabold text-slate-800">Contact Us for Quote</div>
                            </div>
                            <div class="flex gap-3">
                                <button onclick="closeServiceModal()" class="px-6 py-3 border-2 border-slate-300 rounded-xl hover:bg-white transition-all font-semibold text-slate-700">
                                    <i class="fas fa-times mr-2"></i>Close
                    </button>
                                <button onclick="openOrderModalWithProduct(${product.id}); closeServiceModal();" class="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:shadow-xl transition-all font-bold transform hover:scale-105">
                                    <i class="fas fa-shopping-cart mr-2"></i>Order Now
                    </button>
                            </div>
                        </div>
                    </div>
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
    let filteredProducts = [];
    
    switch(sortBy) {
        case 'newest':
            // Show all products (newest first based on ID - higher ID = newer)
            filteredProducts = [...products].sort((a, b) => b.id - a.id);
            break;
        case 'bestselling':
            // Show only products with "bestseller" tag
            filteredProducts = products.filter(product => 
                product.tags && product.tags.includes('bestselling')
            );
            // If no bestseller, show all
            if (filteredProducts.length === 0) {
                filteredProducts = [...products];
            }
            break;
        case 'popular':
            // Show only products with "popular" tag
            filteredProducts = products.filter(product => 
                product.tags && product.tags.includes('popular')
            );
            // If no popular, show all
            if (filteredProducts.length === 0) {
                filteredProducts = [...products];
            }
            break;
        default:
            filteredProducts = [...products];
    }
    
    const container = document.getElementById('productsContainer');
    if (!container) return;
    
    // Show message if no products found
    if (filteredProducts.length === 0) {
        container.innerHTML = `
            <div class="col-span-full text-center py-12">
                <div class="text-6xl mb-4">📦</div>
                <h3 class="text-2xl font-bold text-slate-800 mb-2">No products found</h3>
                <p class="text-slate-600">Try selecting a different filter option.</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = '';
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
    
    // Scroll to products section immediately when sort changes
    const shopSection = document.getElementById('shop');
    if (shopSection) {
        // Use scrollIntoView for better compatibility
        shopSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start',
            inline: 'nearest'
        });
        
        // Also ensure scroll with offset
        setTimeout(() => {
            const headerHeight = 80;
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            const shopTop = shopSection.offsetTop;
            const targetScroll = shopTop - headerHeight;
            
            if (Math.abs(currentScroll - targetScroll) > 10) {
                window.scrollTo({
                    top: targetScroll,
                    behavior: 'smooth'
                });
            }
        }, 150);
    }
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

// Show order confirmation message after WhatsApp click
function showOrderConfirmation() {
    // Show congratulations message
    setTimeout(() => {
        const status = document.getElementById('status');
        if (status) {
            status.innerHTML = `
                <div class="space-y-4 p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl shadow-lg">
                    <div class="text-center">
                        <div class="text-6xl mb-4">🎉</div>
                        <h3 class="text-2xl font-bold text-green-800 mb-2">অর্ডার কনফার্ম হয়েছে!</h3>
                        <p class="text-green-700 font-semibold mb-4">আপনার Order সফলভাবে পাঠানো হয়েছে</p>
                        <div class="bg-white rounded-lg p-4 border-2 border-green-200">
                            <p class="text-slate-700 text-sm mb-2"><strong>✅ Order Status:</strong> Confirmed</p>
                            <p class="text-slate-600 text-sm mb-2">আমরা আপনার WhatsApp message পেয়েছি</p>
                            <p class="text-slate-600 text-sm">আমরা শীঘ্রই (২৪ ঘন্টার মধ্যে) আপনার সাথে যোগাযোগ করবো</p>
                        </div>
                        <button onclick="closeModal()" class="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold transition-colors">
                            ধন্যবাদ
                        </button>
                    </div>
                </div>
            `;
            status.classList.remove('hidden');
            
            // Reset form after showing confirmation
            const orderForm = document.getElementById('orderForm');
            if (orderForm) {
                setTimeout(() => {
                    orderForm.reset();
                    closeModal();
                }, 5000);
            }
        }
    }, 500);
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

// Enhanced scroll animation for elements
function checkScroll() {
    const elements = document.querySelectorAll('.service-card, .fade-in, .product-card');
    
    elements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
            element.classList.add('visible');
        }
    });
    
    // Add fade-in-on-scroll class for staggered animations
    document.querySelectorAll('.fade-in-on-scroll').forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;
        
        if (elementTop < window.innerHeight - elementVisible) {
            setTimeout(() => {
                element.classList.add('visible');
            }, index * 100);
        }
    });
}

// Header scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
    checkScroll();
});

// Initial check
checkScroll();

// Check on scroll
window.addEventListener('scroll', checkScroll);

// Intersection Observer for better performance
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in-on-scroll').forEach(el => {
    observer.observe(el);
});

// Close modal with ESC key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Ensure reCAPTCHA is properly rendered when modal opens (optional)
function ensureRecaptchaRendering() {
    try {
        const recaptchaContainer = document.getElementById('recaptchaContainer');
        if (!recaptchaContainer) return;
        
        // Always hide reCAPTCHA by default (will show only if successfully loaded)
        recaptchaContainer.classList.add('hidden');
        
        // Check if reCAPTCHA is available and properly loaded
        if (typeof grecaptcha !== 'undefined' && grecaptcha.render && grecaptcha.getResponse) {
            try {
        const recaptchaElement = document.querySelector('.g-recaptcha');
                if (recaptchaElement) {
                    // Check if already rendered
                    const widgetId = recaptchaElement.getAttribute('data-widget-id');
                    if (!widgetId) {
                        // Try to render only if not already rendered
                        try {
            grecaptcha.render(recaptchaElement, {
                                sitekey: '6Ldutv4rAAAAAOV9_-EgukKngBodNashC6XxPfPz',
                                'error-callback': function() {
                                    // Hide reCAPTCHA if there's an error
                                    recaptchaContainer.classList.add('hidden');
                                },
                                'expired-callback': function() {
                                    recaptchaContainer.classList.add('hidden');
                                }
                            });
                            // Only show if rendering succeeded
                            recaptchaContainer.classList.remove('hidden');
                        } catch (renderError) {
                            // Hide reCAPTCHA if rendering fails
                            recaptchaContainer.classList.add('hidden');
                        }
                    } else {
                        // Already rendered, check if it's valid
                        try {
                            grecaptcha.getResponse();
                            recaptchaContainer.classList.remove('hidden');
                        } catch (error) {
                            recaptchaContainer.classList.add('hidden');
                        }
                    }
                }
            } catch (error) {
                // Hide reCAPTCHA if any error occurs
                recaptchaContainer.classList.add('hidden');
            }
        } else {
            // Hide reCAPTCHA if not available
            recaptchaContainer.classList.add('hidden');
        }
    } catch (error) {
        // If anything fails, hide reCAPTCHA and continue
        const recaptchaContainer = document.getElementById('recaptchaContainer');
        if (recaptchaContainer) {
            recaptchaContainer.classList.add('hidden');
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

// Open feature modal
function openFeatureModal(featureId) {
    const modal = document.getElementById('serviceModal');
    const content = document.getElementById('serviceModalContent');
    
    if (!modal || !content) return;
    
    const feature = featureDetails[featureId];
    if (!feature) return;
    
    const colorClasses = {
        'green': 'from-green-100 to-emerald-100 text-green-600',
        'blue': 'from-blue-100 to-cyan-100 text-blue-600',
        'purple': 'from-purple-100 to-pink-100 text-purple-600'
    };
    
    const bgColorClasses = {
        'green': 'bg-green-50 border-green-200',
        'blue': 'bg-blue-50 border-blue-200',
        'purple': 'bg-purple-50 border-purple-200'
    };
    
    content.innerHTML = `
        <div class="space-y-6">
            <div class="flex items-center gap-4 mb-6">
                <div class="w-16 h-16 rounded-2xl bg-gradient-to-br ${colorClasses[feature.color]} flex items-center justify-center">
                    <i class="${feature.icon} text-2xl"></i>
                </div>
                <div>
                    <h3 class="text-3xl font-bold text-slate-800">${feature.title}</h3>
                    <p class="text-slate-600 mt-1">${feature.description}</p>
                </div>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div class="${bgColorClasses[feature.color]} p-6 rounded-xl border-2">
                    <h4 class="font-bold text-lg mb-4 text-slate-800 flex items-center gap-2">
                        <i class="fas fa-check-circle ${feature.color === 'green' ? 'text-green-600' : feature.color === 'blue' ? 'text-blue-600' : 'text-purple-600'}"></i>
                        কী কী পাবেন
                    </h4>
                    <ul class="space-y-3">
                        ${feature.details.map(detail => `
                            <li class="flex items-start gap-3 text-slate-700">
                                <i class="fas fa-check ${feature.color === 'green' ? 'text-green-600' : feature.color === 'blue' ? 'text-blue-600' : 'text-purple-600'} mt-1"></i>
                                <span>${detail}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
                
                <div class="bg-slate-50 p-6 rounded-xl border-2 border-slate-200">
                    <h4 class="font-bold text-lg mb-4 text-slate-800 flex items-center gap-2">
                        <i class="fas fa-star text-yellow-500"></i>
                        আপনার সুবিধা
                    </h4>
                    <ul class="space-y-3">
                        ${feature.benefits.map(benefit => `
                            <li class="flex items-start gap-3 text-slate-700">
                                <i class="fas fa-arrow-right text-indigo-600 mt-1"></i>
                                <span>${benefit}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
            
            <div class="mt-6 flex gap-3 justify-end">
                <button onclick="closeServiceModal()" class="px-6 py-3 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors font-semibold">
                    Close
                </button>
                <button onclick="openOrderModal(); closeServiceModal();" class="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-colors font-semibold">
                    <i class="fas fa-shopping-cart mr-2"></i> Order Now
                </button>
            </div>
        </div>
    `;
    
    modal.showModal();
}

// FAQ Toggle Function
function toggleFaq(element) {
    const faqItem = element.closest('.faq-item');
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Open clicked item if it wasn't active
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

//Auto Update Footer year
document.getElementById("year").textContent = new Date().getFullYear();


// Mobile menu button functionality
    document.getElementById('mobileWhatsappBtn').addEventListener('click', function() {
        window.open('https://wa.me/8801732854793', '_blank');
        mobileMenu.classList.add('hidden'); // Close menu after click
    });
    
    document.getElementById('mobileQuickOrderBtn').addEventListener('click', function() {
        openOrderModal(); // Use your existing function
        mobileMenu.classList.add('hidden'); // Close menu after click
    });
    
    document.getElementById('mobileReviewsBtn').addEventListener('click', function() {
        openReviewsModal(); // Use your existing function
        mobileMenu.classList.add('hidden'); // Close menu after click
    });