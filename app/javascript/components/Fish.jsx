import { message } from "antd";

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