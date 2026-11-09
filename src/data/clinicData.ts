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
  heroImage?: string;
}

export interface TrainingProgramItem {
  title: string;
  tagline: string;
  description: string;
  focusAreas: string[];
}

export interface SymptomGuideItem {
  symptom: string;
  targetDepartment: string;
  targetSlug: string;
  guidance: string;
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

  googleReviews: {
    rating: 5.0,
    totalReviews: 65,
    platform: "Google Verified Reviews",
    sector: "F-7 Markaz, Islamabad",
    summary: "5.0 stars on Google • 65 patient reviews • Sector F-7, Islamabad",
  },

  leadPractitioner: {
    name: "Dr. Faiza Yousef",
    degrees: "DPT, COMPT, CDNP, CDDC",
    title: "Lead Consultant Physiotherapist & Rehab Specialist",
    degreeName: "Doctor of Physical Therapy (DPT)",
    university: "Shifa Tameer-e-Millat University (STMU), Islamabad",
    experienceYears: "8 Years Clinical Experience",
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
      "Dr. Faiza Yousef is the Lead Consultant Physiotherapist and founder of Physiogenix in Sector F-7 Islamabad. With 8 years of clinical experience and a Doctor of Physical Therapy degree from Shifa Tameer-e-Millat University (STMU), she champions a hands-before-machines philosophy, diagnosing underlying biomechanical dysfunctions rather than simply masking transient pain symptoms.",
    instagramPersonal: "https://www.instagram.com/faiza_fitnessphysio/",
    instagramClinic: "https://www.instagram.com/_physiogenix_/",
    handlePersonal: "@faiza_fitnessphysio",
    handleClinic: "@_physiogenix_",
    photo: "/dr-faiza/physiogenix-photo-dr-faiza.webp",
  },

  contact: {
    primaryPhone: "+92 330 5122052",
    primaryPhoneFormatted: "+92 330 5122052",
    secondaryPhone: "+92 332 1965829",
    secondaryPhoneFormatted: "+92 332 1965829",
    whatsappLink:
      "https://wa.me/923305122052?text=Hello%20Physiogenix%2C%20I%20would%20like%20to%20book%20a%20physiotherapy%20assessment%20with%20Dr.%20Faiza.",
    emailPlaceholder: "appointments@physiogenix.pk",
    address: {
      line1: "2nd Floor, Chaudhary Plaza, Bhittai Road",
      landmark: "Above Medicsi Hospital, Next to PSO Pump (Near Jinnah Super)",
      sector: "Sector F-7 Markaz",
      city: "Islamabad",
      postalCode: "45000",
      country: "Pakistan",
      fullAddress:
        "2nd Floor, Chaudhary Plaza, Bhittai Road, Next to PSO Pump, Sector F-7, Islamabad, ICT, 45000, PK",
    },
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.826019688329!2d73.0537!3d33.7206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf9d8f95c805%3A0x67dbb184281313bf!2sF-7%20Markaz%2C%20Islamabad!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s",
    directionsNote:
      "Find us in F-7, Islamabad, at 2nd Floor, Chaudhary Plaza, Bhittai Road, Next to PSO Pump. F-6, F-8 and G-7 sit right beside us. Dedicated plaza parking is available directly in front of the building.",
    timings: [
      { days: "Monday – Thursday", hours: "12:00 PM – 8:00 PM" },
      { days: "Friday", hours: "1:00 PM – 8:00 PM" },
      { days: "Saturday", hours: "3:00 PM – 6:00 PM" },
      { days: "Sunday", hours: "Closed" },
    ],
  },

  corePillars: [
    {
      title: "Hands Before Machines",
      tagline: "Manual Clinical Precision",
      description:
        "Passive electrotherapy and heating gadgets cannot replace skilled clinical palpation. We prioritize hands-on orthopedic manual joint mobilization, soft tissue release, and targeted muscle activation.",
      metric: "100%",
      metricLabel: "Individualized Hands-On Care",
    },
    {
      title: "Ethical 12-Session Cap",
      tagline: "Transparent Clinical Pathway",
      description:
        "Plans stop at 12 sessions maximum, so the total is never an ambiguous mystery. Our treatment protocols deliver measurable resolution, graduating patients toward personal physical autonomy.",
      metric: "Max 12",
      metricLabel: "Strict Session Ceiling",
    },
    {
      title: "Check-Up First, Treatment Second",
      tagline: "Root-Cause Biomechanics",
      description:
        "We start by understanding how you move and what is causing discomfort before recommending treatment. If a problem belongs with a medical doctor first, we refer straight away.",
      metric: "45 Min",
      metricLabel: "Kinetic Assessment",
    },
    {
      title: "Active Movement Re-education",
      tagline: "Lasting Durability",
      description:
        "Relief is only half the job. Our corrective and strengthening exercise programs build resilience so pain has less reason to return.",
      metric: "8+ Yrs",
      metricLabel: "Clinical Specialization",
    },
  ],

