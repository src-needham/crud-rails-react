import { message, Popconfirm } from "antd";

state = {
  fish: [],
};

loadFish = () => {
  const url = "api/v1/fish/index";
  fetch(url)
    .then((data) => {
      if (data.ok) {
        return data.json();
      }
      throw new Error("Network error.");
    })
    .then((data) => {
      data.forEach((fish) => {
        const newEl = {
          key: fish.id,
          id: fish.id,
          common_name: fish.common_name,
          scientific_name: fish.scientific_name,
          ph: fish.ph,
          quantity: fish.quantity,
        };

        this.setState((prevState) => ({
          fish: [...prevState.fish, newEl],
        }));
      });
    })
    .catch((err) => message.error("Error: " + err));
}

columns = [
  {
    title: "Fish",
    dataIndex: "common_name",
    key: "common_name",
  },

  ...{
    title: "",
    key: "action",
    render: (_text, record) => (
      <Popconfirm title="Are you sure you want to delete this fish?" onConfirm={() => this.deleteFish(record.id)} okText="Yes" cancelText="No">
        <a href="#" type="danger">
          Delete{" "}
        </a>
        </Popconfirm>      
    ),
  },
];

deleteFish = (id) => {
  const url = `api/v1/fish/${id}`;

  fetch(url, {
    method: "delete",
  })
  .then((data) => {
    if(data.ok) {
      this.reloadFish();
      return data.json();
    }
    throw new Error("Network Error.");
  })
  .catch((err) => message.error("Error: " + err));
};

reloadFish = () => {
  this.setState({ fish: [] });
  this.loadFish();
};