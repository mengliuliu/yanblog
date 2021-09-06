import styled from 'styled-components'

const Project = () => {
    const listData = [];

    for (let i = 0; i < 8; i++) {
        listData.push({
            id: i,
            img: 'https://hblyan.oss-cn-beijing.aliyuncs.com/blog/ChMkJ1fJVSuIJa8nABRXPbS61xoAAU92AOZ08oAFFdV279.jpg',
            title: '项目-' + i,
            description: '这是描述相册的内容'
        });
    }
    return (
        <Box>
            项目
        </Box>
    )
}

const Box = styled.div`
    .project_item{
        // box-shadow: 0px 0px 5px;
        margin-bottom: 10px;
        text-align: center;
    }
`

export default Project
