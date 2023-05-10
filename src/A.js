import Counter from "./Counter";
const A = (props) => {
  let { count, increment, name } = props;
  return (
    <div>
      <button onClick={increment}>
        {name} {count}
      </button>
    </div>
  );
};
export default Counter(A);
