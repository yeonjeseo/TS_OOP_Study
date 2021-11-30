{
  /* 
    Type Aliases
  */
  type Text = string;
  const name: Text = "123";
  type student = {
    name: string;
    age: number;
    scores: Array<number>;
  };
  const student = {
    name: "Yeonje Seo",
    age: 32,
    scores: [1, 2, 3],
  };

  /* 
    String Literal Types
  */
  type Name = "name";
  let myName: Name;
  myName = "name";
  type JSON = "json";
  const json: JSON = "json";
}
