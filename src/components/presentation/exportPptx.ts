import pptxgen from "pptxgenjs";

// Colors
const TEAL = "0FA89D";
const TEAL_DARK = "0C8A7F";
const BLUE = "2E86C1";
const GREEN = "2E8B57";
const AMBER = "CC8400";
const PURPLE = "7D3C98";
const TEXT_DARK = "1A1A2E";
const TEXT_MED = "444444";
const TEXT_LIGHT = "666666";
const BG_SOFT = "EEF2F6";
const BG_CARD = "F5F7FA";
const BORDER = "D8DEE6";
const RED_BADGE = "8B8B8B";

function addSlideBase(pptx: pptxgen, title?: string) {
  const slide = pptx.addSlide();
  // Soft background
  slide.background = { color: BG_SOFT };
  // Top accent bar
  slide.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: "100%", h: 0.12,
    fill: { type: "solid", color: TEAL },
  });
  // @ts-ignore - transition is supported by pptxgenjs at runtime
  slide.transition = { type: "fade", speed: 1.0 };
  return slide;
}

// ─── Slide 1: Title ───
function addTitleSlide(pptx: pptxgen) {
  const slide = addSlideBase(pptx);

  slide.addText("Secure-Drop", {
    x: 0.5, y: 1.2, w: "90%", h: 1.2,
    fontSize: 54, fontFace: "Arial", bold: true, color: TEAL_DARK,
    align: "center",
  });
  slide.addText("Offline, End-to-End Encrypted Peer-to-Peer File Transfer", {
    x: 0.5, y: 2.3, w: "90%", h: 0.6,
    fontSize: 22, fontFace: "Arial", color: TEXT_MED, align: "center",
  });

  // Divider
  slide.addShape(pptx.ShapeType.rect, {
    x: 4.5, y: 3.1, w: 2, h: 0.03, fill: { type: "solid", color: TEAL },
  });

  // Team members
  const team = [
    { name: "Anushka Walia", roll: "1000017918" },
    { name: "Varun Ruhella", roll: "1000018804" },
    { name: "Aaditya Singh", roll: "1000018909" },
  ];
  team.forEach((t, i) => {
    const xPos = 1.5 + i * 3.2;
    slide.addText(t.name, { x: xPos, y: 3.5, w: 3, h: 0.5, fontSize: 20, bold: true, color: TEXT_DARK, align: "center", fontFace: "Arial" });
    slide.addText(t.roll, { x: xPos, y: 3.9, w: 3, h: 0.4, fontSize: 14, color: TEAL, align: "center", fontFace: "Arial" });
  });

  // Guide box
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 2.5, y: 4.6, w: 6, h: 1.8,
    fill: { type: "solid", color: "E8F6F5" },
    line: { color: TEAL, width: 1.5 },
    rectRadius: 0.15,
  });
  slide.addText("Under the guidance of", {
    x: 2.5, y: 4.7, w: 6, h: 0.45, fontSize: 14, color: TEXT_LIGHT, align: "center", fontFace: "Arial",
  });
  slide.addText("Dr. Kirti Gupta", {
    x: 2.5, y: 5.1, w: 6, h: 0.6, fontSize: 32, bold: true, color: TEAL_DARK, align: "center", fontFace: "Arial",
  });
  slide.addText("Assistant Professor, SOC • DIT University", {
    x: 2.5, y: 5.65, w: 6, h: 0.45, fontSize: 14, color: TEXT_LIGHT, align: "center", fontFace: "Arial",
  });
}

// ─── Slide 2: Agenda ───
function addIndexSlide(pptx: pptxgen) {
  const slide = addSlideBase(pptx);
  slide.addText("Agenda", { x: 0.8, y: 0.4, w: 8, h: 0.8, fontSize: 36, bold: true, color: TEXT_DARK, fontFace: "Arial" });

  const items = [
    "Introduction & Problem Statement", "Research Objectives", "Literature Review",
    "System Architecture", "Methodology & Protocol", "Security Analysis",
    "Technology Stack", "Project Description", "Project Timeline",
    "Experimental Results", "Conclusion", "Future Scope",
    "Societal Impact", "References",
  ];
  const cols = 3;
  items.forEach((item, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = 0.6 + col * 3.5;
    const y = 1.5 + row * 1.05;
    slide.addShape(pptx.ShapeType.roundRect, {
      x, y, w: 3.3, h: 0.85,
      fill: { type: "solid", color: BG_CARD },
      line: { color: BORDER, width: 0.75 },
      rectRadius: 0.1,
    });
    slide.addText(`${String(i + 1).padStart(2, "0")}  ${item}`, {
      x: x + 0.15, y, w: 3, h: 0.85,
      fontSize: 12, color: TEXT_DARK, fontFace: "Arial", valign: "middle",
    });
  });
}

