import { Controller, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { baseInstance } from "../../axios";
import { useMutation } from "react-query";
import { Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { queryClient } from "../../main";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function UpdatePage() {
  const nav = useNavigate();
  const { id } = useParams();
  console.log(id);
  const { control, reset, handleSubmit } = useForm();

  let [news, setNews] = useState({});
  useEffect(() => {
    baseInstance.get(`/news/${id}`).then((res) => setNews(res.data));
  }, []);
  //   const getNews = () => baseInstance.get(`/news/${id}`).then((res) => res.data);
  useEffect(() => {
    let { _id, ...others } = news;
    reset(others);
  }, [news]);

  const updateNews = (data) =>
    baseInstance.put(`/news/${id}`, data).then(() => console.log("updated"));
  const mutation = useMutation({
    mutationFn: updateNews,
    mutationKey: "updateNews",
  });

  const update = (e) => {
    mutation.mutate(e, {
      onSuccess: (d, v, c) => {
        console.log(d, v, c),
          queryClient.invalidateQueries(["news"]),
          nav("/news"),
          toast.success("Updated successfully");
      },
    });
  };
  return (
    <div>
      <h1>UpdatePage</h1>
      <form
        onSubmit={handleSubmit(update)}
        className="flex flex-col items-start gap-[20px]"
      >
        <Controller
          name="title"
          control={control}
          rules={{
            required: "This is required!",
          }}
          render={({ field }) => (
            <Input {...field} placeholder="Enter the title" />
          )}
        />
        <Controller
          name="Description"
          control={control}
          rules={{
            required: "This is required!",
          }}
          render={({ field }) => (
            <TextArea {...field} placeholder="Enter the description" />
          )}
        />
        <Controller
          name="Author"
          control={control}
          rules={{
            required: "This is required!",
          }}
          render={({ field }) => (
            <Input {...field} placeholder="Enter the author" />
          )}
        />
        <Controller
          name="PictureLink"
          control={control}
          rules={{
            required: "This is required!",
          }}
          render={({ field }) => (
            <Input {...field} placeholder="Enter the picture link" />
          )}
        />
        <button>create</button>
      </form>
    </div>
  );
}
