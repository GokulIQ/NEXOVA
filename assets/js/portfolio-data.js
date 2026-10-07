// Shared portfolio catalog for portfolio cards and project detail pages.
window.NEXOVA_PROJECTS = [
    {
        id: 'fintech-app', title: 'Fintech App Redesign', category: 'WEB DESIGN & UI/UX', categoryFilter: 'web-design development', technology: 'Figma / React',
        image: './assets/Fintech App Redesign.jpg', imageAlt: 'Fintech App Redesign project preview',
        description: 'A complete overhaul of a legacy financial dashboard. We improved user flows, simplified complex data visualization, and implemented a modern dark-mode aesthetic resulting in a 40% increase in user retention.',
        client: 'PayFlow Inc.', industry: 'Financial Tech', services: 'UI/UX, Frontend',
        overview: 'PayFlow came to us with a dated application that was suffering from low user retention. The goal was to completely redesign the user interface and overhaul the frontend architecture to create a seamless, modern experience.',
        challenge: 'The main challenge was simplifying a complex set of financial tools into an intuitive dashboard without hiding critical data from power users.',
        solution: 'We implemented a clean Claymorphism design system to give the interface depth while maintaining accessibility. Complex charts were broken down into digestible widgets, resulting in a 40% increase in user retention.',
        metrics: [{ value: '+145%', label: 'User Retention' }, { value: '-40%', label: 'Bounce Rate' }, { value: '+61%', label: 'Conversion Rate' }]
    },
    {
        id: 'saas-campaign', title: 'Global SaaS Campaign', category: 'MARKETING', categoryFilter: 'marketing branding', technology: 'Google Ads / Meta',
        image: './assets/Global SaaS Campaign.jpg', imageAlt: 'Global SaaS Campaign project preview',
        description: 'Executed a high-converting paid acquisition strategy for an enterprise SaaS platform. By utilizing AI-driven targeting and programmatic bidding, we lowered CPA by 65% across global markets.',
        client: 'CloudScale Inc.', industry: 'Enterprise Software', services: 'Google Ads, Meta Ads',
        overview: 'CloudScale needed a highly targeted paid acquisition strategy to expand into European markets while maintaining a strict CPA constraint.',
        challenge: 'The client faced soaring Customer Acquisition Costs (CAC) with their legacy campaigns and struggled to reach decision-makers.',
        solution: 'Executed a high-converting paid acquisition strategy utilizing AI-driven targeting and programmatic bidding. We optimized ad creative and landing pages for localized audiences.',
        metrics: [{ value: '-65%', label: 'CPA Reduction' }, { value: '3x', label: 'ROAS' }, { value: '12k+', label: 'Enterprise Leads' }]
    },
    {
        id: 'b2b-ecommerce', title: 'B2B E-Commerce Platform', category: 'DEVELOPMENT', categoryFilter: 'development', technology: 'Next.js / Node',
        image: './assets/portfolio-3.jpg', imageAlt: 'B2B E-Commerce Platform project preview',
        description: 'Engineered a highly scalable, headless e-commerce architecture supporting over 10,000 concurrent transactions. Included custom API integrations for real-time inventory and global logistics routing.',
        client: 'Industrial Supply Co.', industry: 'B2B Retail', services: 'Next.js, Node.js',
        overview: 'Industrial Supply Co. required a robust, highly scalable headless commerce architecture to support a large inventory and real-time logistics tracking.',
        challenge: 'The legacy commerce platform struggled during peak hours and could not integrate with the client’s modern logistics API.',
        solution: 'We built a headless commerce platform with custom Node.js API integrations for real-time inventory and global logistics routing.',
        metrics: [{ value: '0s', label: 'Unplanned Downtime' }, { value: '< 1s', label: 'Page Load Time' }, { value: '+80%', label: 'Checkout Speed' }]
    },
    {
        id: 'corporate-identity', title: 'Corporate Identity Refresh', category: 'BRANDING', categoryFilter: 'branding', technology: 'Identity / Strategy',
        image: './assets/portfolio-4.jpg', imageAlt: 'Corporate Identity Refresh project preview',
        description: 'Modernized a 20-year-old corporate brand to appeal to a younger demographic. Delivered a comprehensive logo system, brand guidelines, typography overhaul, and strategic messaging framework.',
        client: 'Apex Financial', industry: 'Corporate Banking', services: 'Brand Strategy',
        overview: 'Apex Financial needed to modernize its visual identity for a younger demographic without alienating its established high-net-worth clientele.',
        challenge: 'A two-decade-old corporate brand was losing relevance alongside younger, more vibrant fintech competitors.',
        solution: 'We refreshed the identity with a comprehensive logo system, brand guidelines, typography, and a strategic messaging framework.',
        metrics: [{ value: '50+', label: 'Global Branches' }, { value: '80', label: 'Page Brand Book' }, { value: '+45%', label: 'Brand Sentiment' }]
    },
    {
        id: 'real-estate', title: 'Modern Real Estate Portal', category: 'UX RESEARCH & DESIGN', categoryFilter: 'web-design', technology: 'Research / Prototyping',
        image: './assets/Modern Real Estate Portal.jpg', imageAlt: 'Modern Real Estate Portal project preview',
        description: 'Conducted deep UX research and persona mapping to redesign a property portal. Introduced intuitive map-based search filters and streamlined the lead-generation funnel to triple conversion rates.',
        client: 'Prime Properties', industry: 'Real Estate', services: 'UX Research',
        overview: 'Prime Properties sought to improve digital property search with evidence-led UX research and intuitive map-based filtering.',
        challenge: 'Users were dropping off during property search because of overwhelming filters and poor mobile responsiveness.',
        solution: 'We mapped user needs, redesigned the search experience with intuitive map filters, and streamlined the lead-generation funnel.',
        metrics: [{ value: '3x', label: 'Conversion Rate' }, { value: '2.5x', label: 'Mobile Usage' }, { value: '-45%', label: 'Bounce Rate' }]
    },
    {
        id: 'analytics-dashboard', title: 'Analytics Dashboard Platform', category: 'MARKETING & ANALYTICS', categoryFilter: 'development marketing', technology: 'Data / SEO',
        image: './assets/portfolio-6.jpg', imageAlt: 'Analytics Dashboard Platform project preview',
        description: 'Designed and marketed a proprietary marketing analytics dashboard for enterprise clients. Combined technical SEO architecture with live data visualization components to track ROAS in real time.',
        client: 'DataDriven Media', industry: 'Marketing Tech', services: 'Analytics, Data Visualization',
        overview: 'DataDriven Media needed a proprietary dashboard that combined search performance with live marketing data to make ROAS easier to understand.',
        challenge: 'Enterprise customers relied on manual reports and struggled to see current marketing performance in one place.',
        solution: 'We designed an analytics platform combining technical SEO data with live visualizations and real-time ROAS tracking.',
        metrics: [{ value: '100+', label: 'Weekly Reports' }, { value: '100/100', label: 'Lighthouse Score' }, { value: 'Real-time', label: 'Data Tracking' }]
    }
];
