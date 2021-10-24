import TodoApp from "../Components/TodoApp";
import supabase from "../utils/initSupabase";

export default function Home({ user }) {
  console.log(user);
  return (
    <main className="container mx-auto py-5 px-5 md:px-0 flex justify-center items-center">
      <TodoApp />
      <p>{user}</p>
    </main>
  );
}
export async function getServerSideProps({ req }) {
  const { user, error } = await supabase.auth.api.getUserByCookie(req);
  console.log(error);

  console.log(user);

  // if (!user) {
  //   console.log(user);
  //   // If no user, redirect to index.
  //   return { props: {}, redirect: { destination: "/login", permanent: false } };
  // }

  // If there is a user, return it.
  return { props: { user } };
}
