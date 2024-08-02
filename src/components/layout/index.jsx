import { Flex, Layout } from "antd";
import { Link } from "react-router-dom";
const { Sider, Content } = Layout;

const contentStyle = {
  minHeight: "730px",
  color: "#177165",
  marginLeft: "306px",
};
const siderStyle = {
  backgroundColor: "#177165",
  color: "white",
  fontWeight: "bold",
  position: "fixed",
  top: 0,
  bottom: 0,
  padding: "50px",
};
const layoutStyle = {
  overflow: "hidden",
  width: "100%",
  maxWidth: "100%",
};

export default function LayoutMine({ children }) {
  return (
    <div>
      <Layout style={layoutStyle}>
        <Sider width="20%" style={siderStyle}>
          <div className="flex flex-col gap-[20px] ">
            <Link className="hover:text-[#6afa6a]" to="/">Home</Link>
            <Link className="hover:text-[#6afa6a]" to="/news">News/Get</Link>
            <Link className="hover:text-[#6afa6a]" to="/create">Create</Link>
          </div>
        </Sider>
        <Layout>
          <Content width="80%" style={contentStyle}>
            {children}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
