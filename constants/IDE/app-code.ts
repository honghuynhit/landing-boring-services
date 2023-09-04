import { CodeFormats } from ".";

const ts: CodeFormats = {
  client:
`await client.invoke<ResultType>({
  uri: "wrapscan.io/org/wrap@1.2.3",
  method: "function",
  args: {
    value: "...",
    object: {
      ...
    }
  }
});`,
  codegen:
`await wrap.function({
  value: "...",
  object: {
    ...
  }
});`
};

const py: CodeFormats = {
  client:
`client.invoke(
  uri=Uri.from_str("wrapscan.io/org/wrap@1.2.3"),
  method="function",
  args={
    "value": "...",
    "object": {
      ...
    }
  }
)`,
  codegen:
`wrap.function({
  "value": "...",
  "object": {
    ...
  }
})`
};

const rust: CodeFormats = {
  client:
`client.invoke::<ResultType>(
    &Uri::from("wrapscan.io/org/wrap@1.2.3"),
    "function",
    Some(&to_vec(&FunctionArgs{
        value: "...".to_string(),
        object: Object{
          ...
        }
    }))
).unwrap();`,
  codegen:
`wrap.function(&FunctionArgs{
    value: "...".to_string(),
    object: Object{
      ...
    }
}).unwrap();`
};

export default { ts, py, rust }