// ─── Slide 3: Intro ───
function addIntroSlide(pptx: pptxgen) {
  const slide = addSlideBase(pptx);
  slide.addText([
    { text: "The Problem with ", options: { color: TEXT_DARK } },
    { text: "File Sharing", options: { color: TEAL } },
  ], { x: 0.8, y: 0.4, w: 10, h: 0.8, fontSize: 36, bold: true, fontFace: "Arial" });

  // Current Way box
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 0.6, y: 1.5, w: 4.8, h: 4.5,
    fill: { type: "solid", color: "FDF2F2" }, line: { color: "E8A0A0", width: 1 }, rectRadius: 0.15,
  });
  slide.addText("❌ Current Way", { x: 0.8, y: 1.6, w: 4, h: 0.5, fontSize: 20, bold: true, color: "CC4444", fontFace: "Arial" });
  const currentProblems = [
    "📱 Sender → Upload → ☁️ Cloud → Download → 📱 Receiver",
    "• Upload to Google Drive / WhatsApp",
    "• Wastes internet bandwidth",
    "• Files exposed to third-party servers",
    "• Slow for large files",
  ];
  currentProblems.forEach((p, i) => {
    slide.addText(p, { x: 1, y: 2.3 + i * 0.55, w: 4, h: 0.45, fontSize: 13, color: TEXT_LIGHT, fontFace: "Arial" });
  });

  // Arrow
  slide.addText("→", { x: 5.4, y: 3.2, w: 0.6, h: 0.6, fontSize: 36, color: TEAL, align: "center", fontFace: "Arial" });

  // Secure-Drop box
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 6, y: 1.5, w: 4.8, h: 4.5,
    fill: { type: "solid", color: "EEFAF8" }, line: { color: TEAL, width: 1 }, rectRadius: 0.15,
  });
  slide.addText("✅ Secure-Drop", { x: 6.2, y: 1.6, w: 4, h: 0.5, fontSize: 20, bold: true, color: TEAL, fontFace: "Arial" });
  const secureBenefits = [
    "📱 Sender → ⚡ Encrypted Tunnel → 📶 Wi-Fi → 📱 Receiver",
    "• Direct encrypted tunnel",
    "• Uses local Wi-Fi only",
    "• 100% data privacy",
    "• Blazing fast transfers",
  ];
  secureBenefits.forEach((p, i) => {
    slide.addText(p, { x: 6.4, y: 2.3 + i * 0.55, w: 4, h: 0.45, fontSize: 13, color: TEXT_LIGHT, fontFace: "Arial" });
  });
}

// ─── Slide 4: Objectives ───
function addObjectivesSlide(pptx: pptxgen) {
  const slide = addSlideBase(pptx);
  slide.addText([
    { text: "Project ", options: { color: TEXT_DARK } },
    { text: "Objectives", options: { color: TEAL_DARK } },
  ], { x: 0.8, y: 0.4, w: 10, h: 0.8, fontSize: 36, bold: true, fontFace: "Arial" });

  const objectives = [
    { title: "Zero Internet Dependency", desc: "Operates entirely over local Wi-Fi using Multicast DNS (mDNS) for zero-configuration peer discovery (RFC 6762). No cloud servers required.", color: TEAL },
    { title: "AES-256-GCM Encryption", desc: "Military-grade authenticated encryption using W3C Web Crypto API with ECDH P-256 key agreement. Perfect forward secrecy per session (NIST SP 800-38D).", color: GREEN },
    { title: "Cross-Platform Compatibility", desc: "Universal accessibility through any modern browser — Windows, macOS, Android, Linux. Built on open W3C and IETF standards.", color: BLUE },
  ];

  objectives.forEach((obj, i) => {
    const x = 0.5 + i * 3.5;
    slide.addShape(pptx.ShapeType.roundRect, {
      x, y: 1.6, w: 3.3, h: 4.8,
      fill: { type: "solid", color: BG_CARD }, line: { color: BORDER, width: 0.75 }, rectRadius: 0.15,
    });
    slide.addText(obj.title, { x: x + 0.2, y: 2.0, w: 2.9, h: 0.6, fontSize: 18, bold: true, color: obj.color, align: "center", fontFace: "Arial" });
    slide.addText(obj.desc, { x: x + 0.2, y: 2.8, w: 2.9, h: 3.2, fontSize: 12, color: TEXT_MED, align: "center", fontFace: "Arial", valign: "top" });
  });
}

