import { Head } from "$fresh/runtime.ts";
import Time from "../islands/Time.tsx";

export default function Home() {

  return (
    <>
      <Head>
        <title>Timezone</title>
      </Head>
      <Time />
    </>
  );
}
