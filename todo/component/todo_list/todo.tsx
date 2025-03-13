"use client "
import { Row, Tag, Checkbox } from 'antd';
import { useState } from 'react';
import { IProps } from '../../model/IProps';
// import '@ant-design/v5-patch-for-react-19';

const priorityColorMapping: { [key: string]: string } = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
};

export default function Todo({ name, prioriry, isCompleted }:IProps) {
  const [checked, setChecked] = useState(isCompleted);

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <Row
      justify='space-between'
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[prioriry || "red"]} style={{ margin: 0 }}>
        {prioriry}
      </Tag>
    </Row>
  );
}