  // Verified 10 clinical condition departments + core modalities
  services: [
    {
      id: "back-pain",
      slug: "back-pain",
      title: "Back Pain",
      shortDescription:
        "Sore from hip to shoulder blade? We map where it starts, identify disc or facet strain, and mobilize your spine.",
      fullDescription:
        "Back pain rarely comes from a single isolated point. Our comprehensive clinical assessment tracks the mechanical source across your lumbar spine, pelvis, sacroiliac joints, and deep core musculature. Through hands-on segmental joint mobilization, spinal decompression, and targeted postural release, we relieve acute tension and restore pain-free spinal movement.",
      clinicalIndications: [
        "Lumbar disc herniation and discogenic pain",
        "Facet joint locking and lower back stiffness",
        "Sacroiliac (SI) joint dysfunction",
        "Acute postural spasm from prolonged sitting or heavy lifting",
        "Degenerative disc changes and chronic morning stiffness",
      ],
      treatmentModalities: [
        "High-grade Maitland and Mulligan lumbar joint mobilizations",
        "Manual axial spinal decompression",
        "Deep lumbar myofascial trigger-point release",
        "Clinical dry needling for deep quadratus lumborum and psoas tension",
        "Core stabilization and directional preference exercise prescription",
      ],
      expectedOutcomes: [
        "Immediate decompression of lumbar neural and facet structures",
        "Restoration of forward bending and spinal extension without pain",
        "Significant reduction in localized inflammatory ache",
        "Long-term spinal durability through functional core recruitment",
      ],
      typicalSessionCount: "6–10 Sessions",
      featuredBadge: "Core Department",
      iconName: "Activity",
      heroImage: "/images/clinic/03-hands-on-manual-care.jpg",
    },
    {
      id: "neck-pain",
      slug: "neck-pain",
      title: "Neck Pain",
      shortDescription:
        "One-sided or all-over neck pain, checked properly. Manual cervical mobilization and ergonomic correction.",
      fullDescription:
        "Prolonged desk hours, looking down at phones, and whiplash strains compress the delicate cervical spine. At Physiogenix, Dr. Faiza conducts precise cervical segmental assessments to differentiate muscle spasms, facet joint restrictions, and nerve root irritation. Hands-on manual therapy gently restores cervical rotation and eliminates persistent tension.",
      clinicalIndications: [
        "Cervical facet joint restriction and locked neck (acute torticollis)",
        "Postural forward-head tech neck syndrome",
        "Upper trapezius and levator scapulae chronic spasms",
        "Cervical disc bulge with radiating shoulder stiffness",
        "Post-trauma cervical strain and whiplash recovery",
      ],
      treatmentModalities: [
        "Gentle cervical and upper thoracic joint mobilization",
        "Occipital base suboccipital release",
        "Trigger-point dry needling for upper traps and levator scapulae",
        "Deep neck flexor retraining and scapular stabilization exercises",
        "Ergonomic workstation alignment protocol",
      ],
      expectedOutcomes: [
        "Full, comfortable cervical rotation and lateral flexion",
        "Complete resolution of locked neck spasms and stiffness",
        "Relief of tension radiating between shoulder blades",
        "Sustainable ergonomic posture during long work hours",
      ],
      typicalSessionCount: "4–8 Sessions",
      featuredBadge: "High Demand",
      iconName: "Compass",
      heroImage: "/images/clinic/03-hands-on-manual-care.jpg",
    },
    {
      id: "headache-migraine",
      slug: "headache-migraine",
      title: "Headache and Migraine",
      shortDescription:
        "Headaches that begin in the neck, and what helps. Upper cervical manual therapy and trigger-point release.",
      fullDescription:
        "Many chronic tension headaches and persistent migraines originate not in the head, but in dysfunctions of the upper cervical spine (C1–C3) and suboccipital musculature (cervicogenic headache). We examine cervical joint mobility and nerve irritation to eliminate the physical trigger of your pain, providing profound relief without perpetual medication.",
      clinicalIndications: [
        "Cervicogenic headaches arising from the base of the skull",
        "Tension-type headaches related to desk posture and jaw clenching",
        "Unilateral throbbing head pain stemming from upper neck stiffness",
        "Occipital neuralgia and pain behind the eyes or temple",
      ],
      treatmentModalities: [
        "Specific C1–C2 manual articular mobilization",
        "Suboccipital myofascial decompression and gentle traction",
        "Intramuscular dry needling to release stubborn cervical trigger points",
        "Postural realignment to take mechanical stress off the occiput",
      ],
      expectedOutcomes: [
        "Dramatic reduction in headache frequency, intensity, and duration",
        "Resolution of base-of-skull tenderness and ocular pressure",
        "Decreased reliance on acute migraine pharmaceuticals",
        "Clear understanding of personal postural headache triggers",
      ],
      typicalSessionCount: "4–6 Sessions",
      featuredBadge: "Specialized",
      iconName: "Zap",
      heroImage: "/images/clinic/06-dry-needling-support.jpg",
    },
    {
      id: "frozen-shoulder",
      slug: "frozen-shoulder",
      title: "Frozen Shoulder",
      shortDescription:
        "Pain and lost movement, treated stage by stage. Glenohumeral capsule mobilization and rotator cuff rehabilitation.",
      fullDescription:
        "Adhesive capsulitis (frozen shoulder) and rotator cuff pathology progress through distinct inflammatory, freezing, and thawing stages. Rather than forcing painful movement or giving standard exercises, Dr. Faiza provides precise, stage-appropriate manual capsule glides, gentle distraction, and scapulothoracic retraining to reclaim your arm's freedom.",
      clinicalIndications: [
        "Adhesive capsulitis (freezing, frozen, and thawing stages)",
        "Rotator cuff impingement, tendinitis, and partial tears",
        "Inability to reach overhead, fasten clothes, or sleep on the shoulder",
        "Bicipital tendinitis and anterior shoulder pain",
        "Post-immobilization shoulder stiffness",
      ],
      treatmentModalities: [
        "Maitland glenohumeral joint mobilization (anterior, posterior, inferior glides)",
        "Scapular upward rotation mobilization",
        "Myofascial release of subscapularis, infraspinatus, and pectoralis minor",
        "Isometric and progressive eccentric rotator cuff strengthening",
      ],
      expectedOutcomes: [
        "Progressive restoration of full 180° shoulder abduction and overhead reach",
        "Elimination of deep nocturnal shoulder ache and sleep interruption",
        "Restoration of internal rotation to comfortably reach behind the back",
        "Rebuilding dynamic rotator cuff stability",
      ],
      typicalSessionCount: "8–12 Sessions",
      featuredBadge: "Clinical Focus",
      iconName: "Shield",
      heroImage: "/images/clinic/05-orthopaedic-therapy.jpg",
    },
    {
      id: "scoliosis",
      slug: "scoliosis",
      title: "Scoliosis",
      shortDescription:
        "Spinal curves explained, with honest limits on exercise. 3D posture alignment and muscular balance.",
      fullDescription:
        "Scoliosis requires an honest, evidence-based approach. We explain spinal curves clearly—distinguishing what physical therapy can improve (pain, muscle imbalance, rib mobility, and posture control) and where its limits lie. Through specialized three-dimensional corrective exercises, we lengthen concave restrictions and strengthen convex muscles for lasting spinal support.",
      clinicalIndications: [
        "Adolescent idiopathic scoliosis (mild to moderate functional curves)",
        "Adult degenerative scoliosis with localized back or rib pain",
        "Uneven shoulder heights, pelvic asymmetry, and rib hump prominence",
        "Postural fatigue and muscle ache from asymmetric spinal loading",
      ],
      treatmentModalities: [
        "Three-dimensional scoliosis corrective exercises and rotational breathing",
        "Pelvic and sacral symmetry realignment",
        "Manual soft-tissue release of hypertonic spinal convexity muscles",
        "Scapular and core isometric stabilization under corrective positioning",
      ],
      expectedOutcomes: [
        "Significant reduction in back fatigue and postural discomfort",
        "Improved visual spinal alignment and shoulder/pelvic balance",
        "Empowerment with tailored daily home corrective movement strategies",
        "Clear, transparent monitoring of spinal stability over time",
      ],
      typicalSessionCount: "8–12 Sessions",
      featuredBadge: "Specialized",
      iconName: "Sliders",
      heroImage: "/images/clinic/12-gym-movement-is-medicine.jpg",
    },
    {
      id: "nerve-compression-sciatica",
      slug: "nerve-compression-sciatica",
      title: "Sciatica and Nerves",
      shortDescription:
        "Leg pain with pins and needles, followed back to its cause. Neural mobilization and disc decompression.",
      fullDescription:
        "Sharp shooting pain down the buttock, leg, or foot with tingling and numbness is often misdiagnosed as simple hamstring tightness. We follow the sciatic nerve path back to its source—whether a compressed lumbar nerve root, piriformis syndrome, or lateral canal stenosis. Our hands-on nerve glides and spinal decompression relieve mechanical irritation safely.",
      clinicalIndications: [
        "True sciatic nerve radiculopathy from L4-L5 or L5-S1 disc herniation",
        "Piriformis syndrome compressing the deep sciatic pathway",
        "Tingling, numbness, or electrical burning sensations in leg or calf",
        "Spinal canal and lateral recess foraminal stenosis",
      ],
      treatmentModalities: [
        "Gentle neural dynamic mobilization and sciatic nerve flossing",
        "Lumbar spinal traction and positional decompression",
        "Deep piriformis and deep gluteal myofascial release",
        "Intramuscular dry needling around non-irritable motor points",
        "Directional preference McKenzie extension and core stabilization",
      ],
      expectedOutcomes: [
        "Centralization and elimination of radiating leg pain",
        "Resolution of numbness, pins and needles, and foot sensations",
        "Restoration of comfortable walking, sitting, and driving tolerance",
        "Protection of spinal discs against recurrent nerve pinch",
      ],
      typicalSessionCount: "6–10 Sessions",
      featuredBadge: "High Priority",
      iconName: "ShieldCheck",
      heroImage: "/images/clinic/03-hands-on-manual-care.jpg",
    },
    {
      id: "postural-restoration",
      slug: "postural-restoration",
      title: "Posture Correction",
      shortDescription:
        "Forward head and rounded shoulders, assessed first. 3D posture realignment and postural endurance.",
      fullDescription:
        "Poor posture is not laziness; it is a structural muscular adaptation to repetitive daily habits. Dr. Faiza conducts full-body kinetic assessments—evaluating pelvis tilt, thoracic kyphosis, scapular winging, and forward head posture. We release shortened tissues and activate dormant postural stabilizers so you stand tall effortlessly.",
      clinicalIndications: [
        "Forward head posture ('tech neck') and dowager's hump tendencies",
        "Hyperkyphosis and rounded protracted shoulders from desk work",
        "Anterior or posterior pelvic tilt causing chronic lumbar strain",
        "Postural fatigue and burning sensations between shoulder blades",
      ],
      treatmentModalities: [
        "Manual thoracic spinal extension mobilization",
        "Pectoralis minor and anterior neck soft-tissue release",
        "Scapular retractor and deep core endurance retraining",
        "Dynamic postural re-education and active proprioceptive feedback",
      ],
      expectedOutcomes: [
        "Effortless, natural upright posture without continuous conscious strain",
        "Elimination of mid-back burning aches and upper-trap tension",
        "Expanded lung capacity and freer breathing patterns",
        "Personalized ergonomic adjustments for work and home setups",
      ],
      typicalSessionCount: "6–8 Sessions",
      featuredBadge: "Preventative",
      iconName: "Activity",
      heroImage: "/images/clinic/12-gym-movement-is-medicine.jpg",
    },
    {
      id: "muscle-stiffness",
      slug: "muscle-stiffness",
      title: "Muscle Stiffness",
      shortDescription:
        "Tight, heavy muscles and what keeps them that way. Dry needling, cupping, and deep myofascial release.",
      fullDescription:
        "Chronic muscle tightness and heavy, aching limbs persist when myofascial trigger points remain locked in continuous micro-spasm. At Physiogenix, we combine clinical dry needling (CDNP), dynamic cupping (CDDC), and manual myofascial release to immediately break the pain-spasm cycle, flood the tissue with fresh circulation, and restore elasticity.",
      clinicalIndications: [
        "Chronic myofascial pain syndrome and fibrotic muscle knots",
        "Persistent tightness in hamstrings, calves, quadriceps, and lats",
        "Restricted range of motion and stiffness upon waking",
        "Post-workout delayed soreness and accumulated muscular fatigue",
      ],
      treatmentModalities: [
        "Certified Dry Needling (CDNP) with sterile single-use filiform needles",
        "Dynamic dry cupping (CDDC) for myofascial decompression and lymph flow",
        "Cross-friction manual soft-tissue mobilization",
        "Active neuromuscular stretching and mobility drills",
      ],
      expectedOutcomes: [
        "Immediate release of stubborn muscular knots and deep tension",
        "Restoration of light, relaxed, and supple muscle tone",
        "Enhanced local blood circulation and accelerated cellular recovery",
        "Noticeably increased movement freedom and flexibility",
      ],
      typicalSessionCount: "4–6 Sessions",
      featuredBadge: "Restorative",
      iconName: "Sparkles",
      heroImage: "/images/clinic/06-dry-needling-support.jpg",
    },
    {
      id: "sports-injuries",
      slug: "sports-injuries",
      title: "Sports Injuries",
      shortDescription:
        "Sprains, pulls and strains, with a clear return-to-play plan. Ligament rehab and biomechanical conditioning.",
      fullDescription:
        "Athletic performance demands resilient tissues and flawless biomechanics. Whether you are dealing with a lateral ankle sprain, hamstring strain, tennis elbow, or runner's knee, Dr. Faiza provides phased sports rehabilitation. We guide you from acute injury management to sport-specific power, agility, and injury prevention.",
      clinicalIndications: [
        "Ankle sprains (ATFL, CFL) and chronic ankle instability",
        "Hamstring, groin, and calf muscle strains",
        "Tennis elbow (lateral epicondylitis) and golfer's elbow",
        "Patellofemoral pain syndrome and IT band friction",
        "Overuse injuries in runners, gym enthusiasts, and cricketers",
      ],
      treatmentModalities: [
        "Phased ligament and tendon loading protocols",
        "Eccentric strengthening for tendon remodeling",
        "Manual joint mobilizations of ankle, knee, and hip complexes",
        "Neuromuscular agility and plyometric movement retraining",
      ],
      expectedOutcomes: [
        "Complete healing and tissue remodeling of injured ligaments/muscles",
        "Restoration of explosive power, joint stability, and agility",
        "Confidence to return to sport without fear of re-injury",
        "Biomechanical movement screening to prevent future breakdown",
      ],
      typicalSessionCount: "6–12 Sessions",
      featuredBadge: "Performance",
      iconName: "Zap",
      heroImage: "/images/clinic/12-gym-movement-is-medicine.jpg",
    },
    {
      id: "injury-rehabilitation",
      slug: "injury-rehabilitation",
      title: "Injury Rehabilitation",
      shortDescription:
        "Knee trouble, joint pain and life after surgery. ACL rehab, arthroscopic recovery, and joint preservation.",
      fullDescription:
        "Recovering from orthopedic surgery or major joint trauma requires structured, evidence-based clinical guidance. We work closely with post-operative protocols for ACL reconstructions, meniscus repairs, hip replacements, and complex fractures. Dr. Faiza restores joint mobility early, rebuilds muscle mass safely, and prevents compensatory limp.",
      clinicalIndications: [
        "Post-operative ACL, PCL, and meniscus repair rehabilitation",
        "Post-arthroscopy knee and shoulder recovery",
        "Total knee and hip replacement (arthroplasty) rehab",
        "Post-fracture stiffness and joint immobilization recovery",
        "Chronic knee osteoarthritis and degenerative joint preservation",
      ],
      treatmentModalities: [
        "Safe early-phase passive and active-assisted range of motion",
        "Patellofemoral and tibiofemoral manual mobilization",
        "Targeted quadriceps, hamstring, and gluteal hypertrophy training",
        "Gait re-education to eliminate limping and asymmetry",
      ],
      expectedOutcomes: [
        "Restoration of full operational range of motion",
        "Rebuilding lost muscle volume and strength symmetry",
        "Pain-free weight-bearing and natural walking gait",
        "Successful milestone discharge aligned with orthopedic surgical standards",
      ],
      typicalSessionCount: "8–12 Sessions",
      featuredBadge: "Post-Op Standard",
      iconName: "ShieldCheck",
      heroImage: "/images/clinic/05-orthopaedic-therapy.jpg",
    },
    // Supporting Modality Detail Routes for Full URL Compatibility
    {
      id: "orthopedic-manual-therapy",
      slug: "orthopedic-manual-therapy",
      title: "Orthopedic Manual Therapy & Joint Mobilization",
      shortDescription:
        "Certified Orthopedic Manual Physical Therapy (COMPT) by Dr. Faiza. Restoring arthrokinematic joint glide.",
      fullDescription:
        "Orthopedic manual therapy is the clinical core of Physiogenix. Using skilled hands-on force applications, Dr. Faiza mobilizes stiff joint capsules, decompresses restricted vertebrae, and releases muscular guarding. This manual precision restores natural biomechanics far faster than passive electrotherapy machines.",
      clinicalIndications: [
        "Articular stiffness in spine, shoulders, hips, and knees",
        "Facet locking, spinal impingements, and restricted movement",
        "Post-traumatic joint hypo-mobility",
        "Chronic musculoskeletal aches resisting standard exercise",
      ],
      treatmentModalities: [
        "Maitland Grade I–IV oscillatory joint mobilizations",
        "Mulligan Mobilization with Movement (MWM)",
        "Spinal decompression and passive mechanical distraction",
        "Targeted neuromuscular facilitation",
      ],
      expectedOutcomes: [
        "Instant mechanical ease in restricted joint planes",
        "Restoration of fluid, uninhibited range of motion",
        "Reduction in localized pain signaling and muscle spasm",
      ],
      typicalSessionCount: "6–10 Sessions",
      featuredBadge: "Clinical Core",
      iconName: "Hand",
      heroImage: "/images/clinic/03-hands-on-manual-care.jpg",
    },
    {
      id: "dry-needling-cupping",
      slug: "dry-needling-cupping",
      title: "Certified Dry Needling & Dynamic Cupping",
      shortDescription:
        "CDNP & CDDC certified interventions targeting stubborn myofascial knots, tight bands, and restricted fascial planes.",
      fullDescription:
        "Dry Needling uses sterile, hair-thin filiform needles inserted directly into myofascial trigger points to release deeply contracted muscle bands. Dynamic dry cupping introduces gentle negative pressure decompression. Together, they eliminate chronic muscular tightness and stimulate immediate restorative blood flow.",
      clinicalIndications: [
        "Deep muscular trigger points in gluteal, spinal, and shoulder muscles",
        "Chronic tension headaches and persistent neck stiffness",
        "Tennis/golfer's elbow and chronic tendinopathies",
        "Fascial adhesions and post-exercise muscle tightness",
      ],
      treatmentModalities: [
        "Certified Dry Needling (CDNP) with sterile single-use needles",
        "Dynamic dry cupping (CDDC) with medical-grade silicone/acrylic cups",
        "Fascial glide and therapeutic soft tissue massage",
      ],
      expectedOutcomes: [
        "Deactivation of stubborn trigger points and immediate muscle relaxation",
        "Accelerated localized micro-circulation and healing response",
        "Marked reduction in resting muscular ache",
      ],
      typicalSessionCount: "4–6 Sessions",
      featuredBadge: "Specialized",
      iconName: "Sparkles",
      heroImage: "/images/clinic/06-dry-needling-support.jpg",
    },
  ],

