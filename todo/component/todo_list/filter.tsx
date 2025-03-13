"use client"
import { Col, Row, Typography, Radio, Select, Tag, RadioChangeEvent } from 'antd';
import { useContext } from 'react';
import { searchFilter, statusFilter, priorityFilter } from '../../redux/slices/filterSlice';
import Search from 'antd/es/transfer/search';
import { FilterContext } from '../../context/FilterContext';

export default function Filters() {
  const data = useContext(FilterContext);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (data?.dispatch) {
      data.dispatch(searchFilter({ search: e.target.value }));
    }
  };

  const handleStatusChange = (e: RadioChangeEvent) => {
    if (data?.dispatch) {
      data.dispatch(statusFilter({ status: e.target.value }));
    }
  };

  const handlePriorityChange = (priority: string[]) => {
    if (data?.dispatch) {
      data.dispatch(priorityFilter({ priority }));
    }
  };

  return (
    <>
      <p>{data?.search}</p>
      <p>{data?.status}</p>
      <p>{data?.priority?.length}</p>
      <Row justify='center'>
        <Col span={24}>
          <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
            Search
          </Typography.Paragraph>
          <Search placeholder='Input search text' onChange={handleSearch} value={data?.search} />
        </Col>
        <Col sm={24}>
          <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
            Filter By Status
          </Typography.Paragraph>
          <Radio.Group onChange={handleStatusChange} value={data?.status}>
            <Radio value='All'>All</Radio>
            <Radio value='Completed'>Completed</Radio>
            <Radio value='Todo'>To do</Radio>
          </Radio.Group>
        </Col>
        <Col sm={24}>
          <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
            Filter By Priority
          </Typography.Paragraph>
          <Select
            mode='multiple'
            allowClear
            placeholder='Please select'
            style={{ width: '100%' }}
            onChange={handlePriorityChange}
            value={data?.priority}
          >
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
        </Col>
      </Row>
    </>
  );
}