// ─── Slide 5: Literature Review ───
function addLitReviewSlide(pptx: pptxgen) {
  const slide = addSlideBase(pptx);
  slide.addText([
    { text: "Literature ", options: { color: TEXT_DARK } },
    { text: "Review", options: { color: TEAL_DARK } },
  ], { x: 0.8, y: 0.3, w: 10, h: 0.7, fontSize: 34, bold: true, fontFace: "Arial" });

  const papers = [
    { id: 1, auth: "Rahalkar & Virgaonkar (2024)", finding: "Encryption overhead & cloud quota limits in WebRTC protocols", gap: "No offline discovery or browser-only access" },
    { id: 2, auth: "Dukiya et al. (2024)", finding: "Equal-peer model with eavesdropping countermeasures", gap: "Lacks offline-first & zero-config discovery" },
    { id: 3, auth: "Salihu et al. (2019)", finding: "WebRTC threat models; crypto libraries for integrity", gap: "No cross-platform browser-only solution" },
    { id: 4, auth: "Werner, M. (HAW Hamburg)", finding: "Browser APIs can build distributed networks", gap: "No E2E file encryption or authenticated transfers" },
    { id: 5, auth: "Stute et al. (2019)", finding: "Critical vulnerabilities in Apple's AWDL (AirDrop)", gap: "Closed proprietary protocols are inadequate" },
  ];

  const tableRows: pptxgen.TableRow[] = [
    [
      { text: "#", options: { bold: true, color: "FFFFFF", fill: { color: TEAL }, fontSize: 11, align: "center" } },
      { text: "Authors", options: { bold: true, color: "FFFFFF", fill: { color: TEAL }, fontSize: 11 } },
      { text: "Key Finding", options: { bold: true, color: "FFFFFF", fill: { color: TEAL }, fontSize: 11 } },
      { text: "Research Gap", options: { bold: true, color: "FFFFFF", fill: { color: TEAL }, fontSize: 11 } },
    ],
    ...papers.map((p, i) => [
      { text: `[${p.id}]`, options: { fontSize: 10, align: "center" as const, color: TEAL, fill: { color: i % 2 === 0 ? BG_CARD : "FFFFFF" } } },
      { text: p.auth, options: { fontSize: 10, bold: true, color: TEXT_DARK, fill: { color: i % 2 === 0 ? BG_CARD : "FFFFFF" } } },
      { text: p.finding, options: { fontSize: 10, color: TEXT_MED, fill: { color: i % 2 === 0 ? BG_CARD : "FFFFFF" } } },
      { text: p.gap, options: { fontSize: 10, color: TEXT_LIGHT, fill: { color: i % 2 === 0 ? BG_CARD : "FFFFFF" } } },
    ]),
  ];

  slide.addTable(tableRows, {
    x: 0.5, y: 1.2, w: 10.3,
    colW: [0.5, 2.5, 3.8, 3.5],
    border: { type: "solid", color: BORDER, pt: 0.5 },
    rowH: [0.45, 0.6, 0.6, 0.6, 0.6, 0.6],
  });

  // Gap synthesis
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 0.5, y: 5.3, w: 10.3, h: 0.9,
    fill: { type: "solid", color: "E8F6F5" }, line: { color: TEAL, width: 0.75 }, rectRadius: 0.1,
  });
  slide.addText("⚡ Research Gap: No existing work simultaneously achieves zero-config discovery, cross-platform browser-only E2E encryption, and offline-first operation.", {
    x: 0.7, y: 5.35, w: 10, h: 0.8, fontSize: 12, color: TEXT_DARK, fontFace: "Arial",
  });
}

// ─── Slide 6: Architecture ───
function addArchitectureSlide(pptx: pptxgen, archImageBase64?: string) {
  const slide = addSlideBase(pptx);
  slide.addText([
    { text: "System ", options: { color: TEXT_DARK } },
    { text: "Architecture", options: { color: TEAL_DARK } },
  ], { x: 0.8, y: 0.4, w: 10, h: 0.7, fontSize: 34, bold: true, fontFace: "Arial" });
  slide.addText("Peer-to-Peer (P2P) Network Topology — Decentralized, Zero-Server Model", {
    x: 0.8, y: 1.0, w: 10, h: 0.4, fontSize: 14, color: TEXT_LIGHT, fontFace: "Arial",
  });

  if (archImageBase64) {
    slide.addImage({ data: archImageBase64, x: 1.5, y: 1.6, w: 8, h: 4.5 });
  } else {
    slide.addText("[Architecture Diagram — P2P Network Topology]", {
      x: 1.5, y: 2.5, w: 8, h: 2, fontSize: 18, color: TEXT_LIGHT, align: "center", fontFace: "Arial",
    });
  }

  slide.addText("Ref: Lua et al. (2005), \"A survey of peer-to-peer overlay network schemes,\" IEEE", {
    x: 0.8, y: 6.5, w: 10, h: 0.4, fontSize: 10, italic: true, color: RED_BADGE, fontFace: "Arial",
  });
}

// ─── Slide 7: Methodology ───
function addMethodologySlide(pptx: pptxgen) {
  const slide = addSlideBase(pptx);
  slide.addText([
    { text: "How It ", options: { color: TEXT_DARK } },
    { text: "Works", options: { color: TEAL_DARK } },
  ], { x: 0.8, y: 0.4, w: 10, h: 0.8, fontSize: 36, bold: true, fontFace: "Arial" });

  const steps = [
    { num: "01", title: "Discovery", desc: "Multicast DNS lets devices on the same Wi-Fi automatically 'see' each other", color: TEAL },
    { num: "02", title: "Handshake", desc: "WebSocket connection established to securely exchange encryption keys", color: BLUE },
    { num: "03", title: "Encryption", desc: "File encrypted locally on sender's device using AES-256-GCM", color: GREEN },
    { num: "04", title: "Transfer", desc: "Data flows directly peer-to-peer via WebRTC DataChannels. No server holds file.", color: AMBER },
  ];

  steps.forEach((step, i) => {
    const x = 0.4 + i * 2.7;
    slide.addShape(pptx.ShapeType.roundRect, {
      x, y: 1.8, w: 2.5, h: 4.2,
      fill: { type: "solid", color: BG_CARD }, line: { color: BORDER, width: 0.75 }, rectRadius: 0.15,
    });
    slide.addText(step.num, { x, y: 2.0, w: 2.5, h: 0.6, fontSize: 28, bold: true, color: step.color, align: "center", fontFace: "Arial" });
    slide.addText(step.title, { x, y: 3.0, w: 2.5, h: 0.5, fontSize: 18, bold: true, color: step.color, align: "center", fontFace: "Arial" });
    slide.addText(step.desc, { x: x + 0.15, y: 3.7, w: 2.2, h: 2, fontSize: 11, color: TEXT_MED, align: "center", fontFace: "Arial", valign: "top" });

    if (i < steps.length - 1) {
      slide.addText("→", { x: x + 2.5, y: 2.8, w: 0.3, h: 0.6, fontSize: 24, color: RED_BADGE, align: "center" });
    }
  });
}

