const HeroOrbs = () => (
  <>
    <div className="absolute w-[380px] h-[380px] rounded-full blur-[1px]
      bg-[radial-gradient(circle_at_40%_40%,rgba(201,168,76,0.3)_0%,rgba(201,168,76,0.08)_40%,transparent_70%)]
      animate-[pulseOrb_4s_ease-in-out_infinite]" />
   
    <div className="absolute w-[260px] h-[260px] rounded-full border border-gold/20
      animate-[spin_12s_linear_infinite]
      before:content-[''] before:absolute before:top-[-4px] before:left-1/2 before:-translate-x-1/2
      before:w-2 before:h-2 before:rounded-full before:bg-gold" />

    <div className="absolute w-[180px] h-[180px] rounded-full border border-dashed border-gold/10
      animate-[spin_8s_linear_infinite_reverse]" />
  </>
);

export default HeroOrbs;
