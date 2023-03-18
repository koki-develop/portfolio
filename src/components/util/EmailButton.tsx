import {
  Anchor,
  Box,
  CopyButton,
  Paper,
  Text,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import React, { memo } from "react";
import {
  MdCheck as CheckIcon,
  MdOutlineMail as MailIcon,
} from "react-icons/md";

export type EmailButtonProps = {
  email: string;
};

const EmailButton: React.FC<EmailButtonProps> = memo((props) => {
  const { email } = props;

  const theme = useMantineTheme();

  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: theme.spacing.sm,
      })}
    >
      <Anchor
        href={`mailto:${email}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Paper
          px="sm"
          py="xs"
          shadow="sm"
          sx={(theme) => ({
            transition: "0.15s",
            "&:hover": {
              backgroundColor: theme.colors.gray[1],
            },
          })}
        >
          <Text
            size="md"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            <MailIcon />
            {email}
          </Text>
        </Paper>
      </Anchor>

      <CopyButton value={email}>
        {({ copied, copy }) => (
          <UnstyledButton
            variant="subtle"
            onClick={copy}
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: theme.fontSizes.sm,
            }}
          >
            {copied ? (
              <>
                <CheckIcon color={theme.colors.green[9]} />
                コピーしました
              </>
            ) : (
              "クリップボードにコピー"
            )}
          </UnstyledButton>
        )}
      </CopyButton>
    </Box>
  );
});

EmailButton.displayName = "EmailButton";

export default EmailButton;
