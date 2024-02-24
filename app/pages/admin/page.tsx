import { User } from "@/src/auth/User";
import axios from "axios";

export default function Admin() {
  axios.get("http://localhost:3000/api/hello/routes").then((res) => {
    console.log(res.data);
  });

  return (
    <div>
      <h1>Home admin</h1>
      <User />
    </div>
  );
}
