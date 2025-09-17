import { SignIn } from "@clerk/nextjs";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function Page() {
    return (
      <>
        <div>Hello</div>
            <SignIn />
            <UserButton/>
      </>
    );
}
