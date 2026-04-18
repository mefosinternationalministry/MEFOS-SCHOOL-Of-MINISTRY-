
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1>MEFOS School of Ministry</h1>
      <p>Global Ministry Training Platform</p>

      <div style={{ marginTop: 20 }}>
        <Link href="/register">Register</Link><br/>
        <Link href="/admin">Admin</Link>
      </div>
    </div>
  );
}
