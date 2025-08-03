import { useState } from "react";
import ContactModal from "./ContactModal";

export default function SendProposal() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="inline-block bg-[#FE641A] text-white px-8 py-3 text-base font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
      >
        Send Us a Proposal <span className="text-xl"> »</span>
      </button>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
