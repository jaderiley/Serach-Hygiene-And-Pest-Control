/* ============================================================
   CONFIG — edit ONLY this file per client
   ============================================================ */

const CONFIG = {

  // ─── BUSINESS INFO ───────────────────────────────────────
  business: {
    name:      "Serach Hygiene and Pest Control",
    phone:     "+27603622327",
    whatsapp:  "+27603622327",
    address:   "756 Ehlanzeni Section Tembisa, Kempton Park, South Africa",
    hours:     "Mon–Fri 8am–5pm · Sat 8am–1pm",
    region:    "Gauteng",
    priceRange:"$$",
    suburbs: [
      "Kempton Park",
      "Edenvale",
      "Benoni",
      "Boksburg",
      "Germiston",
      "OR Tambo",
      "Pomona"
    ]
  },

  // ─── PAGE META / SEO ─────────────────────────────────────
  meta: {
    title:       "Serach Hygiene and Pest Control — Services in kempton park",
    description: "Serach Hygiene and Pest Control provides professional services in Kempton Park. 9 Google reviews. Call for a quote today.",
    url:         ""  // Live domain — e.g. https://example.co.za (activates canonical + WebSite schema)
  },

  // ─── BRANDING ────────────────────────────────────────────
  branding: {
    palette:  "ember",   // ember | security | forest | volt | tide
    ogImage:  "images/og.jpg"
  },

  // ─── CONTENT ─────────────────────────────────────────────
  content: {
    eyebrow:    "Services · Kempton Park & surrounds",
    heroTitle:  "Professional service — <em>done right.</em>",
    heroLead:   "Serach Hygiene and Pest Control provides professional services for homes and businesses across Kempton Park and the surrounding area. Reliable, experienced and locally based.",

    googleRating: "4.9",
    reviewsCount: "9",
    featuredQuote: "Professional, punctual and the work was done properly the first time. Exactly what you want.",
    featuredQuoteAuthor: "— Zanele M., Google review",

    trustSignals: ["Residential", "Commercial", "Experienced team", "Fair pricing"],

    // ─── SERVICES ──────────────────────────────────────────
    servicesTitle: "Professional services for homes and businesses.",
    servicesLead:  "We show up, we do the work properly, and we leave the job looking right.",
    services: [
      {
        icon:  "hardhat",
        title: "Residential services",
        desc:  "Professional work for homeowners — residential jobs handled efficiently and with care for the property."
      },
      {
        icon:  "wrench",
        title: "Repairs & maintenance",
        desc:  "Repairs done properly the first time, not patched and left to fail again in a month."
      },
      {
        icon:  "broom",
        title: "Commercial work",
        desc:  "Business and commercial jobs handled professionally, on time and with minimal disruption to your operation."
      },
      {
        icon:  "calendar",
        title: "Scheduled maintenance",
        desc:  "Regular maintenance contracts available — we keep on top of your property so small problems do not become big ones."
      },
      {
        icon:  "shield",
        title: "Emergency callouts",
        desc:  "Urgent work handled as quickly as possible — call us and we will advise on response time for your area."
      },
      {
        icon:  "bolt",
        title: "Project work",
        desc:  "Larger projects planned and delivered with clear milestones, proper communication and quality finish."
      },
    ],

    // ─── WORK GALLERY ──────────────────────────────────────
    galleryTitle: "The work, up close.",
    galleryLead:  "A look at the kind of work we handle every week.",
    gallery: [
      {
        image:   "images/work-1.jpg",
        art:     "lockCylinderPick",
        fig:     "01 — Professional work",
        title:   "Done properly",
        caption: "Every job approached with care and attention to detail — we do not take shortcuts."
      },
      {
        image:   "images/work-2.jpg",
        art:     "lockCylinderPick",
        fig:     "02 — Repairs",
        title:   "Fixed to last",
        caption: "Repairs done correctly using appropriate materials so the problem stays fixed."
      },
      {
        image:   "images/work-3.jpg",
        art:     "lockCylinderPick",
        fig:     "03 — Maintenance",
        title:   "Kept in good shape",
        caption: "Regular maintenance keeps properties in good condition and avoids expensive emergency repairs."
      },
      {
        image:   "images/work-4.jpg",
        art:     "lockCylinderPick",
        fig:     "04 — Commercial work",
        title:   "Minimal disruption",
        caption: "Commercial work scheduled and managed to minimise impact on your business operations."
      },
      {
        image:   "images/work-5.jpg",
        art:     "lockCylinderPick",
        fig:     "05 — Project delivery",
        title:   "On time, on budget",
        caption: "Project work planned from the start — clear quote, agreed timeline, quality finish."
      },
    ],

    // ─── PHOTO BAND ────────────────────────────────────────
    band: {
      image: "images/band.jpg",
      alt:   "Serach Hygiene and Pest Control team at work in Kempton Park",
      text:  "Professional service — reliable, experienced and locally based."
    },

    // ─── AREAS BLURB ───────────────────────────────────────
    areasTitle: "Based in Kempton Park. Serving the wider area.",
    areasLead:  "We work across Kempton Park, Edenvale, Benoni and surrounding suburbs for residential and commercial clients.",
    areasNote:  "Not on this list? Call us — we cover most of greater Johannesburg.",

    // ─── WHY US ────────────────────────────────────────────
    whyTitle: "Why clients keep coming back.",
    why: [
      {
        title: "We do what we say",
        desc:  "We show up when we say we will and finish what we started. Simple, but not everyone does it."
      },
      {
        title: "Honest pricing",
        desc:  "We quote upfront. What we quote is what you pay — no surprises."
      },
      {
        title: "Quality work, properly done",
        desc:  "We take pride in the work we deliver. If it is not right, we make it right."
      },
    ],

    // ─── REVIEWS ───────────────────────────────────────────
    reviewsTitle: "From 9 verified Google reviews.",
    reviews: [
      {
        body:   "Professional, punctual and the work was done properly the first time. Exactly what you want.",
        name:   "Zanele M.",
        stars:  5,
        source: "Google"
      },
      {
        body:   "Fair quote, showed up on time and left the site clean. Would recommend without hesitation.",
        name:   "Stefan B.",
        stars:  5,
        source: "Google"
      },
      {
        body:   "Reliable, honest and high quality. Hard to find that combination. Very pleased.",
        name:   "Patricia N.",
        stars:  5,
        source: "Google"
      },
    ],

    // ─── FAQ ────────────────────────────────────────────────
    faqTitle: "Common questions.",
    faqLead:  "What most clients ask before booking.",
    faq: [
      {
        q: "Do you quote before starting work?",
        a: "Yes — we always give you a quote before starting. No work begins without your agreement to the price."
      },
      {
        q: "How quickly can you respond?",
        a: "Response time depends on the job and current schedule. Call us and we will give you an honest estimate."
      },
      {
        q: "Do you do commercial work as well as residential?",
        a: "Yes — we work for both homeowners and businesses. Describe your project and we will advise on suitability."
      },
      {
        q: "Is there a call-out fee for a quote?",
        a: "Usually not for standard work. We will confirm when you call depending on your location and job type."
      },
    ],

    // ─── CONTACT ───────────────────────────────────────────
    contactTitle: "Tell us what you need.",
    contactLead:  "Describe the job and we will get back to you with availability and a quote.",
    contactPlaceholder: "e.g. describe your project or the work needed — the more detail the better"
  }
};
