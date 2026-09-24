import type { Credential, Link, Project, SkillGroup } from "../types";

/*
 * All portfolio content lives in this file.
 * To update the site (new project, new skill, fixed dates), edit here;
 * the components only handle layout.
 */

export const person = {
  name: "Anumandla Rithika",
  initials: "AR",
  email: "rithikaanumandla5@gmail.com",
  status: "Open to full-stack internships",
  headline: "I build web apps end to end, and I care most about what happens behind the API.",
  intro: [
    "I'm Rithika, a final-year B.Tech student in Computer Science (Data Science) at SR University, Warangal. I recently finished an internship as a DevCon Associate at Naxrita, where I earned the SAP Certified Back-End Developer (ABAP Cloud) certification.",
    "On my own I've built two full-stack projects: an online judge that runs submitted code inside Docker containers, and a movie recommender that serves ML models through a REST API. Both are live.",
  ],
};

export const links: Record<"github" | "linkedin" | "leetcode", Link> = {
  github: { label: "GitHub", href: "https://github.com/rithikaredddy" },
  linkedin: { label: "LinkedIn", href: "https://www.linkedin.com/in/anumandla-rithika-514697390/" },
  leetcode: { label: "LeetCode", href: "https://leetcode.com/u/AnumandlaRithika/" },
};

export const navItems = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const credlyUrl = "https://www.credly.com/badges/1eafeba6-16f9-4674-a96c-db376d0b99a2";

export const experience = {
  role: "DevCon Associate (Intern)",
  company: "Naxrita",
  initial: "N",
  when: "2026",
  context: "through the EMAX DevCon Campus Edition program with Emax Technologies",
  description:
    "Built back-end skills on SAP's cloud stack: ABAP and ABAP Objects, CDS views for data modeling, and the RESTful Application Programming model (RAP) for exposing business data as services, working in Eclipse ADT.",
  tools: ["ABAP", "ABAP Objects", "CDS views", "RAP", "Eclipse ADT"],
  credential: {
    label: "SAP Certified Back-End Developer, ABAP Cloud. View credential",
    href: credlyUrl,
  },
};

