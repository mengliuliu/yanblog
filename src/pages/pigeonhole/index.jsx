import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

const Pigeonhole = () => {
    return (
        <Timeline>
            <Timeline.Item>今天发布了一个文章 2015-09-01</Timeline.Item>
            <Timeline.Item>今天发布了一个图片 2015-09-01</Timeline.Item>
            <Timeline.Item dot={<ClockCircleOutlined className="timeline-clock-icon" />} color="red">
                可开心 2015-09-01
            </Timeline.Item>
            <Timeline.Item>哦豁 2015-09-01</Timeline.Item>
        </Timeline>
    )
}

export default Pigeonhole