// ─── Slide 8: Security Analysis ───
function addSecuritySlide(pptx: pptxgen) {
  const slide = addSlideBase(pptx);
  slide.addText([
    { text: "Security ", options: { color: TEXT_DARK } },
    { text: "Analysis", options: { color: TEAL_DARK } },
  ], { x: 0.8, y: 0.3, w: 10, h: 0.7, fontSize: 34, bold: true, fontFace: "Arial" });

  // Crypto pipeline
  slide.addText("Cryptographic Pipeline", { x: 0.5, y: 1.1, w: 5, h: 0.4, fontSize: 16, bold: true, color: GREEN, fontFace: "Arial" });
  const cryptoSteps = [
    { title: "Key Generation", detail: "ECDH P-256 via Web Crypto API", ref: "NIST FIPS 186-4" },
    { title: "Key Exchange", detail: "Ephemeral keys over WebSocket", ref: "RFC 6455" },
    { title: "AES-256-GCM", detail: "96-bit IV, 128-bit auth tag", ref: "NIST SP 800-38D" },
    { title: "Integrity Check", detail: "GCM built-in AEAD verification", ref: "RFC 5116" },
  ];
  cryptoSteps.forEach((s, i) => {
    const y = 1.6 + i * 1.1;
    slide.addShape(pptx.ShapeType.roundRect, { x: 0.5, y, w: 5, h: 0.95, fill: { type: "solid", color: BG_CARD }, line: { color: BORDER, width: 0.5 }, rectRadius: 0.08 });
    slide.addText(`${String(i + 1).padStart(2, "0")}  ${s.title}`, { x: 0.7, y, w: 4.5, h: 0.4, fontSize: 13, bold: true, color: TEXT_DARK, fontFace: "Arial" });
    slide.addText(s.detail, { x: 0.7, y: y + 0.35, w: 3.5, h: 0.3, fontSize: 10, color: TEXT_MED, fontFace: "Arial" });
    slide.addText(s.ref, { x: 4, y: y + 0.35, w: 1.3, h: 0.3, fontSize: 9, color: BLUE, fontFace: "Arial" });
  });

  // Threat model
  slide.addText("Threat Model Analysis", { x: 5.8, y: 1.1, w: 5, h: 0.4, fontSize: 16, bold: true, color: AMBER, fontFace: "Arial" });
  const threats = [
    { threat: "Man-in-the-Middle", mitigation: "Ephemeral ECDH key agreement; no reuse" },
    { threat: "Data Exfiltration", mitigation: "Zero cloud upload; data never leaves LAN" },
    { threat: "Replay Attack", mitigation: "Unique 96-bit IV per encryption operation" },
    { threat: "Brute Force", mitigation: "AES-256: 2¹²⁸ operations (infeasible)" },
  ];
  threats.forEach((t, i) => {
    const y = 1.6 + i * 1.1;
    slide.addShape(pptx.ShapeType.roundRect, { x: 5.8, y, w: 5.2, h: 0.95, fill: { type: "solid", color: BG_CARD }, line: { color: BORDER, width: 0.5 }, rectRadius: 0.08 });
    slide.addText(`⚠ ${t.threat}`, { x: 6, y, w: 3, h: 0.4, fontSize: 13, bold: true, color: TEXT_DARK, fontFace: "Arial" });
    slide.addText("✓ MITIGATED", { x: 9.2, y, w: 1.5, h: 0.4, fontSize: 9, bold: true, color: GREEN, align: "right", fontFace: "Arial" });
    slide.addText(t.mitigation, { x: 6, y: y + 0.4, w: 4.8, h: 0.3, fontSize: 10, color: TEXT_MED, fontFace: "Arial" });
  });

  // Bottom note
  slide.addShape(pptx.ShapeType.roundRect, { x: 5.8, y: 6, w: 5.2, h: 0.7, fill: { type: "solid", color: "E8F6F5" }, line: { color: TEAL, width: 0.5 }, rectRadius: 0.08 });
  slide.addText("AES-256 requires 2¹²⁸ operations — exceeds all known computing capacity.", {
    x: 6, y: 6.05, w: 4.8, h: 0.6, fontSize: 10, color: TEXT_DARK, fontFace: "Arial",
  });
}

