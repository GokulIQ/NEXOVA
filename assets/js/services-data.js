// Shared service catalog used by the Services list and service detail page.
window.NEXOVA_SERVICES = [
    {
        id: 'ui-ux-design', number: '01', title: 'UI/UX & Web Design',
        description: 'We shape clear, engaging digital experiences around your customers and your brand. From first wireframe to polished interface, every decision makes your website easier to use and more memorable.',
        overview: 'Our design process combines user research, thoughtful visual systems, and practical testing. We turn complex business goals into intuitive digital journeys that build trust and help more visitors take action.',
        image: 'assets/UI_UX & Web Design.jpg', imageAlt: 'Orange responsive UI/UX website design displayed across devices',
        features: ['Website UI/UX design', 'Responsive layouts for every screen', 'Conversion-focused landing page design', 'User-focused interfaces and prototypes'],
        deliverables: [
            { title: 'Visual Identity', description: 'Creating a cohesive and memorable brand aesthetic.', icon: 'bi-palette' },
            { title: 'Wireframing', description: 'Mapping out the user journey and structural hierarchy.', icon: 'bi-columns-gap' },
            { title: 'Prototyping', description: 'Interactive high-fidelity mockups for user testing.', icon: 'bi-phone' },
            { title: 'Accessibility', description: 'Ensuring WCAG 2.2 AA compliance for all users.', icon: 'bi-universal-access' }
        ],
        timeline: '4–8 Weeks', startingAt: '$2,500', deliverableSummary: 'Figma, Assets',
        faqs: [
            { question: 'How long does a typical design project take?', answer: 'Most design projects take 4–8 weeks, depending on scope, feedback, and the number of page templates.' },
            { question: 'Do you provide the source files?', answer: 'Yes. Final handoff includes organized Figma files and approved export-ready design assets.' },
            { question: 'What is included in the service?', answer: 'The engagement can include discovery, wireframes, responsive UI design, an interactive prototype, and accessibility review.' },
            { question: 'How does your process work?', answer: 'We begin with a discovery session, align on user needs and goals, explore concepts, refine a selected direction, then test and hand off the design.' },
            { question: 'Can you work with our existing brand?', answer: 'Absolutely. We can extend your current brand system or recommend focused updates where the experience needs more consistency.' },
            { question: 'How much does the service cost?', answer: 'Projects start at $2,500. We confirm a fixed scope and quote after learning about your goals and requirements.' }
        ],
        ctaTitle: 'Ready to shape a better digital experience?', ctaDescription: 'Let’s discuss your project and create a design solution tailored to your business.', ctaLabel: 'Request a Quote'
    },
    {
        id: 'web-development', number: '02', title: 'Web Development',
        description: 'We engineer dependable web experiences that feel fast, work smoothly, and support your next stage of growth. From focused frontends to connected full-stack products, we build for real-world use.',
        overview: 'Our development team turns validated designs and business requirements into secure, maintainable products. We choose the right architecture for your needs and build responsive experiences that are ready to evolve.',
        image: 'assets/Web Development.jpg', imageAlt: 'Web development workspace with code and responsive screens',
        features: ['Frontend development', 'Backend development and integrations', 'Full-stack web applications', 'Responsive, scalable websites'],
        deliverables: [
            { title: 'Frontend Engineering', description: 'Accessible, responsive interfaces built for speed and usability.', icon: 'bi-code-slash' },
            { title: 'Backend & APIs', description: 'Reliable application logic, data models, and service integrations.', icon: 'bi-hdd-network' },
            { title: 'Quality Assurance', description: 'Cross-device checks and functional testing before launch.', icon: 'bi-check2-circle' },
            { title: 'Launch & Handoff', description: 'Deployment support, technical documentation, and team walkthrough.', icon: 'bi-rocket-takeoff' }
        ],
        timeline: '6–12 Weeks', startingAt: '$4,000', deliverableSummary: 'Code, Documentation',
        faqs: [
            { question: 'How long does a typical development project take?', answer: 'Most website and application builds take 6–12 weeks after scope and designs are approved. Larger integrations may take longer.' },
            { question: 'Do you provide the source files?', answer: 'Yes. Source code and project documentation are handed over according to the agreed ownership and hosting arrangement.' },
            { question: 'What is included in the service?', answer: 'Scope may include frontend and backend implementation, integrations, responsive behavior, QA, deployment, and documentation.' },
            { question: 'How does your process work?', answer: 'We define requirements and architecture, build in reviewable milestones, test across devices, then deploy and support handoff.' },
            { question: 'Can you work with our existing brand?', answer: 'Yes. We can build from your current design system, or collaborate with your design team to establish implementation-ready patterns.' },
            { question: 'How much does the service cost?', answer: 'Development engagements start at $4,000. Final pricing depends on functionality, integrations, and delivery timeline.' }
        ],
        ctaTitle: 'Ready to build your next web experience?', ctaDescription: 'Let’s discuss your project and create a reliable solution tailored to your business.', ctaLabel: 'Request a Quote'
    },
    {
        id: 'seo-digital-marketing', number: '03', title: 'SEO & Digital Marketing',
        description: 'We bring the right people to your business with joined-up search and content programs. Practical optimization and consistent measurement help turn organic visibility into lasting growth.',
        overview: 'We connect technical SEO, useful content, and search strategy to make your business easier to discover. Clear measurement keeps the work focused on qualified traffic and durable organic growth.',
        image: 'assets/SEO & Digital Marketing.jpg', imageAlt: 'SEO and digital marketing analytics',
        features: ['Technical and on-page SEO optimization', 'Search engine marketing strategy', 'Content marketing and editorial planning', 'Organic traffic growth and reporting'],
        deliverables: [
            { title: 'SEO Audit', description: 'A prioritized review of technical health, content, and search visibility.', icon: 'bi-search' },
            { title: 'Keyword Roadmap', description: 'Search themes and page opportunities mapped to customer intent.', icon: 'bi-map' },
            { title: 'Content Plan', description: 'Editorial recommendations built around useful, discoverable content.', icon: 'bi-file-earmark-text' },
            { title: 'Performance Report', description: 'Regular reporting on rankings, organic visits, and next actions.', icon: 'bi-graph-up-arrow' }
        ],
        timeline: 'Ongoing, from 4 Weeks', startingAt: '$1,500/mo', deliverableSummary: 'Audit, Roadmap, Reports',
        faqs: [
            { question: 'How long does SEO take to show results?', answer: 'SEO is cumulative. Early technical improvements can show sooner, while meaningful organic growth commonly takes several months.' },
            { question: 'Do you provide the source files?', answer: 'Yes. You receive audit documents, keyword and content roadmaps, and reports in shareable formats.' },
            { question: 'What is included in the service?', answer: 'Work can include technical and on-page SEO, search strategy, content planning, implementation guidance, and performance reviews.' },
            { question: 'How does your process work?', answer: 'We audit your current visibility, agree on priorities, implement and refine the roadmap, then report progress and new opportunities.' },
            { question: 'Can you work with our existing brand?', answer: 'Yes. We align search and content recommendations with your brand voice, audience, and existing marketing plans.' },
            { question: 'How much does the service cost?', answer: 'SEO programs start at $1,500 per month. The quote depends on your market, site size, and content needs.' }
        ],
        ctaTitle: 'Ready to grow your search visibility?', ctaDescription: 'Let’s discuss your goals and build an organic growth plan for your business.', ctaLabel: 'Request a Quote'
    },
    {
        id: 'paid-advertising', number: '04', title: 'Paid Advertising',
        description: 'We plan and manage paid campaigns that reach high-intent audiences and make every step measurable. Ongoing testing helps improve efficiency and turn more clicks into customers.',
        overview: 'From channel selection and audience research to creative testing and conversion tracking, we manage campaigns with clear goals. Regular optimization helps you learn what works and make better use of your media budget.',
        image: 'assets/Ads.jpg', imageAlt: 'Paid advertising campaign dashboard',
        features: ['Google Ads campaign setup and management', 'Meta Ads across Facebook and Instagram', 'LinkedIn Ads for professional audiences', 'Campaign management and conversion optimization'],
        deliverables: [
            { title: 'Channel Strategy', description: 'Platform and audience recommendations aligned to campaign goals.', icon: 'bi-bullseye' },
            { title: 'Campaign Setup', description: 'Campaign structure, tracking plan, and launch-ready configuration.', icon: 'bi-sliders' },
            { title: 'Creative Testing', description: 'Ad concepts and iterative tests to improve audience response.', icon: 'bi-easel2' },
            { title: 'Optimization Reports', description: 'Performance reviews with clear tests, results, and next steps.', icon: 'bi-bar-chart' }
        ],
        timeline: '2–3 Weeks to Launch', startingAt: '$1,200/mo', deliverableSummary: 'Campaigns, Tracking, Reports',
        faqs: [
            { question: 'How long does a typical campaign take to launch?', answer: 'Most campaigns are ready to launch within 2–3 weeks after goals, assets, access, and tracking requirements are confirmed.' },
            { question: 'Do you provide the source files?', answer: 'You retain access to your ad accounts and receive campaign documentation, creative files produced for the work, and reports.' },
            { question: 'What is included in the service?', answer: 'Service includes campaign planning, setup, tracking coordination, ongoing optimization, and performance reporting. Ad spend is separate.' },
            { question: 'How does your process work?', answer: 'We align on targets, audit accounts, plan audiences and creative, launch campaigns, then optimize against agreed metrics.' },
            { question: 'Can you work with our existing brand?', answer: 'Yes. We use your brand guidelines and existing assets, and can recommend campaign-specific creative adaptations.' },
            { question: 'How much does the service cost?', answer: 'Management starts at $1,200 per month, excluding ad spend. Pricing varies with channel count and campaign complexity.' }
        ],
        ctaTitle: 'Ready to make your ad budget work harder?', ctaDescription: 'Let’s discuss your goals and plan measurable campaigns for your business.', ctaLabel: 'Request a Quote'
    },
    {
        id: 'social-media-marketing', number: '05', title: 'Social Media Marketing',
        description: 'We help your brand show up consistently with purposeful social content and thoughtful community management. Build stronger relationships, grow your audience, and keep your brand part of the conversation.',
        overview: 'We build a practical social presence around the channels your audience uses most. Strategic planning, consistent creative, and thoughtful engagement help your brand earn attention and strengthen customer relationships.',
        image: 'assets/Marketing.jpg', imageAlt: 'Social media marketing creative and channel strategy',
        features: ['Social media strategy and channel planning', 'Content creation and publishing', 'Social media management and audience engagement', 'Brand growth and performance insights'],
        deliverables: [
            { title: 'Channel Strategy', description: 'Platform priorities, audience themes, and a clear publishing direction.', icon: 'bi-diagram-3' },
            { title: 'Content Calendar', description: 'A planned schedule of useful, brand-aligned social content.', icon: 'bi-calendar3' },
            { title: 'Creative Production', description: 'Post copy and visual assets prepared for selected channels.', icon: 'bi-camera' },
            { title: 'Community & Insights', description: 'Engagement support and regular audience performance takeaways.', icon: 'bi-chat-dots' }
        ],
        timeline: '2–3 Weeks to Start', startingAt: '$1,400/mo', deliverableSummary: 'Calendar, Content, Reports',
        faqs: [
            { question: 'How long does it take to get started?', answer: 'We typically complete onboarding and the first content plan within 2–3 weeks after account access and brand inputs are ready.' },
            { question: 'Do you provide the source files?', answer: 'Yes. Approved copy and final creative assets produced for your channels are shared with your team.' },
            { question: 'What is included in the service?', answer: 'Depending on scope, service includes channel strategy, content planning, creative production, publishing support, engagement, and reporting.' },
            { question: 'How does your process work?', answer: 'We set goals and channel priorities, plan content collaboratively, prepare and approve posts, then review performance and refine.' },
            { question: 'Can you work with our existing brand?', answer: 'Yes. We follow your brand guidelines and adapt your existing visual and verbal identity for social channels.' },
            { question: 'How much does the service cost?', answer: 'Social media programs start at $1,400 per month. The quote depends on channels, publishing cadence, and production needs.' }
        ],
        ctaTitle: 'Ready to build a stronger social presence?', ctaDescription: 'Let’s discuss your audience and create a social plan that fits your brand.', ctaLabel: 'Request a Quote'
    },
    {
        id: 'brand-strategy', number: '06', title: 'Brand Strategy',
        description: 'We give ambitious businesses a distinctive point of view and a coherent identity. Clear positioning and practical guidelines help every experience feel recognizably yours.',
        overview: 'We help define what makes your business different and translate that into a recognizable identity. Strategic positioning and clear brand tools give your team a consistent foundation for every customer touchpoint.',
        image: 'assets/service_brand.jpg', imageAlt: 'Brand strategy and visual identity',
        features: ['Brand identity and positioning', 'Logo and visual identity systems', 'Brand guidelines and messaging', 'Marketing strategy aligned to your goals'],
        deliverables: [
            { title: 'Brand Discovery', description: 'Stakeholder and audience insights that uncover your differentiators.', icon: 'bi-compass' },
            { title: 'Positioning & Voice', description: 'A clear position, key messages, and a distinctive brand voice.', icon: 'bi-chat-square-quote' },
            { title: 'Visual Identity', description: 'Logo direction, color, typography, and visual language.', icon: 'bi-palette2' },
            { title: 'Brand Guidelines', description: 'Practical usage guidance to keep your identity consistent.', icon: 'bi-journal-richtext' }
        ],
        timeline: '4–6 Weeks', startingAt: '$3,000', deliverableSummary: 'Strategy, Identity, Guide',
        faqs: [
            { question: 'How long does a brand strategy project take?', answer: 'Most brand engagements take 4–6 weeks, depending on research, stakeholder reviews, and identity scope.' },
            { question: 'Do you provide the source files?', answer: 'Yes. Final handoff includes approved identity assets and practical brand guidelines in commonly usable formats.' },
            { question: 'What is included in the service?', answer: 'Work may include discovery, positioning, messaging, logo and visual identity direction, and brand guidelines.' },
            { question: 'How does your process work?', answer: 'We learn about your business and audience, develop strategic directions, refine the selected identity, then document how to use it.' },
            { question: 'Can you work with our existing brand?', answer: 'Yes. We can evolve an established identity, preserve valuable recognition, and address specific gaps rather than starting over.' },
            { question: 'How much does the service cost?', answer: 'Brand engagements start at $3,000. We tailor the quote to research, identity, and rollout requirements.' }
        ],
        ctaTitle: 'Ready to make your brand more distinctive?', ctaDescription: 'Let’s discuss your ambitions and build a brand foundation that supports your next chapter.', ctaLabel: 'Request a Quote'
    }
];
