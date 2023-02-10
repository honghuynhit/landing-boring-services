import { CodeFormats } from ".";

const ts: CodeFormats = {
  client:
`const result = await client.invoke<string[]>({
  uri: "wrap://ens/safe.eth:wrapper@1.2.3",
  method: "getOwnersWhoApprovedTx",
  args: {
    hash: "0x..."
  }
});`,
  codegen:
`const result = await safe.getOwnersWhoApprovedTx({
    hash: "0x..."
});`
};

const py: CodeFormats = {
  client:
`options = InvokerOptions(
  uri=Uri("wrap://ens/safe.eth:wrapper@1.2.3"),
  method="getOwnersWhoApprovedTx",
  args={
    "hash": "0x..."
  }
)

result = await client.invoke(options)`,
  codegen:
`result = await safe.getOwnersWhoApprovedTx(
  hash="0x..."
)`
};

const rust: CodeFormats = {
  client:
`let result = client.invoke::<Vec<String>>(
    &Uri::from("wrap://ens/safe.eth:wrapper@1.2.3"),
    "getOwnersWhoApprovedTx",
    wrap::args!({
        "hash": "0x..."
    })
).await.unwrap();`,
  codegen:
`let result = safe.get_owners_who_approved_tx(
  "0x..."
).await.unwrap();`
};

export default { ts, py, rust }