// ─── Slide 9: Tech Stack ───
function addToolsSlide(pptx: pptxgen) {
  const slide = addSlideBase(pptx);
  slide.addText([
    { text: "Technology ", options: { color: TEXT_DARK } },
    { text: "Stack", options: { color: TEAL_DARK } },
  ], { x: 0.8, y: 0.4, w: 10, h: 0.8, fontSize: 36, bold: true, fontFace: "Arial" });

  const tools = [
    { cat: "Frontend", items: "React.js, HTML5, Drag & Drop UI", desc: "Clean, responsive interface", color: BLUE },
    { cat: "Backend / Signaling", items: "Python, WebSockets, mDNS", desc: "Device discovery and signaling", color: GREEN },
    { cat: "Data Transfer", items: "WebRTC, STUN/TURN, Chunked Transfer", desc: "Direct P2P data channels", color: AMBER },
    { cat: "Security", items: "Web Crypto API, AES-256-GCM", desc: "Client-side encryption; keys never leave device", color: TEAL },
  ];

  tools.forEach((tool, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 5.3;
    const y = 1.6 + row * 2.6;
    slide.addShape(pptx.ShapeType.roundRect, { x, y, w: 5, h: 2.3, fill: { type: "solid", color: BG_CARD }, line: { color: BORDER, width: 0.75 }, rectRadius: 0.12 });
    slide.addText(tool.cat, { x: x + 0.3, y: y + 0.15, w: 4.4, h: 0.5, fontSize: 18, bold: true, color: tool.color, fontFace: "Arial" });
    slide.addText(tool.desc, { x: x + 0.3, y: y + 0.65, w: 4.4, h: 0.4, fontSize: 12, color: TEXT_MED, fontFace: "Arial" });
    slide.addText(tool.items, { x: x + 0.3, y: y + 1.2, w: 4.4, h: 0.5, fontSize: 12, color: tool.color, fontFace: "Arial", bold: true });
  });
}

// ─── Slide 10: Project Description ───
function addProjectDescSlide(pptx: pptxgen) {
  const slide = addSlideBase(pptx);
  slide.addText([
    { text: "Project ", options: { color: TEXT_DARK } },
    { text: "Description", options: { color: TEAL_DARK } },
  ], { x: 0.8, y: 0.4, w: 10, h: 0.7, fontSize: 34, bold: true, fontFace: "Arial" });
  slide.addText("Input / Output Scheme — Data flow through Secure-Drop", {
    x: 0.8, y: 1.0, w: 10, h: 0.4, fontSize: 14, color: TEXT_LIGHT, fontFace: "Arial",
  });

  // Input box
  slide.addShape(pptx.ShapeType.roundRect, { x: 0.5, y: 1.6, w: 5, h: 5, fill: { type: "solid", color: "EFF6FB" }, line: { color: BLUE, width: 1 }, rectRadius: 0.15 });
  slide.addText("📥  Input", { x: 0.7, y: 1.7, w: 4.5, h: 0.6, fontSize: 22, bold: true, color: BLUE, fontFace: "Arial" });
  const inputs = [
    ["File Selected", "e.g., report.pdf (2.4 MB)"],
    ["Sender Device", "e.g., Laptop — Chrome 120"],
    ["Receiver Device", "e.g., Android — Firefox 121"],
    ["Network", "e.g., Wi-Fi 5GHz LAN"],
  ];
  inputs.forEach((inp, i) => {
    const y = 2.5 + i * 0.95;
    slide.addShape(pptx.ShapeType.roundRect, { x: 0.8, y, w: 4.4, h: 0.8, fill: { type: "solid", color: "FFFFFF" }, line: { color: BORDER, width: 0.5 }, rectRadius: 0.06 });
    slide.addText(inp[0], { x: 1, y, w: 4, h: 0.35, fontSize: 10, bold: true, color: RED_BADGE, fontFace: "Arial" });
    slide.addText(inp[1], { x: 1, y: y + 0.35, w: 4, h: 0.35, fontSize: 13, color: TEXT_DARK, fontFace: "Arial" });
  });

  // Output box
  slide.addShape(pptx.ShapeType.roundRect, { x: 5.8, y: 1.6, w: 5, h: 5, fill: { type: "solid", color: "EDF8F1" }, line: { color: GREEN, width: 1 }, rectRadius: 0.15 });
  slide.addText("📤  Output", { x: 6, y: 1.7, w: 4.5, h: 0.6, fontSize: 22, bold: true, color: GREEN, fontFace: "Arial" });
  const outputs = [
    ["Transfer Status", "✓ Completed Successfully"],
    ["Transfer Speed", "e.g., 42.5 MB/s"],
    ["Encryption Overhead", "e.g., 8.2% CPU"],
    ["File Integrity", "✓ SHA-256 Hash Verified"],
  ];
  outputs.forEach((out, i) => {
    const y = 2.5 + i * 0.95;
    slide.addShape(pptx.ShapeType.roundRect, { x: 6.1, y, w: 4.4, h: 0.8, fill: { type: "solid", color: "FFFFFF" }, line: { color: BORDER, width: 0.5 }, rectRadius: 0.06 });
    slide.addText(out[0], { x: 6.3, y, w: 4, h: 0.35, fontSize: 10, bold: true, color: RED_BADGE, fontFace: "Arial" });
    slide.addText(out[1], { x: 6.3, y: y + 0.35, w: 4, h: 0.35, fontSize: 13, color: i === 0 || i === 3 ? GREEN : TEXT_DARK, bold: i === 0 || i === 3, fontFace: "Arial" });
  });
}

