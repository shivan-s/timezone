import { Head } from "$fresh/runtime.ts";
import Time from "../islands/Time.tsx";
import Navbar from "../components/Navbar.tsx"

export default function Home() {

  return (
    <>
      <Head>
        <title>Timezone</title>
      </Head>
      <Navbar active="/" />
      <Time />
      <div class="text-center">
        <a class="underline" href="/playground">Playground</a>
      </div>
    </>
  );
}
