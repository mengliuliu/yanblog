const Photos = () => {

    const listData = [];


    for (let i = 0; i < 8; i++) {
        listData.push({
            id: i,
            img: 'https://hblyan.oss-cn-beijing.aliyuncs.com/blog/ChMkJ1fJVSuIJa8nABRXPbS61xoAAU92AOZ08oAFFdV279.jpg',
            title: '相册-' + i,
            description: '这是描述相册的内容'
        });
    }
    return (
        <div className='photos'>
            相册
        </div>
    )
}

export default Photos
