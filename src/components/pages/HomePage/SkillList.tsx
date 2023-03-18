import { ImageCardProps } from "@/components/util/ImageCard";
import ImageCardList from "@/components/util/ImageCardList";
import { Skill } from "@/model/skill";
import React, { memo, useMemo } from "react";

export type SkillListProps = {
  skills: Skill[];
};

const SkillList: React.FC<SkillListProps> = memo((props) => {
  const { skills } = props;

  const items = useMemo((): ImageCardProps[] => {
    return skills.map((skill) => ({
      name: skill.name,
      icon: skill.icon,
      href: skill.url,
    }));
  }, [skills]);

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

SkillList.displayName = "SkillList";

export default SkillList;