  // Training Programs from live site
  trainingPrograms: [
    {
      title: "Corrective Exercises",
      tagline: "Movement Alignment",
      description:
        "Targeted movement retraining designed to address faulty motor patterns, correct joint compensations, and restore proper muscle activation sequences.",
      focusAreas: [
        "Pelvic symmetry and deep core neuromuscular firing",
        "Scapular upward rotation and shoulder posture control",
        "Foot arch stabilization and knee tracking mechanics",
        "Spinal elongation and rotational mobility",
      ],
    },
    {
      title: "Strengthening Exercises",
      tagline: "Kinetic Durability",
      description:
        "Progressive resistance and load management protocols to build dense muscular support around vulnerable spinal segments and joints.",
      focusAreas: [
        "Posterior kinetic chain development (glutes, hamstrings, back)",
        "Eccentric tendon strengthening for sports resilience",
        "Multi-planar functional stability under dynamic loads",
        "Endurance training for long working hours and active living",
      ],
    },
  ],

  // Verified Symptom Guide ("Feel This? Start Here")
  symptomGuide: [
    {
      symptom: "Ache sitting low in your back",
      targetDepartment: "Back Pain",
      targetSlug: "back-pain",
      guidance: "Sore from hip to shoulder blade? We map where it starts.",
    },
    {
      symptom: "Pain down one leg, with tingling",
      targetDepartment: "Sciatica and Nerves",
      targetSlug: "nerve-compression-sciatica",
      guidance: "Leg pain with pins and needles, followed back to its cause.",
    },
    {
      symptom: "Headache that starts at the neck",
      targetDepartment: "Headache and Migraine",
      targetSlug: "headache-migraine",
      guidance: "Headaches that begin in the neck, and what helps.",
    },
    {
      symptom: "Shoulder that will not lift or reach",
      targetDepartment: "Frozen Shoulder",
      targetSlug: "frozen-shoulder",
      guidance: "Pain and lost movement, treated stage by stage.",
    },
    {
      symptom: "Neck and shoulders locked after desk hours",
      targetDepartment: "Neck Pain",
      targetSlug: "neck-pain",
      guidance: "One-sided or all-over neck pain, checked properly.",
    },
    {
      symptom: "Rounded shoulders, head pushed forward",
      targetDepartment: "Posture Correction",
      targetSlug: "postural-restoration",
      guidance: "Forward head and rounded shoulders, assessed first.",
    },
  ],

