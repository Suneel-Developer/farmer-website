import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/footer";
import farmer from "../assets/farmer.png";
import bg from "../assets/bg.png";

const farmerioData = [
  {
    id: 1,
    title: "Who is Farmerio.App?",
    content:
      "Farmerio.App is a passionate community of blockchain enthusiasts who recognize the transformative potential of blockchain technology. Our mission is to empower individuals to become part of the universal narrative of cryptocurrency. Together, we aim to drive growth, foster interactions, and create a shared history within the blockchain space. Join us in leaving a lasting mark across multiple blockchains as we embark on this exciting journey.",
  },
  {
    id: 2,
    title: "What's the Purpose of this Website?",
    content:
      "Our website is designed to enable users to engage with various blockchain networks using our innovative LayerZero messaging technology. Through this platform, users can mint their very own FarmerioNFT (Open Native Financial Tokens) on a diverse range of blockchain networks and seamlessly bridge these tokens between chains.",
  },
  {
    id: 3,
    title: "Is It Safe?",
    content:
      "Safety is paramount to us, and we take great care in ensuring a secure environment for all users. We are committed to delivering a high-quality and safe experience.",
  },
  {
    id: 4,
    title: "Are There Any Additional Services?",
    content:
      "Yes! In addition to our core offerings, we provide educational resources, regular updates on the latest developments in the blockchain space, and a vibrant community where you can connect with fellow enthusiasts.Whether you're new to blockchain or an experienced user, Farmerio.App offers a supportive and engaging environment to explore the exciting world of cryptocurrency.",
  },
  {
    id: 5,
    title: "How Can I Get Started?",
    content:
      "To begin your journey with Farmerio.App, simply connect your metamask wallet with our platform. You'll gain access to our unique features, including minting FarmerioNFT, bridging tokens across chains, and participating in our community events. Start making history in the blockchain space with us today!",
  },
];

interface FarmerioInfo {
  id: number;
  title: string;
  content: string;
}
const Faq: React.FC = () => {
  return (
    <div
      className="p-3 bg-fixed bg-center bg-no-repeat	"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="fixed inset-y-0 -left-20 max-lg:hidden flex justify-center items-center">
        <div
          className="w-70 h-70 bg-cover"
          style={{ backgroundImage: `url(${farmer})` }}
        ></div>
      </div>
      <Navbar />
      <div className="max-w-faqMax-width w-full mx-auto   rounded-2xl p-7 md:p-10 text-white flex flex-col gap-3 bg-gradient-bg from-opacity-5 to-opacity-0 mt-2 lg:mt-10">
        <h1 className="text-28 md:text-4xl font-bold tracking-tracking1">
          FAQ
        </h1>
        <p className="text-dark_white text-base mb-2">
          Once minted, you can view your $OREs under.
        </p>

        <ul className="flex flex-col gap-5">
          {farmerioData.map((info: FarmerioInfo) => (
            <li key={info.id} className="flex flex-col md:gap-5">
              <hr className="max-w-hrMax-width w-full h-px mx-auto border border-transparent_200 my-5" />
              <h2 className="font-semibold text-xl md:text-2xl trackig-tracking2">
                {info.title}
              </h2>
              <p className="text-dark_white font-normal text-base">
                {info.content}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
