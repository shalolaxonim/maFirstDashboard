import { useQuery } from "react-query";
import { baseInstance } from "../../axios";

export default function Clients() {
  const getComment = () =>
    baseInstance.get("/comments").then((res) => res.data);
  const { data, refetch } = useQuery(["comment"], getComment);
  console.log(data);
  return (
    <div>
      <h1>This is the comments from our clients!!!</h1>
      {data?.map((c) => (
        <div
          key={c?._id}
          className="border-[3px] border-teal-800 m-[20px] p-[20px]"
        >
          <h2>Name: {c?.name}</h2>
          <a href="tel">Phone number: {c?.tel}</a>
          <p>Comment: {c?.comment}</p>
        </div>
      ))}
    </div>
  );
}
