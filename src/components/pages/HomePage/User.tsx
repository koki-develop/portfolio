import { User as UserModel } from "@/model/user";
import { Box, Image, Stack, Text, Title } from "@mantine/core";
import React, { memo } from "react";

export type UserProps = {
  user: UserModel;
};

const User: React.FC<UserProps> = memo((props) => {
  const { user } = props;

  return (
    <Box>
      {/* avatar */}
      <Image
        sx={{ margin: "auto" }}
        src="/images/profile.png"
        width={150}
        height={150}
        alt=""
      />
      {/* name */}
      <Stack align="center" spacing="sm">
        <Box sx={{ textAlign: "center" }}>
          <Title order={2} weight="normal">
            {user.name}
          </Title>
          <Text size="lg" color="gray">
            {user.tag}
          </Text>
        </Box>
        {/* description */}
        <Text sx={{ textAlign: "center", whiteSpace: "pre" }}>
          {user.description}
        </Text>
      </Stack>
    </Box>
  );
});

User.displayName = "User";

export default User;
