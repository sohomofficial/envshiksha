// import { SignIn, SignUp } from "@clerk/nextjs";
// import {
//   ClerkProvider,
//   SignInButton,
//   SignUpButton,
//   SignedIn,
//   SignedOut,
//   UserButton,
// } from "@clerk/nextjs";

import CustomSignUpForm from "@/components/customSignUpForm";

// export default function Page() {
//     return (
//       <>
//         <div>Hello</div>
//         <SignUp
//           appearance={{
//             elements: {
//               formButtonPrimary:
//                 "bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg",
//               card: "shadow-none border border-gray-200 rounded-xl",
//               headerTitle: "text-xl font-bold text-gray-900",
//               headerSubtitle: "text-sm text-gray-600",
//               socialButtonsBlockButton:
//                 "border-gray-300 text-gray-700 hover:bg-gray-100",
//             },
//             variables: {
//               colorPrimary: "#4f46e5", // your brand color
//               fontSize: "14px",
//               borderRadius: "0.75rem",
//             },
//           }}
//         />
//         {/* <UserButton /> */}
//       </>
//     );
// }

export default function Page() {
  return <CustomSignUpForm />;
}