// ─── Slide 11: Timeline ───
function addTimelineSlide(pptx: pptxgen) {
  const slide = addSlideBase(pptx);
  slide.addText([
    { text: "Project ", options: { color: TEXT_DARK } },
    { text: "Timeline", options: { color: TEAL_DARK } },
  ], { x: 0.8, y: 0.4, w: 10, h: 0.8, fontSize: 36, bold: true, fontFace: "Arial" });

  const phases = [
    { phase: "Phase 1", activity: "Literature Survey & Requirement Analysis", schedule: "Aug – Sep 2024", status: "Completed", statusColor: GREEN },
    { phase: "Phase 2", activity: "System Design & Architecture Planning", schedule: "Oct – Nov 2024", status: "Completed", statusColor: GREEN },
    { phase: "Phase 3", activity: "Core Module Development (mDNS, WebSocket, WebRTC)", schedule: "Dec 2024 – Jan 2025", status: "In Progress", statusColor: AMBER },
    { phase: "Phase 4", activity: "AES-256-GCM Encryption Integration", schedule: "Feb 2025", status: "In Progress", statusColor: AMBER },
    { phase: "Phase 5", activity: "Cross-Platform Testing & Benchmarking", schedule: "Mar 2025", status: "Pending", statusColor: RED_BADGE },
    { phase: "Phase 6", activity: "Documentation & Final Presentation", schedule: "Mar 2025", status: "Pending", statusColor: RED_BADGE },
  ];

  const tableRows: pptxgen.TableRow[] = [
    [
      { text: "Phase", options: { bold: true, color: "FFFFFF", fill: { color: TEAL }, fontSize: 14, align: "center" } },
      { text: "Key Activity", options: { bold: true, color: "FFFFFF", fill: { color: TEAL }, fontSize: 14 } },
      { text: "Schedule", options: { bold: true, color: "FFFFFF", fill: { color: TEAL }, fontSize: 14 } },
      { text: "Status", options: { bold: true, color: "FFFFFF", fill: { color: TEAL }, fontSize: 14, align: "center" } },
    ],
    ...phases.map((p, i) => [
      { text: p.phase, options: { fontSize: 13, bold: true, color: TEAL_DARK, align: "center" as const, fill: { color: i % 2 === 0 ? BG_CARD : "FFFFFF" } } },
      { text: p.activity, options: { fontSize: 13, color: TEXT_DARK, fill: { color: i % 2 === 0 ? BG_CARD : "FFFFFF" } } },
      { text: p.schedule, options: { fontSize: 13, color: TEXT_MED, fill: { color: i % 2 === 0 ? BG_CARD : "FFFFFF" } } },
      { text: p.status, options: { fontSize: 12, bold: true, color: p.statusColor, align: "center" as const, fill: { color: i % 2 === 0 ? BG_CARD : "FFFFFF" } } },
    ]),
  ];

  slide.addTable(tableRows, {
    x: 0.5, y: 1.6, w: 10.3,
    colW: [1.3, 4.5, 2.5, 2],
    border: { type: "solid", color: BORDER, pt: 0.5 },
    rowH: [0.55, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65],
  });
}

// ─── Slide 12: Data / Benchmarks ───
function addDataSlide(pptx: pptxgen) {
  const slide = addSlideBase(pptx);
  slide.addText([
    { text: "Performance ", options: { color: TEXT_DARK } },
    { text: "Benchmarks", options: { color: TEAL_DARK } },
  ], { x: 0.8, y: 0.4, w: 10, h: 0.8, fontSize: 36, bold: true, fontFace: "Arial" });

  const metrics = [
    { title: "Transfer Speed", value: "~120 MB/s", sub: "on 5GHz Wi-Fi", color: TEAL },
    { title: "2.4GHz vs 5GHz", value: "3x faster", sub: "on 5GHz networks", color: BLUE },
    { title: "Encryption Overhead", value: "<5% CPU", sub: "for 1GB file on laptop", color: GREEN },
    { title: "Mobile Impact", value: "Minimal", sub: "battery drain on mobile", color: AMBER },
  ];

  metrics.forEach((m, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 5.3;
    const y = 1.6 + row * 2.6;
    slide.addShape(pptx.ShapeType.roundRect, { x, y, w: 5, h: 2.3, fill: { type: "solid", color: BG_CARD }, line: { color: BORDER, width: 0.75 }, rectRadius: 0.12 });
    slide.addText(m.title, { x: x + 0.3, y: y + 0.2, w: 4.4, h: 0.4, fontSize: 14, color: TEXT_LIGHT, fontFace: "Arial" });
    slide.addText(m.value, { x: x + 0.3, y: y + 0.6, w: 4.4, h: 0.8, fontSize: 36, bold: true, color: m.color, fontFace: "Arial" });
    slide.addText(m.sub, { x: x + 0.3, y: y + 1.4, w: 4.4, h: 0.4, fontSize: 12, color: TEXT_LIGHT, fontFace: "Arial" });
  });
}

