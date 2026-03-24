const ProjectStatusBadge = ({ status }) => {
  if (!status) return null;

  const isFinished = status === 'finished';

  return (
    <div className={`inline-flex items-center gap-[0.4rem] text-[0.62rem] tracking-[0.14em] uppercase
      font-semibold px-3 py-1 mb-3
      ${isFinished
        ? 'bg-gold/10 border border-gold/40 text-gold'
        : 'bg-blue-400/10 border border-blue-400/30 text-blue-300'}`}>
      <span className={`w-[6px] h-[6px] rounded-full flex-shrink-0
        ${isFinished
          ? 'bg-gold shadow-[0_0_5px_rgba(201,168,76,0.6)]'
          : 'bg-blue-400 shadow-[0_0_5px_rgba(96,165,250,0.6)] animate-[statusPulse_1.6s_ease-in-out_infinite]'}`} />
      {isFinished ? 'Finished' : 'Ongoing'}
    </div>
  );
};

export default ProjectStatusBadge;
