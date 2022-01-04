{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  // 비디오 데이터 전체를 가져올 때
  function getVideo(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://...",
      data: "binary data",
    };
  }

  type VideoMeta = Pick<Video, "id" | "title">;
  // 비디오 데이터 중 일부분만 가져오고 싶을 때는? Pick
  function getVideoMetaData(id: string): VideoMeta {
    return {
      id: id,
      title: "title",
    };
  }

  console.log(getVideoMetaData("123"));
}