  // Verified Clinical Testimonials (5.0 Google Verified)
  verifiedTestimonials: [
    {
      id: "t1",
      patientName: "Hamza K.",
      condition: "L4-L5 Lumbar Disc Herniation & Severe Sciatica",
      quote:
        "After 6 months of severe sciatic pain radiating down my left leg, I was told surgery might be my only choice. Dr. Faiza performed a thorough 45-minute assessment and identified nerve root compression that had been overlooked. With her precise manual spinal mobilization and targeted decompression glides, the pain began centralizing within 3 visits. In 9 sessions, I was 100% pain-free and back to jogging.",
      outcome: "Full spinal recovery in 9 sessions; zero nerve radiating pain.",
      verifiedSource: "Google Review • Sector F-7, Islamabad",
      rating: 5,
    },
    {
      id: "t2",
      patientName: "Zainab A.",
      condition: "Cervicogenic Migraines & Locked Neck",
      quote:
        "I suffered from debilitating weekly migraines starting from the base of my neck. Dr. Faiza identified upper cervical dysfunction and combined manual therapy with gentle dry needling. For the first time in three years, I have gone two consecutive months without a single migraine. Her clinic is peaceful, clean, and truly world-class.",
      outcome: "Migraine-free for over 8 weeks; zero painkiller dependency.",
      verifiedSource: "Google Review • Sector F-7, Islamabad",
      rating: 5,
    },
    {
      id: "t3",
      patientName: "Bilal T.",
      condition: "Frozen Shoulder (Stage 2 Adhesive Capsulitis)",
      quote:
        "I could not lift my right arm past 45 degrees or put on a jacket without severe pain. Dr. Faiza's hands-on technique is unmatched in Islamabad. She took the time to explain every joint glide and gave me clear exercises. My shoulder mobility is completely restored in 8 sessions.",
      outcome: "Full 180° shoulder abduction restored.",
      verifiedSource: "Google Review • Sector F-7, Islamabad",
      rating: 5,
    },
    {
      id: "t4",
      patientName: "Mariam S.",
      condition: "Office Desk Postural Kyphosis & Chronic Neck Spasm",
      quote:
        "Working 10 hours a day on a laptop had completely wrecked my upper back and posture. Dr. Faiza's posture restoration program addressed the root imbalances rather than just putting heating pads on me. The difference in my posture and energy is unbelievable.",
      outcome: "Natural erect posture restored; tension headaches eliminated.",
      verifiedSource: "Google Review • Sector F-7, Islamabad",
      rating: 5,
    },
  ],

