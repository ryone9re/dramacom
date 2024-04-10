import type React from "react";
import LogoComponent from "~/components/molecules/logo";
import CenteredLayout from "~/components/templates/layout/CenteredLayout";
import { SignupForm } from "../components/organisms/form/SignUpForm";

const SignUpRoute: React.FC = () => {
  return (
    <CenteredLayout>
      <div className="w-full p-10 text-center">
        <LogoComponent />
        <p className="text-white mt-5 text-4xl">
          新鮮なドラマをみんなと一緒に。
        </p>
      </div>
      <SignupForm />;
    </CenteredLayout>
  );
};

export default SignUpRoute;
