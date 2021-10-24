import { Auth, Typography, Button } from "@supabase/ui";
import supabase from "../utils/initSupabase";

export default function AuthBasic() {
  return (
    <main className="container mx-auto py-5 px-5 md:px-0 flex justify-center items-center">
      <section className="w-1/3">
        <Auth.UserContextProvider supabaseClient={supabase}>
          <Auth supabaseClient={supabase} providers={["github"]} redirectTo="/profile" />
        </Auth.UserContextProvider>
      </section>
    </main>
  );
}
