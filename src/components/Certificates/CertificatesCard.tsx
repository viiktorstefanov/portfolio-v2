import React from "react";
import { Certificate } from "../../types/constants";
import { Link } from "react-router-dom";
import CertificatesCardTitle from "./CertificatesCardTitle";
import CertificatesCardDetails from "./CertificatesCardDetails";
import CertificatesCardImage from "./CertificatesCardImage";
import CertificateCard from "./CertificateCard";

type CertificatesCardProps = {
  certificate: Certificate;
};

const CertificatesCard: React.FC<CertificatesCardProps> = ({ certificate }) => {
  return (
    <Link
      to={certificate.link}
      className="hover:cursor-pointer"
      target="_blank"
    >
      <CertificateCard>
        <CertificatesCardImage url={certificate.img} alt={certificate.title} />
        <CertificatesCardDetails>
          <CertificatesCardTitle title={certificate.title} />
        </CertificatesCardDetails>
      </CertificateCard>
    </Link>
  );
};

export default CertificatesCard;
