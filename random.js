let times = 1;
const ranDom = (random) => {
  const answer = "ABCD";
  const length = answer.length;
  let rigth_character = 0;
  let rigth_position = 0;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (random[j] === answer[i]) {
        rigth_character++;
        break;
      }
    }
  }
  for (let i = 0; i < length; i++) {
    if (answer[i] === random[i]) {
      rigth_position++;
    }
  }
  console.log(
    `คำตอบ => ${answer}, สุ่ม => ${random} ถูก/ทั้งหมด => ${rigth_character}, ถูก/ตำแหน่ง => ${rigth_position}, ครั้งที่ => ${times}`
  );
  times++;
};

ranDom("AAAA");
ranDom("DEFG");
ranDom("AABB");
ranDom("ABDC");
ranDom("DCBA");
ranDom("ABCD");
