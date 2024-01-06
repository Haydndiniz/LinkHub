interface ISectionBreakProp {
  sectionName: string;
}

const SectionBreak = ({ sectionName }: ISectionBreakProp) => {
  return (
    <span className="flex text-center mx-auto py-5 pb-8">
      <p>{sectionName}</p>
    </span>
  );
};

export default SectionBreak;
