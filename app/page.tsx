import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "./utils/auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="m-5">
      <h1>
        Welcome to the netflix clone project
        <span> {session?.user?.name}</span>
      </h1>
      <img src={session?.user?.image} alt="user" />
    </div>
  );
}
