const opening = gsap.timeline();
//テキストが左から右にじんわり出てくる
opening.to(".mv__slogan-text", {
  maskPosition: "0% 0%",
  stagger: 0.3,
  duration: 1.2,
  ease: "power2.inOut",
});

// テキストの色が徐々に変わる
opening.to(
  ".mv__slogan-text",
  {
    backgroundPosition: "-400px 0%",
    duration: 3,
    ease: "power2.inOut",
  },
  "-=0.5"
);

// 色が完全にピンクに戻る
opening.to(".mv__slogan-text", {
  color: "#FFD0D2",
  ease: "power2.inOut",
});

// お花が横から出てくる
opening.from(".mv__flower1", {
  x: -25,
  opacity: 0,
  ease: "power2.inOut",
});

// じわじわ左から右にかけて消えていく
opening.to(".mv__bg", {
  maskPosition: "-100% 0%",
  duration: 2,
  ease: "power2.inOut",
});

const text = new SplitText(".mv__vertical-copy-text");

// 1文字ずつに分ける
opening.fromTo(
  text.chars,
  {
    opacity: 0,
    x: -5,
  },
  {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power2.inOut",
    stagger: 0.1,
  },
  "-=1"
);
