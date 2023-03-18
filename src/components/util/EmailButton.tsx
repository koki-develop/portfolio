import Link from "@/components/util/Link";
import Paper from "@/components/util/Paper";
import {
  CopyButton,
  Stack,
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
    <Stack sx={{ alignItems: "center" }}>
      <Link href={`mailto:${email}`} external>
        <Paper px="sm" py="xs" clickable>
          <Text
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
      </Link>

      <CopyButton value={email}>
        {({ copied, copy }) => (
          <UnstyledButton
            variant="subtle"
            onClick={copy}
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              fontSize: theme.fontSizes.sm,
            })}
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
    </Stack>
  );
});

EmailButton.displayName = "EmailButton";

export default EmailButton;
