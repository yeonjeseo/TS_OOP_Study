{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  // 비디오 데이터 전체를 가져올 때
  function getVideo2(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://...",
      data: "binary data",
    };
  }

  type VideoMeta = Omit<Video, "id" | "title">;
  // 비디오 데이터 중 특정 타입을 제외한 타입을 가져올 때 사용!
  // Pick의 여집합
  // 기존 타입에 없는 타입도 추가 가능하다.
  function getVideoMetaData2(id: string): VideoMeta {
    return {
      url: "url",
      data: "AA 0F 1B ....",
    };
  }

  console.log(getVideoMetaData2("123"));
}
