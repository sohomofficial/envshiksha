import { currentUser } from "@clerk/nextjs/server";
import User, { IUser } from "@/models/user.model";
import dbConnect from "./dbConnect";

export async function getOrCreateUser() {
  await dbConnect();

  const clerkUser = await currentUser();
  if (!clerkUser) return null;

  console.log(clerkUser);
  let user = (await User.findOne({ clerkId: clerkUser.id })) as IUser | null;
  console.log(user);
  if (!user) {
    user = await User.create({
      clerkId: clerkUser.id,
      email: clerkUser.emailAddresses[0].emailAddress,
      name: clerkUser.firstName + " " + clerkUser.lastName,
    });
  }

  return user;
}
