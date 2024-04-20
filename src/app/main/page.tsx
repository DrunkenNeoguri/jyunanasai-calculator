import { Button, Section, Title, Text, Description } from "./style";

export default function Main() {
  return (
    <Section>
      <Description>
        <Title>영원한 17세 계산기</Title>
        <Text>{`언제나 17세의 기분으로 살고싶은 분들을 위하여\n17세교의 교리에 따라 나이를 계산해드립니다.`}</Text>

        <Text>{`오늘 날짜: 2024년 4월 8일`}</Text>

        <Text>
          아래에 정보를 입력하시면 17세 판독기에 따라 17세교 등급을
          안내드립니다.
        </Text>
      </Description>

      <input placeholder="연" />
      <input placeholder="월" />
      <input placeholder="일" />

      <button>입력하기</button>
      <Button />

      <span>17세교가 뭔가요?</span>
    </Section>
  );
}
