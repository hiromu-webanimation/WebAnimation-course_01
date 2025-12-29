gsap.set("main", {
  opacity: 1,
});

// オープニングアニメーション
const op = gsap.timeline();
op.fromTo(
  ".mv__slogan-text",
  {
    maskPosition: "-100.25rem 0%",
  },
  {
    maskPosition: "0px 0%",
    duration: 3,
    stagger: 0.4,
    ease: "power3.inOut",
  }
)
  .fromTo(
    ".mv__slogan-text",
    {
      backgroundPosition: "-15rem 0%",
    },
    {
      backgroundPosition: "15rem 0%",
      duration: 5,
      stagger: 0.3,
      ease: "power2.inOut",
    },
    "-=3.5"
  )
  .to(
    ".mv__slogan-text",
    {
      color: "#FFD0D2",
      duration: 2,
      ease: "power2.inOut",
      stagger: 0.1,
    },
    "-=2.5"
  )
  .fromTo(
    ".mv__flower1",
    {
      x: -20,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power2.inOut",
    },
    "-=1.2"
  )
  .to(
    ".mv__bg",
    {
      maskPosition: "-100% 0%",
      duration: 2,
      ease: "power2.inOut",
    },
    "-=0.6"
  );

// 1文字ずつタグをわける
const copy = new SplitText(".mv__vertical-copy-text", {
  type: "chars",
});

op.from(
  copy.chars,
  {
    opacity: 0,
    x: -4,
    duration: 1.2,
    ease: "power2.inOut",
    stagger: {
      each: 0.14,
    },
  },
  "-=1"
);
