import { Button } from "@supabase/ui";
import supabase from "../utils/initSupabase";

export default function AuthBasic() {
  return (
    <main className="container mx-auto py-5 px-5 md:px-0 flex justify-center items-center">
      <section className="w-1/3 flex justify-center items-center">
        <Button>Login With Github</Button>
      </section>
    </main>
  );
}