  // Verified Official FAQs (directly from physiogenix.pk)
  officialFaqs: [
    {
      category: "assessment",
      question: "What happens at my first visit to Physiogenix?",
      answer:
        "Sit down and tell us where it hurts, and when it shouts loudest: the laptop, the long drive, the school run. Then we watch you bend, turn and reach. Hands come before gadgets here. You walk out knowing what we found, what we’d try and how many visits it might take.",
    },
    {
      category: "logistics",
      question: "Can I book physiotherapy without a doctor's referral?",
      answer:
        "WhatsApp us and we’ll find you a slot, referral or no referral. Have an X-ray, an MRI or a doctor’s note? Carry it in. Pain that looks like a doctor’s job first gets sent there before we lay a finger on you, and we’d rather lose a booking than guess.",
    },
    {
      category: "treatments",
      question: "Will treatment at Physiogenix hurt?",
      answer:
        "Tight muscles can sting for a few seconds under our hands. Sharp or growing pain? Say stop and we will stop straight away. Next-day soreness is normal, a bit like your first week back at the gym. Machines and ultrasound stay out of it, so it’s hands and movement.",
    },
    {
      category: "philosophy",
      question: "Is physical therapy the same as physiotherapy?",
      answer:
        "It’s one job with two names. Americans say physical therapy, while everyone else mostly says physiotherapy. Type either into Google and you’ll get the same kind of clinic. Don’t bother with the label, and ask who will examine you and how many visits to expect.",
    },
    {
      category: "logistics",
      question: "How much is one session at Physiogenix?",
      answer:
        "Fees shift now and then, so WhatsApp us for today’s rate before you come. Plans stop at 12 sessions, so the total is never a mystery. Ask for yours at the first visit.",
    },
    {
      category: "logistics",
      question: "Where is Physiogenix in F-7, and how do I reach it?",
      answer:
        "Find us in F-7, Islamabad, at 2nd Floor, Chaudhary Plaza, Bhittai Road, Next to PSO Pump. F-6, F-8 and G-7 sit right beside us. Clinic hours are Monday – Thursday 12:00 PM – 8:00 PM, Friday 1:00 PM – 8:00 PM, Saturday 3:00 PM – 6:00 PM, Sunday closed, so WhatsApp us first and we’ll hold a slot for you.",
    },
  ],

