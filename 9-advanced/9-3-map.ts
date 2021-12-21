{
  /* 
  기존 타입을 이용하면서 조금 다른 타입으로 바꿈 
  타입 재사용성을 높일 수 있음.
  */
  type Video = {
    title: string;
    author: string;
    description: string;
  };
  type Optional<T> = {
    // 키를 빙글빙글 돌면서 키에 해당하는 타입 받는다. 그걸 ?로 붙여서 optional로 만든다.
    [P in keyof T]?: T[P]; // for...in
  };
  type ReadOnly<T> = {
    readonly // 이 타입을 쓰는 객체는 안에 있는 데이터들이 더 어상 변경될 수 없음
    [P in keyof T]?: T[P];
  };
  type VideoOptional = Optional<Video>;
  const videoOp: VideoOptional = {
    title: "Hi",
  };

  type Animal = {
    name: string;
    age: number;
  };

  const animal: Optional<Animal> = {
    name: "dog",
  };
  animal.name = "ellie";

  const video: ReadOnly<Video> = {
    title: "Hi",
    author: "yeonje",
  };
  // 위에서 Type을 readonly로 만들었기 때문에 변경 불가능
  // video.title = "123"

  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  //   description?: string;
  // };

  // type VideoReadOnly = {
  //   readonly title: string;
  //   readonly author: string;
  // };
  type Nullable<T> = {
    [P in keyof T]?: T[P] | null;
  };

  const obj2: Nullable<Video> = {
    title: null,
    author: null,
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
