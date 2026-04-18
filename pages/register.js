
import { useState } from "react";
import { db } from "../lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const submit = async () => {
    await addDoc(collection(db, "registrations"), {
      ...form,
      createdAt: new Date()
    });
    alert("Registered Successfully");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Student Registration</h2>

      <input placeholder="Name" onChange={e => setForm({...form, name: e.target.value})} /><br/>
      <input placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} /><br/>
      <input placeholder="Phone" onChange={e => setForm({...form, phone: e.target.value})} /><br/>

      <button onClick={submit}>Submit</button>
    </div>
  );
}
