import { image, video } from "framer-motion/client"

// Import all images from your assets folder
const imageModules = import.meta.glob('../assets/images/**/*.{png,jpg,jpeg,gif,svg}', { eager: true })

// Convert to simple array of image URLs
const allImages = Object.entries(imageModules).reduce((acc, [path, module]) => {
  // Extract just the filename and folder for easy reference
  const filename = path.replace('../assets/images/', '').replace(/\.(png|jpg|jpeg|gif|svg)$/, '')
  acc[filename] = module.default
  return acc
}, {})


export const projects = {
  // IxD Projects (extensive case studies)
  'ar-navigation': {
    id: 'ar-navigation',
    title: 'AR-Navigation',
    subtitle: 'An AR navigation system for cognitive accessibility in libraries',
    type: 'ixd',
    year: '2024',
    duration: 'Individual project',
    team: 'Solo project',
    tools: ['Figma', 'Bezi', 'Adobe Illustrator', 'Blender'],
    tags: ['AR', 'Cognitive Accessibility', 'Wayfinding', 'User Research'],
    coverImage: allImages['thumbs/arnavigation_omslag'],
    heroVideo: 'https://player.vimeo.com/video/1067061936', // Add your video
    videoType: 'vertical',
    overview: 'Navigating large public indoor spaces like libraries can be challenging, especially for people with cognitive impairments. This project explored how Augmented Reality (AR) could improve wayfinding in such environments by providing real-time visual guidance directly through the user\'s smartphone camera.',
    sections: [
      {
        type: 'challenge',
        title: 'The Challenge',
        content: 'People with cognitive disabilities often struggle to navigate public environments because society doesn\'t always consider their needs when designing these spaces. Current library navigation relies heavily on static maps and text-heavy signage, creating information overload and making wayfinding difficult for visitors with ADHD, dyslexia, and other cognitive differences.',
        insights: [
          'Both library visitors and staff want improved signage to better orientation in public spaces',
          'Cognitive overload from visual information makes focus difficult to maintain',
          'Text-heavy wayfinding systems exclude people with reading difficulties',
          'Traditional maps and signs require complex interpretation skills'
        ]

      },
      {
        type: 'discovery',
        title: 'Research & Discovery',
        content: 'I conducted user interviews with people who have cognitive disabilities and performed a comprehensive literature review to understand the challenges of wayfinding in public spaces. The research revealed key insights about cognitive load, information processing, and navigation strategies.',
        insights: [
          'Users often feel overwhelmed by too much information at once',
          'Color coding and visual symbols work better than text for quick recognition',
          'People develop personal strategies like asking staff for help when lost',
          'Simple, intuitive graphics reduce cognitive burden significantly',
          'Familiar layouts help users navigate through pattern recognition'
        ],

      },
      {
        type: 'approach',
        title: 'Design Process',
        content: 'I followed a User-Centered Design approach, iterating through Research, Requirements, Design, and Evaluation phases. This ensured the solution directly addressed real user needs rather than assumed problems.',
        images: ['https://public-media.interaction-design.org/images/uploads/2737d331018d4207a7bf7f5e90eebec0.png'],
      },
      {
        type: 'solution',
        title: 'Requirements & Concept',
        content: 'Based on user research, I defined core requirements focused on reducing cognitive load through simple, visual AR guidance. The concept centers on minimal text, high contrast visuals, and intuitive directional indicators.',
        features: [
          'Visual AR guidance with simple arrows and symbols through phone camera',
          'Minimal text interface with short, clear instructions like "Follow the arrow"',
          'QR code scanning to set start points and destinations',
          'High contrast colors ensuring visibility against any background',
          'Distance indicators showing progress toward destination',
          'Clear completion message when user reaches their goal'
        ],
        content2: 'Broken down into categories the requirements were as following:',
        images: [allImages['ar-navigation/req_table']]
      },
      {
        type: 'process',
        title: 'Design Development',
        content: 'The design evolved from initial sketches through wireframes and mockups to a functional AR prototype. I focused on creating the simplest possible interface while maintaining full functionality for library navigation.',
        images: ['${import.meta.env.BASE_URL}images/ar-navigation/sketches.png', '${import.meta.env.BASE_URL}images/ar-navigation/wireframe.png', '${import.meta.env.BASE_URL}images/ar-navigation/mockup.png']
      },
      {
        type: 'solution',
        title: 'AR Prototype',
        content: 'I created an interactive prototype using Figma and Bezi that demonstrates AR wayfinding in a real library environment. Users can select destinations and follow visual arrows overlaid on their camera view to navigate successfully.',
        video: 'https://player.vimeo.com/video/1067061936',
        videoCaption: 'AR navigation prototype demo showing wayfinding to the Music Books & Films section (in swedish)',
        videoType: 'vertical',
      },
      {
        type: 'solution',
        title: 'User Testing Results',
        content: 'I tested the prototype with a user who has ADHD, the same person from my initial interviews. The test involved navigating from a starting point to the "Music Books and Films" section using only AR guidance.',
        insights: [
          'User found the visual arrows easy to follow and intuitive to use',
          'Concept reduced cognitive load by eliminating need to interpret signs',
          'AR guidance felt natural and required minimal learning curve',
          'User noted particular value for more complex environments',
          'Test confirmed proof-of-concept viability for further development'
        ]
      },
      {
        type: 'impact',
        title: 'Impact & Insights',
        content: 'The project demonstrates that AR technology has significant potential to improve cognitive accessibility in public spaces. By replacing complex text-based navigation with simple visual cues, we can create more inclusive environments.',
        insights: [
          'AR navigation successfully reduces cognitive burden for users with disabilities',
          'Visual guidance proves more intuitive than traditional wayfinding systems',
          'Technology can complement rather than replace existing accessibility features',
          'User-centered design is essential for creating truly accessible solutions'
        ]
      },
      {
        type: 'conclusion',
        title: 'Future Directions',
        content: 'This proof-of-concept opens possibilities for broader implementation across public spaces. Future development could integrate tactile navigation aids that also serve as AR anchors, creating dual-purpose accessibility features that benefit multiple user groups simultaneously. The research foundation supports scaling this approach to museums, hospitals, and other complex indoor environments.'
      }
    ]
  }
  ,

  'origin-story': {
    id: 'origin-story',
    title: 'OriginStory',
    subtitle: 'A browser extension designed to empower news consumers with a deeper understanding of news narratives',
    type: 'ixd',
    year: '2024',
    duration: '10 weeks',
    team: 'Solo project',
    tools: ['Figma', 'Illustrator'],
    tags: ['Browser Extension', 'News Analysis', 'Interface Design', 'Prototype'],
    coverImage: '${import.meta.env.BASE_URL}images/thumbs/OS_omslag.png',
    heroImage: '${import.meta.env.BASE_URL}images/thumbs/OS_omslag.png',
    heroVideo: 'https://vimeo.com/932809964',
    videoType: 'horizontal',
    overview: 'This project aimed to develop OriginStory, a browser extension designed to empower news consumers with a deeper understanding of news narratives.',
    sections: [
      {
        type: 'challenge',
        title: 'The Problem',
        content: 'The modern news landscape is complex and often fragmented. Consumers struggle to track the evolution of news stories, identify bias, and discern the credibility of information.'
      },
      {
        type: 'approach',
        title: 'The Goal',
        content: 'The goal was to create a user-friendly tool that allows news consumers to explore the relationships between different news sources covering the same story.'
      },
      {
        type: 'process',
        title: 'The Process',
        content: 'The primary goal of this project was to explore interface patterns and integrate them into a fictional service. Therefore, no extensive user research or real-world testing was conducted.'
      },
      {
        type: 'discovery',
        title: 'User Research',
        content: 'Based on the service description provided by our teacher, I brainstormed potential user needs and benefits. After this session I discussed the result with my teacher and two of my classmates. During this session I also brainstormed around different needs and certain functions the service could have. It also resulted with three simple persona descriptions.',
        images: ['${import.meta.env.BASE_URL}images/originstory/Brainstorm_users.png']
      },
      {
        type: 'discovery',
        title: 'Target Group',
        content: 'In today\'s fast-paced digital world, keeping up with the evolution of news stories can be challenging. OriginStory is designed for anyone who consumes news online, making it easier to explore different perspectives and connections between sources. While the primary audience is everyday news readers, the tool is equally valuable for journalists, researchers, and fact-checkers who seek a deeper understanding of how narratives develop over time. By ensuring an intuitive and accessible experience, OriginStory caters to users with varying levels of familiarity with news analysis tools—whether you\'re casually browsing headlines or conducting in-depth research. Ultimately, OriginStory is built for anyone who wants to think critically about the news they consume, providing a seamless way to navigate and analyze information in an increasingly complex media landscape.'
      },
      {
        type: 'approach',
        title: 'Design - Sketches',
        content: 'I began by sketching a low-fidelity design of the service, which helped me identify key interface patterns. As these patterns emerged, I translated my sketches into wireframes in Figma to better understand the layout and refine the design. While working on the main page, I also explored different variations of the filter box, experimenting with ways to improve usability. These sketches later evolved into wireframes.',
        images: ['${import.meta.env.BASE_URL}images/originstory/skisser.png']
      },
      {
        type: 'approach',
        title: 'Wireframes',
        content: 'While developing the wireframes, I identified two key interface patterns in my design and focused on expanding them: \n **Dashboard View** \n - This pattern provides a central hub where users can access key information and features. In OriginStory, this takes the form of a map of interconnected news sources, giving users an overview of how different stories relate to each other. \n **Canvas Plus Palette** \n - This pattern structures the interface with a central workspace (the canvas) and surrounding tools (the palette) for interacting with content. In OriginStory, the map view serves as the canvas, while the filter panel acts as the palette, allowing users to refine their view and focus on specific aspects of the news landscape.',
        images: ['${import.meta.env.BASE_URL}images/originstory/Wireframes_Main.png']
      },
      {
        type: 'solution',
        title: 'Interactive Prototype',
        content: 'The main page of OriginStory presents users with a clear and structured map view, offering a condensed yet comprehensive overview of key information. This interactive visualization allows users to efficiently navigate interconnected news stories. Clicking on a node reveals detailed information about that specific story. Users can also engage with the content by commenting on nodes or upvoting/downvoting others\' comments. The filter button allows users to refine their search, helping them focus on specific aspects or perspectives within a news story.',
        images: ['${import.meta.env.BASE_URL}images/originstory/interactive1.png', '${import.meta.env.BASE_URL}images/originstory/interactive2.png', '${import.meta.env.BASE_URL}images/originstory/interactive3.png']
      },
      {
        type: 'solution',
        title: 'Enhancing the User Experience',
        content: 'While developing the interactive prototype, I integrated two additional interface patterns to improve usability: \n **Animated Transitions** \n- Subtle animations enhance the user experience by providing visual feedback during interactions. In OriginStory, I implemented animations for hover states, selection states, and zooming within the map view, making navigation feel more intuitive and fluid. \n **Spinners and Loading Indicators** \n- To ensure users receive clear feedback when the system is processing data, I incorporated spinner animations that appear when applying filters to the map view.',
        images: ['${import.meta.env.BASE_URL}images/originstory/animatedtrans.gif', '${import.meta.env.BASE_URL}images/originstory/spinners.gif']
      },
      {
        type: 'approach',
        title: 'Aesthetics',
        content: 'OriginStory\'s design draws inspiration from traditional newspapers, incorporating an off-white background reminiscent of aged paper and off-black text to create a minimalistic and highly readable interface. This color palette enhances usability while reinforcing a sense of familiarity and credibility. These design choices ensure that users can quickly grasp the service, while also conveying a sense of professionalism and efficiency. The aesthetic is intentionally crafted to make the service feel like a seamless extension of the browser\'s core functionality, integrating naturally into the user\'s workflow.'
      },
      {
        type: 'solution',
        title: 'Logo Design',
        content: 'The "OS" logo features bold, interconnected letterforms, symbolizing the relationship between different news sources. The intentional separation within the letters represents how some sources may drift away from the original narrative—whether through shifts in terminology, framing, or bias—illustrating the evolving nature of news stories.',
        images: ['${import.meta.env.BASE_URL}images/originstory/Logo.png']
      },
      {
        type: 'conclusion',
        content: 'For a walkthrough of the prototype, please refer to the video at the top of the page.'
      }
    ]
  }
  ,

  '2gether-2-0': {
    id: '2gether-2-0',
    title: '2Gether 2.0',
    subtitle: 'A platform empowering digital creators with fair compensation and community support',
    type: 'ixd',
    year: '2024',
    duration: '8 weeks',
    team: 'Solo project',
    tools: ['Figma', 'Pen & Paper', 'Video prototyping'],
    tags: ['Mobile App', 'Creator Economy', 'Community Platform', 'User Research'],
    coverImage: '${import.meta.env.BASE_URL}images/thumbs/2gether_omslag.png',
    heroImage: null,
    heroVideo: 'https://player.vimeo.com/video/937755072', // Add your prototype walkthrough video
    videoType: 'horizontal',
    overview: '2Gether 2.0 is a platform designed to empower digital creators by providing a fair and transparent space for sharing their work while ensuring proper recognition and compensation. Many online platforms fail to adequately support digital creators, often offering **unfair compensation** and making it difficult for them to gain visibility and build sustainable income.',
    sections: [
      {
        type: 'challenge',
        title: 'The Problem',
        content: `Digital creators face significant challenges in today's online landscape. **Existing platforms often fail** to provide adequate support, offering unfair compensation structures that make it difficult for creators to build sustainable careers.

**Key issues include:**
- Lack of fair compensation models
- Limited visibility and discoverability 
- Difficulty building sustainable income streams
- Insufficient community support and recognition`,
        insights: [
          'Current platforms prioritize platform profits over creator compensation',
          'Creators struggle to gain visibility in saturated marketplaces',
          'Complex revenue sharing models often disadvantage creators',
          'Limited tools for community building and collaboration'
        ]
      },
      {
        type: 'discovery',
        title: 'User Research & Personas',
        content: `To understand the target audience, I developed **Johanna Norberg**, a UX design student who actively creates and shares digital content. This persona represents the core user group: **emerging creators seeking fair platforms** to showcase their work.

Through persona development, I identified three key user scenarios that would drive the app's functionality and user experience.`,
        insights: [
          'Users need intuitive ways to discover relevant learning content',
          'Sharing work should feel rewarding and provide fair compensation',
          'Project collaboration features are essential for community building',
          'Simple, mobile-first design is crucial for busy creators'
        ],
        images: ['${import.meta.env.BASE_URL}images/2gether/persona.png']
      },
      {
        type: 'approach',
        title: 'Context Scenarios',
        content: `I developed **three key scenarios** to explore how Johanna would interact with the app, ensuring the design would meet real user needs:

**Scenario 1: Finding a 3D modeling course**
**Scenario 2: Uploading a painting**  
**Scenario 3: Starting a new photo project**

These scenarios guided every design decision, from information architecture to interaction patterns.`,
        images: ['${import.meta.env.BASE_URL}images/2gether/scenario.png']
      },
      {
        type: 'process',
        title: 'Design Process',
        content: `I followed a **comprehensive iterative design process**, moving from initial concepts through multiple refinement stages:

**Sketches** → **Paper Prototype** → **Wireframes** → **Mockups** → **Interactive Prototype**

Each stage built upon insights from the previous, ensuring the final design was both user-centered and technically feasible.`,
        images: ['${import.meta.env.BASE_URL}images/2gether/sketches.png', '${import.meta.env.BASE_URL}images/2gether/Paper_prototype.png']
      },
      {
        type: 'solution',
        title: 'Interactive Paper Prototype',
        content: `I created an **interactive paper prototype** using a spiral-bound sketchbook sized like a smartphone. This approach allowed different scenarios to overlap and share screens, making the prototype dynamic enough to **simulate the real service experience**.

The paper prototype was designed for **reusability**, enabling rapid testing and iteration of user flows across multiple scenarios.`,
        videos: [
          {
            src: 'https://player.vimeo.com/video/936205652',
            caption: 'Scenario 1: Finding a 3D modeling course',
            videoType: 'horizontal'
          },
          {
            src: 'https://player.vimeo.com/video/936223340',
            caption: 'Scenario 2: Uploading a painting',
            videoType: 'horizontal'
          },
          {
            src: 'https://player.vimeo.com/video/936229681',
            caption: 'Scenario 3: Starting a new photo project',
            videoType: 'horizontal'
          }
        ],
        insights: [
          'Paper prototyping enabled rapid iteration without technical constraints',
          'Physical interaction revealed usability issues not visible in static designs',
          'Reusable prototype design saved time when testing multiple scenarios',
          'Video documentation captured interaction nuances for stakeholder review'
        ],
      },
      {
        type: 'solution',
        title: 'Digital Wireframes & Mockups',
        content: `Building on the **paper prototype insights**, I developed wireframes in Figma, making targeted adjustments to button placement and captions for improved usability.

I then created **four key graphical mockups** establishing a modern, cohesive design:
- **Homepage** - Showcasing featured content and easy navigation
- **Search Results** - Clear filtering and discovery tools  
- **Product Page** - Detailed content presentation with creator info
- **Profile Page** - Personal dashboard for creators`,
        images: ['${import.meta.env.BASE_URL}images/2gether/wireframes.png', '${import.meta.env.BASE_URL}images/2gether/mockup.png']
      },
      {
        type: 'solution',
        title: 'Interactive Prototype',
        content: `The final interactive prototype brings together **wireframes and mockups** into a functional experience. Users can explore core functionalities like **searching, filtering, and navigating** the app seamlessly.

Testing within the developed context scenarios helped **validate user flows** and ensure intuitive interactions throughout the creator journey.`,
        video: 'https://player.vimeo.com/video/937755072',
        videoCaption: 'Interactive prototype demonstration showing key user flows',
        videoType: 'horizontal',
        features: [
          'Intuitive search and filtering system for discovering content',
          'Streamlined upload process with progress indicators',
          'Community features for collaboration and project sharing',
          'Fair compensation tracking and transparent revenue models',
          'Mobile-first design optimized for creator workflows'
        ]
      },
      {
        type: 'impact',
        title: 'Design Impact',
        content: `This project successfully designed a platform that **supports and empowers digital creators** by providing a fair and intuitive space for sharing work. The iterative design process ensured both **visual appeal and navigational ease**.`,
        insights: [
          'Created seamless experience for users looking to connect and share within creative community',
          'Prioritized usability, accessibility, and community feeling for digital creators',
          'Validated user flows through comprehensive prototyping and scenario testing',
          'Established design system supporting fair creator compensation and recognition'
        ]
      },
      {
        type: 'conclusion',
        title: 'Key Learnings',
        content: `Through this comprehensive design process, I explored **how to create engaging experiences** for users seeking to connect, share, and grow within a creative community.

The result prioritizes **usability, accessibility, and community** - exactly what digital creators need to thrive in today's competitive landscape. This project demonstrates how thoughtful UX design can address real creator economy challenges while building sustainable, user-centered solutions.`
      }
    ]
  }

  ,

  'aquatik': {
    id: 'aquatik',
    title: 'Aquatik',
    subtitle: 'A smart water bowl system giving pet owners peace of mind by monitoring their pet\'s hydration',
    type: 'ixd',
    year: '2023',
    duration: '10 weeks',
    team: 'Team of 5 interaction design students',
    tools: ['Figma', 'Miro', 'Blender', 'User Research'],
    tags: ['IoT Product', 'Pet Care', 'Mobile App', 'Physical Design', 'User Testing'],
    coverImage: '${import.meta.env.BASE_URL}images/thumbs/aquatik_omslag.png',
    heroImage: null,
    heroVideo: 'https://player.vimeo.com/video/932816565',
    videoType: 'horizontal',
    overview: `**Aquatik** is a smart water bowl system designed to give pet owners **peace of mind** by helping them monitor their pet's hydration through an integrated IoT device and companion app.

Pet owners often struggle to track their pet's water consumption, and **insufficient water intake can lead to serious health problems** in animals. The current market lacks user-friendly products that help pet owners monitor their pet's hydration effectively.`,
    sections: [
      {
        type: 'challenge',
        title: 'The Problem',
        content: `Pet owners face a common yet serious challenge: **tracking their pet's water consumption**. Many pets suffer from dehydration-related health issues because owners can't easily monitor their daily water intake.

The current market offers few solutions, and existing products **lack user-friendliness** and comprehensive monitoring features that would give owners the insights they need to ensure their pets stay properly hydrated.`,
        insights: [
          'Pet owners worry about their pet\'s hydration but struggle to track water intake effectively',
          'Existing water bowls lack smart features and user-friendly monitoring capabilities',
          'Clear market gap exists for a comprehensive pet hydration solution',
          'Health problems from insufficient water intake are preventable with proper monitoring'
        ]
      },
      {
        type: 'discovery',
        title: 'User Research & Insights',
        content: `We conducted **comprehensive research** through surveys distributed to pet owners and expert interviews with pet store staff. Our research revealed critical insights about current market gaps and user frustrations.

**Key research questions explored:**
- How do pet owners currently track their pet's water intake?
- What features would be most valuable in a smart water monitoring system?
- What are the main pain points with existing solutions?`,
        insights: [
          '"Extremely important" - Pet owners consistently rate hydration monitoring as critical',
          '"Very important all year, but more important in summer" - Seasonal variations create additional monitoring needs',
          '"There is nothing good available to help pet owners track" - Clear market gap confirmed',
          '"We don\'t sell anything that could help monitor" - Retail experts validate unmet demand',
          '"Find out more about their health habits" - Owners want comprehensive health insights beyond just water'
        ],
        metrics: [
          {
            label: 'Water intake awareness',
            value: '67%',
            description: 'Unaware how much their pets drink daily'
          },
          {
            label: 'Want better insights',
            value: '75%',
            description: 'Desire better insight into their pets drinking habits'
          },
          {
            label: 'Health risk awareness',
            value: '58%',
            description: 'Unaware of health risks from irregular drinking patterns'
          }
        ]
      },
      {
        type: 'discovery',
        title: 'Personas & User Scenarios',
        content: `Through **systematic thematic analysis**, we organized research findings into key themes and insights. The analysis revealed clear patterns in user needs and behaviors.

We developed **detailed personas** representing different types of pet owners, each with unique needs and contexts for using Aquatik. We then created scenarios and storyboards to understand how users would interact with Aquatik in real-world contexts.`,
        insights: [
          'Busy professionals need automated monitoring with smart notifications',
          'Health-conscious owners want detailed analytics and historical data',
          'Multi-pet households require individual tracking capabilities',
          'Seasonal monitoring needs vary significantly throughout the year'
        ],
        images: ['${import.meta.env.BASE_URL}images/aquatik/personanicole.png', '${import.meta.env.BASE_URL}images/aquatik/personaoscar.png', '${import.meta.env.BASE_URL}images/aquatik/storyboard.png']
      },
      {
        type: 'approach',
        title: 'Design Strategy & Requirements',
        content: `Based on research insights, we created a **comprehensive requirements list** defining both functional and non-functional needs for the system.

**Key finding:** Respondents unanimously wanted **a system combining a physical product and an app** connected to the physical device. This insight became the foundation of our design approach.`,
        images: ['${import.meta.env.BASE_URL}images/aquatik/req_list.png']
      },

      {
        type: 'process',
        title: 'Collaborative Design Process',
        content: `We followed a **structured collaborative design process** where each team member contributed sketches and ideas:

**Individual ideation:** Each member created multiple design variants for key screens
**Collaborative evaluation:** We presented sketches and **voted on preferred concepts** together
**Iterative refinement:** We moved from individual concepts to unified direction through structured team collaboration

This approach ensured diverse perspectives while maintaining design consistency.`,
        images: ['${import.meta.env.BASE_URL}images/aquatik/1registrera.png', '${import.meta.env.BASE_URL}images/aquatik/2startsida.png', '${import.meta.env.BASE_URL}images/aquatik/3halsosidan.png']
      },
      {
        type: 'solution',
        title: 'Digital App Development',
        content: `We moved into **Figma to create comprehensive wireframes**, providing clear understanding of the app flow and structured visualization of the layout and information architecture.

From wireframes, we developed **high-fidelity mockups** to establish the app's visual aesthetic and ensure a cohesive design system that would appeal to pet owners.

The final step was creating a **fully interactive prototype** with realistic transitions and micro-interactions, essential for comprehensive usability testing and stakeholder validation.`,
        images: ['${import.meta.env.BASE_URL}images/aquatik/wireframes.png', '${import.meta.env.BASE_URL}images/aquatik/mockup.png']
      },

      {
        type: 'solution',
        video: 'https://player.vimeo.com/video/933710075',
        videoType: 'horizontal'
      },

      {
        type: 'solution',
        title: 'Physical Product Design',
        content: `As part of the solution, we designed a **physical smart water bowl** connected to the digital app. We had creative freedom in functionality and appearance, focusing on seamless IoT integration.

**My contribution:** Having **3D modeling experience**, I took charge of creating detailed 3D prototypes in Blender based on our collaborative initial sketches and design requirements.

The final design balances **aesthetic appeal with functional sensor integration**, ensuring accurate water level monitoring while maintaining an attractive appearance for home environments.`,
        images: ['${import.meta.env.BASE_URL}images/aquatik/sketches_physical.png', '${import.meta.env.BASE_URL}images/aquatik/StudioBlue.png', '${import.meta.env.BASE_URL}images/aquatik/StudioWhite.png', '${import.meta.env.BASE_URL}images/aquatik/StudioWood.png']
      },


      {
        type: 'solution',
        video: 'https://player.vimeo.com/video/933742728',
        videoType: 'horizontal'
      },



      {
        type: 'impact',
        title: 'User Testing & Validation',
        content: `Due to project constraints, we performed **heuristic evaluation using Nielsen's 10 Usability Heuristics** and conducted **SUS (System Usability Scale) testing** for quick, cost-effective usability insights.

**Testing Results:**
Users were **generally satisfied** with the app and found it easy to use, with only minor usability issues identified for future iterations.`,
        insights: [
          'Need to improve pet profile creation process for better onboarding',
          'Enhance personalization features throughout the user experience',
          'Improve navigation patterns for users managing multiple pets',
          'Better organization and accessibility of saved health information',
          'Improve button visibility and labeling for key actions',
          'Replace bar graphs with line graphs for clearer water consumption trends'
        ],
        metrics: [
          {
            label: 'Average SUS Score',
            value: '81.7',
            description: 'Indicating good overall usability and user satisfaction'
          },
          {
            label: 'Score Range',
            value: '72.5-97.5',
            description: 'Showing consistent positive user feedback'
          },
          {
            label: 'Improvement Areas',
            value: '6',
            description: 'Specific usability enhancements identified for future iterations'
          }
        ]
      },
      {
        type: 'conclusion',
        title: 'Key Learnings & Future Directions',
        content: `This project successfully demonstrated the potential for **IoT-enabled pet care solutions** through comprehensive user research, collaborative design processes, and thorough usability validation.

**Key achievements:**
- Validated significant market need through qualitative research
- Developed comprehensive solution combining physical product and digital app
- Achieved strong user satisfaction scores (average SUS: 81.7)
- Created scalable design system for future feature expansion

This project showcased the importance of **user-centered design processes** and demonstrated how **collaborative teamwork** can produce comprehensive solutions for emerging IoT markets.`
      }
    ]
  }

  ,

  // VFX Projects (showcase focused)
  'helicopter-vfx': {
    id: 'helicopter-vfx',
    title: 'Helicopter VFX Composite',
    subtitle: 'Integrating 3D animated helicopter into drone footage using Blender and Nuke',
    type: 'vfx',
    year: '2020',
    duration: '4 weeks',
    team: 'Solo project',
    tools: ['Blender', 'Nuke'],
    tags: ['3D Animation', 'Compositing', 'VFX', 'Personal Project'],
    coverImage: '${import.meta.env.BASE_URL}images/thumbs/heli_omslag.png',
    heroImage: '${import.meta.env.BASE_URL}images/thumbs/heli_omslag.png',
    heroVideo: 'https://player.vimeo.com/video/404583460',
    videoType: 'horizontal',
    overview: `A personal VFX project compositing a 3D animated helicopter into real drone footage. This project was made for fun and became a valuable learning experience through community feedback.`,
    sections: [
      {
        type: 'solution',
        title: '3D Animation',
        content: `The helicopter is an **asset found online** and was animated using **Blender** and rendered using Blender's render engine **"Cycles"**.`,
      },
      {
        type: 'solution',
        title: 'Compositing',
        content: `The 3D animated asset was **composited onto the drone footage** using **Nuke**.

Nuke was also used to **3D track the footage** to get accurate data for the 3D animation's render camera.`,
      },
      {
        type: 'conclusion',
        title: 'Conclusion',
        content: `This project was **personally made for fun**, where I learned a lot by getting constant feedback from the subreddit **r/Blender** and **r/vfx**.

**Some improvements** that could be made are mostly around the **shadow from the helicopter** being cast on the mountain side. Due to some difficulties getting a highly accurate point cloud to recreate the mountain side, I wasn't able to make the shadow follow the surface in a convincing way.`
      }
    ]
  },

  'hallbart-professionell': {
    id: 'hallbart-professionell',
    title: 'Hållbart Professionell',
    subtitle: 'VFX work for Swedish short film creating animated planes flying across the sky',
    type: 'vfx',
    year: '2020',
    duration: '6 weeks',
    team: 'VFX Artist (solo VFX work)',
    tools: ['Cinema 4D', 'Redshift', 'Fusion'],
    tags: ['3D Animation', 'Particle Systems', 'Compositing', 'Film VFX'],
    coverImage: '${import.meta.env.BASE_URL}images/hallbart-professionell/cover.jpg',
    heroImage: '/${import.meta.env.BASE_URL}images/thumbs/hallbart_omslag.png',
    heroVideo: 'https://player.vimeo.com/video/405839073',
    videoType: 'horizontal',
    overview: `VFX work for the Swedish short film **"Hållbart Professionell"** by Sebastian Johansson Micci. This was my **first "real" project** where I learned a great deal about production workflows.`,
    sections: [
      {
        type: 'solution',
        title: '3D Animation',
        content: `The 3D material was made using **Cinema 4D and Redshift**. Using a **particle system** the planes were generated on each point to simulate a field of planes flying across the sky.`,
      },
      {
        type: 'solution',
        title: 'Compositing',
        content: `I used **Fusion** to composite the rendered material over the shot footage. I created **luma keys** to separate the foreground with the background and I also made some smaller clean-ups.`,
      },
      {
        type: 'conclusion',
        title: 'Conclusion',
        content: `This was my **first "real" project** and I learnt a great deal in how a production works. I had to learn new software to be able to render out final shots in **4K** which software I previously knew couldn't due to restrictions in their student plans. 

Doing this I learned a lot by **trial and error**.`
      }
    ]
  },
  'screen-replacement': {
    id: 'screen-replacement',
    title: 'Screen Replacement',
    subtitle: 'Advanced screen replacement techniques using Nuke with realistic reflections and imperfections',
    type: 'vfx',
    year: '2020',
    duration: '3 weeks',
    team: 'Solo project',
    tools: ['Nuke'],
    tags: ['Screen Replacement', 'Tracking', 'Compositing'],
    coverImage: null,
    heroImage: '${import.meta.env.BASE_URL}images/thumbs/screen_omslag.png',
    heroVideo: 'https://player.vimeo.com/video/411725143',
    videoType: 'horizontal',
    overview: `A learning project focused on **advanced screen replacement techniques** using Nuke. I replaced a green screen on a phone with helicopter footage, adding realistic reflections and screen imperfections.`,
    sections: [
      {
        type: 'challenge',
        title: 'The Project',
        content: `I wanted to learn some more **advanced screen replacement** using Nuke so I did this project to showcase this. I used footage I previously created of a helicopter scene to replace on a phone with a **green screen** on it.`
      },
      {
        type: 'solution',
        title: 'Compositing',
        content: `For this project I used **Nuke** to create the screen replacement. I **tracked the screen** and used various methods to **preserve reflections** to overlay on top of the added footage. 

To make it more realistic I also added **smudges and imperfections** to the screen.`,
      }
    ]
  }


}

// Helper functions
export const getProjectsByType = (type) => {
  return Object.values(projects).filter(project => project.type === type)
}

export const getProject = (id) => {
  return projects[id]
}

export const getAllProjects = () => {
  return Object.values(projects)
}
