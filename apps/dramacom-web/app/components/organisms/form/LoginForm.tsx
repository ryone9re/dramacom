// components/LoginForm.tsx
import type React from "react";
import { EmailIcon, KeyIcon } from "~/components/atoms/icons";
import { Form } from "./BaseForm";

export const LoginForm: React.FC = () => {
  return (
    <Form
      className="w-full flex justify-center  pt-10 pb-10"
      buttonText="ログイン"
    >
      <div className="flex flex-col">
        <label className="input input-bordered flex items-center gap-2 mb-3">
          <EmailIcon />
          <input type="text" className="grow" placeholder="Email" />
        </label>
        <label className="input input-bordered flex items-center gap-2 mb-3">
          <KeyIcon />
          <input type="password" className="grow" value="password" />
        </label>
      </div>
    </Form>
  );
};
