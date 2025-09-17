import { getOrCreateUser } from "@/lib/auth"

export default async function ModulePage() {
    const user = await getOrCreateUser();
    console.log(user)

    return (
      <>
            <div>Hello This is the module Page</div>
            <div>This is the page made for testing</div>
            <div>hello {user ? `${user.name}` : "Guest"}</div>
      </>
    );
}