export const filters = [
  { id: "all", label: "all" },
  "react",
  "redux",
  "typescript",
  "graphql",
  "redux-saga",
  "react-server-components",
  "nextjs",
  "remix",
  "chakra-ui",
  "tailwind",
  "angular",
  "google-maps-api",
];

export const FILTER_ID_ALL = "all";

export const projects = [
  {
    id: "odyssey",
    title: "Odyssey Systems Consulting Group",
    content:
      "I worked within the NAVAIR Cyber Warfare Program Office primarily on areact/redux application focused on a file transfer application based on securitylevel. I also worked on an angular application internal to the company relatedto monthly financial statement processing.",
    photoUrl: "/confidential.webp",
    tags: ["react", "redux", "typescript", "angular"],
    className: "[&_img]:opacity-20 [&_img]:bg-amber-400 [&_img]:grayscale",
    callToAction: {
      label: "Not avalable to public",
      disabled: true,
    },
  },
  {
    id: "butcherbox",
    title: "ButcherBox",
    content:
      "I worked on the team responsible for the checkout flow forButcherBox.com's storefront - it's powered by Shopify/Hydrogen and integratedwith Contentful. The project involved migrating the old storefront to useRemix.js. I contributed to both the migration and addressed bugs/new features onthe original storefont.",
    photoUrl: "https://portfolio-a3218.web.app/butcherbox-526x381-min.png",
    tags: ["react", "typescript", "remix", "graphql"],
    callToAction: {
      label: "Visit site",
      href: "https://www.butcherbox.com/",
    },
  },
  {
    id: "instrument",
    title: "Instrument, LLC",
    content:
      "Iworked on a team involved in creating a component libary using chakra-ui as thefoundation, then assembled these components into pages to meet thedesign/functionality requirements of the client. The thumbnail is one of manyassembled pages - this one involves allowing students to be able to create acustom avatar of themselves.",
    photoUrl: "https://portfolio-a3218.web.app/gg-550x341-min.png",
    tags: ["react", "typescript", "chakra-ui"],
    callToAction: {
      label: "Not avalable to public",
      disabled: true,
    },
  },
  {
    id: "weld-north",
    title: "Weld North Analytics",
    content: `I wasa member of a 2-person frontend team that created an embeddable React app thatallows educators to create online courses for students. The thumbnail shows thestudent view of a lesson within a course. Functionality for students includesadding annotations to course text/images, dictionary lookups of selected text,audio & video playback, and comprehension questions at the bottom of eachlesson. Educators can create & assemble different content types (richtext,images, videos, audio, questions) into a multi-page course, use a drag/dropinterface to update layout/content placement, leverage other educators' sharedcourse content, and view analytics data (mostly relating to question-responsebreakdown and video watching stats). Note: the product can be seen in actionfrom a student's perspective at 1 minute 58 seconds into the linked video.`,
    photoUrl: "https://portfolio-a3218.web.app/imaginelearning-550x351-min.png",
    tags: ["react", "redux", "graphql"],
    callToAction: {
      label: "Visit site",
      href: "https://www.butcherbox.com/",
    },
  },
  {
    id: "hmh",
    title: "Houghton Mifflin Harcourt",
    content: `This project involved working on a team to convert legacy Flash appsrelating to online learning for young students over to React applications. I wasone of three React resources brought in to help guide the Engineering teamthrough their first dive into React application development as well as help inthe conversions.`,
    photoUrl: "https://portfolio-a3218.web.app/hmh-550x336-min.png",
    tags: ["react", "redux", "redux-saga"],
    callToAction: {
      label: "Not avalable to public",
      disabled: true,
    },
  },
  {
    id: "tufts",
    title: "Tufts University - Campus Maps",
    content: `This isan oldie but a goodie - created way back in 2012, but it is still being activelyused. I created a reusable map component to power all 3 of Tufts University'scampus maps. I also helped support the main www.tufts.edu & now.tufts.eduwebsites.`,
    photoUrl: "https://portfolio-a3218.web.app/tuftscampusmap-550x351-min.png",
    tags: ["google-maps-api"],
    callToAction: {
      label: "Visit site",
      href: "https://www.butcherbox.com/",
    },
  },
  {
    id: "personal-capital",
    title: "Personal Capital",
    content: `This project involvedacting as support on the Empower 401k site. It involved debugging & issueresolution for the application.`,
    photoUrl: "https://portfolio-a3218.web.app/empowerretirement-min.png",
    tags: ["react", "redux", "typescript"],
    callToAction: {
      label: "Not avalable to public",
      disabled: true,
    },
  },
  {
    id: "pigpile",
    title: "Pigpile Corporation",
    content: `This is aversion of an online fundraising application I created for Pigpile Corporation afew years back. The functionality basically mirrored that of the GoFundMeapplication but with a different business model.`,
    photoUrl: "https://portfolio-a3218.web.app/pigpile550x337-min.png",
    tags: ["react", "redux", "typescript", "nextjs"],
    callToAction: {
      label: "No longer active",
      disabled: true,
    },
  },
  {
    id: "whats-awesome",
    title: "Whats Awesome",
    content: `Lorem ipsum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
    photoUrl: "/whatsawesome.png",
    tags: [
      "react",
      "zustand",
      "typescript",
      "nextjs",
      "react-server-components",
      "tailwind",
    ],
    callToAction: {
      label: "Visit site",
      href: "https://www.butcherbox.com/",
    },
  },
];
