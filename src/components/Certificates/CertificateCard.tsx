import React from "react";

type CertificateCardProps = {
  children: React.ReactNode;
};

const CertificateCard: React.FC<CertificateCardProps> = ({ children }) => {
  return (
    <div className="font-poppins w-[330px] h-[450px] bg-[#171721] cursor-pointer rounded-[10px] shadow-[0_0_12px_4px_rgba(0,0,0,0.4)] overflow-hidden p-[26px_20px] flex flex-col gap-[14px] transition-all duration-500 ease-in-out hover:-translate-y-2.5 hover:shadow-[0_0_50px_4px_rgba(0,0,0,0.6)] hover:brightness-110">
      {children}
    </div>
  );
};

export default CertificateCard;
