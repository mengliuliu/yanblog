
export interface Props {
    name: string,
    enthusiasmLevel?: number,
    onIncrement?: () => void,
    onDecrement?: () => void,
}

function hello({ name, enthusiasmLevel = 1 }: Props) {
    if (enthusiasmLevel <= 0) {
        throw new Error("你可以输入enthusiasmLevel大于0")
    }
}

const Home = ({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: Props) => {
    return (
        <>
            <div className={'header'}>home</div>
            <div>
                hello,{name + getExclamationMarks(enthusiasmLevel)}
            </div>
            <div>
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
            </div>
        </>
    )
}

export default Home

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!')
}