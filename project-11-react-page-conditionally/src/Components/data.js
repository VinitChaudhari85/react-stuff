import componentImg from "../assets/building-blocks.png";
import jsxImg from "../assets/syntax.png";
import propsImg from "../assets/transfer.png";
import stateImg from "../assets/state.png";

export const CARD_DATA = [
  {
    title: "Components",
    image: componentImg,
    description:
      "The core UI building clock - compose the user interface by combining multiple components.",
  },
  {
    title: "JSX",
    image: jsxImg,
    description:
      "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.",
  },
  {
    title: "Props",
    image: propsImg,
    description:
      "Make components configurable (and therefore reusable) by passing input data to them.",
  },
  {
    title: "State",
    image: stateImg,
    description:
      "React-managed data which, when changed causes the component to re-render & the UI to update.",
  },
];

export const CONTENT_DATA = {
  components: {
    title: "Components",
    content:
      "Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS +JS) that renders some output.",
    code: `function Welcome(){
	return <h1>Hello, World!</h1>
}
`,
  },
  jsx: {
    title: "JSX",
    content:
      "JSX is a syntax extension to JavaScript. It is similar to a template language. but it has full power of JavaScript (e.g. it may output dynamic content).",
    code: `<div>
	<h1>Welcome {username}</h1>
	<p>Time to learn React!</p>
</div>`,
  },

  props: {
    title: "Props",
    content:
      "Conponents accept arbitrary inputs called props. They are like function arguments.",
    code: `function Welcome({props}){
	return <h1>Hello, {props.name}</h1>;
}`,
  },
  state: {
    title: "State",
    content:
      "State allows React components to change their output over time in response to user actions, network responses, and anything else.",
    code: `function Counter() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1)
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increase</button>
    </div>
  )
}
`,
  },
};
