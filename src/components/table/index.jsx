import { baseInstance } from "../../axios";
import { useMutation, useQuery } from "react-query";
import { Table, Tooltip } from "antd";
import { Link } from "react-router-dom";
import { queryClient } from "../../main";
import { toast } from "react-toastify";

export function ProductsPage({ date }) {
  const getNews = () => baseInstance.get("/news").then((res) => res.data);
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["news"],
    queryFn: getNews,
  });
  const postNews = (id) => {
    baseInstance.delete(`/news/${id}`).then((res) => res.data);
  };
  const mutation = useMutation({
    mutationFn: postNews,
    mutationKey: "postNews"
  });
  //   console.log(data);
  const deleteProd = (id) => {
    mutation.mutate(id, {
      onSuccess: (d, v, c) => {
        // console.log("aaaaaaaaaaaaaaaaa");
        refetch(), toast.error("Deleted!!!");
      },
    });
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "author",
    },
    {
      title: "Description",
      dataIndex: "Description",
      key: "Description",
      ellipsis: {
        showTitle: false,
      },
      render: (address) => (
        <Tooltip placement="topLeft" title={address}>
          {address}
        </Tooltip>
      ),
    },
    {
      title: "Authors",
      dataIndex: "Author",
      key: "author",
    },
    {
      title: "PictureLink",
      dataIndex: "PictureLink",
      key: "PictureLink",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Edit",
      dataIndex: "_id",
      key: "edit",
      render: (_id) => <Link to={`/update/${_id}`}>edit</Link>,
    },
    {
      title: "Delete",
      dataIndex: "_id",
      key: "del",
      render: (_id) => (
        <button
          onClick={() => {
            deleteProd(_id);
          }}
        >
          delete
        </button>
      ),
    },
  ];
  return (
    <div>
      <Table dataSource={data} columns={columns} />;
    </div>
  );
}
