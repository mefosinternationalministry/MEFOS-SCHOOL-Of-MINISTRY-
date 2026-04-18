
import { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Admin() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const snap = await getDocs(collection(db, "registrations"));
      setData(snap.docs.map(d => d.data()));
    };
    fetchData();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Admin Dashboard</h2>

      {data.map((d, i) => (
        <div key={i} style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
          <p>{d.name}</p>
          <p>{d.email}</p>
          <p>{d.phone}</p>
        </div>
      ))}
    </div>
  );
}
