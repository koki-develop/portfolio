import Paper from "@/components/util/Paper";
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
        <Timeline.Item key={experience.title} active={Boolean(!experience.to)}>
          <Paper px="md" py="sm">
            <Text>{experience.title}</Text>
            <Text size="sm" color="dimmed">
              {experience.from} - {experience.to ?? "now"}
            </Text>
          </Paper>
        </Timeline.Item>
      ))}
    </Timeline>
  );
});

ExperienceTimeline.displayName = "ExperienceTimeline";

export default ExperienceTimeline;
