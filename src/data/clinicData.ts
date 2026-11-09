export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  clinicalIndications: string[];
  treatmentModalities: string[];
  expectedOutcomes: string[];
  typicalSessionCount: string;
  featuredBadge?: string;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  patientName: string;
  condition: string;
  quote: string;
  outcome: string;
  verifiedSource: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: "assessment" | "treatments" | "logistics" | "philosophy";
}

export const clinicData = {
  name: "Physiogenix",
  tagline: "Assessment-Led Physiotherapy & Rehabilitation",
  slogan: "From Pain to Power",
  establishedPracticeYears: "8+",

  leadPractitioner: {
    name: "Dr. Faiza Yousef",
    degrees: "DPT, COMPT, CDNP, CDDC",
    title: "Founder & Lead Physiotherapist",
    degreeName: "Doctor of Physical Therapy (DPT)",
    university: "Shifa Tameer-e-Millat University (STMU), Islamabad",
    certifications: [
      {
        abbr: "COMPT",
        title: "Certified Orthopedic Manual Physical Therapist",
        focus: "Spinal & peripheral joint mobilization, osteokinematic alignment, and manual manipulation.",
      },
      {
        abbr: "CDNP",
        title: "Certified Dry Needling Practitioner",
        focus: "Intramuscular stimulation and myofascial trigger-point release for deep muscular tension.",
      },
      {
        abbr: "CDDC",
        title: "Certified Dry & Dynamic Cupping Practitioner",
        focus: "Myofascial decompression, lymph flow stimulation, and localized micro-circulation enhancement.",
      },
      {
        abbr: "Posture Physio",
        title: "Posture Restoration & Biomechanics Specialist",
        focus: "Three-dimensional postural re-education and functional corrective exercise prescription.",
      },
    ],
    experienceSummary:
      "With over 8 years of dedicated clinical practice in Islamabad, Dr. Faiza Yousef combines evidence-based orthopedic manual physical therapy with neuromuscular re-education. She champions a hands-before-machines philosophy, diagnosing underlying biomechanical dysfunctions rather than simply treating transient pain symptoms.",
    instagramPersonal: "https://www.instagram.com/faiza_fitnessphysio/",
    instagramClinic: "https://www.instagram.com/_physiogenix_/",
    handlePersonal: "@faiza_fitnessphysio",
    handleClinic: "@_physiogenix_",
  },

  contact: {
    primaryPhone: "+92 330 5122052",
    primaryPhoneFormatted: "+92 330 5122052",
    secondaryPhone: "+92 332 1965829",
    whatsappLink:
      "https://wa.me/923305122052?text=Hello%20Physiogenix%2C%20I%20would%20like%20to%20book%20a%20physiotherapy%20assessment%20with%20Dr.%20Faiza.",
    emailPlaceholder: "appointments@physiogenix.pk",
    address: {
      line1: "2nd Floor, Chaudhary Plaza, Bhittai Road",
      landmark: "Above Medicsi Hospital, beside PSO Petrol Pump (Near Jinnah Super)",
      sector: "Sector F-7 Markaz",
      city: "Islamabad",
      postalCode: "44000",
      country: "Pakistan",
      fullAddress:
        "2nd Floor, Chaudhary Plaza, Bhittai Road (Next to PSO Pump, above Medicsi Hospital), Sector F-7 Markaz, Islamabad, 44000",
    },
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.826019688329!2d73.0537!3d33.7206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf9d8f95c805%3A0x67dbb184281313bf!2sF-7%20Markaz%2C%20Islamabad!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s",
    directionsNote:
      "Conveniently situated in central F-7 Markaz Islamabad on Bhittai Road, directly above Medicsi Hospital and adjacent to the PSO petrol station. Dedicated client parking is available in front of the plaza.",
    timings: [
      { days: "Monday – Friday", hours: "12:00 PM – 8:00 PM" },
      { days: "Saturday", hours: "3:00 PM – 8:00 PM" },
      { days: "Sunday", hours: "Closed" },
    ],
  },

  corePillars: [
    {
      title: "Hands Before Machines",
      tagline: "Manual Clinical Precision",
      description:
        "Passive electrotherapy machines cannot replace skilled clinical palpation. We prioritize hands-on orthopedic manual joint mobilization, soft tissue release, and targeted muscle activation.",
      metric: "100%",
      metricLabel: "Individualized Hands-On Time",
    },
    {
      title: "Ethical 12-Session Cap",
      tagline: "Transparent Clinical Pathway",
      description:
        "We reject endless therapy packages. Our treatment protocols are structured to deliver measurable resolution within 8 to 12 sessions max, graduating patients toward personal physical autonomy.",
      metric: "Max 12",
      metricLabel: "Session Cap Standard",
    },
    {
      title: "Assessment-Led Care",
      tagline: "Root-Cause Diagnostics",
      description:
        "Every treatment plan starts with a comprehensive physical, postural, and neurological movement screen. We fix what actually causes the dysfunction, not just where it hurts.",
      metric: "45 Min",
      metricLabel: "Dedicated Assessment Window",
    },
    {
      title: "1-on-1 Dedicated Supervision",
      tagline: "No Crowded Treatment Halls",
      description:
        "You receive Dr. Faiza's undivided clinical attention throughout your appointment. Private clinical room, focused manual execution, and customized guidance.",
      metric: "1:1",
      metricLabel: "Doctor-to-Patient Ratio",
    },
  ],

  patientJourney: [
    {
      step: "01",
      title: "Differential Clinical Assessment",
      subtitle: "Uncovering Root Biomechanical Dysfunctions",
      details:
        "A 45-minute in-depth physical examination testing range of motion, neurodynamics, muscular firing imbalances, joint play, and postural alignment.",
    },
    {
      step: "02",
      title: "Targeted Manual Intervention",
      subtitle: "Restoring Joint Mechanics & Decompressing Tissue",
      details:
        "Precise orthopedic manual adjustments, soft tissue release, dry needling for trigger points, and decompression to alleviate acute pain and restore mobility.",
    },
    {
      step: "03",
      title: "Neuromuscular Re-Education",
      subtitle: "Rebuilding Core Stability & Functional Strength",
      details:
        "Targeted neuromuscular corrective exercises designed to stabilize vulnerable joints, correct movement habits, and reinforce corrected alignment.",
    },
    {
      step: "04",
      title: "Autonomy & Long-Term Prevention",
      subtitle: "Graduation With Ergonomic Independence",
      details:
        "Clear home maintenance conditioning, workplace ergonomic adjustments, and posture protocols so you stay resilient without perpetual clinic dependency.",
    },
  ],

  services: [
    {
      id: "orthopedic-manual-therapy",
      slug: "orthopedic-manual-therapy",
      title: "Orthopedic Manual Therapy & Joint Mobilization",
      shortDescription:
        "Advanced hands-on passive and active mobilization techniques designed to restore physiological joint glide and eliminate structural restrictions.",
      fullDescription:
        "Orthopedic Manual Physical Therapy (OMPT) is the clinical cornerstone of Physiogenix. Using internationally validated manual techniques (Maitland, Mulligan, and Kaltenborn concepts), Dr. Faiza precisely assesses and treats dysfunctions of the spine and peripheral joints. Rather than using passive electronic heat packs, manual therapy directly addresses joint capsule contractures, impingements, and restricted movement axes.",
      clinicalIndications: [
        "Restricted joint range of motion (Spine, Shoulder, Hip, Knee)",
        "Facet joint locked syndrome and spinal stiffness",
        "Acute and chronic joint hypomobility",
        "Post-immobilization stiffness following cast or sling removal",
        "Persistent musculoskeletal mechanical blocks",
      ],
      treatmentModalities: [
        "Grade I–IV spinal and peripheral joint mobilizations",
        "Mobilization with Movement (Mulligan concept)",
        "Myofascial trigger point release and friction massage",
        "Joint capsule stretching and functional realignment",
      ],
      expectedOutcomes: [
        "Immediate restoration of functional joint mobility",
        "Rapid reduction in localized intra-articular pressure and pain",
        "Restored biomechanical arthrokinematics during daily movements",
      ],
      typicalSessionCount: "6 – 10 sessions based on joint chronicity",
      featuredBadge: "Core Speciality",
      iconName: "Activity",
    },
    {
      id: "spinal-care",
      slug: "spinal-care",
      title: "Spine Rehabilitation (Cervical, Thoracic & Lumbar)",
      shortDescription:
        "Root-cause spinal decompressive and postural rehabilitation protocols for herniated discs, lumbago, and chronic neck strain.",
      fullDescription:
        "Spinal pain is rarely an isolated problem; it stems from mechanical load imbalances, facet joint lock, or disc extrusion pressing on neurological pathways. At Physiogenix, our spine rehabilitation protocol integrates segmental manual spinal decompression, directional preference testing, and deep spinal stabilizer re-activation (multifidus and transversus abdominis).",
      clinicalIndications: [
        "Lumbar disc bulge / herniation (L4-L5, L5-S1)",
        "Cervical radiculopathy and neck spasm",
        "Thoracic spine stiffness and ribcage restrictions",
        "Degenerative disc disease and spondylosis",
        "Chronic postural back ache from sedentary desk work",
      ],
      treatmentModalities: [
        "Directional preference McKenzie-based mechanical diagnosis",
        "Gentle manual spinal traction and mobilization",
        "Suboccipital and paraspinal soft-tissue release",
        "Progressive spinal stabilization and neutral spine loading",
      ],
      expectedOutcomes: [
        "Centralization and elimination of radiating back/neck pain",
        "Reinforced segmental spinal core stamina",
        "Protected posture during lifting, sitting, and driving",
      ],
      typicalSessionCount: "8 – 12 sessions maximum",
      featuredBadge: "High Demand",
      iconName: "ShieldAlert",
    },
    {
      id: "headache-migraine",
      slug: "headache-migraine",
      title: "Headache & Cervicogenic Migraine Management",
      shortDescription:
        "Specialized upper cervical spine decompression and suboccipital release to treat chronic tension and cervicogenic headaches.",
      fullDescription:
        "Many patients struggling with chronic daily headaches or recurring migraines suffer from cervicogenic origin—referred pain originating from the upper cervical vertebrae (C1–C3) and suboccipital muscular spasms compressing the greater occipital nerve. Our specialized protocol targets the precise upper cervical joints and deep posterior neck musculature to stop the headache loop without relying on painkillers.",
      clinicalIndications: [
        "Cervicogenic headaches originating from base of skull",
        "Tension headaches from screen fatigue and poor posture",
        "Forward head carriage (Text Neck Syndrome)",
        "Facial and ocular pressure stemming from neck stiffness",
        "Occipital neuralgia and scalp tenderness",
      ],
      treatmentModalities: [
        "Upper cervical manual mobilization (C0-C1-C2)",
        "Suboccipital inhibition and myofascial decompression",
        "Deep neck flexor (longus colli/capitis) activation",
        "Dry needling of upper trapezius and levator scapulae",
      ],
      expectedOutcomes: [
        "Substantial reduction in headache frequency and intensity",
        "Relief of retro-orbital pressure and skull tenderness",
        "Corrected cervical curvature and reduced medication reliance",
      ],
      typicalSessionCount: "6 – 8 sessions",
      featuredBadge: "Targeted Relief",
      iconName: "BrainCircuit",
    },
    {
      id: "sciatica-nerve-rehabilitation",
      slug: "sciatica-nerve-rehabilitation",
      title: "Sciatica & Nerve Compression Protocol",
      shortDescription:
        "Evidence-based neural mobilization, piriformis release, and spinal decompression for shooting leg, glute, and nerve pain.",
      fullDescription:
        "Sciatica occurs when the sciatic nerve is irritated, trapped, or compressed either at the lumbar nerve roots (lumbar spine disc protrusion) or in the deep gluteal space (piriformis syndrome). Our protocol combines specialized neurodynamic testing, gentle nerve flossing, piriformis manual release, and pelvic leveling to free the sciatic nerve from mechanical entrapment.",
      clinicalIndications: [
        "Shooting electric shock pain down buttocks, hamstring, or calf",
        "Numbness, tingling, or pins-and-needles in the foot or toes",
        "Piriformis syndrome and deep buttock pain aggravated by sitting",
        "Lumbar spinal stenosis with neurogenic claudication",
      ],
      treatmentModalities: [
        "Neurodynamic slider and tensioner nerve gliding exercises",
        "Manual decompression of deep gluteal rotators",
        "Lumbar lateral shift correction and extension therapy",
        "Pelvic asymmetry correction and hip mobilization",
      ],
      expectedOutcomes: [
        "Abolition of peripheral numbness and sharp radiating nerve pain",
        "Restored ability to sit, drive, and walk without limitation",
        "Nerve glide restoration without surgical intervention",
      ],
      typicalSessionCount: "8 – 12 sessions",
      featuredBadge: "Clinical Specialty",
      iconName: "Zap",
    },
    {
      id: "frozen-shoulder-rehabilitation",
      slug: "frozen-shoulder-rehabilitation",
      title: "Frozen Shoulder & Rotator Cuff Care",
      shortDescription:
        "Capsular stretching, rotator cuff rehabilitation, and scapulothoracic rhythm correction for severe shoulder stiffness.",
      fullDescription:
        "Adhesive capsulitis (frozen shoulder) and rotator cuff tears can cripple arm function and sleep quality. Whether in the freezing, frozen, or thawing stage, Dr. Faiza provides precise glenohumeral joint distraction, capsular stretch, and scapular rhythm re-coordination that gently break adhesions and restore overhead mobility.",
      clinicalIndications: [
        "Adhesive capsulitis (stages 1, 2, and 3)",
        "Rotator cuff tendonitis, impingement, and partial tears",
        "Inability to reach behind back, fasten clothes, or sleep on shoulder",
        "Calcific tendonitis and bicipital tendon strain",
      ],
      treatmentModalities: [
        "Inferior and posterior glenohumeral manual glides",
        "Scapulothoracic manual release and winging correction",
        "Eccentric rotator cuff strengthening and isometric stability",
        "Therapeutic dry needling for supraspinatus and infraspinatus",
      ],
      expectedOutcomes: [
        "Restoration of internal/external rotation and overhead reach",
        "Elimination of deep dull aching night shoulder pain",
        "Full return to sports, gym lifting, and functional daily tasks",
      ],
      typicalSessionCount: "8 – 12 sessions",
      featuredBadge: "Functional Restoration",
      iconName: "Compass",
    },
    {
      id: "posture-scoliosis-correction",
      slug: "posture-scoliosis-correction",
      title: "Posture Restoration & Scoliosis Management",
      shortDescription:
        "Comprehensive 3D biomechanical posture correction, scoliosis stabilization, and ergonomic conditioning for modern desk lifestyles.",
      fullDescription:
        "Posture is not simply 'standing straight'; it is the dynamic alignment of the musculoskeletal system against gravity. Long hours at laptops, phones, and driving create structural adaptations like kyphosis, rounded shoulders, pelvic tilts, and compensatory scoliosis curves. Dr. Faiza’s posture restoration protocol addresses muscular shortening, weak postural phasic muscles, and spinal balance.",
      clinicalIndications: [
        "Postural thoracic kyphosis and rounded shoulder syndrome",
        "Anterior pelvic tilt and swayback posture",
        "Mild to moderate idiopathic scoliosis in adolescents and adults",
        "Chronic office neck strain and upper cross syndrome",
        "Repetitive ergonomic strain from corporate work",
      ],
      treatmentModalities: [
        "Photographic and manual posture analysis",
        "Pectoral and hip flexor myofascial lengthening",
        "Rhomboid, middle/lower trapezius, and serratus anterior activation",
        "Personalized workstation ergonomic conditioning setup",
      ],
      expectedOutcomes: [
        "Natural upright posture without conscious straining",
        "Symmetrical shoulder height and leveled pelvis",
        "Prevention of degenerative spine wear and joint degeneration",
      ],
      typicalSessionCount: "6 – 10 sessions",
      featuredBadge: "Signature Focus",
      iconName: "Layers",
    },
    {
      id: "sports-injury-rehabilitation",
      slug: "sports-injury-rehabilitation",
      title: "Sports Injury Rehabilitation & Return-to-Play",
      shortDescription:
        "Sport-specific biomechanical recovery, ligament rehabilitation, and dynamic athletic conditioning to get you back into play.",
      fullDescription:
        "From gym athletes and runners to cricket and padel players in Islamabad, athletic injuries require more than rest—they require progressive tissue loading and dynamic stability re-education. We design athletic rehabilitation pipelines that guide athletes through acute inflammation, tendon remodelling, eccentric loading, and sport-specific plyometrics.",
      clinicalIndications: [
        "ACL, MCL, and meniscus post-injury or post-surgery rehab",
        "Ankle sprains, chronic ankle instability, and Achilles tendinopathy",
        "Tennis elbow (lateral epicondylitis) and golfer's elbow",
        "Hamstring, groin, and calf muscular strains",
        "Patellofemoral pain syndrome (Runner's knee)",
      ],
      treatmentModalities: [
        "Sport-specific movement screening and kinetic chain analysis",
        "Eccentric tendon remodeling protocols",
        "Proprioceptive balance training and neuromuscular control",
        "Return-to-sport agility and load capacity testing",
      ],
      expectedOutcomes: [
        "Complete tissue healing with optimal tensile strength",
        "Elimination of reinjury vulnerability through kinetic chain balance",
        "Confident, pain-free return to training and competition",
      ],
      typicalSessionCount: "8 – 12 sessions",
      featuredBadge: "Athletic Performance",
      iconName: "TrendingUp",
    },
    {
      id: "dry-needling-cupping",
      slug: "dry-needling-cupping",
      title: "Certified Dry Needling & Dynamic Cupping (CDNP / CDDC)",
      shortDescription:
        "Evidence-based intramuscular stimulation and myofascial decompression to rapidly deactivate stubborn muscular trigger points.",
      fullDescription:
        "Administered under sterile medical protocol by Dr. Faiza (Certified Dry Needling Practitioner & Certified Dynamic Cupping Practitioner), this advanced therapy uses ultra-fine filament needles to elicit a localized twitch response in taut bands of muscle. Coupled with silicone and dynamic cupping, it delivers immediate decompression, accelerates local circulation, and relieves chronic knots.",
      clinicalIndications: [
        "Deep chronic muscle knots and hyperirritable trigger points",
        "Trapezius and levator scapulae chronic spasms",
        "Myofascial pain syndrome unresponsive to stretching",
        "Iliotibial (IT) band tightness and gluteal contractures",
        "Plantar fasciitis and recalcitrant calf tightness",
      ],
      treatmentModalities: [
        "Precision intramuscular trigger point dry needling (Primephysio standard)",
        "Dynamic and static medical dry cupping",
        "Myofascial gliding with biocompatible emollients",
        "Post-needling neuro-sensory downregulation techniques",
      ],
      expectedOutcomes: [
        "Immediate release of deep muscle spasm and chronic knotting",
        "Enhanced microvascular blood flow and waste clearance",
        "Rapid restoration of painless range of motion within 24–48 hours",
      ],
      typicalSessionCount: "3 – 6 sessions (integrated into comprehensive plan)",
      featuredBadge: "Certified Specialist",
      iconName: "Sparkles",
    },
  ],

  conditionsTreated: [
    {
      category: "Spine, Neck & Head",
      items: [
        "Cervical Spondylosis & Disc Bulge",
        "Chronic Lower Back Pain (Lumbago)",
        "Cervicogenic Migraines & Headaches",
        "Sciatica & Radiating Nerve Pain",
        "Facet Joint Arthropathy",
        "Text Neck Syndrome",
      ],
    },
    {
      category: "Shoulder & Upper Limb",
      items: [
        "Frozen Shoulder (Adhesive Capsulitis)",
        "Rotator Cuff Tendonitis & Impingement",
        "Tennis Elbow & Golfer's Elbow",
        "Carpal Tunnel Syndrome",
        "Scapular Winging & Pain",
        "Bicep Tendinopathy",
      ],
    },
    {
      category: "Hip, Knee & Lower Limb",
      items: [
        "ACL / Meniscus Rehabilitation",
        "Patellofemoral Pain Syndrome",
        "Hip Impingement & Bursitis",
        "Plantar Fasciitis & Heel Spurs",
        "Achilles Tendinopathy",
        "Recurrent Ankle Inversion Sprains",
      ],
    },
    {
      category: "Posture & Complex Pain",
      items: [
        "Idiopathic Scoliosis Stabilization",
        "Thoracic Kyphosis & Round Shoulders",
        "Anterior Pelvic Tilt Correction",
        "Myofascial Pain Syndrome",
        "Post-Surgical Joint Stiffness",
        "Chronic Ergonomic Desk Fatigue",
      ],
    },
  ],

  verifiedTestimonials: [
    {
      id: "t1",
      patientName: "Hamza R.",
      condition: "Severe Sciatica & Lumbar Disc Extrusion",
      quote:
        "After 6 months of being told surgery was my only option for sciatica, Dr. Faiza assessed my spine thoroughly on day one. Within 4 sessions of manual mobilization and nerve flossing, the shooting pain down my leg was gone. By session 9, I was back in the gym pain-free. The 12-session cap proved she genuinely cares about results, not keeping you dependent.",
      outcome: "100% leg pain resolution; avoided spinal surgery.",
      verifiedSource: "Google Review • Islamabad",
      rating: 5,
    },
    {
      id: "t2",
      patientName: "Ayesha K.",
      condition: "Chronic Cervicogenic Migraines (3+ Years)",
      quote:
        "I suffered from debilitating weekly migraines starting from the base of my neck. Dr. Faiza identified upper cervical dysfunction and combined manual therapy with gentle dry needling. For the first time in three years, I have gone two consecutive months without a single migraine. Her clinic is peaceful, clean, and truly world-class.",
      outcome: "Migraine-free for over 8 weeks; zero painkiller dependency.",
      verifiedSource: "Google Review • Islamabad",
      rating: 5,
    },
    {
      id: "t3",
      patientName: "Bilal T.",
      condition: "Frozen Shoulder (Stage 2 Capsulitis)",
      quote:
        "I could not lift my right arm past 45 degrees or put on a jacket without severe pain. Dr. Faiza's hands-on technique is unmatched in Islamabad. She took the time to explain every joint glide and gave me clear exercises. My shoulder mobility is completely restored in 8 sessions.",
      outcome: "Full 180° shoulder abduction restored.",
      verifiedSource: "Google Review • Islamabad",
      rating: 5,
    },
    {
      id: "t4",
      patientName: "Mariam S.",
      condition: "Office Desk Postural Kyphosis & Chronic Neck Spasm",
      quote:
        "Working 10 hours a day on a laptop had completely wrecked my upper back and posture. Dr. Faiza's posture restoration program addressed the root imbalances rather than just putting heating pads on me. The difference in my posture and energy is unbelievable.",
      outcome: "Natural erect posture restored; tension headaches eliminated.",
      verifiedSource: "Google Review • Islamabad",
      rating: 5,
    },
  ],

  faqs: [
    {
      category: "assessment",
      question: "What happens during my initial assessment appointment?",
      answer:
        "Your first visit is a comprehensive 45-minute clinical evaluation led personally by Dr. Faiza. It includes a medical history review, neurological screen, joint mobility palpation, muscle balance testing, and functional posture analysis. You will receive an honest diagnosis of the root cause and a clear outline of your recovery plan.",
    },
    {
      category: "philosophy",
      question: "Why does Physiogenix cap treatment plans at 12 sessions max?",
      answer:
        "We believe healthcare should empower patients, not foster permanent dependency. When the true biomechanical root cause is accurately treated with skilled manual therapy and targeted exercise, most musculoskeletal conditions show marked resolution within 6 to 10 sessions. We cap care at 12 sessions to ensure transparency and accountability.",
    },
    {
      category: "treatments",
      question: "What makes manual therapy different from machines like ultrasound or TENS?",
      answer:
        "Passive machines provide only temporary sensory distraction without altering restricted joint capsules or dysfunctional movement mechanics. Orthopedic manual therapy uses skilled clinical hands to precisely glide articular surfaces, decompress pinched nerves, and release fibrotic fascial adhesions for lasting structural correction.",
    },
    {
      category: "treatments",
      question: "Is Dry Needling painful, and how is it different from acupuncture?",
      answer:
        "Dry needling is an evidence-based western clinical intervention targeting myofascial trigger points in tight muscles, unlike traditional acupuncture which focuses on energy meridians. Patients typically feel a brief, mild dull ache or local muscle twitch that signals release. Most patients report substantial pain relief within 24 to 48 hours.",
    },
    {
      category: "logistics",
      question: "Do I need a doctor's referral to book an appointment?",
      answer:
        "No prior doctor's prescription is required. As a Doctor of Physical Therapy (DPT), Dr. Faiza Yousef is a primary care physical therapist qualified to assess, diagnose, and treat musculoskeletal disorders independently. If your condition warrants advanced medical imaging or surgical consult, we refer you to trusted specialists.",
    },
    {
      category: "logistics",
      question: "What should I wear to my physiotherapy appointment?",
      answer:
        "Please wear comfortable, loose-fitting athletic clothing (such as a t-shirt and track pants or shorts) that allows Dr. Faiza to easily examine and palpate the spine, neck, shoulders, hips, or knees being treated.",
    },
    {
      category: "logistics",
      question: "Where is the clinic located in Islamabad and is parking available?",
      answer:
        "Physiogenix is located on the 2nd Floor, Chaudhary Plaza, Bhittai Road, Sector F-7 Markaz, Islamabad (directly above Medicsi Hospital, beside the PSO petrol station, near Jinnah Super Market). Convenient street and plaza parking is available directly in front of the building.",
    },
  ],
};

