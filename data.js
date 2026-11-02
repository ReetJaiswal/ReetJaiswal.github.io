const PROFILE = {
  name: "Reet Jaiswal",
  role: "Software and AI Engineer",
  pronouns: "she/her",
  tagline: "I build backend systems, AI agents and secure deployment pipelines.",
  location: "Mumbai, India",
  email: "reet.vj@gmail.com",
  phone: "+91 9321908018",
  github: "https://github.com/ReetJaiswal",
  linkedin: "https://www.linkedin.com/in/reet-jaiswal/", 
  resume: "ReetJaiswal.pdf", 
  AI_ENDPOINT: "",
  FORM_ENDPOINT: "https://formspree.io/f/xeaaplez",
  summary: "Final-year Computer Science student at VIT Chennai with hands-on experience building backend systems, full-stack applications and automated deployment pipelines. Strong foundation in software engineering, AI-driven system architecture, information security and GenAI. Seeking a Software and AI Engineer role to build reliable, scalable software and intelligent systems within a collaborative team.",
  skills: {
    "Languages": ["Python", "Java", "C++", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"],
    "Frameworks": ["React", "Next.js", "Node.js", "FastAPI", "RBAC", "JWT", "OAuth"],
    "AI / ML": ["LangChain", "LangGraph", "RAG", "AI Agents", "Scikit-learn", "NumPy", "TensorFlow", "Ollama", "GPT"],
    "Databases": ["MySQL", "PostgreSQL", "Redis"],
    "Cloud & DevOps": ["Git", "Docker", "GitHub", "CI/CD", "GitHub Webhooks", "AWS"],
    "Security": ["Burp Suite", "Nessus", "Kali Linux", "OWASP", "Penetration Testing", "VirtualBox"]
  },
  experience: [
    { title: "Software Developer (Freelance)", org: "Workflexi", when: "May 2026 – Jul 2026", where: "Remote, Mumbai",
      points: ["Built DevFlow, an AI-powered full-stack platform for API development, testing, deployment, monitoring and team collaboration.",
        "Developed API workspaces with OpenAPI import, environment management, request history and automated testing.",
        "Reduced deployment time by 10% through CI/CD pipelines, GitHub webhooks, Docker and real-time build logs.",
        "Designed a secure multi-tenant architecture using JWT, OAuth and RBAC for authentication and access control."] },
    { title: "Information Security Intern", org: "L&T Finance", when: "May 2025 – Jul 2025", where: "On-site, Mumbai",
      points: ["Assessed web applications and found vulnerabilities including Cross-Site Scripting, SQL Injection, Log4j and Apache Commons Text.",
        "Validated security by deploying Java apps on JBoss EAP 7.4 (Lubuntu) and Python apps in Docker.",
        "Ran application and network penetration tests with Burp Suite, Nessus, Kali Linux and OWASP methodologies.",
        "Discovered 15+ vulnerabilities and delivered technical reports with risk analysis and remediation advice."] }
  ],
  projects: [
    { name: "CodeDNA", type: "VS Code Extension", stack: ["TypeScript", "Node.js", "Vite", "RAG", "Vector DB", "FastAPI"], link: "https://github.com/ReetJaiswal",
      points: ["AI code-intelligence extension that builds context from dependency analysis, repository indexing and semantic code navigation.",
        "Hybrid retrieval pipeline combining AST parsing, graph relationships and vector search to answer queries across 20K+ lines of code.",
        "Interactive IDE assistant using LLMs for code explanation and architecture insights with low-latency retrieval."] },
    { name: "MARIS", type: "Multi-Agent Research Intelligence System", stack: ["Python", "LangGraph", "Ollama", "ChromaDB", "Docker"], link: "https://github.com/ReetJaiswal",
      points: ["Multi-agent system with planner, researcher, verifier and synthesizer agents that write research reports autonomously.",
        "Agent workflow with task decomposition, iterative reasoning, web retrieval and evidence validation.",
        "Persistent RAG pipeline with embeddings and vector search to keep context across iterations and reduce hallucinations."] },
    { name: "Hybrid Mammogram Classification", type: "Machine Learning", stack: ["Python", "Scikit-learn", "Pandas", "NumPy"], link: "https://github.com/ReetJaiswal",
      points: ["Predictive ML pipeline combining structured clinical data with image models for disease progression analysis.",
        "Compared longitudinal patient reports to find patterns linked to changes in predicted outcomes.",
        "Evaluated Random Forest, CNN and Swin Transformer approaches."] }
  ],
  education: [
    { what: "B.Tech Computer Science (Cyber Physical Systems)", where: "VIT Chennai", when: "2023 – 2027", note: "CGPA 8.37 / 10" },
    { what: "CBSE Class XII", where: "Bodhicariya Senior Secondary School, Kolkata", when: "2022", note: "86.6%" },
    { what: "CBSE Class X", where: "New Horizon Scholars School, Thane", when: "2020", note: "96.2%" }
  ],
  coursework: ["DSA", "Operating Systems", "DBMS", "Computer Networks", "OOP", "System Design", "SDLC"],
  certifications: [
    {
      name: "Career Essentials in Generative AI",
      issuer: "Microsoft",
      date: "2026",
      file: "assets/certificates/microsoft-generative-ai.pdf"
    },
    {
      name: "100 Days of Code: Python",
      issuer: "Udemy",
      date: "2026",
      file: "assets/certificates/100daystocode.pdf"
    },
    {

      name: "Machine Learning Specialization",
      issuer: "Stanford Online & DeepLearning.AI",
      date: "2026",
      file: "assets/certificates/ml-specialization.pdf"
    },
    {
      name: "AWS Cloud Practitioner Essentials",
      issuer: "Amazon Web Services",
      date: "2026",
      file: "assets/certificates/aws-cloud-practitioner.pdf"
    }
  ],
  rocketry: {
    team: "Ignition, VIT Chennai – Rocketry Special Team",
    stack: ["Arduino", "Raspberry Pi Pico", "LoRa", "ANSYS", "SolidWorks"],
    items: [
      { title: "Project Head – Static Fire Tests 4 & 5", text: "Led a Raspberry Pi Pico data-acquisition system with load cells, K-type thermocouples and pressure sensors for real-time engine monitoring. Added LoRa telemetry and contributed to propellant formulation and testing." },
      { title: "Rocket Motor Development – Static Fire Test 3", text: "Designed motor casings and nozzles in SolidWorks and ran CFD in ANSYS to evaluate thrust characteristics." }
    ]
  }
};
const HAVE = ["python","java","c++","javascript","typescript","sql","html","css","react","next.js","node.js","fastapi","jwt","oauth","rbac","langchain","langgraph","rag","ai agents","llm","scikit-learn","numpy","pandas","tensorflow","ollama","gpt","mysql","postgresql","redis","git","docker","github","ci/cd","webhooks","aws","burp suite","nessus","kali","owasp","penetration testing","vulnerability","security","rest","api","openapi","vector","embeddings","machine learning","generative ai","linux","system design","dsa","data structures","algorithms","operating systems","networking","oop","multi-tenant","authentication","testing","deployment","backend","full-stack","full stack","agile"];
const EXTRA = ["kubernetes","golang","go","rust","c#",".net","spring boot","spring","django","flask","angular","vue","graphql","kafka","rabbitmq","mongodb","elasticsearch","terraform","azure","gcp","jenkins","ansible","pytorch","spark","hadoop","airflow","swift","kotlin","android","ios","php","ruby","scala","microservices","grpc","cassandra","dynamodb","snowflake","tableau","power bi","selenium","devops","sre"];
