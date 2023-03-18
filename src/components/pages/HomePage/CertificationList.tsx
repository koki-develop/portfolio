import { ImageCardProps } from "@/components/util/ImageCard";
import ImageCardList from "@/components/util/ImageCardList";
import { Certification } from "@/model/certification";
import React, { memo, useMemo } from "react";

export type CertificationListProps = {
  certifications: Certification[];
};

const CertificationList: React.FC<CertificationListProps> = memo((props) => {
  const { certifications } = props;

  const items = useMemo((): ImageCardProps[] => {
    return certifications.map((certification) => ({
      name: certification.name,
      src: certification.imageSrc,
      href: certification.url,
    }));
  }, [certifications]);

  return (
    <ImageCardList
      items={items}
      col={{
        span: 6,
        sm: 3,
      }}
    />
  );
});

CertificationList.displayName = "CertificationList";

export default CertificationList;
