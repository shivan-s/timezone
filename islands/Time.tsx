import { useEffect, useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

interface ITime {
  code: string;
  result: string;
}

function TimeRow({ code, result }: ITime) {
  return (
    <tr class="border-b">
      <td>
        <pre class="text-sm">{code}</pre>
      </td>
      <td>{result}</td>
    </tr>
  );
}

export default function Time() {
  const [click, setClick] = useState<number>(0);
  const [times, setTimes] = useState<ITime[]>([]);

  useEffect(() => {
    const timerId = setInterval(
      () =>
        setTimes([
          {
            code: ".toString()",
            result: new Date().toString(),
          },
          {
            code: ".toLocaleString()",
            result: new Date().toLocaleString(),
          },
          {
            code: ".toLocaleString('en-GB', { timeZone: 'NZ'})",
            result: new Date().toLocaleString("en-GB", { timeZone: "NZ" }),
          },
          {
            code: ".toLocaleString('en-GB', { timeZone: 'Australia/Adelaide'})",
            result: new Date().toLocaleString("en-GB", {
              timeZone: "Australia/Adelaide",
            }),
          },
          {
            code: ".toLocaleString('en-GB', { timeZone: 'Australia/Melbourne'})",
            result: new Date().toLocaleString("en-GB", {
              timeZone: "Australia/Melbourne",
            }),
          },
          {
            code: ".toLocaleString('en-US')",
            result: new Date().toLocaleString("en-US"),
          },
          {
            code: ".toUTCString()",
            result: new Date().toUTCString(),
          },
          {
            code: ".toISOString()",
            result: new Date().toISOString(),
          },
        ]),
      500
    );
    return () => clearInterval(timerId);
  }, []);

  return (
    <div class="p-4 mx-auto max-w-screen-md">
      <table class="table-auto">
        <thead>
          <tr class="border-b-4">
            <th colspan="2">
              <h1 class="text-xl">Representing time</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          {times &&
            times.length > 0 &&
            times.map(({ code, result }) => (
              <TimeRow code={code} result={result} />
            ))}
        </tbody>
      </table>
      <div class="p-4">
        <Button onClick={() => setClick(click + 1)}>Refresh</Button>
      </div>
    </div >
  );
}
