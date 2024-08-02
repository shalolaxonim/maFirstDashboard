import { Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Controller, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { baseInstance } from "../../axios";
import { queryClient } from "../../main";

export default function CreatePage() {
  const {
    handleSubmit,
    reset,
    control,
    // register,
    // formState: { errors },
  } = useForm();
  //   console.log(errors);
  const postNews = (data) => {
    baseInstance.post("/news", data).then((res) => res.data);
  };
  const mutation = useMutation({
    mutationFn: postNews,
    mutationKey: "createNews",
  });

  const createNews = (e) => {
    console.log(e);
    mutation.mutate(
      { ...e, date: "12.02.2012", time: "12:45" },
      {
        onSuccess: (d, v, c) => {
          console.log(d, v, c), queryClient.invalidateQueries(["news"]);
        },
      }
    );
  };
  return (
    <div>
      <h1>You can add news here..</h1>
      <form
        onSubmit={handleSubmit(createNews)}
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

        {/* <input
          type="url"
          placeholder="Picture Link"
          {...register("Picture Link", {})}
        />
        <input type="text" placeholder="Author" {...register("Author", {})} />
        <input type="text" placeholder="Title" {...register("Title", {})} />
        <textarea {...register("Description", {})} />
        <input type="text" placeholder="Date" {...register("Date", {})} />

        <input type="submit" /> */}
      </form>
    </div>
  );
}
