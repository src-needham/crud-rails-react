import { Button, Form, Input, Modal, Select } from "antd";
import React from "react";

const { Option } = Select;

class AddFishModal extends React.Component {
  formRef = React.createRef();
  state = {
    visible: false,
  };

  onFinish = (values) => {
    const url = "api/v1/fish/create";
    fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((data) => {
        if(data.ok) {
          this.handleCancel();

          return data.json();
        }
        throw new Error("Network error.");
      })
      .then(() => {
        this.props.reloadFish();
      })
      .catch((err) => console.error("Error: " + err));
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Create New +
        </Button>

        <Modal title="Add New Fish ..." visible={this.state.visible} onCancel={this.handleCancel} footer={null}>
          <Form ref={this.formRef} layout="vertical" onFinish={this.onFinish}>
            <Form.Item name="common_name" label="Common Name" rules={[{ required: true, message: "Please enter the fish name."}]}>
              <Input placeholder="Input the common name" />
            </Form.Item>

            <Form.Item name="scientific_name" label="Scientific Name" rules={[{ required: true, message: "Please enter the scientific name."}]}>
              <Input placeholder="Input the scientific name" />
            </Form.Item>

            <Form.Item name="ph" label="pH" rules={[{ required: true, message: "Please enter the pH value."}]}>
              <Input placeholder="Input the pH value"/>
            </Form.Item>

            <Form.Item name="quantity" label="Quantity" rules={[{ required: true, message: "Please enter a quantity."}]}>
              <Input type="number" placeholder="How many fish are you adding?" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>

        </Modal>
      </>
    );
  }
}

export default AddFishModal;