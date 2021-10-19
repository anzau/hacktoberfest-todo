import Head from 'next/head'
import { Button } from "@supabase/ui";
import Footer from '../Components/Footer';


export default function Home() {
  return (
    <main className="container mx-auto py-5 px-5 md:px-0">
      <Button>Hello</Button>
    </main>
  )
}
