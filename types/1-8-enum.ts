{
  /* 
    Enum : 여러가지에 관련된 상수 값들을 한 곳에 모아서 정의
  */
  // JavaScript
  const MAX_NUMBR = 6;
  const MAX_STUDENT_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;
  // TypeScript
  // TS Enum은 가급적 피하는게 좋음
  // days 변수는 Days라는 타입 할당
  // 문제는 enum으로 타입이 지정된 변수에 다른 어떤 숫자도 넣을 수 있음
  // Union 으로 대체 가능
  type DaysOfWeek = "Mon" | "Tue" | "Wed";
  enum Days {
    Mon,
    Tue,
    Wed,
    Thu,
    Fri,
    Sat,
    Sun,
  }
  console.log(Days.Sat);
  let day = Days.Mon;
  day = Days.Thu;
  day = 10; // 💩
  console.log(day);
  let today: DaysOfWeek = "Mon";
  console.log(today);
}
