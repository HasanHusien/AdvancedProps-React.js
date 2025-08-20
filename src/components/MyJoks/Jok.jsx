import "./jok.css";

export default function (props) {
  const { setup, punchline } = props;
  return (
    <main>
      <h3>{setup}</h3>
      <p>{punchline}</p>
    </main>
  );
}
