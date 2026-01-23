import { useEffect, useState } from "react";
import { api } from "../utils/api";  // <-- use the helper

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => { 
    api.get("/health").then(r => setData(r.data));
  }, []);

  return (
    <div style={{padding:"2rem"}}>
      <h1>Report Stats</h1>
      <p>App to analyze reports and show stats.</p>
      <pre>{JSON.stringify(data,null,2)}</pre>
    </div>
  );
}