import TodoApp from "../Components/TodoApp";
import supabase from "../utils/initSupabase";

import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";

export default function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetchProfile();
  }, []);

  // Potentially add to the API
  const fetchProfile = async () => {
    const profile = await supabase.auth.user();
    if (!profile) router.push("/login");
    else setUser(profile);
  };

  return (
    <main className="container mx-auto py-5 px-5 md:px-0 flex justify-center items-center">
      <TodoApp />
      <p>{user && user.email}</p>
    </main>
  );
}