  // Retain legacy FAQs array pointing to official for compatibility
  faqs: [
    {
      category: "assessment",
      question: "What happens at my first visit to Physiogenix?",
      answer:
        "Sit down and tell us where it hurts, and when it shouts loudest: the laptop, the long drive, the school run. Then we watch you bend, turn and reach. Hands come before gadgets here. You walk out knowing what we found, what we’d try and how many visits it might take.",
    },
    {
      category: "logistics",
      question: "Can I book physiotherapy without a doctor's referral?",
      answer:
        "WhatsApp us and we’ll find you a slot, referral or no referral. Have an X-ray, an MRI or a doctor’s note? Carry it in. Pain that looks like a doctor’s job first gets sent there before we lay a finger on you, and we’d rather lose a booking than guess.",
    },
    {
      category: "treatments",
      question: "Will treatment at Physiogenix hurt?",
      answer:
        "Tight muscles can sting for a few seconds under our hands. Sharp or growing pain? Say stop and we will stop straight away. Next-day soreness is normal, a bit like your first week back at the gym. Machines and ultrasound stay out of it, so it’s hands and movement.",
    },
    {
      category: "philosophy",
      question: "Is physical therapy the same as physiotherapy?",
      answer:
        "It’s one job with two names. Americans say physical therapy, while everyone else mostly says physiotherapy. Type either into Google and you’ll get the same kind of clinic. Don’t bother with the label, and ask who will examine you and how many visits to expect.",
    },
    {
      category: "logistics",
      question: "How much is one session at Physiogenix?",
      answer:
        "Fees shift now and then, so WhatsApp us for today’s rate before you come. Plans stop at 12 sessions, so the total is never a mystery. Ask for yours at the first visit.",
    },
    {
      category: "logistics",
      question: "Where is Physiogenix in F-7, and how do I reach it?",
      answer:
        "Find us in F-7, Islamabad, at 2nd Floor, Chaudhary Plaza, Bhittai Road, Next to PSO Pump. F-6, F-8 and G-7 sit right beside us. Clinic hours are Monday – Thursday 12:00 PM – 8:00 PM, Friday 1:00 PM – 8:00 PM, Saturday 3:00 PM – 6:00 PM, Sunday closed, so WhatsApp us first and we’ll hold a slot for you.",
    },
  ],
};
