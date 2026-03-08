import TitleSlide from "./slides/TitleSlide";
import IndexSlide from "./slides/IndexSlide";
import IntroSlide from "./slides/IntroSlide";
import ObjectivesSlide from "./slides/ObjectivesSlide";
import LitReviewSlide from "./slides/LitReviewSlide";
import MethodologySlide from "./slides/MethodologySlide";
import ToolsSlide from "./slides/ToolsSlide";
import DataSlide from "./slides/DataSlide";
import ConclusionSlide from "./slides/ConclusionSlide";
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
    notes: `"Good morning, Dr. Gupta and esteemed faculty. My name is Varun Ruhella, and I am joined by my teammates, Aditya Singh and Anushka Walia. Today, we are presenting our capstone project: Secure-Drop, an offline, end-to-end encrypted peer-to-peer file transfer system."`,
  },
  {
    component: IndexSlide,
    title: "Index",
    speaker: "Varun",
    notes: `"Over the next few minutes, we will walk you through the core problem of local data sharing, our proposed architecture, the technology stack we are utilizing, and the real-world impact this project delivers. Let's dive right into the introduction."`,
  },
  {
    component: IntroSlide,
    title: "Introduction",
    speaker: "Varun",
    notes: `"We share files on campus every single day. But right now, to send a 1GB project file to someone sitting right next to you in the DIT library, you have to upload it to Google Drive or WhatsApp, and they have to download it. This wastes massive amounts of internet bandwidth, is incredibly slow, and most importantly, it exposes sensitive files to third-party cloud servers. Secure-Drop solves this by creating a direct, encrypted tunnel between devices using only the local Wi-Fi, completely bypassing the internet."`,
  },
  {
    component: ObjectivesSlide,
    title: "Objectives",
    speaker: "Varun",
    notes: `"Our primary objectives are threefold: First, zero internet dependency. Second, military-grade AES-256 encryption to ensure data privacy. And third, cross-platform compatibility—meaning it works seamlessly between Windows, Mac, Android, and Linux through a simple web browser. I will now hand it over to Aditya to discuss the existing limitations and our system architecture."`,
  },
  {
    component: LitReviewSlide,
    title: "Literature Review",
    speaker: "Aditya",
    notes: `"Thank you, Varun. When we look at existing solutions, they all have critical flaws. Traditional FTP servers are secure but too complex for average users to set up. Proprietary tools like Apple's AirDrop are fast but suffer from ecosystem lock-in—they don't work with Android or Windows. Apps like SHAREit are bloated with ads and pose severe privacy risks. Secure-Drop bridges this gap by offering the frictionless experience of AirDrop, but built on open web standards for universal access."`,
  },
  {
    component: MethodologySlide,
    title: "Methodology",
    speaker: "Aditya",
    notes: `"Here is how our system works under the hood. Step 1 is Discovery: We use Multicast DNS so devices on the same Wi-Fi can automatically 'see' each other. Step 2 is the Handshake: A WebSocket connection is established to securely exchange encryption keys. Step 3 is Encryption: The file is encrypted locally on the sender's device. Finally, Step 4: The data flows directly peer-to-peer in chunks. No server ever holds the file. I will now pass it to Anushka to cover our technology stack and testing phase."`,
  },
  {
    component: ToolsSlide,
    title: "Tools Used",
    speaker: "Anushka",
    notes: `"Thanks, Aditya. To build this, we are utilizing a modern, lightweight tech stack. For the frontend, we are using React.js and HTML5 to create a clean, responsive drag-and-drop interface, leveraging rapid prototyping tools like Lovable. The backend signaling and discovery are handled by Python and WebSockets. For the actual data transfer, we utilize the WebRTC protocol, and for our core security, we implement the Web Crypto API to handle the AES-256 encryption entirely on the client side."`,
  },
  {
    component: DataSlide,
    title: "Data Collection",
    speaker: "Anushka",
    notes: `"To evaluate our project, we are actively benchmarking its performance against cloud uploads. We are measuring the exact megabytes-per-second throughput on different router frequencies—like 2.4GHz versus 5GHz. We are also tracking the 'encryption overhead,' which is the CPU usage required to encrypt a large 1GB file on a mobile device versus a laptop, ensuring our app remains lightweight and doesn't drain battery life."`,
  },
  {
    component: ConclusionSlide,
    title: "Conclusion",
    speaker: "Varun",
    notes: `"Taking over for the conclusion—Secure-Drop proves that enterprise-grade, secure file transfer doesn't require complex software installations or third-party cloud subscriptions. By strictly utilizing client-side encryption and local network bandwidth, we have created a localized solution that guarantees 100% data privacy."`,
  },
  {
    component: BenefitSlide,
    title: "Benefit for Society",
    speaker: "Anushka",
    notes: `"The real-world applications for this are vast. Beyond just saving university bandwidth, it ensures 'Data Sovereignty' for corporate or legal offices that cannot risk cloud leaks. Furthermore, it provides a crucial communication tool in low-connectivity areas, disaster zones, or remote hilly terrains where the internet might be down, but local network routing still functions."`,
  },
  {
    component: ReferencesSlide,
    title: "References",
    speaker: "Varun",
    notes: `"These are the core networking protocols and IEEE standards that form the foundation of our research. Thank you, Dr. Gupta, for your time and guidance. We are now open to any questions."`,
  },
];