// ─── Slide 13: Conclusion ───
function addConclusionSlide(pptx: pptxgen) {
  const slide = addSlideBase(pptx);
  slide.addText("Conclusion", { x: 0.5, y: 0.8, w: "90%", h: 0.8, fontSize: 36, bold: true, color: TEXT_DARK, align: "center", fontFace: "Arial" });
  slide.addText("Secure-Drop proves that enterprise-grade, secure file transfer doesn't require complex software installations or third-party cloud subscriptions.", {
    x: 1, y: 1.6, w: 9.3, h: 0.8, fontSize: 16, color: TEXT_MED, align: "center", fontFace: "Arial",
  });

  const points = [
    "Enterprise-grade security without complex installations",
    "100% local network — zero cloud dependency",
    "Client-side encryption guarantees data sovereignty",
    "No third-party subscriptions required",
  ];
  points.forEach((p, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.8 + col * 5;
    const y = 2.8 + row * 1.4;
    slide.addShape(pptx.ShapeType.roundRect, { x, y, w: 4.8, h: 1.1, fill: { type: "solid", color: BG_CARD }, line: { color: BORDER, width: 0.75 }, rectRadius: 0.1 });
    slide.addText(`✓  ${p}`, { x: x + 0.2, y, w: 4.4, h: 1.1, fontSize: 14, color: TEXT_DARK, fontFace: "Arial", valign: "middle" });
  });

  slide.addShape(pptx.ShapeType.roundRect, { x: 2.5, y: 5.8, w: 6.3, h: 0.9, fill: { type: "solid", color: "E8F6F5" }, line: { color: TEAL, width: 1 }, rectRadius: 0.1 });
  slide.addText("100% Data Privacy — Guaranteed", {
    x: 2.5, y: 5.8, w: 6.3, h: 0.9, fontSize: 22, bold: true, color: TEAL, align: "center", fontFace: "Arial",
  });
}

// ─── Slide 14: Future Scope ───
function addFutureScopeSlide(pptx: pptxgen) {
  const slide = addSlideBase(pptx);
  slide.addText([
    { text: "Future ", options: { color: TEXT_DARK } },
    { text: "Scope", options: { color: TEAL_DARK } },
  ], { x: 0.8, y: 0.3, w: 10, h: 0.7, fontSize: 34, bold: true, fontFace: "Arial" });

  const items = [
    { title: "Multi-Hop Relay Transfer", desc: "Extend range beyond single LAN using relay nodes with onion-style encryption layers.", tags: "Overlay Networks • Routing", color: TEAL },
    { title: "Zero-Knowledge Authentication", desc: "ZK-SNARK based device verification without revealing identity.", tags: "ZK Proofs • Privacy", color: BLUE },
    { title: "Adaptive Chunk Optimization", desc: "ML-based dynamic chunk sizing adapting to real-time network conditions.", tags: "Machine Learning • QoS", color: AMBER },
    { title: "Progressive Web App (PWA)", desc: "Offline-first PWA with service workers for instant loading.", tags: "Service Workers • Installable", color: GREEN },
    { title: "Formal Security Verification", desc: "ProVerif/Tamarin model checking for cryptographic protocol verification.", tags: "Formal Methods • Analysis", color: PURPLE },
  ];

  items.forEach((item, i) => {
    const y = 1.2 + i * 1.1;
    slide.addShape(pptx.ShapeType.roundRect, { x: 0.5, y, w: 10.3, h: 0.95, fill: { type: "solid", color: BG_CARD }, line: { color: BORDER, width: 0.5 }, rectRadius: 0.08 });
    slide.addText(item.title, { x: 0.8, y, w: 3, h: 0.5, fontSize: 14, bold: true, color: item.color, fontFace: "Arial", valign: "middle" });
    slide.addText(item.desc, { x: 3.8, y, w: 5, h: 0.5, fontSize: 11, color: TEXT_MED, fontFace: "Arial", valign: "middle" });
    slide.addText(item.tags, { x: 8.8, y, w: 1.8, h: 0.5, fontSize: 9, color: item.color, fontFace: "Arial", valign: "middle", align: "right" });
  });
}

// ─── Slide 15: Societal Impact ───
function addBenefitSlide(pptx: pptxgen) {
  const slide = addSlideBase(pptx);
  slide.addText([
    { text: "Benefit for ", options: { color: TEXT_DARK } },
    { text: "Society", options: { color: TEAL_DARK } },
  ], { x: 0.8, y: 0.4, w: 10, h: 0.8, fontSize: 36, bold: true, fontFace: "Arial" });

  const cases = [
    { title: "University Campuses", desc: "Save massive bandwidth. Students share project files, presentations, and datasets instantly.", color: TEAL },
    { title: "Corporate & Legal Offices", desc: "Ensures 'Data Sovereignty' — sensitive documents and corporate IP never touch third-party servers.", color: BLUE },
    { title: "Disaster Zones & Remote Areas", desc: "Crucial communication tool where internet is down but local network routing still functions.", color: GREEN },
  ];

  cases.forEach((c, i) => {
    const x = 0.4 + i * 3.6;
    slide.addShape(pptx.ShapeType.roundRect, { x, y: 1.8, w: 3.3, h: 4.5, fill: { type: "solid", color: BG_CARD }, line: { color: BORDER, width: 0.75 }, rectRadius: 0.15 });
    slide.addText(c.title, { x: x + 0.2, y: 2.2, w: 2.9, h: 0.6, fontSize: 18, bold: true, color: c.color, align: "center", fontFace: "Arial" });
    slide.addText(c.desc, { x: x + 0.2, y: 3.2, w: 2.9, h: 2.5, fontSize: 13, color: TEXT_MED, align: "center", fontFace: "Arial", valign: "top" });
  });
}

