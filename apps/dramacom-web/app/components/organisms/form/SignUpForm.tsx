// components/SignupForm.tsx
import type React from "react";

import { EmailIcon, UserIcon } from "~/components/atoms/icons";

import { Form } from "./BaseForm";

export const SignupForm: React.FC = () => {
  return (
    <Form
      className="w-full flex justify-center pt-10 pb-10"
      buttonText="新規登録"
    >
      <label className="input input-bordered flex items-center gap-2 mb-3">
        <EmailIcon />
        <input type="text" className="grow" placeholder="Email" />
      </label>
      <label className="input input-bordered flex items-center gap-2 mb-3">
        <UserIcon />
        <input type="text" className="grow" placeholder="Username" />
      </label>
    </Form>
  );
};
