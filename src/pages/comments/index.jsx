import { Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Controller, useForm } from "react-hook-form";
import { baseInstance } from "../../axios";
import { useMutation } from "react-query";
import { queryClient } from "../../main";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function CommentsPage() {
  const nav = useNavigate();
  const { control, reset, handleSubmit } = useForm();
  const postComment = (data) =>
    baseInstance.post("/comments", data).then((res) => res.data);
  const mutation = useMutation({
    mutationFn: postComment,
    mutationKey: "postComment",
  });
  const createComment = (e) => {
    console.log(e);
    mutation.mutate(e, {
      onSuccess: (d, v, c) => {
        console.log(d, v, c),
          queryClient.invalidateQueries(),
          toast.success("You added comment successfully!!!"),
          nav("/clients");
      },
    });
  };
  return (
    <div>
      <h1>This is Comments Page and here u can leave ur comments!</h1>
      <form
        onSubmit={handleSubmit(createComment)}
        className="flex flex-col items-start gap-[20px]"
      >
        <Controller
          name="name"
          control={control}
          rules={{
            required: "This is required!",
          }}
          render={({ field }) => (
            <Input {...field} placeholder="Enter your name" />
          )}
        />
        <Controller
          name="tel"
          control={control}
          rules={{
            required: "This is required!",
          }}
          render={({ field }) => (
            <Input {...field} placeholder="Enter your phone number" />
          )}
        />
        <Controller
          name="comment"
          control={control}
          rules={{
            required: "This is required!",
          }}
          render={({ field }) => (
            <TextArea {...field} placeholder="Leave your comment" />
          )}
        />
        <button>submit</button>
      </form>
    </div>
  );
}
