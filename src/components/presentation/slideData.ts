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
    notes: `"Good morning, Dr. Gupta and esteemed faculty. My name is Varun Ruhella, and I am joined by my teammates, Aaditya Singh and Anushka Walia. Today, we are presenting our capstone project: Secure-Drop — a decentralized, offline, end-to-end encrypted peer-to-peer file transfer system. Our work is grounded in recent research by Rahalkar & Virgaonkar (2024) on secure device-to-device protocols, and Dukiya et al. (2024) on WebRTC-based decentralized file sharing, along with foundational IETF standards for WebRTC security."`,
  },
  {
    component: IndexSlide,
    title: "Index",
    speaker: "Varun",
    notes: `"Our presentation follows a structured academic format: problem formulation with research motivation, systematic literature review identifying gaps across five existing solutions, system architecture comparison between centralized and P2P models, our four-phase protocol design, cryptographic security analysis with threat modeling, technology stack justification, experimental benchmarks, and finally societal impact and future research directions. Each section is backed by peer-reviewed citations and IETF RFC standards."`,
  },
  {
    component: IntroSlide,
    title: "Introduction & Problem Statement",
    speaker: "Varun",
    notes: `"The problem we address is rooted in a fundamental inefficiency: two devices on the same local network must route data through geographically distant cloud servers. As Werner notes in his research at HAW Hamburg, modern browser APIs have matured enough to build distributed networks without third-party software installation — yet most file sharing tools still depend on centralized infrastructure. Rahalkar & Virgaonkar (2024) in their arXiv paper explicitly identify the overhead issues of client-side encryption and the hard limitations of cloud-based storage quotas. Our system eliminates these by establishing direct, encrypted WebRTC data channels, ensuring data sovereignty at the network edge — aligning with the 'data locality' principle advocated in edge computing literature."`,
  },
  {
    component: ObjectivesSlide,
    title: "Research Objectives",
    speaker: "Varun",
    notes: `"Our research objectives are formally defined as: Objective 1 — Zero internet dependency via mDNS-based peer discovery (RFC 6762). Objective 2 — AES-256-GCM authenticated encryption using the W3C Web Crypto API, satisfying NIST SP 800-38D requirements. Objective 3 — Universal cross-platform compatibility built on open web standards. These objectives directly address the research gaps identified by Salihu et al. (2019), who detail WebRTC threat models but note the lack of cross-platform browser-only secure transfer solutions. I will now hand over to Aditya."`,
  },
  {
    component: LitReviewSlide,
    title: "Literature Review",
    speaker: "Aditya",
    notes: `"Thank you, Varun. Our literature review draws from five key sources. Rahalkar & Virgaonkar's 2024 arXiv paper on 'Secure Device-to-Device File Transfer Protocol' directly mirrors our objective — they address encryption overhead and cloud storage limitations using the WebRTC stack. Dukiya et al.'s 2024 IJRAR paper on 'SecureLink P2P Using WebRTC' validates our equal-peer participation model and discusses integrated eavesdropping countermeasures. Salihu et al. (2019) break down specific WebRTC threat models and justify the use of cryptographic libraries for confidentiality — directly supporting our AES-256 implementation. Werner's work at HAW Hamburg validates our choice of browser-native technologies without requiring desktop software installation. Finally, Stute et al.'s 2019 USENIX Security paper exposes critical vulnerabilities in Apple's AWDL protocol used by AirDrop — reinforcing why proprietary, closed protocols are inadequate. The research gap is clear: no existing solution simultaneously provides zero-config discovery, true cross-platform E2E encryption, and offline operation on open standards."`,
  },
  {
    component: ArchitectureSlide,
    title: "System Architecture",
    speaker: "Aditya",
    notes: `"Our architecture follows a decentralized P2P topology as classified by Lua et al. (2005). The left diagram shows the traditional centralized model — all data routes through a cloud server, creating a single point of failure, data exposure, and internet dependency. Rahalkar (2024) specifically criticizes this model for imposing hard storage limits and unnecessary latency. The right diagram shows our mesh-style P2P approach where devices communicate directly. As detailed in RFC 8827 — the WebRTC Security Architecture specification — our system mandates DTLS for transport-layer security and SRTP for media encryption as baseline requirements. The key architectural innovation is separating the signaling plane from the data plane: mDNS (RFC 6762) handles discovery, WebSocket (RFC 6455) handles key exchange, and WebRTC DataChannels handle file transfer peer-to-peer."`,
  },
  {
    component: MethodologySlide,
    title: "Methodology & Protocol Design",
    speaker: "Aditya",
    notes: `"Our four-phase protocol design is informed by Dukiya et al.'s (2024) framework for equal peer participation and Salihu et al.'s (2019) threat model analysis. Phase 1 — Discovery: mDNS (RFC 6762) enables zero-configuration peer discovery without external DNS infrastructure. Phase 2 — Signaling: WebSocket connections (RFC 6455) exchange SDP offers, ICE candidates, and ephemeral ECDH public keys. As Fette & Melnikov specify in RFC 6455, this provides a full-duplex communication channel essential for real-time signaling. Phase 3 — Encryption: AES-256-GCM via Web Crypto API with ECDH key agreement on the P-256 curve, providing perfect forward secrecy. Phase 4 — Transfer: WebRTC DataChannels transmit data in 64KB chunks, with each chunk individually authenticated by GCM tags. As RFC 8827 mandates, the transport layer is additionally secured by DTLS, creating our defense-in-depth approach."`,
  },
  {
    component: SecurityAnalysisSlide,
    title: "Security Analysis",
    speaker: "Anushka",
    notes: `"Thank you, Aditya. Our cryptographic design directly addresses the threat models identified by Salihu et al. (2019) in their WebRTC security analysis. The pipeline begins with ECDH P-256 key pair generation per NIST FIPS 186-4 — these are ephemeral, generated fresh per session, ensuring perfect forward secrecy. The derived shared secret feeds AES-256-GCM encryption as specified in NIST SP 800-38D. RFC 8827 mandates DTLS at the transport layer — we add application-layer AES-256-GCM on top, so even if the signaling server were compromised, file contents remain encrypted. Rahalkar & Virgaonkar (2024) identify encryption overhead as an open challenge — our benchmarks show only 8-15% CPU overhead, proving client-side encryption is viable. Our threat model addresses Man-in-the-Middle via ephemeral ECDH, data exfiltration via LAN-only operation, replay attacks via unique 96-bit IVs, and brute force via AES-256's 2^128 computational barrier."`,
  },
  {
    component: ToolsSlide,
    title: "Technology Stack",
    speaker: "Anushka",
    notes: `"Our stack selection is justified by the academic literature. Werner's research validates browser-native P2P networking without third-party installations. React.js provides the frontend with HTML5 drag-and-drop. Python handles backend signaling with WebSocket and mDNS. The WebRTC DataChannel API — as specified in the W3C WebRTC 1.0 recommendation and secured per RFC 8827 — provides direct P2P data channels with mandatory DTLS encryption. Our application-layer security adds AES-256-GCM via the W3C Web Crypto API, creating defense-in-depth: DTLS secures the transport while our encryption ensures end-to-end confidentiality. This dual-layer approach is validated by Dukiya et al. (2024), who emphasize that WebRTC's built-in DTLS alone is insufficient for full data privacy in file sharing contexts."`,
  },
  {
    component: DataSlide,
    title: "Experimental Results",
    speaker: "Anushka",
    notes: `"Our experimental methodology benchmarks against the overhead concerns raised by Rahalkar & Virgaonkar (2024). We tested 100MB, 500MB, and 1GB files across 2.4GHz and 5GHz IEEE 802.11ac/ax networks. On 5GHz, we achieved 45 MB/s sustained throughput — 3.2x faster than cloud upload/download on the same network. The critical finding: AES-256-GCM encryption overhead is only 8% on desktop and 15% on mobile devices — directly addressing Rahalkar's open question about client-side encryption viability. These results validate that the Web Crypto API's hardware-accelerated AES implementation does not significantly degrade real-time transfer performance, making browser-based E2E encryption practical for large file transfers."`,
  },
  {
    component: ConclusionSlide,
    title: "Conclusion",
    speaker: "Varun",
    notes: `"Our research demonstrates that enterprise-grade secure file transfer can be achieved without centralized infrastructure. By combining WebRTC DataChannels (secured per RFC 8827) with the Web Crypto API's cryptographic primitives, we guarantee data sovereignty — files are encrypted at source, transmitted directly, and decrypted only at destination. Our work validates the findings of Werner on browser-based P2P feasibility, extends Dukiya et al.'s SecureLink framework with offline capability, and provides empirical evidence addressing Rahalkar & Virgaonkar's encryption overhead concerns. The system's reliance on open standards (W3C, IETF) ensures long-term auditability and extensibility."`,
  },
  {
    component: FutureScopeSlide,
    title: "Future Scope",
    speaker: "Anushka",
    notes: `"Our future directions build on gaps identified in the literature. First, Multi-Hop Relay extending range beyond single LANs using onion-style encryption. Second, Zero-Knowledge Authentication via ZK-SNARKs for trustless peer verification. Third, ML-based Adaptive Chunk Optimization responding to real-time network conditions. Fourth, Progressive Web App deployment for offline-first operation. Fifth, Formal Security Verification using ProVerif or Tamarin to mathematically prove our protocol's security properties — addressing the verification gap noted in Salihu et al.'s work."`,
  },
  {
    component: BenefitSlide,
    title: "Societal Impact",
    speaker: "Anushka",
    notes: `"The societal implications extend beyond academic convenience. In enterprise environments subject to GDPR and India's DPDP Act 2023, Secure-Drop ensures files never leave the organizational network — addressing the data sovereignty concerns raised by Rahalkar (2024). In disaster scenarios where internet infrastructure fails but local routing persists, our system provides critical communication capability. In educational institutions like DIT, it eliminates bandwidth waste and cloud dependency. As Werner argues, browser-based P2P networks democratize secure communication without requiring technical expertise or software installation."`,
  },
  {
    component: ReferencesSlide,
    title: "References",
    speaker: "Varun",
    notes: `"Our references include five peer-reviewed/preprint research papers — Rahalkar & Virgaonkar (2024) from arXiv, Dukiya et al. (2024) from IJRAR, Salihu et al. (2019), Werner from HAW Hamburg, and Stute et al. (2019) from USENIX Security — alongside core IETF RFCs including RFC 8827 for WebRTC Security Architecture, RFC 6455 for WebSocket, and RFC 6762 for mDNS. Our cryptographic foundations reference NIST SP 800-38D and Boneh & Shoup's graduate text. Every architectural and security decision is grounded in peer-reviewed literature. Thank you, Dr. Gupta. We are open to questions."`,
  },
];