// ─── Slide 16: References ───
function addReferencesSlide(pptx: pptxgen) {
  const slide = addSlideBase(pptx);
  slide.addText("References", { x: 0.8, y: 0.3, w: 10, h: 0.7, fontSize: 34, bold: true, color: TEXT_DARK, fontFace: "Arial" });

  const refs = [
    "[1] Rahalkar & Virgaonkar (2024). Secure Device-to-Device File Transfer. arXiv:2411.13827.",
    "[2] Dukiya et al. (2024). SecureLink P2P Using WebRTC. IJRAR, Vol. 11.",
    "[3] Salihu et al. (2019). P2P Communication Using WebRTC. Science Journal.",
    "[4] Werner, M. P2P Networking using Open Web Technologies. HAW Hamburg.",
    "[5] RFC 8827 — Rescorla (2021). WebRTC Security Architecture. IETF.",
    "[6] RFC 6455 — Fette & Melnikov (2011). The WebSocket Protocol. IETF.",
    "[7] RFC 6762 — Cheshire & Krochmal (2013). Multicast DNS. IETF.",
    "[8] NIST SP 800-38D — Dworkin (2007). GCM Mode. NIST.",
    "[9] W3C WebRTC 1.0 — Bergkvist et al. (2021). Real-Time Communication.",
    "[10] Stute et al. (2019). Attacks on AWDL (AirDrop). USENIX Security.",
    "[11] Lua et al. (2005). P2P Overlay Network Schemes. IEEE.",
    "[12] Boneh & Shoup (2020). Applied Cryptography. Stanford.",
  ];

  refs.forEach((ref, i) => {
    const col = i < 6 ? 0 : 1;
    const row = i < 6 ? i : i - 6;
    const x = 0.5 + col * 5.3;
    const y = 1.2 + row * 0.7;
    slide.addShape(pptx.ShapeType.roundRect, { x, y, w: 5, h: 0.6, fill: { type: "solid", color: i % 2 === 0 ? BG_CARD : "FFFFFF" }, line: { color: BORDER, width: 0.3 }, rectRadius: 0.05 });
    slide.addText(ref, { x: x + 0.15, y, w: 4.7, h: 0.6, fontSize: 9, color: TEXT_MED, fontFace: "Arial", valign: "middle" });
  });

  // Thank you footer
  const team = [
    { name: "Anushka Walia", roll: "1000017918" },
    { name: "Varun Ruhella", roll: "1000018804" },
    { name: "Aaditya Singh", roll: "1000018909" },
  ];
  team.forEach((t, i) => {
    const x = 0.8 + i * 3;
    slide.addText(t.name, { x, y: 6.2, w: 2.5, h: 0.35, fontSize: 13, bold: true, color: TEXT_DARK, fontFace: "Arial" });
    slide.addText(t.roll, { x, y: 6.5, w: 2.5, h: 0.3, fontSize: 10, color: TEAL, fontFace: "Arial" });
  });
  slide.addText("Thank you! Open to questions.", { x: 6.5, y: 6.2, w: 4, h: 0.6, fontSize: 16, bold: true, color: TEAL, align: "right", fontFace: "Arial" });
}

// ─── Main Export Function ───
export async function exportNativePptx() {
  const pptx = new pptxgen();
  pptx.layout = "LAYOUT_WIDE";
  pptx.author = "Secure-Drop Team";
  pptx.title = "Secure-Drop: Offline E2E Encrypted P2P File Transfer";
  pptx.subject = "Capstone Project Presentation";

  // Try to capture architecture image
  let archImage: string | undefined;
  try {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = "/dit-logo.webp"; // We'll try the architecture image
    // Load the p2p architecture image
    const archImg = new Image();
    archImg.crossOrigin = "anonymous";
    archImg.src = new URL("../../assets/p2p-architecture.png", import.meta.url).href;
    await new Promise<void>((resolve) => {
      archImg.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = archImg.naturalWidth;
        canvas.height = archImg.naturalHeight;
        const ctx = canvas.getContext("2d");
        ctx?.drawImage(archImg, 0, 0);
        archImage = canvas.toDataURL("image/png");
        resolve();
      };
      archImg.onerror = () => resolve();
    });
  } catch {
    // continue without image
  }

  addTitleSlide(pptx);
  addIndexSlide(pptx);
  addIntroSlide(pptx);
  addObjectivesSlide(pptx);
  addLitReviewSlide(pptx);
  addArchitectureSlide(pptx, archImage);
  addMethodologySlide(pptx);
  addSecuritySlide(pptx);
  addToolsSlide(pptx);
  addProjectDescSlide(pptx);
  addTimelineSlide(pptx);
  addDataSlide(pptx);
  addConclusionSlide(pptx);
  addFutureScopeSlide(pptx);
  addBenefitSlide(pptx);
  addReferencesSlide(pptx);

  await pptx.writeFile({ fileName: "Secure-Drop-Presentation.pptx" });
}
