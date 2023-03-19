import { Experience } from "@/model/experience";
import { Text, Timeline } from "@mantine/core";
import React, { memo } from "react";

export type ExperienceTimelineProps = {
  experiences: Experience[];
};

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = memo((props) => {
  const { experiences } = props;

  return (
    <Timeline>
      {experiences.map((experience) => (
        <Timeline.Item
          key={experience.title}
          title={experience.title}
          active={Boolean(!experience.to)}
          sx={(theme) => ({
            "& .mantine-Timeline-itemBody": {
              background: theme.white,
              borderRadius: theme.radius.sm,
              boxShadow: theme.shadows.sm,
              padding: theme.spacing.md,
              paddingBottom: theme.spacing.sm,
            },
          })}
        >
          <Text size="sm" color="dimmed">
            {experience.from} - {experience.to ?? "now"}
          </Text>
        </Timeline.Item>
      ))}
    </Timeline>
  );
});

ExperienceTimeline.displayName = "ExperienceTimeline";

export default ExperienceTimeline;
