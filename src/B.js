import Counter from "./Counter";
const B = (props) => {
  const { count, increment } = props;
  return (
    <div>
      <button onMouseOver={increment}>B {count}</button>
    </div>
  );
};
export default Counter(B);