export const projects: Project[] = [
  {
    id: "online-judge",
    title: "Online Judge Platform",
    theme: "mint",
    stack: ["React 18", "Monaco Editor", "Node.js", "Express", "MongoDB", "Docker", "JWT"],
    summary: [
      "A small LeetCode-style site. You sign up, pick a problem, write a solution in Python, C++ or Java in the browser, and get a verdict.",
      "The interesting part is the backend. Running code that strangers type into a text box is risky, so every submission runs in its own Docker container built for that language, with a time limit. Output is checked against hidden test cases, and results feed your history, solved count and the global leaderboard.",
    ],
    liveUrl: "https://online-judge-platform-pi.vercel.app",
    sourceUrl: "https://github.com/rithikaredddy/online-judge-platform",
    factsTitle: "Verdicts it returns",
    facts: [
      { text: "Accepted: every hidden test passed", accent: "mint" },
      { text: "Wrong Answer: output didn't match", accent: "berry" },
      { text: "Time Limit Exceeded: container stopped at the limit", accent: "sun" },
      { text: "Runtime Error: the program crashed", accent: "violet" },
    ],
    flowTitle: "How a submission moves through the system",
    flow: [
      { title: "Editor", detail: "Monaco in React sends code and language", accent: "cobalt" },
      { title: "Express API", detail: "JWT check, loads the problem", accent: "violet" },
      { title: "Docker runner", detail: "Fresh container per language, time limit enforced", accent: "mint" },
      { title: "Judge", detail: "Output vs hidden tests gives the verdict", accent: "sun" },
      { title: "MongoDB", detail: "Submission, stats, leaderboard", accent: "berry" },
    ],
    endpoints: [
      { method: "POST", path: "/api/auth/register", description: "Create an account" },
      { method: "POST", path: "/api/auth/login", description: "Log in and receive a JWT" },
      { method: "GET", path: "/api/problems", description: "List all problems" },
      { method: "GET", path: "/api/problems/:id", description: "One problem with its sample cases" },
      { method: "POST", path: "/api/submissions", description: "Submit code and get a verdict", requiresLogin: true },
      { method: "GET", path: "/api/submissions/me", description: "Your submission history", requiresLogin: true },
      { method: "GET", path: "/api/leaderboard", description: "Top users by problems solved" },
    ],
    nextSteps: ["Timed contest mode", "Admin panel for adding problems", "JavaScript, Go and Rust support"],
  },
  {
    id: "recommendation-engine",
    title: "Movie Recommendation Engine",
    theme: "berry",
    stack: ["Next.js 14", "Tailwind CSS", "FastAPI", "MongoDB", "scikit-learn", "Surprise", "JWT"],
    summary: [
      "A movie site that learns what you like. You search, open a movie and rate it from one to five stars, and the recommendations on your profile change as you rate more.",
      "Content-based filtering (TF-IDF on genre, cast and keywords, compared with cosine similarity) answers \"more like this movie\". Collaborative filtering (SVD matrix factorization) answers \"people who rate like you also liked\". The default feed is a weighted blend of both.",
    ],
    liveUrl: "https://recommendation-engine-lyart.vercel.app/",
    sourceUrl: "https://github.com/rithikaredddy/recommendation-engine",
    factsTitle: "Trained on MovieLens 100K",
    facts: [
      { text: "100,000 ratings", accent: "berry" },
      { text: "943 users", accent: "violet" },
      { text: "1,682 movies", accent: "cobalt" },
      { text: "Ratings on a 1 to 5 scale", accent: "sun" },
    ],
    flowTitle: "How a recommendation is built",
    flow: [
      { title: "Next.js", detail: "Asks for your feed", accent: "cobalt" },
      { title: "FastAPI", detail: "JWT check, loads your ratings", accent: "violet" },
      { title: "Content model", detail: "TF-IDF and cosine similarity", accent: "mint" },
      { title: "Collaborative model", detail: "SVD on the ratings matrix", accent: "sun" },
      { title: "Hybrid", detail: "Weighted blend, ranked list back to the UI", accent: "berry" },
    ],
    endpoints: [
      { method: "POST", path: "/auth/register", description: "Create an account" },
      { method: "POST", path: "/auth/login", description: "Log in and receive a JWT" },
      { method: "GET", path: "/movies/trending", description: "Trending movies for the home page" },
      { method: "GET", path: "/movies/search?q=", description: "Search by title" },
      { method: "GET", path: "/movies/{movie_id}", description: "Movie details" },
      { method: "POST", path: "/movies/{movie_id}/rate", description: "Rate a movie from 1 to 5", requiresLogin: true },
      { method: "GET", path: "/recommendations/content/{movie_id}", description: "Movies similar to this one" },
      { method: "GET", path: "/recommendations/collaborative", description: "Based on users like you", requiresLogin: true },
      { method: "GET", path: "/recommendations/hybrid", description: "Your default blended feed", requiresLogin: true },
    ],
    nextSteps: ["Live updates after each new rating", "Redis cache for recommendations", "A/B test: content vs collaborative"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    name: "Backend",
    accent: "cobalt",
    items: [
      { name: "Node.js", primary: true }, { name: "Express", primary: true }, { name: "REST API design", primary: true },
      { name: "API documentation" }, { name: "FastAPI" }, { name: "Spring Boot" }, { name: "Flask" }, { name: "Django" }, { name: "JWT auth" },
    ],
  },
  {
    name: "Frontend",
    accent: "berry",
    items: [
      { name: "React", primary: true }, { name: "Next.js", primary: true }, { name: "Tailwind CSS", primary: true },
      { name: "JavaScript" }, { name: "HTML" }, { name: "CSS" },
    ],
  },
  {
    name: "Databases",
    accent: "mint",
    items: [
      { name: "MySQL", primary: true }, { name: "MongoDB", primary: true }, { name: "SQL" },
      { name: "Query indexing" }, { name: "Oracle" }, { name: "Redis (familiar)" },
    ],
  },
  {
    name: "Languages",
    accent: "violet",
    items: [
      { name: "JavaScript", primary: true }, { name: "Java", primary: true }, { name: "Python", primary: true },
      { name: "TypeScript" }, { name: "C" }, { name: "C++" }, { name: "SQL" },
    ],
  },
  {
    name: "DevOps and tools",
    accent: "sun",
    items: [
      { name: "Git", primary: true }, { name: "GitHub", primary: true }, { name: "Docker", primary: true },
      { name: "Kubernetes (basics)" }, { name: "CI/CD (basics)" }, { name: "Vite" }, { name: "Vercel" }, { name: "Render" },
    ],
  },
  {
    name: "Testing",
    accent: "cobalt",
    items: [{ name: "JUnit 5" }, { name: "Mockito" }, { name: "Playwright" }, { name: "Test-driven development" }],
  },
  {
    name: "SAP",
    accent: "violet",
    items: [{ name: "ABAP", primary: true }, { name: "ABAP Objects" }, { name: "CDS views" }, { name: "RAP" }, { name: "Eclipse ADT" }],
  },
  {
    name: "ML and data",
    accent: "berry",
    items: [{ name: "TensorFlow" }, { name: "scikit-learn" }, { name: "Pandas" }, { name: "NumPy" }, { name: "Tableau" }],
  },
  {
    name: "Foundations",
    accent: "mint",
    items: [
      { name: "DSA" }, { name: "OOP" }, { name: "Design patterns" }, { name: "DBMS" },
      { name: "Operating systems" }, { name: "Computer networks" }, { name: "Agile (Scrum)" },
    ],
  },
];

export const credentials: Credential[] = [
  {
    when: "2026",
    title: "SAP Certified Back-End Developer, ABAP Cloud",
    detail: "Issued by SAP.",
    accent: "sun",
    link: { label: "Verify on Credly", href: credlyUrl },
  },
  {
    when: "Jul 2026 to now",
    title: "Amazon ML Summer School",
    detail: "Selected participant. Sessions by Amazon scientists on deep learning, generative AI and LLMs, reinforcement learning and causal inference.",
    accent: "violet",
  },
  {
    when: "2023 to 2027",
    title: "B.Tech, CSE (Data Science), SR University",
    detail: "CGPA 8.8 / 10. 200+ problems solved on LeetCode alongside coursework in DSA, OS, DBMS and networks.",
    accent: "cobalt",
  },
];
