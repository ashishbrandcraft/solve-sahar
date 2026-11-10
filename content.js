export const services = [
  { slug:'brand-design', name:'Brand and Design', title:'A look people remember and trust.', text:'Build a clear visual identity that helps the right people feel confident choosing you.', icon:'✳', includes:['Logo and wordmark','Colour and type system','Brand kit and editable templates','Social, print and campaign design'], fit:'New businesses and teams whose current look no longer reflects their work.', timeline:'Logo: 3–5 days. Full brand kit: 7–10 days.' },
  { slug:'web-app-development', name:'Websites and Apps', title:'Fast, clear sites that turn visitors into customers.', text:'A useful online home built around what your customers need to do next.', icon:'↗', includes:['Business websites and landing pages','E-commerce and booking flows','Web apps and portals','SEO foundations, analytics and handover'], fit:'Businesses that need to look credible and capture enquiries online.', timeline:'Small site: 7–14 working days after content is ready.' },
  { slug:'ads-performance-marketing', name:'Ads and Performance', title:'Track campaigns to enquiries, not just clicks.', text:'Plan and improve paid campaigns with clear goals, careful tracking and regular reporting.', icon:'◎', includes:['Meta and Google campaigns','Lead forms and WhatsApp campaigns','Conversion tracking','Weekly optimization'], fit:'Businesses with a solid offer and page ready to receive leads.', timeline:'Campaign timing depends on setup, approvals and ad account access.' },
  { slug:'social-media-content', name:'Social Media and Content', title:'Useful content that gives people a reason to choose you.', text:'A steady, practical content system for local brands, creators and institutes.', icon:'▤', includes:['Profile setup and content plan','Posts, carousels and reels','Hindi and English captions','Local SEO and monthly reporting'], fit:'Teams that want consistent visibility without posting at random.', timeline:'Ongoing monthly work, planned in clear cycles.' },
  { slug:'coaching-institute-suite', name:'Coaching Institute Suite', title:'Everything an institute needs to get admissions online.', text:'Bring course information, demo-class enquiries and student communication into one clear flow.', icon:'⌂', includes:['Institute site and course pages','Admission enquiry and demo booking','WhatsApp and Telegram setup','Student CRM and reminder workflows'], fit:'Coaching institutes that want a clearer online path from discovery to admission.', timeline:'Scoped after a free discovery call.' },
  { slug:'automation-ai', name:'Automation and AI', title:'Handle follow-ups and repetitive work more reliably.', text:'Connect enquiries to timely replies, reminders and simple reporting.', icon:'⌁', includes:['WhatsApp quick replies and routing','Email follow-up sequences','Appointment reminders','Website chat assistant and dashboards'], fit:'Teams already receiving enquiries but losing time to manual follow-up.', timeline:'Scoped around the systems you already use.' }
];

export const packages = [
  { name:'Launch', price:'₹14,999', unit:'one time', desc:'A professional starting point for a new or offline business.', points:['Mini brand kit','Five-page responsive website','Google Business Profile setup','Basic SEO and 30 days of support'], featured:true },
  { name:'Grow', price:'₹9,999', unit:'per month + ad spend', desc:'Steady visibility and enquiry growth for an established business.', points:['Content calendar and posts','Ad management','Local SEO','Monthly report and strategy call'] },
  { name:'Scale', price:'Custom', unit:'scoped after discovery', desc:'A tailored system for complex needs, teams and institutes.', points:['Custom web app or portal','Funnel and automation','CRM and integrations','Priority support'] },
  { name:'Admission Starter', price:'₹24,999', unit:'starting point', desc:'An online admission foundation for coaching institutes.', points:['Institute website','Enquiry and demo booking','WhatsApp and Telegram setup','Admission ad creatives'] }
];

export const stages = [
  ['01','Discover','Free call, business audit and a shared goal.','1–3 days'],['02','Strategy','Audience, offer, funnel, priorities and measures.','2–4 days'],['03','Design','Brand, wireframes and design previews.','3–7 days'],['04','Build','Development, content, integrations and QA.','5–15 days'],['05','Launch','Domain, tracking and launch checklist.','1–2 days'],['06','Grow','Optimization, content and plain-language reporting.','Monthly']
];

export const faqs = [
  ['How much does a website cost?','It depends on pages and features. Launch packages start from the price shown here. You get a fixed written quote after a free call.'],
  ['How long does it take?','A typical small business site takes 7 to 14 working days once content is ready. Larger builds take 3 to 8 weeks.'],
  ['Do I need to provide content?','Share what you have: logo, photos and services. We can write the copy and design the rest, and tell you exactly what we need.'],
  ['Will I own my website and accounts?','Yes. Your domain, social accounts and content stay in your name. Source code is handed over after final payment.'],
  ['Do you guarantee sales or rankings?','No honest agency can. We commit to a clear plan, careful tracking, regular reporting and realistic targets based on data.'],
  ['Is ad spend included?','No. You pay the ad platform directly. Our management fee is separate and stated upfront.'],
  ['Can you work with a small budget?','Yes. We start with the most valuable step and build from there.'],
  ['Do you work in Hindi and English?','Yes. Websites, content and support are available in both.'],
  ['What happens after launch?','You get 30 days of fixes and support. After that you can choose a monthly plan or manage it yourself.'],
  ['Where do you work?','SolveSahar is based in Bihar and works with clients across India online.']
];

export const nav = [['Services','/services'],['Solutions','/solutions'],['Work','/work'],['Pricing','/pricing'],['About','/about'],['Contact','/contact']];

export const solutions = [
 {slug:'coaching-institutes',title:'Make it easier for students to choose your institute.',text:'Bring course details, demo classes and admission enquiries into one simple online journey.',services:['Coaching Institute Suite','Websites and Apps','Ads and Performance'],package:'Admission Starter'},
 {slug:'local-businesses',title:'Help nearby customers find and trust your business.',text:'Build a clear local presence, make it easy to contact you and measure the enquiries that matter.',services:['Websites and Apps','Social Media and Content','Ads and Performance'],package:'Launch'},
 {slug:'startups-creators',title:'Launch the idea with one partner beside you.',text:'Shape the brand, build the site and plan the first steps without assembling a team from scratch.',services:['Brand and Design','Websites and Apps','Automation and AI'],package:'Launch'}
];