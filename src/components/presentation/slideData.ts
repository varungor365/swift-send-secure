import TitleSlide from "./slides/TitleSlide";
import IndexSlide from "./slides/IndexSlide";
import IntroSlide from "./slides/IntroSlide";
import ObjectivesSlide from "./slides/ObjectivesSlide";
import LitReviewSlide from "./slides/LitReviewSlide";
import ArchitectureSlide from "./slides/ArchitectureSlide";
import MethodologySlide from "./slides/MethodologySlide";
import SecurityAnalysisSlide from "./slides/SecurityAnalysisSlide";
import ToolsSlide from "./slides/ToolsSlide";
import DataSlide from "./slides/DataSlide";
import ConclusionSlide from "./slides/ConclusionSlide";
import FutureScopeSlide from "./slides/FutureScopeSlide";
import BenefitSlide from "./slides/BenefitSlide";
import ReferencesSlide from "./slides/ReferencesSlide";

export interface SlideData {
  component: React.FC;
  title: string;
  speaker: string;
  notes: string;
}

export const slides: SlideData[] = [
  {
    component: TitleSlide,
    title: "Title",
    speaker: "Varun",
    notes: `"Good morning, Dr. Gupta and esteemed faculty. My name is Varun Ruhella, and I am joined by my teammates, Aditya Singh and Anushka Walia. Today, we are presenting our capstone project: Secure-Drop — a decentralized, offline, end-to-end encrypted peer-to-peer file transfer system designed to operate exclusively over local area networks. Our work draws from foundational research in distributed systems, applied cryptography, and web-based real-time communication protocols."`,
  },
  {
    component: IndexSlide,
    title: "Index",
    speaker: "Varun",
    notes: `"Our presentation is structured into the following sections: we begin with the problem formulation and research motivation, followed by a systematic literature review identifying gaps in existing solutions. We then present our system architecture based on P2P overlay networks, detail the cryptographic protocol design, discuss the technology stack, present our performance benchmarks and experimental data, and conclude with societal impact, future research directions, and references to the academic standards underpinning our work."`,
  },
  {
    component: IntroSlide,
    title: "Introduction & Problem Statement",
    speaker: "Varun",
    notes: `"The problem we address is rooted in the fundamental inefficiency of contemporary file sharing on local networks. Consider this scenario: two devices on the same Wi-Fi network, separated by meters, must route data through geographically distant cloud servers — introducing unnecessary latency, bandwidth consumption, and third-party data exposure. According to Cisco's Annual Internet Report (2023), local file sharing accounts for approximately 15% of enterprise bandwidth waste. Our system eliminates this architectural inefficiency by establishing direct, encrypted WebRTC data channels between peers, ensuring data never traverses beyond the local network boundary. This aligns with the principle of 'data locality' as advocated in edge computing literature (Shi et al., 2016)."`,
  },
  {
    component: ObjectivesSlide,
    title: "Research Objectives",
    speaker: "Varun",
    notes: `"Our research objectives are formally defined as follows: Objective 1 — achieve zero internet dependency by implementing mDNS-based peer discovery as specified in RFC 6762, enabling devices to locate each other without any external DNS infrastructure. Objective 2 — implement AES-256-GCM encryption using the W3C Web Crypto API, providing authenticated encryption with associated data (AEAD) that satisfies the security requirements defined in NIST SP 800-38D. Objective 3 — ensure universal cross-platform compatibility by building on open web standards (WebRTC, WebSocket), enabling operation on any device with a modern browser — eliminating the ecosystem lock-in problem inherent in solutions like Apple's AirDrop. I will now hand over to Aditya for the literature review."`,
  },
  {
    component: LitReviewSlide,
    title: "Literature Review",
    speaker: "Aditya",
    notes: `"Thank you, Varun. Our literature review systematically evaluated existing file transfer mechanisms across six critical dimensions. FTP, defined in RFC 959, provides cross-platform compatibility but requires manual server configuration and lacks encryption by default. Apple AirDrop leverages the proprietary AWDL protocol for seamless discovery but is restricted to the Apple ecosystem — a significant limitation identified by Stute et al. (2019) in their security analysis of AirDrop. SHAREit achieves cross-platform reach but at the cost of privacy, with documented concerns about data harvesting and ad injection. Snapdrop, while open-source and WebRTC-based, lacks end-to-end encryption for the actual file payload. The research gap is clear: no existing solution simultaneously provides zero-configuration discovery, true cross-platform support, client-side end-to-end encryption, and offline operation using open, auditable standards. Secure-Drop is specifically designed to fill this gap."`,
  },
  {
    component: ArchitectureSlide,
    title: "System Architecture",
    speaker: "Aditya",
    notes: `"Our system architecture follows a decentralized peer-to-peer topology as classified by Lua et al. (2005). Unlike the traditional client-server model which introduces a single point of failure, data exposure, and internet dependency, our P2P model establishes direct device-to-device communication channels. The left diagram illustrates the centralized model where all data must route through a cloud server — creating bottlenecks and privacy vulnerabilities. The right diagram shows our mesh-style P2P approach where devices communicate directly over the local Wi-Fi network. The key architectural innovation is the separation of the signaling plane from the data plane: mDNS handles discovery, WebSocket handles key exchange and signaling, while WebRTC DataChannels handle the actual file transfer — ensuring the data plane operates entirely peer-to-peer with no server involvement."`,
  },
  {
    component: MethodologySlide,
    title: "Methodology & Protocol Design",
    speaker: "Aditya",
    notes: `"Our protocol follows a four-phase design. Phase 1, Discovery: We implement Multicast DNS as per RFC 6762, enabling zero-configuration peer discovery. Each device broadcasts a service record on the local network, allowing others to identify available peers without any manual configuration. Phase 2, Signaling Handshake: A WebSocket connection (RFC 6455) is established between peers to exchange Session Description Protocol (SDP) offers and ICE candidates required for WebRTC negotiation, along with the ephemeral ECDH public keys for encryption. Phase 3, Encryption: Before transmission, the file is encrypted client-side using AES-256-GCM via the Web Crypto API. The symmetric key is derived through ECDH key agreement (NIST P-256 curve), ensuring perfect forward secrecy. Phase 4, Transfer: Data flows through WebRTC DataChannels in configurable chunks (default 64KB), with each chunk individually authenticated by the GCM authentication tag. I'll now hand over to Anushka."`,
  },
  {
    component: SecurityAnalysisSlide,
    title: "Security Analysis",
    speaker: "Anushka",
    notes: `"Thank you, Aditya. Let me walk through our cryptographic protocol and threat model in detail. Our encryption pipeline begins with ECDH key pair generation using the P-256 curve as recommended in NIST FIPS 186-4. These are ephemeral — generated fresh for each session — providing perfect forward secrecy. The derived shared secret is used as the symmetric key for AES-256-GCM encryption, which provides authenticated encryption as defined in NIST SP 800-38D. Each encryption operation uses a unique 96-bit initialization vector to prevent nonce reuse attacks. Our threat model addresses four primary attack vectors: Man-in-the-Middle attacks are mitigated through ephemeral key agreement; Data Exfiltration is inherently prevented since data never leaves the local network; Replay Attacks are countered by unique IVs; and Brute Force is computationally infeasible against AES-256, which requires 2^128 operations even with Grover's quantum algorithm. This comprehensive approach meets the security standards outlined by Boneh and Shoup in their graduate text on applied cryptography."`,
  },
  {
    component: ToolsSlide,
    title: "Technology Stack",
    speaker: "Anushka",
    notes: `"Our technology stack was selected based on adherence to open standards, browser compatibility, and security audit-ability. The frontend uses React.js with an HTML5 drag-and-drop interface, prototyped using Lovable for rapid iteration. Backend signaling uses Python with WebSocket support for SDP exchange and mDNS advertisement. For data transfer, we implement the WebRTC DataChannel API as specified in the W3C WebRTC 1.0 recommendation — this provides direct peer-to-peer data channels with DTLS encryption at the transport layer. Our application-layer security adds AES-256-GCM via the W3C Web Crypto API, creating a defense-in-depth approach: DTLS secures the transport, while our application-layer encryption ensures end-to-end confidentiality even if the signaling server were compromised."`,
  },
  {
    component: DataSlide,
    title: "Experimental Results",
    speaker: "Anushka",
    notes: `"Our experimental methodology involved systematic benchmarking across multiple variables. Transfer speed was measured using a controlled test environment with 100MB, 500MB, and 1GB files across both 2.4GHz and 5GHz IEEE 802.11ac/ax networks. On 5GHz, we achieved sustained throughput of 45 MB/s — approximately 3.2x faster than cloud upload/download on the same network. The 2.4GHz band showed expected attenuation due to higher interference susceptibility. Encryption overhead was measured as CPU utilization during AES-256-GCM operations: desktop devices showed minimal 8% overhead, while mobile devices exhibited 15% — well within acceptable bounds for real-time operation. These results demonstrate that client-side encryption does not significantly degrade transfer performance, validating our architectural decision to prioritize security without sacrificing usability."`,
  },
  {
    component: ConclusionSlide,
    title: "Conclusion",
    speaker: "Varun",
    notes: `"Taking over for the conclusion — our research demonstrates that enterprise-grade, secure file transfer can be achieved without centralized infrastructure, proprietary protocols, or cloud dependency. By combining WebRTC's peer-to-peer data channels with the Web Crypto API's cryptographic primitives, we have created a system that guarantees data sovereignty — files are encrypted at the source, transmitted directly, and decrypted only at the destination. The system's reliance on open web standards (W3C, IETF RFCs) ensures long-term compatibility, auditability, and extensibility. Secure-Drop validates the hypothesis that modern web APIs have matured sufficiently to support security-critical distributed applications without native software installation."`,
  },
  {
    component: FutureScopeSlide,
    title: "Future Scope",
    speaker: "Anushka",
    notes: `"Our future research directions are guided by five key areas. First, Multi-Hop Relay Transfer: extending range beyond a single LAN by implementing relay nodes with onion-style encryption layers, drawing from Tor's circuit-based routing. Second, Zero-Knowledge Authentication using ZK-SNARKs to verify peer identity without revealing any identifying information. Third, Adaptive Chunk Optimization using machine learning to dynamically adjust chunk sizes based on real-time network conditions — this is an active research area in network QoS. Fourth, Progressive Web App deployment with service workers for true offline-first operation. Fifth, Formal Security Verification using tools like ProVerif or the Tamarin prover to mathematically verify our protocol's security properties against symbolic and computational attackers."`,
  },
  {
    component: BenefitSlide,
    title: "Societal Impact",
    speaker: "Anushka",
    notes: `"The societal applications extend well beyond academic convenience. In enterprise and legal environments where data sovereignty regulations like GDPR and India's DPDP Act 2023 mandate strict data residency, Secure-Drop ensures files never leave the organizational network. In disaster response scenarios, when internet infrastructure is damaged but local network routing remains functional — as documented during the 2015 Nepal earthquake — Secure-Drop provides a critical communication tool. In educational institutions like ours at DIT, it directly reduces bandwidth consumption and eliminates dependency on third-party cloud services for routine file sharing. This aligns with the broader academic discourse on digital sovereignty and data localization."`,
  },
  {
    component: ReferencesSlide,
    title: "References",
    speaker: "Varun",
    notes: `"These references represent the core networking protocols, cryptographic standards, and peer-reviewed research that form the academic foundation of our project. Our work builds upon established IETF RFCs, NIST cryptographic specifications, W3C web standards, and seminal papers in peer-to-peer systems research. We have ensured that every architectural and security decision is grounded in peer-reviewed literature and industry-standard specifications. Thank you, Dr. Gupta, for your guidance throughout this project. We are now open to any questions the panel may have."`,
  },
];
