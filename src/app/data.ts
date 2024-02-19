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
  "storybook",
  "cypress",
  "chakra-ui",
  "tailwind",
  "angular",
  "google-maps-api",
];

export const FILTER_ID_ALL = "all";

export const projects = [
  {
    id: "butcherbox",
    title: "ButcherBox",
    content:
      "I worked on the engineering team responsible for the checkout flow for ButcherBox.com's storefront - it's powered by Shopify/Hydrogen and integrated with Contentful. The project involved migrating the old storefront to use Remix.js. I contributed to both the migration and addressed bugs/new features on the original storefont.",
    photoUrl: "/butcherbox-526x381-min.png",
    tags: ["react", "typescript", "remix", "graphql", "storybook", "cypress"],
    callToAction: {
      label: "Visit site",
      href: "https://www.butcherbox.com/",
    },
  },
  {
    id: "odyssey",
    title: "Odyssey Systems Consulting Group",
    content:
      "I worked within the NAVAIR Cyber Warfare Program on a file transfer app (react/redux) based on  users' security clearance. I also helped in the creation of an internal company angular app related to processing monthly financial statements.",
    photoUrl: "/confidential.webp",
    tags: ["react", "redux", "typescript", "angular"],
    className:
      "[&_img]:opacity-20 dark:[&_img]:opacity-80 [&_img]:bg-amber-400 [&_img]:grayscale dark:[&_img]:bg-gray-200",
    callToAction: {
      label: "Not avalable to public",
      disabled: true,
    },
  },
  {
    id: "weld-north",
    title: "Weld North Analytics",
    content: [
      "I was a member of a 2-person frontend team that created an embeddable React app that allows educators to create online courses for students. The thumbnail shows the student view of a lesson within a course.",
      "Functionality for students includes adding annotations to course text/images, dictionary lookups of selected text, audio & video playback, and comprehension questions at the bottom of each lesson.",
      `Educators can create & assemble different content types (richtext, images, videos, audio, questions) into a multi-page course, use a drag/drop interface to update layout/content placement, leverage other educators' shared course content, and view analytics data (mostly relating to question-response breakdown and video watching stats).`,
      `Note: the product can be seen in action from a student's perspective at 2 minutes into the linked video.`,
    ],
    photoUrl: "/imaginelearning-550x351-min.png",
    tags: ["react", "redux", "graphql"],
    callToAction: {
      label: "View video featuring product",
      href: "https://help.imaginelearning.com/hc/en-us/articles/6776591370775-Welcome-to-Imagine-Reading",
    },
  },
  {
    id: "instrument",
    title: "Instrument, LLC",
    content:
      "I worked on a team involved in creating a component libary using chakra-ui as the foundation, then assembled these components into pages to meet the design/functionality requirements of the client. The thumbnail is one of many assembled pages - this one involves allowing students to be able to create a custom avatar representing themselves.",
    photoUrl: "/gg-550x341-min.png",
    tags: ["react", "typescript", "chakra-ui", "storybook"],
    callToAction: {
      label: "Not avalable to public",
      disabled: true,
    },
  },

  {
    id: "hmh",
    title: "Houghton Mifflin Harcourt",
    content: `This project involved working on the HMH engineering team to convert legacy Flash apps relating to online learning for young students over to React applications. I was one of three React resources brought in to help guide the team through their first dive into React application development as well as help in the conversions.`,
    photoUrl: "/hmh-550x336-min.png",
    tags: ["react", "redux", "redux-saga"],
    callToAction: {
      label: "Not avalable to public",
      disabled: true,
    },
  },
  {
    id: "tufts",
    title: "Tufts University - Campus Maps",
    content: `This is an oldie but a goodie - created way back in 2012, but it is still being actively used. I created a reusable map component to power all 3 of Tufts University's campus maps. I also helped support the main www.tufts.edu & now.tufts.edu websites.`,
    photoUrl: "/tuftscampusmap-550x351-min.png",
    tags: ["google-maps-api"],
    callToAction: {
      label: "Visit site",
      href: "https://campusmaps.tufts.edu/medford/",
    },
  },
  {
    id: "personal-capital",
    title: "Personal Capital",
    content: `This project involved acting as support on the Empower 401k site. It involved debugging & issue resolution for the application.`,
    photoUrl: "/empowerretirement-min.png",
    tags: ["react", "redux", "typescript"],
    callToAction: {
      label: "Not avalable to public",
      disabled: true,
    },
  },
  {
    id: "whats-awesome",
    title: "What's Awesome",
    content: `A recent side project I have been working on in order to get more experience with react server components. Discover what's awesome about people and places. Currently this is more of a proof-of-concept than a polished finished app.`,
    photoUrl: "/whatsawesome.png",
    tags: [
      "react",
      "typescript",
      "nextjs",
      "react-server-components",
      "tailwind",
      "storybook",
    ],
    callToAction: {
      label: "Visit site",
      href: "https://whatsawesome.vercel.app/",
    },
  },
  {
    id: "pigpile",
    title: "Pigpile Corporation",
    content: `This is a version of an online fundraising application I created for Pigpile Corporation a few years back. The functionality mirrored that that of what GoFundMe offers but with a different business model.`,
    photoUrl: "/pigpile550x337-min.png",
    tags: ["react", "redux", "typescript", "nextjs", "storybook"],
    callToAction: {
      label: "Visit site",
      href: "https://fir-abc-a965d.web.app/pigpile/somerville-homeless-coalition",
    },
  },
];
