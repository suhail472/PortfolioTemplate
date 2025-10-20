import Template from "./Templates/Portfolio";
import ClickSpark from "./Components/ClickSpark/ClickSpark";
function app() {
  return (
    <>
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
      <Template />
      </ClickSpark>
    </>
  );
}

export default app;
