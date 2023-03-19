import Icon from "@/components/util/Icon";
import Link from "@/components/util/Link";
import Paper from "@/components/util/Paper";
import { Note } from "@/model/note";
import { Grid, Group, Stack, Text, Title } from "@mantine/core";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import React, { memo } from "react";

dayjs.extend(relativeTime);

export type NoteListProps = {
  notes: Note[];
};

const NoteList: React.FC<NoteListProps> = memo((props) => {
  const { notes } = props;

  return (
    <Grid>
      {notes.map((note) => (
        <Grid.Col key={note.url} span={12} sm={6}>
          <Link external href={note.url}>
            <Paper clickable p="md" sx={{ height: "100%" }}>
              <Stack spacing="sm" sx={{ height: "100%" }}>
                <Title order={3} size="h4" weight="normal" sx={{ flexGrow: 1 }}>
                  {note.title}
                </Title>

                <Text size="sm">
                  <Group spacing="xs">
                    <Icon icon="zenn" width={16} />
                    {dayjs(note.publishedAt).fromNow()}
                  </Group>
                </Text>
              </Stack>
            </Paper>
          </Link>
        </Grid.Col>
      ))}
    </Grid>
  );
});

NoteList.displayName = "NoteList";

export default NoteList;
