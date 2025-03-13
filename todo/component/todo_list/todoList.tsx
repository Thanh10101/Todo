"use client"
import { Col, Row, Input, Space, Button, Select, Tag } from 'antd';
import Todo from './todo';
import { useDispatch, useSelector } from 'react-redux';
import { ITodolist } from '../../model/ITodo';
import { addTodo } from '../../redux/slices/todoSlice';
import { RootState } from '../../redux/store';
import { useContext, useState } from 'react';
import { FilterContext } from '../../context/FilterContext';


export default function TodoItems() {
    const dispatch = useDispatch();
    const filter =useContext(FilterContext);
    const todo = useSelector((state: RootState) => state.todo);
    const [taskName, setTaskName] = useState('');
    const [priority, setPriority] = useState('Medium');

//Hàm xủ lý thêm todo
    const HandleClick = () => {
        if (taskName.trim() === '') return;
        dispatch(addTodo({
            id: Math.random(),  // Tạo id ngẫu nhiên (hoặc dùng nanoid từ Redux Toolkit)
            name: taskName,
            isCompleted: false,
            priority: priority
        }));
        setTaskName(''); // Reset input sau khi thêm
    };
    //Hàm xử lý hiển thị danh sách todo lọc theo filter
    const Handle = () => {
        if (filter.search !== "" || filter.status !== "All" || filter.priority?.length !== 0) {
            return <div>Không có dữ liệu</div>
        }
        return todo.map((item: ITodolist) => (
            <Todo key={item.id} name={item.name} prioriry={item.priority} isCompleted={item.isCompleted} />
        ));
    }
    return (
        <>
            <Row style={{ height: 'calc(100% - 40px)' }}>
                <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
                    {Handle()}
                </Col>
                <Col span={24}>
                    <Space.Compact style={{ display: 'flex' }}>
                        <Input
                            value={taskName}
                            onChange={(e) => setTaskName(e.target.value)}
                            placeholder="Enter task..."
                        />
                        <Select
                            defaultValue="Medium"
                            value={priority}
                            onChange={(value) => setPriority(value)}
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
                        <Button type='primary' onClick={HandleClick}>
                            Add
                        </Button>
                    </Space.Compact>
                </Col>
            </Row>
        </>
    );
}
