import { Head } from "$fresh/runtime.ts";
import { useState } from "preact/hooks";
import Navbar from "../components/Navbar.tsx";

interface ITime {
  code: string;
  result: string;
};

export default function Playground() {
  const [locale, setLocale] = useState<string>(undefined);
  const [timezone, setTimezone] = useState<string>('NZ');
  const [time, setTime] = useState<ITime>({
    code: `.toLocaleString(${locale}, { timeZone: ${timezone}})`,
    result: new Date().toLocaleString(locale, { timeZone: "NZ" }),
  });

  const locales = ["en-GB", "en-US"];

  return (
    <>
      <Head>
        <title>Timezone - Playground</title>
      </Head>
      <Navbar active="/playground" />
      <div class="p-4 mx-auto max-w-screen-md">
        <p>
          <pre>{time?.code && time.code}</pre>
        </p>
        <p>{time?.result && time.result}</p>
      </div>
      <div>
        <label>
          Locale
        <select value={locale} onChange={(e)=> setLocale(e.target.value)}>
          {locales.map(l => <option value={l}>{l}</option>)}
        </select>
        </label>
      </div>
    </>
  );
}
