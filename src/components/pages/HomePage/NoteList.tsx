import Icon from "@/components/util/Icon";
import Link from "@/components/util/Link";
import Paper from "@/components/util/Paper";
import { Note } from "@/model/note";
import { Grid, Text, Title, useMantineTheme } from "@mantine/core";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import React, { memo } from "react";

dayjs.extend(relativeTime);

export type NoteListProps = {
  notes: Note[];
};

const NoteList: React.FC<NoteListProps> = memo((props) => {
  const { notes } = props;

  const theme = useMantineTheme();

  return (
    <Grid>
      {notes.map((note) => (
        <Grid.Col key={note.url} span={12} sm={6}>
          <Link external href={note.url}>
            <Paper
              clickable
              p="md"
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                gap: theme.spacing.sm,
              }}
            >
              <Title order={3} size="h4" weight="normal" sx={{ flexGrow: 1 }}>
                {note.title}
              </Title>

              <Text
                size="sm"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <Icon icon="zenn" width={16} />
                {dayjs(note.publishedAt).fromNow()}
              </Text>
            </Paper>
          </Link>
        </Grid.Col>
      ))}
    </Grid>
  );
});

NoteList.displayName = "NoteList";

export default NoteList;
