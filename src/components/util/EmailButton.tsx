import React, { memo } from "react";

export type EmailButtonProps = {
  email: string;
};

const EmailButton: React.FC<EmailButtonProps> = memo((props) => {
  return <div>email</div>;
});

EmailButton.displayName = "EmailButton";

export default EmailButton;
