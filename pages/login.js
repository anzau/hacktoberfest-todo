import { Button } from "@supabase/ui";
import supabase from "../utils/initSupabase";

export default function Login() {
  const handleGithubLogin = async (e) => {
    e.preventDefault();

    try {
      const { user, session, error } = await supabase.auth.signIn({
        provider: "github",
      });

      if (error) throw error;
    } catch (e) {
      alert(e.error_description || e.message);
    }
  };

  return (
    <main className="container mx-auto py-5 px-5 md:px-0 flex justify-center items-center">
      <section className="w-1/3 flex justify-center items-center">
        <Button onClick={handleGithubLogin}>Login With Github</Button>
      </section>
    </main>
  );
}
// export async function getServerSideProps({ req }) {
//   const { user } = await supabase.auth.api.getUserByCookie(req);

//   if (user) {
//     console.log(user);
//     // If no user, redirect to index.
//     return { props: {}, redirect: { destination: "/", permanent: false } };
//   }

//   // If there is a user, return it.
//   return { props: { user } };
// }
